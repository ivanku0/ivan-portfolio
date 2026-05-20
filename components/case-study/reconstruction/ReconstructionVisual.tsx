import { mockLabelClass, mockPanelClass } from "@/components/case-study/mock/MockPrimitives";

export type ReconstructionVisualVariant =
  | "production"
  | "no-system"
  | "pipeline"
  | "library";

type ReconstructionVisualProps = {
  variant: ReconstructionVisualVariant;
};

export function ReconstructionVisual({ variant }: ReconstructionVisualProps) {
  if (variant === "production") {
    return (
      <figure className={mockPanelClass}>
        <div className="p-4 md:p-5">
          <p className={mockLabelClass}>Production screenshots</p>
          <div className="mt-3 grid grid-cols-4 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={`h-8 rounded-sm ${
                  i % 3 === 0 ? "bg-border-subtle/38" : "bg-border-subtle/22"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-[0.66rem] text-muted">Source of truth — live UI captures</p>
        </div>
      </figure>
    );
  }

  if (variant === "no-system") {
    return (
      <figure className={mockPanelClass}>
        <div className="space-y-3 p-4 md:p-5">
          <p className={mockLabelClass}>Blank-slate concept</p>
          <div className="rounded-lg border border-dashed border-border-subtle/30 bg-background/20 p-4">
            <div className="h-3 w-[40%] rounded bg-border-subtle/24" />
            <div className="mt-3 h-20 rounded border border-border-subtle/20 bg-surface-alt/20" />
            <p className="mt-2 text-[0.66rem] text-muted">Generic layout · low stakeholder trust</p>
          </div>
        </div>
      </figure>
    );
  }

  if (variant === "pipeline") {
    return (
      <figure className="w-full">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>Screenshots</p>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <span key={i} className="h-4 rounded-sm bg-border-subtle/28" />
              ))}
            </div>
          </div>
          <span className="text-muted">→</span>
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>AI extract</p>
            <p className="mt-2 text-[0.68rem] text-accent-secondary/90">Regions → components</p>
          </div>
          <span className="text-muted">→</span>
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>CSS align</p>
            <p className="mt-2 text-[0.68rem] text-secondary">Spacing · type · behavior</p>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className={mockPanelClass}>
      <div className="p-4 md:p-5">
        <p className={mockLabelClass}>Reusable asset library</p>
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {Array.from({ length: 16 }).map((_, i) => (
            <span
              key={i}
              className={`h-6 rounded-sm ${
                i % 4 === 0
                  ? "bg-accent-secondary/42"
                  : i % 2 === 0
                    ? "bg-border-subtle/34"
                    : "bg-border-subtle/22"
              }`}
            />
          ))}
        </div>
        <p className="mt-2 text-[0.66rem] text-muted">Extend and recombine for new concepts</p>
      </div>
    </figure>
  );
}
