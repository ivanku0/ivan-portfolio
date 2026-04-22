type StructureGroup = {
  parent: string;
  children?: string[];
  active?: boolean;
};

const structureRows: StructureGroup[] = [
  {
    parent: "1.0 Policy Context",
    children: ["1.1 Requirements", "1.2 Roles and Responsibilities"],
  },
  {
    parent: "2.0 Draft Policy Definition",
    active: true,
  },
];

export default function TriptychVisual() {
  const activeShell =
    "border border-[var(--color-accent-secondary)]/38 bg-[var(--color-surface-alt)]/62";
  const layerLabelClass =
    "text-[0.62rem] uppercase tracking-[0.14em] text-muted";

  return (
    <figure className="max-w-[82ch] space-y-11 md:space-y-14">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:gap-4">
        <section className="rounded-xl border border-[var(--color-border-subtle)]/30 bg-[var(--color-surface-raised)]/40">
            <header className="border-b border-[var(--color-border-subtle)]/24 px-3 py-2.5">
              <div className="space-y-1">
                <p className={layerLabelClass}>Layer 1</p>
                <h3 className="text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-foreground/92">
                  Structure
                </h3>
                <p className="text-[0.68rem] text-muted">
                  Defines workflow schema and grouping
                </p>
              </div>
            </header>
            <div className="space-y-2.5 px-3 py-3.5">
              {structureRows.map((row) => (
                <div
                  key={row.parent}
                  className={
                    row.children
                      ? "space-y-1 rounded-md border border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/22 p-1.5"
                      : "space-y-1"
                  }
                >
                  <p
                    className={
                      row.active
                        ? `${activeShell} rounded-md px-2 py-1.5 text-[0.78rem] font-medium text-foreground`
                        : "px-2 py-0.5 text-[0.78rem] font-medium text-foreground/88"
                    }
                  >
                    {row.parent}
                  </p>
                  {row.children ? (
                    <ul className="space-y-0.5 pl-4">
                      {row.children.map((item) => (
                        <li key={item} className="text-[0.72rem] text-muted">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <div aria-hidden="true" className="mx-auto hidden h-full w-3 items-center justify-center md:flex">
            <span className="h-16 w-px rounded-full bg-[var(--color-border-subtle)]/55" />
          </div>

          <section className="rounded-xl border border-[var(--color-border-subtle)]/28 bg-[var(--color-surface-raised)]/42">
            <header className="border-b border-[var(--color-border-subtle)]/24 px-3 py-2.5">
              <div className="space-y-1">
                <p className={layerLabelClass}>Layer 2</p>
                <h3 className="text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-foreground/92">
                  Execution
                </h3>
                <p className="text-[0.68rem] text-muted">
                  Generates content from structured inputs
                </p>
              </div>
            </header>
            <div className="space-y-2.5 px-3 py-3.5">
              <div className="rounded-md border border-[var(--color-border-subtle)]/28 bg-[var(--color-page-bg)]/32 px-2.5 py-2">
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-muted">Input</p>
                <p className="mt-1 text-[0.76rem] leading-5 text-secondary">
                  Generate draft language for section 2.0 using the approved constraints.
                </p>
              </div>
              <div className="border-t border-[var(--color-border-subtle)]/24" />
              <div className={`${activeShell} rounded-md px-2.5 py-2`}>
                <p className="text-[0.68rem] uppercase tracking-[0.12em] text-muted">Output</p>
                <p className="mt-1 text-[0.76rem] leading-5 text-foreground">
                  Draft policy definition generated with citations and role constraints preserved.
                </p>
              </div>
            </div>
          </section>

          <div aria-hidden="true" className="mx-auto hidden h-full w-3 items-center justify-center md:flex">
            <span className="h-16 w-px rounded-full bg-[var(--color-border-subtle)]/55" />
          </div>

          <section className="rounded-xl border border-[var(--color-border-subtle)]/34 bg-[var(--color-surface-alt)]/44">
            <header className="border-b border-[var(--color-border-subtle)]/24 px-3 py-2.5">
              <div className="space-y-1">
                <p className={layerLabelClass}>Layer 3</p>
                <h3 className="text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-foreground/92">
                  Visibility
                </h3>
                <p className="text-[0.68rem] text-muted">
                  Aggregates outputs into a system-level view
                </p>
              </div>
            </header>
            <div className="space-y-2.5 px-3 py-3.5">
              <div className="rounded-lg border border-[var(--color-border-subtle)]/28 bg-[var(--color-page-bg)]/42 px-2.5 py-2.5">
                <p className="text-[0.66rem] uppercase tracking-[0.12em] text-muted">Section 1</p>
                <p className="mt-1 text-[0.75rem] text-secondary">Context and requirements verified.</p>
              </div>
              <div className={`${activeShell} rounded-lg px-2.5 py-2.5`}>
                <p className="text-[0.66rem] uppercase tracking-[0.12em] text-muted">Section 2</p>
                <p className="mt-1 text-[0.75rem] text-foreground">
                  Draft policy definition updated from active step 2.0.
                </p>
              </div>
              <div className="rounded-lg border border-dashed border-[var(--color-border-subtle)]/20 bg-[var(--color-page-bg)]/18 px-2.5 py-2.5">
                <p className="text-[0.66rem] uppercase tracking-[0.12em] text-muted">Section 3</p>
                <p className="mt-1 text-[0.75rem] text-muted">Pending review and publication state.</p>
              </div>
            </div>
          </section>
      </div>

      <div className="mx-auto w-full max-w-[68ch] rounded-xl bg-[var(--color-surface-raised)]/14 p-5 md:p-6">
        <figcaption className="max-w-[70ch] text-[0.74rem] leading-6 text-foreground/72 md:text-[0.8rem]">
          The original model collapsed execution and output visibility into a single surface.
          Introducing a third layer externalized system state, making workflows predictable,
          inspectable, and easier to trust.
        </figcaption>
      </div>
    </figure>
  );
}
