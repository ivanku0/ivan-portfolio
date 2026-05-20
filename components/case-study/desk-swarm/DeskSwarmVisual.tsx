import { mockLabelClass, mockPanelClass } from "@/components/case-study/mock/MockPrimitives";

export type DeskSwarmVisualVariant =
  | "character-select"
  | "table-friction"
  | "track-screen"
  | "in-hand";

type DeskSwarmVisualProps = {
  variant: DeskSwarmVisualVariant;
};

function SwarmDots({ count, dense = false }: { count: number; dense?: boolean }) {
  return (
    <div className={`grid ${dense ? "grid-cols-8 gap-0.5" : "grid-cols-6 gap-1"}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`rounded-[2px] ${
            dense
              ? i % 5 === 0
                ? "h-1.5 w-1.5 bg-accent-secondary/55"
                : "h-1.5 w-1.5 bg-border-subtle/32"
              : i % 4 === 0
                ? "h-2.5 w-2.5 bg-accent-secondary/50"
                : "h-2.5 w-2.5 bg-border-subtle/28"
          }`}
        />
      ))}
    </div>
  );
}

export function DeskSwarmVisual({ variant }: DeskSwarmVisualProps) {
  if (variant === "character-select") {
    return (
      <figure className={mockPanelClass}>
        <div className="space-y-3 p-4 md:p-5">
          <p className={mockLabelClass}>desk swarm · menu</p>
          <div className="rounded-lg border border-border-subtle/28 bg-background/24 p-3">
            <div className="flex items-end gap-1">
              <span className="text-lg font-semibold tracking-tight text-accent-secondary/90">desk</span>
              <span className="text-lg font-semibold tracking-tight">swarm</span>
            </div>
            <p className="mt-1 text-[0.65rem] text-muted">math is for blockers</p>
            <div className="mt-3 grid gap-2 md:grid-cols-[1fr_auto]">
              <div className="rounded-md border border-border-subtle/26 bg-surface-alt/30 p-2.5">
                <p className="text-[0.62rem] uppercase tracking-[0.14em] text-muted">Scute Swarm</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-secondary">
                  Landfall — create a token that&apos;s a copy of this creature...
                </p>
              </div>
              <div className="flex items-center gap-1 self-center">
                <span className="h-6 w-6 rounded border border-border-subtle/24 bg-background/20" />
                <span className="text-[0.65rem] text-muted">›</span>
                <span className="h-6 w-6 rounded border border-border-subtle/24 bg-background/20" />
              </div>
            </div>
            <button
              type="button"
              className="mt-3 w-full rounded-md border border-accent-secondary/35 bg-accent-secondary/12 py-1.5 text-[0.68rem] text-accent-secondary"
            >
              Start track
            </button>
          </div>
        </div>
      </figure>
    );
  }

  if (variant === "table-friction") {
    return (
      <figure className="w-full">
        <div className="grid gap-4 md:grid-cols-3 md:items-stretch">
          {[
            { label: "Dice + mental math", note: "Slow · error-prone at 64+" },
            { label: "Spreadsheet", note: "Accurate · breaks table flow" },
            { label: "Desk swarm", note: "One number · swarm at a glance" },
          ].map((col, idx) => (
            <div
              key={col.label}
              className={`${mockPanelClass} p-3 ${idx === 2 ? "border-accent-secondary/30 bg-accent-secondary/6" : ""}`}
            >
              <p className={mockLabelClass}>{col.label}</p>
              <div className="mt-2 flex min-h-16 items-center justify-center rounded border border-dashed border-border-subtle/24 bg-background/16">
                {idx === 0 ? (
                  <span className="text-2xl tracking-widest text-muted">⚀⚁</span>
                ) : idx === 1 ? (
                  <div className="space-y-1 px-2">
                    <div className="h-1.5 w-12 rounded bg-border-subtle/24" />
                    <div className="h-1.5 w-10 rounded bg-border-subtle/20" />
                    <div className="h-1.5 w-14 rounded bg-border-subtle/22" />
                  </div>
                ) : (
                  <span className="text-2xl font-semibold tabular-nums text-accent-secondary">128</span>
                )}
              </div>
              <p className="mt-2 text-[0.66rem] text-muted">{col.note}</p>
            </div>
          ))}
        </div>
      </figure>
    );
  }

  if (variant === "track-screen") {
    return (
      <figure className={mockPanelClass}>
        <div className="grid gap-3 p-4 md:grid-cols-[1fr_1.1fr] md:p-5">
          <div className="space-y-2">
            <p className={mockLabelClass}>Track · Scute</p>
            <p className="text-4xl font-semibold tabular-nums tracking-tight text-accent-secondary">42</p>
            <div className="flex flex-wrap gap-1.5">
              {["−1", "Grow", "Undo", "Info"].map((btn) => (
                <span
                  key={btn}
                  className="rounded border border-border-subtle/26 bg-background/22 px-2 py-0.5 text-[0.62rem] text-secondary"
                >
                  {btn}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-border-subtle/26 bg-background/18 p-3">
            <p className={mockLabelClass}>Pixel field</p>
            <div className="mt-2 flex min-h-24 items-center justify-center">
              <SwarmDots count={36} dense />
            </div>
            <p className="mt-2 text-[0.66rem] text-muted">Cardinal layout · size eases with n</p>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className={mockPanelClass}>
      <div className="space-y-3 p-4 md:p-5">
        <p className={mockLabelClass}>Install · share</p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-lg border border-border-subtle/26 bg-surface-alt/24 p-3">
            <p className="text-[0.68rem] font-medium text-secondary">Add to Home Screen</p>
            <p className="mt-1 text-[0.64rem] text-muted">PWA manifest · offline shell</p>
          </div>
          <div className="rounded-lg border border-border-subtle/26 bg-background/20 p-3">
            <p className="text-[0.68rem] font-medium text-secondary">Share board</p>
            <div className="mt-2 min-h-12 rounded border border-dashed border-border-subtle/22 bg-background/14 p-2">
              <SwarmDots count={20} dense />
            </div>
          </div>
        </div>
        <p className="text-[0.64rem] text-muted">Fan tool · Scryfall attribution in-app</p>
      </div>
    </figure>
  );
}
