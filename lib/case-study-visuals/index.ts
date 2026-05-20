import type { VisualKey } from "@/content/types";
import {
  isPlaceholderKey,
  resolvePlaceholderVisual,
} from "@/lib/case-study-visuals/placeholders";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";
import {
  resolveWorkflowsVisual,
  type WorkflowsVisualKey,
} from "@/lib/case-study-visuals/workflows";

const WORKFLOWS_KEYS = new Set<string>([
  "original-model",
  "workflow-challenge",
  "triptych-architecture",
  "triptych-product",
]);

export function resolveVisual(
  key: VisualKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  if (WORKFLOWS_KEYS.has(key)) {
    return resolveWorkflowsVisual(key as WorkflowsVisualKey, labels);
  }

  if (isPlaceholderKey(key)) {
    return resolvePlaceholderVisual(key, labels);
  }

  return resolvePlaceholderVisual("outputs-overview", labels);
}

export type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";
