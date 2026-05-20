import {
  mockLabelClass,
  mockLayerTitleClass,
  mockPanelClass,
} from "@/components/case-study/mock/MockPrimitives";

export type OutputsVisualVariant =
  | "unstructured"
  | "formatting-gap"
  | "workflow-to-document"
  | "structured";

type OutputsVisualProps = {
  variant: OutputsVisualVariant;
};

export function OutputsVisual({ variant }: OutputsVisualProps) {
  if (variant === "unstructured") {
    return (
      <figure className={mockPanelClass}>
        <div className="space-y-3 p-4 md:p-5">
          <p className={mockLabelClass}>Generated output</p>
          <div className="rounded-lg border border-dashed border-border-subtle/28 bg-background/24 p-4">
            <p className="text-[0.78rem] leading-6 text-secondary">
              The candidate demonstrates strong experience in product design and cross-functional
              collaboration. They have worked on enterprise systems and AI-assisted workflows.
              Additional strengths include research synthesis and facilitation. The summary should
              emphasize positioning for senior roles...
            </p>
            <p className="mt-3 text-[0.68rem] text-muted">No headings · inconsistent spacing · one text block</p>
          </div>
        </div>
      </figure>
    );
  }

  if (variant === "formatting-gap") {
    return (
      <figure className="w-full">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>Workflow steps</p>
            <div className="mt-2 space-y-1.5">
              {["1. Context", "1.1 Signals", "2. Summary"].map((step) => (
                <div
                  key={step}
                  className="rounded border border-border-subtle/24 bg-background/20 px-2 py-1 text-[0.72rem] text-secondary"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>
          <span className="hidden text-center text-xs text-muted md:block">≠</span>
          <div className={`${mockPanelClass} border-dashed p-3`}>
            <p className={mockLabelClass}>Exported Word doc</p>
            <div className="mt-2 space-y-1">
              <div className="h-2 w-full rounded bg-border-subtle/20" />
              <div className="h-2 w-[70%] rounded bg-border-subtle/16" />
              <div className="h-2 w-[85%] rounded bg-border-subtle/18" />
            </div>
            <p className="mt-2 text-[0.66rem] text-muted">Hierarchy lost in export</p>
          </div>
        </div>
      </figure>
    );
  }

  if (variant === "workflow-to-document") {
    return (
      <figure className="w-full">
        <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>Steps</p>
            <div className="mt-2 space-y-1">
              {["Section A", "Section B", "Body"].map((s) => (
                <p key={s} className="text-[0.7rem] text-secondary">
                  {s}
                </p>
              ))}
            </div>
          </div>
          <span className="self-center text-muted">→</span>
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>Markdown</p>
            <p className="mt-2 font-mono text-[0.62rem] leading-5 text-accent-secondary/90">
              ## Summary
              <br />
              - Signal one
              <br />
              - Signal two
            </p>
          </div>
          <span className="self-center text-muted">→</span>
          <div className={`${mockPanelClass} p-3`}>
            <p className={mockLabelClass}>Rendered doc</p>
            <p className={`mt-2 ${mockLayerTitleClass}`}>Summary</p>
            <ul className="mt-1 list-disc pl-4 text-[0.68rem] text-secondary">
              <li>Signal one</li>
              <li>Signal two</li>
            </ul>
          </div>
        </div>
      </figure>
    );
  }

  return (
    <figure className={mockPanelClass}>
      <div className="space-y-2 p-4 md:p-5">
        <p className={mockLabelClass}>Structured deliverable</p>
        <p className={`${mockLayerTitleClass} normal-case tracking-tight`}>Executive summary</p>
        <p className="text-[0.72rem] leading-5 text-secondary">
          Positioning and proof-backed narrative ready for stakeholder review.
        </p>
        <p className="pt-2 text-[0.7rem] font-medium text-foreground/90">Experience signals</p>
        <p className="text-[0.68rem] text-secondary">Bulleted evidence mapped from workflow steps.</p>
        <p className="pt-1 text-[0.66rem] text-muted">Styles applied · hierarchy preserved · export-ready</p>
      </div>
    </figure>
  );
}
