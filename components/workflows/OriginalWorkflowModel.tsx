export default function OriginalWorkflowModel() {
  const steps = [
    { id: "1", label: "1 Candidate Context", status: "done" },
    { id: "2", label: "2 Experience & Signals", status: "active" },
    { id: "3", label: "3 Strengths & Gaps", status: "todo" },
    { id: "4", label: "4 Resume Summary", status: "todo" },
    { id: "5", label: "5 Review Draft", status: "todo" },
  ] as const;

  return (
    <figure className="mx-auto max-w-[82ch] space-y-4">
      <div className="overflow-hidden rounded-2xl border border-mock-light-border/90 bg-mock-light-bg shadow-[0_24px_60px_-36px_rgb(15_23_42/0.35)]">
        <div className="border-b border-mock-light-border bg-mock-light-surface/85 px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-mock-light-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-mock-light-border" />
            <span className="h-2.5 w-2.5 rounded-full bg-mock-light-border" />
          </div>
        </div>

        <div className="grid min-h-[42rem] grid-cols-1 md:grid-cols-[0.78fr_1.72fr]">
          <aside className="border-b border-mock-light-border bg-mock-light-surface/70 md:border-b-0 md:border-r">
            <header className="border-b border-mock-light-border px-4 py-3">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-mock-light-muted">
                Steps
              </h3>
            </header>
            <div className="space-y-1 p-3">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-2 rounded-md px-2 py-1.5 ${
                    step.status === "active"
                      ? "border border-indigo-200 bg-mock-light-accent/10/70"
                      : "border border-transparent"
                  }`}
                >
                  <span
                    className={`inline-flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold ${
                      step.status === "done"
                        ? "bg-emerald-100 text-emerald-700"
                        : step.status === "active"
                          ? "bg-mock-light-accent/15 text-mock-light-accent"
                          : "bg-mock-light-border/80 text-mock-light-muted"
                    }`}
                  >
                    {step.status === "done" ? "✓" : "•"}
                  </span>
                  <span
                    className={`text-[0.78rem] ${
                      step.status === "active" ? "font-medium text-mock-light-text" : "text-mock-light-muted"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </aside>

          <section className="flex min-h-0 flex-col bg-mock-light-bg">
            <header className="space-y-2 border-b border-mock-light-border px-4 py-3">
              <p className="text-[11px] text-mock-light-muted">Default Section /</p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-sm font-semibold text-mock-light-text">2 Experience &amp; Signals</h3>
                <div className="flex items-center gap-1.5">
                  {["AI Assisted", "GPT-4", "1024 tokens"].map((chip) => (
                    <span
                      key={chip}
                      className="rounded border border-mock-light-border bg-mock-light-surface px-1.5 py-0.5 text-[10px] text-mock-light-muted"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-[10px] text-mock-light-muted/85">Using: Resume.pdf + Hiring Brief</p>
            </header>

            <div className="flex min-h-0 flex-1 flex-col space-y-2 px-4 py-2.5">
              <div className="flex flex-wrap gap-1.5">
                {["Select Collection", "Reset Collection"].map((action) => (
                  <button
                    key={action}
                    type="button"
                    className="rounded border border-mock-light-border bg-mock-light-surface px-2 py-0.5 text-[10px] font-medium text-mock-light-muted"
                  >
                    {action}
                  </button>
                ))}
              </div>

              <div className="rounded-md border border-mock-light-border bg-mock-light-bg px-3 py-2 shadow-[inset_0_1px_0_rgb(100_116_139/0.12)]">
                <p className="text-[11px] uppercase tracking-[0.12em] text-mock-light-muted">Instruction</p>
                <p className="mt-0.5 text-[10px] text-mock-light-muted">
                  Based on selected context and system constraints
                </p>
                <p className="mt-1 text-xs leading-5 text-mock-light-text/85">
                  Review the resume and extract concrete evidence for the target role. Identify
                  strengths, gaps, and signals that should inform the final summary.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded border border-mock-light-accent/40 bg-mock-light-accent/10 px-3 py-1 text-[11px] font-semibold text-mock-light-accent"
                >
                  Generate
                </button>
              </div>

              <div className="rounded-md border border-mock-light-border bg-mock-light-bg shadow-[inset_0_1px_0_rgb(100_116_139/0.12)]">
                <div className="flex items-center justify-between border-b border-mock-light-border px-3 py-1.5">
                  <p className="text-[11px] uppercase tracking-[0.12em] text-mock-light-muted">Prompt Output</p>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-mock-light-muted">Draft v1</span>
                  </div>
                </div>
                <div className="flex items-center border-b border-mock-light-border px-3 py-1.5">
                  <span className="ml-auto text-[10px] text-mock-light-muted">Refine Response</span>
                </div>
                <div className="relative max-h-[16.5rem] min-h-[12rem] overflow-y-auto px-3 py-2.5">
                  <p className="text-xs leading-5 text-mock-light-text/85">
                    The candidate shows experience translating ambiguous product needs into structured
                    workflows. Evidence includes research synthesis, enterprise UX, and AI-assisted
                    product design.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-mock-light-text/85">
                    Additional signals include cross-functional facilitation, iterative design under
                    constraints, and communication patterns that support alignment across teams.
                  </p>
                  <p className="mt-2 text-xs leading-5 text-mock-light-text/85">
                    Potential gaps include limited quantified impact in later roles and inconsistent
                    emphasis on domain-specific outcomes for the target position.
                  </p>
                  <p className="mt-2 text-xs font-medium text-mock-light-text/85">### Experience Signals</p>
                  <ul className="mt-1 list-disc space-y-1 pl-4 text-xs leading-5 text-mock-light-text/85">
                    <li>Evidence of workflow decomposition across ambiguous requirements.</li>
                    <li>Strong synthesis habits, but rationale visibility is uneven across steps.</li>
                    <li>Output quality is high, while cumulative state remains difficult to audit.</li>
                  </ul>
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-mock-light-surface/95 to-transparent" />
                </div>
              </div>
            </div>

            <footer className="flex flex-wrap items-center gap-2 border-t border-mock-light-border px-4 py-3">
              {["View Comments", "Edit Context"].map((action) => (
                <button
                  key={action}
                  type="button"
                  className="rounded border border-mock-light-border bg-mock-light-bg px-2.5 py-1 text-[11px] font-medium text-mock-light-text/85"
                >
                  {action}
                </button>
              ))}
              <button
                type="button"
                className="ml-auto rounded border border-mock-light-accent/40 bg-mock-light-accent/10 px-3 py-1 text-[11px] font-semibold text-mock-light-accent"
              >
                Next
              </button>
            </footer>
          </section>
        </div>
      </div>

      <figcaption className="max-w-[72ch] text-[0.74rem] leading-6 text-foreground/72 md:text-[0.8rem]">
        The original model supported step-by-step generation, but system state and document
        assembly remained implicit.
      </figcaption>
    </figure>
  );
}
