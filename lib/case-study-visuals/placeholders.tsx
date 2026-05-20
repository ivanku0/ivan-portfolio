import { PlaceholderDiagram } from "@/components/case-study/PlaceholderDiagram";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

type PlaceholderKey =
  | "outputs-overview"
  | "outputs-challenge"
  | "outputs-approach"
  | "outputs-outcome"
  | "reconstruction-overview"
  | "reconstruction-challenge"
  | "reconstruction-approach"
  | "reconstruction-outcome";

const PLACEHOLDER_CONFIG: Record<
  PlaceholderKey,
  { title: string; variant: "flat" | "hierarchy" | "pipeline" | "grid" }
> = {
  "outputs-overview": { title: "Unstructured output", variant: "flat" },
  "outputs-challenge": { title: "Formatting gap", variant: "hierarchy" },
  "outputs-approach": { title: "Workflow to document", variant: "pipeline" },
  "outputs-outcome": { title: "Structured output", variant: "hierarchy" },
  "reconstruction-overview": { title: "Production interface", variant: "grid" },
  "reconstruction-challenge": { title: "No system", variant: "flat" },
  "reconstruction-approach": { title: "Reconstruction pipeline", variant: "pipeline" },
  "reconstruction-outcome": { title: "Reusable assets", variant: "grid" },
};

export function resolvePlaceholderVisual(
  key: PlaceholderKey,
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

export function isPlaceholderKey(key: string): key is PlaceholderKey {
  return key in PLACEHOLDER_CONFIG;
}
