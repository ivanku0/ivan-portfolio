import { MockCaption, MockEyebrow, MockPanel } from "@/components/case-study/mock/MockPrimitives";

type PlaceholderDiagramProps = {
  title: string;
  variant?: "flat" | "hierarchy" | "pipeline" | "grid";
};

export function PlaceholderDiagram({ title, variant = "flat" }: PlaceholderDiagramProps) {
  return (
    <MockPanel className="p-4 md:p-5">
      <MockEyebrow>{title}</MockEyebrow>
      <div className="mt-4 min-h-36 md:min-h-44">
        {variant === "hierarchy" ? (
          <div className="space-y-2">
            {[72, 58, 86, 64].map((width, i) => (
              <div
                key={width}
                className="h-3 rounded bg-border-subtle/30"
                style={{ width: `${width}%`, marginLeft: i > 0 ? `${i * 4}%` : 0 }}
              />
            ))}
          </div>
        ) : variant === "pipeline" ? (
          <div className="grid grid-cols-3 gap-3">
            {["Source", "Transform", "Output"].map((label) => (
              <div
                key={label}
                className="min-h-20 rounded-md border border-dashed border-border-subtle/28 bg-background/20 p-2"
              >
                <MockCaption>{label}</MockCaption>
              </div>
            ))}
          </div>
        ) : variant === "grid" ? (
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className={`h-6 rounded-sm ${
                  i % 4 === 0
                    ? "bg-accent-secondary/40"
                    : i % 2 === 0
                      ? "bg-border-subtle/34"
                      : "bg-border-subtle/22"
                }`}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            <div className="h-4 w-[88%] rounded bg-border-subtle/32" />
            <div className="h-3 w-[72%] rounded bg-border-subtle/24" />
            <div className="h-3 w-[94%] rounded bg-border-subtle/28" />
            <div className="h-3 w-[60%] rounded bg-border-subtle/20" />
          </div>
        )}
      </div>
    </MockPanel>
  );
}
