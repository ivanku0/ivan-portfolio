"use client";

import {
  clipSnippet,
  generatedOutputForStep,
  INITIAL_STEPS,
  PREVIEW_SECTIONS,
  previewStatusTag,
} from "@/components/workflows/triptych/constants";
import {
  CompletionParticleBurst,
  StartAmbientSideParticles,
} from "@/components/workflows/triptych/particles";
import type { Step } from "@/components/workflows/triptych/types";
import {
  mockActiveShellClass,
  mockFocusStrokeClass,
} from "@/components/case-study/mock/MockPrimitives";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

export default function TriptychProduct() {
  const [workflowStarted, setWorkflowStarted] = useState(false);
  const [steps, setSteps] = useState<Step[]>(INITIAL_STEPS);
  const [activeStepId, setActiveStepId] = useState(INITIAL_STEPS[0].id);
  const [isRunning, setIsRunning] = useState(false);
  const [savedAckForStepId, setSavedAckForStepId] = useState<string | null>(null);
  const [completionBurstId, setCompletionBurstId] = useState(0);
  const [completionParticlesMounted, setCompletionParticlesMounted] = useState(false);
  const runTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const saveAckTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const completionParticleArmedRef = useRef(false);

  const activeStep = steps.find((s) => s.id === activeStepId) ?? steps[0];

  useEffect(() => {
    return () => {
      if (runTimeoutRef.current) clearTimeout(runTimeoutRef.current);
      if (saveAckTimeoutRef.current) clearTimeout(saveAckTimeoutRef.current);
    };
  }, []);

  const activeShell = mockActiveShellClass;
  const focusStroke = mockFocusStrokeClass;
  const stepRowActiveShell = `${mockFocusStrokeClass} bg-surface-alt/66`;

  const handleStartWorkflow = useCallback(() => {
    setWorkflowStarted(true);
  }, []);

  const handleSelectStep = (id: string) => {
    setActiveStepId(id);
  };

  const handleRun = () => {
    if (isRunning) return;
    /** Only run from a fresh step so repeat runs cannot demote “saved” (which would drop preview commit count). */
    if (activeStep.status !== "idle") return;
    const runForId = activeStepId;
    if (saveAckTimeoutRef.current) {
      clearTimeout(saveAckTimeoutRef.current);
      saveAckTimeoutRef.current = null;
    }
    setSavedAckForStepId(null);
    setIsRunning(true);
    if (runTimeoutRef.current) clearTimeout(runTimeoutRef.current);
    runTimeoutRef.current = setTimeout(() => {
      setSteps((prev) =>
        prev.map((s) =>
          s.id === runForId
            ? {
                ...s,
                output: generatedOutputForStep(s),
                status: "generated",
              }
            : s,
        ),
      );
      setIsRunning(false);
    }, 500);
  };

  const handleSave = () => {
    if (activeStep.status !== "generated") return;
    const committedId = activeStepId;
    setSteps((prev) => {
      const cur = prev.find((s) => s.id === committedId);
      if (!cur || cur.status !== "generated") return prev;
      return prev.map((s) =>
        s.id === committedId && s.status === "generated" ? { ...s, status: "saved" as const } : s,
      );
    });
    if (saveAckTimeoutRef.current) clearTimeout(saveAckTimeoutRef.current);
    setSavedAckForStepId(committedId);
    saveAckTimeoutRef.current = setTimeout(() => {
      setSavedAckForStepId(null);
      saveAckTimeoutRef.current = null;
    }, 1400);
  };

  const workflowStepIds = steps.map((s) => s.id);
  const activeIndex = workflowStepIds.indexOf(activeStepId);

  const committedCount = steps.filter((s) => s.status === "saved").length;
  const commitTotal = steps.length;
  const commitProgress = commitTotal ? (committedCount / commitTotal) * 100 : 0;
  const allWorkflowStepsSaved = steps.every((s) => s.status === "saved");

  const onCompletionParticlesSettled = useCallback(() => {
    setCompletionParticlesMounted(false);
  }, []);

  /** Start particle burst once the completion pane is shown (after layout, aligned with first paint). */
  useLayoutEffect(() => {
    if (!allWorkflowStepsSaved) {
      completionParticleArmedRef.current = false;
      return;
    }
    if (completionParticleArmedRef.current) return;
    const raf = requestAnimationFrame(() => {
      completionParticleArmedRef.current = true;
      setCompletionBurstId((n) => n + 1);
      setCompletionParticlesMounted(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [allWorkflowStepsSaved]);

  /** Intentional progression: advance only after the current step is committed to preview. */
  const canGoNext =
    activeIndex >= 0 &&
    activeIndex < workflowStepIds.length - 1 &&
    activeStep.status === "saved";

  const handlePrevious = () => {
    if (activeIndex <= 0) return;
    setActiveStepId(workflowStepIds[activeIndex - 1]);
  };

  const handleNext = () => {
    if (!canGoNext) return;
    setActiveStepId(workflowStepIds[activeIndex + 1]);
  };

  const handleResetWorkflow = () => {
    if (runTimeoutRef.current) {
      clearTimeout(runTimeoutRef.current);
      runTimeoutRef.current = null;
    }
    if (saveAckTimeoutRef.current) {
      clearTimeout(saveAckTimeoutRef.current);
      saveAckTimeoutRef.current = null;
    }
    setIsRunning(false);
    setSavedAckForStepId(null);
    completionParticleArmedRef.current = false;
    setCompletionParticlesMounted(false);
    setWorkflowStarted(false);
    setSteps(INITIAL_STEPS.map((s) => ({ ...s })));
    setActiveStepId(INITIAL_STEPS[0].id);
  };

  const saveButtonLabel =
    activeStep.status === "saved"
      ? savedAckForStepId === activeStepId
        ? "Saved"
        : "Committed"
      : "Save";

  const stepRows: { key: string; label: string; stepId: string; indent?: boolean }[] = [
    { key: "policy-context", label: "1  Candidate Context", stepId: "policy-context" },
    { key: "requirements", label: "1.1  Experience & Signals", stepId: "requirements", indent: true },
    { key: "roles", label: "1.2  Strengths & Gaps", stepId: "roles", indent: true },
    { key: "draft-policy", label: "2  Resume Summary", stepId: "draft-policy" },
  ];

  return (
    <section className="mx-auto w-full max-w-[108ch] rounded-2xl border border-border-subtle/34 bg-background/42 p-4 md:p-5">
      <div className="grid grid-cols-1 gap-3 md:min-h-[38rem] md:grid-cols-[0.9fr_auto_2.45fr_auto_1.3fr] md:gap-4">
        <aside
          className={`relative overflow-hidden rounded-xl border border-border-subtle/30 bg-surface-raised/44 ${
            !workflowStarted ? "pointer-events-none" : ""
          }`}
        >
          <div
            className={
              !workflowStarted ? "blur-[3px] opacity-[0.38] saturate-[0.75] contrast-[0.92]" : ""
            }
          >
            <header className="flex items-center justify-between border-b border-border-subtle/22 px-3 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[0.62rem] text-muted">▾</span>
                <h3 className="text-[0.73rem] font-semibold text-foreground/92">Steps</h3>
              </div>
              <span className="text-[0.62rem] text-muted">⚙</span>
            </header>
            <div className="space-y-1.5 px-2.5 py-2.5">
              {stepRows.map((row) => (
                <div key={row.key} className={row.indent ? "pl-4" : ""}>
                  <button
                    type="button"
                    onClick={() => handleSelectStep(row.stepId)}
                    className={
                      row.stepId === activeStepId
                        ? `${stepRowActiveShell} w-full rounded-md px-1.5 py-1 text-left text-[0.72rem] font-medium text-foreground/95`
                        : "w-full rounded-md px-1.5 py-0.5 text-left text-[0.72rem] text-secondary transition-colors hover:text-foreground"
                    }
                  >
                    {row.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
          {!workflowStarted ? <StartAmbientSideParticles seed={11} /> : null}
        </aside>

        <div aria-hidden="true" className="hidden w-px bg-border-subtle/34 md:block" />

        <section
          className={`flex min-h-0 flex-col rounded-xl border border-border-subtle/30 ${
            !workflowStarted
              ? "bg-background/94"
              : "bg-surface-raised/48"
          }`}
        >
          {!workflowStarted ? (
            <div className="relative flex min-h-0 flex-1 flex-col">
              <div className="flex min-h-0 flex-1 flex-col items-center justify-center px-6 py-14 md:px-10 md:py-20">
                <div className="w-full max-w-[min(38ch,92vw)] space-y-7 md:space-y-9">
                  <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-foreground/75">
                    WORKFLOW
                  </p>
                  <h2 className="text-[clamp(1.85rem,4.2vw,2.85rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-foreground">
                    Resume Review
                  </h2>
                  <p className="max-w-[32ch] text-[0.94rem] leading-7 text-secondary md:text-[1.02rem] md:leading-[1.55rem]">
                    Custom workflow to review and report on a potential candidate
                  </p>
                  <button
                    type="button"
                    onClick={handleStartWorkflow}
                    className="w-full border border-foreground/32 bg-transparent py-3.5 text-center text-[0.72rem] font-medium tracking-[0.06em] text-foreground transition-colors hover:bg-foreground/[0.06] md:py-4 md:text-[0.74rem]"
                  >
                    Start
                  </button>
                </div>
              </div>
            </div>
          ) : allWorkflowStepsSaved ? (
            <div className="relative flex min-h-0 flex-1 flex-col">
              <header className="relative z-[3] shrink-0 border-b border-border-subtle/22 bg-surface-raised/48 px-3 py-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[0.73rem] font-semibold text-foreground/92">Configuration</p>
                  <span className="text-[0.62rem] text-muted">⋮</span>
                </div>
              </header>
              <div className="relative flex min-h-0 flex-1 flex-col px-3 pb-6 pt-4 md:pb-7 md:pt-5">
                <div className="relative z-[1] flex min-h-0 flex-1 flex-col gap-6">
                  <div className="space-y-3">
                    <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted">Status</p>
                    <h2 className="text-base font-semibold tracking-[-0.02em] text-foreground md:text-lg">
                      Workflow Complete
                    </h2>
                    <p className="max-w-[52ch] text-[0.78rem] leading-6 text-secondary md:text-[0.8rem] md:leading-[1.55rem]">
                      All steps have been reviewed and saved. Your draft is ready for export or further formatting.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                    {[
                      { label: "Steps completed", value: `${commitTotal}/${commitTotal}` },
                      { label: "Sections committed", value: String(committedCount) },
                      { label: "Est. time saved", value: "~18 min" },
                    ].map((m) => (
                      <div
                        key={m.label}
                        className="rounded-lg border border-border-subtle/26 bg-background/28 px-2.5 py-2"
                      >
                        <p className="text-[0.58rem] uppercase tracking-[0.1em] text-muted">{m.label}</p>
                        <p className="mt-1 tabular-nums text-[0.78rem] font-medium text-foreground/92">{m.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-col gap-2 border-t border-border-subtle/18 pt-5">
                    <button
                      type="button"
                      className="w-full rounded-md border border-accent-secondary/38 bg-surface-alt/58 px-3 py-2 text-left text-[0.68rem] font-medium text-foreground transition-colors hover:bg-surface-alt/72"
                    >
                      Export Document
                    </button>
                    <button
                      type="button"
                      className="w-full rounded-md border border-border-subtle/34 bg-background/22 px-3 py-2 text-left text-[0.66rem] font-medium text-secondary transition-colors hover:text-foreground"
                    >
                      Edit Formatting
                    </button>
                    <button
                      type="button"
                      onClick={handleResetWorkflow}
                      className="w-full rounded-md px-3 py-1.5 text-left text-[0.64rem] text-muted transition-colors hover:bg-background/20 hover:text-secondary"
                    >
                      Run Workflow Again
                    </button>
                  </div>
                </div>
                {completionParticlesMounted && completionBurstId > 0 ? (
                  <CompletionParticleBurst
                    burstId={completionBurstId}
                    onSettled={onCompletionParticlesSettled}
                  />
                ) : null}
              </div>
            </div>
          ) : (
            <>
              <header className="space-y-2 border-b border-border-subtle/22 px-3 py-2.5">
                <div className="flex items-center justify-between">
                  <p className="text-[0.73rem] font-semibold text-foreground/92">Configuration</p>
                  <span className="text-[0.62rem] text-muted">⋮</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-foreground">{activeStep.title}</h3>
                  <p className="text-[0.7rem] text-secondary">
                    AI-assisted resume analysis—structured steps, then synthesis into a hiring-ready narrative.
                  </p>
                </div>
              </header>

              <div className="border-b border-border-subtle/22 px-3 py-2">
                <div className="flex flex-wrap gap-1.5">
                  {["Attach resume", "Edit hiring brief"].map((action) => (
                    <button
                      key={action}
                      type="button"
                      className="rounded-md border border-border-subtle/34 px-2 py-0.5 text-[0.62rem] font-medium text-secondary"
                    >
                      {action}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex min-h-0 flex-1 flex-col gap-3 px-3 py-3">
                <div className="flex min-h-0 flex-1 flex-col rounded-md border border-border-subtle/28 bg-background/34 p-2.5">
                  <p className="text-[0.65rem] text-muted">Default Prompt</p>
                  <div className="mt-1 min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
                    <p className="break-words text-[0.74rem] leading-5 text-secondary">{activeStep.prompt}</p>
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    type="button"
                    onClick={handleRun}
                    disabled={isRunning || activeStep.status !== "idle"}
                    title={
                      activeStep.status === "generated"
                        ? "Save this step before running again"
                        : activeStep.status === "saved"
                          ? "This step is already saved to the preview"
                          : undefined
                    }
                    className="rounded-md border border-accent-secondary/36 bg-surface-alt/62 px-2.5 py-1 text-[0.66rem] font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    {isRunning ? "Running…" : "Run"}
                  </button>
                </div>

                <div className="flex min-h-0 flex-1 flex-col">
                  <div className={`${activeShell} flex min-h-0 flex-1 flex-col rounded-md p-2.5`}>
                    <div className="flex shrink-0 items-center justify-between">
                      <p className="text-[0.65rem] text-muted">Prompt Output</p>
                      <span className="text-[0.62rem] text-muted">Refine Response</span>
                    </div>
                    <div className="mt-1 min-h-0 flex-1 overflow-y-auto overflow-x-hidden">
                      <p className="break-words text-[0.74rem] leading-5 text-foreground">
                        {isRunning
                          ? "Generating…"
                          : activeStep.output || "Run this step to generate analysis you can review and save into the preview."}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="button"
                      onClick={handleSave}
                      disabled={activeStep.status !== "generated"}
                      className={`rounded-md border px-2 py-0.5 text-[0.64rem] transition-[color,opacity,border-color] duration-200 disabled:cursor-not-allowed disabled:opacity-40 ${
                        savedAckForStepId === activeStepId && activeStep.status === "saved"
                          ? "border-accent-secondary/32 text-foreground/90"
                          : "border-border-subtle/30 text-secondary"
                      }`}
                    >
                      {saveButtonLabel}
                    </button>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-border-subtle/18 pt-2.5">
                  <button
                    type="button"
                    onClick={handlePrevious}
                    disabled={activeIndex <= 0}
                    className="rounded-md border border-border-subtle/30 px-2 py-0.5 text-[0.64rem] text-secondary disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={activeIndex >= workflowStepIds.length - 1 || !canGoNext}
                    title={
                      activeIndex < workflowStepIds.length - 1 && activeStep.status !== "saved"
                        ? "Save this step to continue"
                        : undefined
                    }
                    className="rounded-md border border-border-subtle/30 px-2 py-0.5 text-[0.64rem] text-secondary transition-opacity duration-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Next
                  </button>
                </div>
              </div>
            </>
          )}
        </section>

        <div aria-hidden="true" className="hidden w-px bg-border-subtle/34 md:block" />

        <section
          className={`relative overflow-hidden rounded-xl border border-border-subtle/32 bg-surface-alt/50 ${
            !workflowStarted ? "pointer-events-none" : ""
          }`}
        >
          <div
            className={
              !workflowStarted ? "blur-[3px] opacity-[0.38] saturate-[0.75] contrast-[0.92]" : ""
            }
          >
            <header className="border-b border-border-subtle/22 px-3 py-2">
              <div className="flex items-center justify-between gap-3">
                <h3 className="min-w-0 truncate text-[0.73rem] font-semibold text-foreground/92">Doc Preview</h3>
                <button
                  type="button"
                  className="shrink-0 rounded-md border border-border-subtle/34 px-2 py-0.5 text-[0.62rem] font-medium text-secondary"
                >
                  Export
                </button>
              </div>
              <div
                className="mt-2 w-full"
                title={`${committedCount} of ${commitTotal} steps committed to preview`}
              >
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-border-subtle/22">
                  <div
                    className="h-full rounded-full bg-accent-secondary/45 transition-[width] duration-300"
                    style={{ width: `${commitProgress}%` }}
                  />
                </div>
                <p className="mt-1.5 text-left text-[0.58rem] tabular-nums text-muted">
                  {committedCount}/{commitTotal} saved
                </p>
              </div>
            </header>
            <div className="space-y-2 px-3 py-2.5">
              {PREVIEW_SECTIONS.map((section) => {
              const isReviewFinalize = section.id === "pv-review";
              const linked = section.stepId ? steps.find((s) => s.id === section.stepId) : undefined;
              const isSaved = Boolean(linked && linked.status === "saved");
              /** Focus in editor — independent of Saved / Pending document state */
              const isActiveFocus = Boolean(section.stepId && section.stepId === activeStepId);

              const tag = isReviewFinalize
                ? allWorkflowStepsSaved
                  ? "Ready"
                  : "Pending"
                : previewStatusTag(linked, activeStepId);
              const rawOut = linked?.output ?? "";
              const snippetText =
                linked?.status === "saved"
                  ? clipSnippet(rawOut)
                  : linked?.status === "generated"
                    ? clipSnippet(rawOut)
                    : "";
              const snippetMuted =
                linked?.status === "generated" ? "text-secondary/90" : "text-secondary";

              const reviewCompleteSurface = isReviewFinalize && allWorkflowStepsSaved;
              const docSurfaceBase = reviewCompleteSurface
                ? "border border-border-subtle/28 bg-background/34"
                : isSaved
                  ? "border border-border-subtle/28 bg-background/34"
                  : "border border-dashed border-border-subtle/24 bg-background/16";

              const previewCardClass = [
                "rounded-md px-2 py-1.5 transition-[border-color,background-color] duration-200",
                docSurfaceBase,
                isActiveFocus ? focusStroke : "",
              ]
                .filter(Boolean)
                .join(" ");

              const titleClass =
                "min-w-0 flex-1 text-[0.72rem] leading-snug transition-colors duration-200 " +
                (isActiveFocus
                  ? "font-medium text-foreground/94"
                  : isSaved || reviewCompleteSurface
                    ? "font-medium text-foreground/88"
                    : linked
                      ? "text-secondary"
                      : "text-muted");

              const reviewBody = allWorkflowStepsSaved
                ? "All sections committed—review wording, then export when ready."
                : "Complete and save each step above before final review.";

              return (
                <div key={section.id} className={previewCardClass}>
                  <div className="flex items-start justify-between gap-2">
                    <p className={titleClass}>{section.title}</p>
                    <span className="shrink-0 border-b border-border-subtle/35 pb-px text-[0.58rem] uppercase tracking-[0.08em] text-muted">
                      {tag}
                    </span>
                  </div>
                  <p
                    className={`mt-1 line-clamp-2 text-[0.64rem] leading-snug transition-colors duration-200 ${
                      isReviewFinalize
                        ? allWorkflowStepsSaved
                          ? "text-secondary"
                          : "text-muted/80"
                        : !linked
                          ? "text-muted/80"
                          : linked.status === "saved"
                            ? "text-secondary"
                            : linked.status === "generated"
                              ? snippetMuted
                              : "text-muted/55"
                    }`}
                  >
                    {isReviewFinalize
                      ? reviewBody
                      : !linked
                        ? "Awaiting committed sections before final polish."
                        : linked.status === "saved" && snippetText
                          ? snippetText
                          : linked.status === "generated"
                            ? snippetText || "Run to produce a draft preview."
                            : linked.status === "idle"
                              ? "—"
                              : ""}
                  </p>
                </div>
              );
            })}
            </div>
          </div>
          {!workflowStarted ? <StartAmbientSideParticles seed={29} /> : null}
        </section>
      </div>
    </section>
  );
}
