import { PlaceholderDiagram } from "@/components/case-study/PlaceholderDiagram";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

type ReconstructionPlaceholderKey =
  | "reconstruction-overview"
  | "reconstruction-challenge"
  | "reconstruction-approach"
  | "reconstruction-outcome";

const PLACEHOLDER_CONFIG: Record<
  ReconstructionPlaceholderKey,
  { title: string; variant: "flat" | "hierarchy" | "pipeline" | "grid" }
> = {
  "reconstruction-overview": { title: "Production interface", variant: "grid" },
  "reconstruction-challenge": { title: "No system", variant: "flat" },
  "reconstruction-approach": { title: "Reconstruction pipeline", variant: "pipeline" },
  "reconstruction-outcome": { title: "Reusable assets", variant: "grid" },
};

export function resolveReconstructionPlaceholder(
  key: ReconstructionPlaceholderKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  const config = PLACEHOLDER_CONFIG[key];
  const label = labels?.label ?? config.title;
  const text = labels?.text ?? "";

  return {
    label,
    text,
    content: <PlaceholderDiagram title={label} variant={config.variant} />,
  };
}

export function isReconstructionPlaceholderKey(
  key: string,
): key is ReconstructionPlaceholderKey {
  return key in PLACEHOLDER_CONFIG;
}
