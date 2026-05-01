export default function WorkflowChallenge() {
  const labelClass = "text-[0.62rem] uppercase tracking-[0.16em] text-muted";

  return (
    <figure className="w-full">
      <div className="w-full max-w-[84ch] space-y-2 md:space-y-2.5">
        <div className="w-full pb-0 pt-2 md:pb-0 md:pt-4">
          <div className="relative mx-auto w-[96%] md:w-[94%]">
            <div className="grid min-h-[22rem] grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1.7fr_auto_0.9fr] md:items-start md:gap-8">
              <div className="space-y-2.5 md:min-h-[20rem]">
                <p className={labelClass}>Structure</p>
                <section className="rounded-xl border border-[var(--color-border-subtle)]/26 bg-[var(--color-surface-raised)]/34 px-3 py-4 md:min-h-[16rem]">
                  <div className="space-y-1.5">
                    {["Step 1", "Step 2", "Step 3"].map((step) => (
                      <div
                        key={step}
                        className="rounded-md border border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/22 px-2.5 py-1.5 text-[0.74rem] text-secondary"
                      >
                        {step}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div aria-hidden="true" className="hidden items-center justify-center md:flex md:min-h-[16rem]">
                <span className="text-[0.92rem] text-foreground/68">→</span>
              </div>

              <div className="relative space-y-2.5 md:min-h-[20rem]">
                <p className={labelClass}>Execution</p>
                <section className="rounded-xl border border-[var(--color-border-subtle)]/28 bg-[var(--color-surface-alt)]/42 px-3 py-4 shadow-[0_0_0_1px_rgba(var(--color-accent-secondary-rgb),0.08)] md:min-h-[16rem]">
                  <div className="rounded-lg border border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/16 px-2.5 py-2">
                    {[
                      { label: "Prompt", cls: "w-[91%]" },
                      { label: "Controls", cls: "mt-1.5 w-[86%] ml-1" },
                      { label: "Generated Output", cls: "mt-1 w-[94%]" },
                      { label: "Editing", cls: "mt-1.5 w-[82%] ml-2" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`rounded-md border border-[var(--color-border-subtle)]/24 bg-[var(--color-page-bg)]/24 px-2.5 py-1.5 text-[0.74rem] text-secondary ${item.cls}`}
                      >
                        {item.label}
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <div aria-hidden="true" className="hidden flex-col items-center justify-center md:flex md:min-h-[16rem]">
                <span className="text-[0.86rem] text-foreground/38">- - -→</span>
                <span className="mt-1 text-[0.58rem] uppercase tracking-[0.12em] text-muted/85">
                  not directly visible
                </span>
              </div>

              <div className="space-y-2.5 md:min-h-[20rem]">
                <p className={labelClass}>Document</p>
                <section className="scale-[0.94] rounded-xl border border-dashed border-[var(--color-border-subtle)]/26 bg-[var(--color-page-bg)]/10 px-3 py-3.5 md:min-h-[16rem]">
                  <div className="rounded-md border border-[var(--color-border-subtle)]/16 bg-[var(--color-page-bg)]/8 px-2.5 py-2 text-[0.72rem] text-secondary">
                    <p>Final document</p>
                    <p className="text-[0.66rem] text-secondary/95">assembled after execution</p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-0 w-[94%] whitespace-nowrap text-center text-[0.7rem] text-muted md:text-[0.76rem]">
          Execution, state, and output are collapsed into a single surface, making the system difficult to inspect or reason about.
        </p>
      </div>
    </figure>
  );
}
