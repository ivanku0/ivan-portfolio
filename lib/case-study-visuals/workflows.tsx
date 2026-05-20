import OriginalWorkflowModel from "@/components/workflows/OriginalWorkflowModel";
import TriptychProduct from "@/components/workflows/triptych/TriptychProduct";
import TriptychVisual from "@/components/workflows/TriptychVisual";
import WorkflowChallenge from "@/components/workflows/WorkflowChallenge";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

export type WorkflowsVisualKey =
  | "original-model"
  | "workflow-challenge"
  | "triptych-architecture"
  | "triptych-product";

export function resolveWorkflowsVisual(
  key: WorkflowsVisualKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  const label = labels?.label ?? "Visual";
  const text = labels?.text ?? "";

  switch (key) {
    case "original-model":
      return {
        label,
        text,
        bare: true,
        content: (
          <div className="mb-14 mt-12 md:mb-16 md:mt-14">
            <OriginalWorkflowModel />
          </div>
        ),
      };
    case "workflow-challenge":
      return {
        label,
        text,
        bare: true,
        content: (
          <div className="mb-14 mt-12 md:mb-16 md:mt-14">
            <WorkflowChallenge />
          </div>
        ),
      };
    case "triptych-architecture":
      return {
        label,
        text,
        bare: true,
        content: (
          <div className="mb-16 mt-14 md:mt-16">
            <TriptychVisual />
          </div>
        ),
      };
    case "triptych-product":
      return {
        label,
        text,
        bare: true,
        content: (
          <div className="mt-10 md:mt-12">
            <TriptychProduct />
          </div>
        ),
      };
    default: {
      const _exhaustive: never = key;
      throw new Error(`Unknown workflows visual: ${_exhaustive}`);
    }
  }
}
