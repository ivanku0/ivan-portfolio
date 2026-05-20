import type { VisualKey } from "@/content/types";
import { isOutputsVisualKey, resolveOutputsVisual } from "@/lib/case-study-visuals/outputs";
import {
  isReconstructionPlaceholderKey,
  resolveReconstructionPlaceholder,
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

  if (isOutputsVisualKey(key)) {
    return resolveOutputsVisual(key, labels);
  }

  if (isReconstructionPlaceholderKey(key)) {
    return resolveReconstructionPlaceholder(key, labels);
  }

  return resolveReconstructionPlaceholder("reconstruction-overview", labels);
}

export type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";
