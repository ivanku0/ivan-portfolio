import {
  ReconstructionVisual,
  type ReconstructionVisualVariant,
} from "@/components/case-study/reconstruction/ReconstructionVisual";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

export type ReconstructionVisualKey =
  | "reconstruction-overview"
  | "reconstruction-challenge"
  | "reconstruction-approach"
  | "reconstruction-outcome";

const KEY_TO_VARIANT: Record<ReconstructionVisualKey, ReconstructionVisualVariant> = {
  "reconstruction-overview": "production",
  "reconstruction-challenge": "no-system",
  "reconstruction-approach": "pipeline",
  "reconstruction-outcome": "library",
};

export function resolveReconstructionVisual(
  key: ReconstructionVisualKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  const label = labels?.label ?? "Visual";
  const text = labels?.text ?? "";

  return {
    label,
    text,
    content: <ReconstructionVisual variant={KEY_TO_VARIANT[key]} />,
  };
}

export function isReconstructionVisualKey(key: string): key is ReconstructionVisualKey {
  return key in KEY_TO_VARIANT;
}
