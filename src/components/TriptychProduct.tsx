const steps = [
  { label: "Default Section", level: 0, kind: "group" as const },
  { label: "1  Policy Context", level: 0 },
  { label: "1.1  Requirements", level: 1 },
  { label: "1.2  Roles and Responsibilities", level: 1 },
  { label: "2  Draft Policy Definition", level: 0, active: true },
];

const previewSections = [
  { title: "Policy Context", state: "complete" as const },
  { title: "Requirements", state: "pending" as const },
  { title: "Draft Policy Definition", state: "active" as const },
  { title: "Roles and Responsibilities", state: "pending" as const },
  { title: "Review and Finalize", state: "pending" as const },
];

export default function TriptychProduct() {
  const activeShell =
    "border border-[var(--color-accent-secondary)]/36 bg-[var(--color-surface-alt)]/66";

  return (
    <section className="mx-auto w-full max-w-[108ch] rounded-2xl border border-[var(--color-border-subtle)]/34 bg-[rgb(var(--color-page-bg-rgb)_/_0.42)] p-4 md:p-5">
      <div className="grid grid-cols-1 gap-3 md:min-h-[38rem] md:grid-cols-[0.9fr_auto_2.45fr_auto_1.3fr] md:gap-4">
        <aside className="rounded-xl border border-[var(--color-border-subtle)]/30 bg-[var(--color-surface-raised)]/44">
          <header className="flex items-center justify-between border-b border-[var(--color-border-subtle)]/22 px-3 py-2.5">
            <div className="flex items-center gap-1.5">
              <span className="text-[0.62rem] text-muted">▾</span>
              <h3 className="text-[0.73rem] font-semibold text-foreground/92">Steps</h3>
            </div>
            <span className="text-[0.62rem] text-muted">⚙</span>
          </header>
          <div className="space-y-1.5 px-2.5 py-2.5">
            {steps.map((step) => (
              <div key={step.label} className={step.level === 1 ? "pl-4" : ""}>
                <p
                  className={
                    step.kind === "group"
                      ? "px-1.5 text-[0.68rem] font-medium text-foreground/90"
                      : step.active
                        ? `${activeShell} rounded-md px-1.5 py-1 text-[0.72rem] font-medium text-foreground`
                        : "px-1.5 py-0.5 text-[0.72rem] text-secondary"
                  }
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </aside>

        <div aria-hidden="true" className="hidden w-px bg-[var(--color-border-subtle)]/34 md:block" />

        <section className="flex flex-col rounded-xl border border-[var(--color-border-subtle)]/30 bg-[var(--color-surface-raised)]/48">
          <header className="space-y-2 border-b border-[var(--color-border-subtle)]/22 px-3 py-2.5">
            <div className="flex items-center justify-between">
              <p className="text-[0.73rem] font-semibold text-foreground/92">Configuration</p>
              <span className="text-[0.62rem] text-muted">⋮</span>
            </div>
            <div className="space-y-1">
              <p className="text-[0.62rem] text-muted">Default Section /</p>
              <h3 className="text-sm font-semibold text-foreground">2  Draft Policy Definition</h3>
              <p className="text-[0.7rem] text-secondary">
                AI-generated policy definition based on structured user inputs.
              </p>
            </div>
          </header>

          <div className="space-y-2 border-b border-[var(--color-border-subtle)]/22 px-3 py-2.5">
            <div className="flex flex-wrap gap-1.5">
              {["AI-Assisted", "GPT-4o", "1024 Tokens"].map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-[var(--color-border-subtle)]/32 bg-[var(--color-page-bg)]/30 px-1.5 py-0.5 text-[0.62rem] text-secondary"
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Select Collection", "Edit Step Context"].map((action) => (
                <button
                  key={action}
                  type="button"
                  className="rounded-md border border-[var(--color-border-subtle)]/34 px-2 py-0.5 text-[0.62rem] font-medium text-secondary"
                >
                  {action}
                </button>
              ))}
            </div>
          </div>

          <div className="flex grow flex-col gap-3 px-3 py-3">
            <div className="flex min-h-0 flex-1 flex-col rounded-md border border-[var(--color-border-subtle)]/28 bg-[var(--color-page-bg)]/34 p-2.5">
              <p className="text-[0.65rem] text-muted">Default Prompt</p>
              <div className="mt-1 min-h-0 flex-1 overflow-auto">
                <p className="text-[0.74rem] leading-5 text-secondary">
                  Based on user inputs, write a short policy statement in clear language. Explain what is
                  supported, what is not, and why.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="button"
                className="rounded-md border border-[var(--color-accent-secondary)]/36 bg-[var(--color-surface-alt)]/62 px-2.5 py-1 text-[0.66rem] font-medium text-foreground"
              >
                Run
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col">
              <div className={`${activeShell} min-h-0 flex-1 rounded-md p-2.5`}>
                <div className="flex items-center justify-between">
                  <p className="text-[0.65rem] text-muted">Prompt Output</p>
                  <span className="text-[0.62rem] text-muted">Refine Response</span>
                </div>
                <div className="mt-1 min-h-0 flex-1 overflow-auto">
                  <p className="text-[0.74rem] leading-5 text-foreground">
                    Draft policy definition generated with aligned requirements and role-based constraints.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  type="button"
                  className="rounded-md border border-[var(--color-border-subtle)]/30 px-2 py-0.5 text-[0.64rem] text-secondary"
                >
                  Save
                </button>
              </div>
            </div>

            <div className="mt-auto flex items-center justify-between border-t border-[var(--color-border-subtle)]/18 pt-2.5">
              <button
                type="button"
                className="rounded-md border border-[var(--color-border-subtle)]/30 px-2 py-0.5 text-[0.64rem] text-secondary"
              >
                Previous
              </button>
              <button
                type="button"
                className="rounded-md border border-[var(--color-border-subtle)]/30 px-2 py-0.5 text-[0.64rem] text-secondary"
              >
                Next
              </button>
            </div>
          </div>
        </section>

        <div aria-hidden="true" className="hidden w-px bg-[var(--color-border-subtle)]/34 md:block" />

        <section className="rounded-xl border border-[var(--color-border-subtle)]/32 bg-[var(--color-surface-alt)]/50">
          <header className="space-y-2 border-b border-[var(--color-border-subtle)]/22 px-3 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-[0.62rem] text-muted">
                <span className="rounded-sm bg-[var(--color-page-bg)]/48 px-1 py-0.5 text-secondary">↺</span>
                <span>▢</span>
                <span>⌕</span>
                <span className="text-secondary">☰</span>
              </div>
              <button
                type="button"
                className="rounded-md border border-[var(--color-border-subtle)]/34 px-2 py-0.5 text-[0.62rem] font-medium text-secondary"
              >
                Export
              </button>
            </div>
            <h3 className="text-[0.73rem] font-semibold text-foreground/92">Document Preview</h3>
          </header>
          <div className="space-y-2 px-3 py-2.5">
            {previewSections.map((section) => (
              <div
                key={section.title}
                className={
                  section.state === "active"
                    ? `${activeShell} rounded-md px-2 py-1.5`
                    : section.state === "complete"
                      ? "rounded-md border border-[var(--color-border-subtle)]/24 bg-[var(--color-page-bg)]/38 px-2 py-1.5"
                      : "rounded-md border border-dashed border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/16 px-2 py-1.5"
                }
              >
                <p
                  className={
                    section.state === "pending"
                      ? "text-[0.72rem] text-muted"
                      : "text-[0.72rem] font-medium text-foreground/92"
                  }
                >
                  {section.title}
                </p>
                <p className="mt-0.5 text-[0.64rem] text-muted">
                  {section.state === "active"
                    ? "Pending step"
                    : section.state === "complete"
                      ? "Completed"
                      : "Pending"}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
