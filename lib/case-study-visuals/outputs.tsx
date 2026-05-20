import {
  OutputsVisual,
  type OutputsVisualVariant,
} from "@/components/case-study/outputs/OutputsVisual";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

export type OutputsVisualKey =
  | "outputs-overview"
  | "outputs-challenge"
  | "outputs-approach"
  | "outputs-outcome";

const KEY_TO_VARIANT: Record<OutputsVisualKey, OutputsVisualVariant> = {
  "outputs-overview": "unstructured",
  "outputs-challenge": "formatting-gap",
  "outputs-approach": "workflow-to-document",
  "outputs-outcome": "structured",
};

export function resolveOutputsVisual(
  key: OutputsVisualKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  const label = labels?.label ?? "Visual";
  const text = labels?.text ?? "";

  return {
    label,
    text,
    content: <OutputsVisual variant={KEY_TO_VARIANT[key]} />,
  };
}

export function isOutputsVisualKey(key: string): key is OutputsVisualKey {
  return key in KEY_TO_VARIANT;
}
