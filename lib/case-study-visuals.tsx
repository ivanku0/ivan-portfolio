import type { ReactNode } from "react";
import { PlaceholderDiagram } from "@/components/case-study/PlaceholderDiagram";
import OriginalWorkflowModel from "@/components/workflows/OriginalWorkflowModel";
import TriptychProduct from "@/components/workflows/triptych/TriptychProduct";
import TriptychVisual from "@/components/workflows/TriptychVisual";
import WorkflowChallenge from "@/components/workflows/WorkflowChallenge";
import type { VisualKey } from "@/content/types";

export type CaseStudyVisualSlot = {
  label: string;
  text: string;
  bare?: boolean;
  content: ReactNode;
};

const visualBareWrap = (content: ReactNode, className = "mb-14 mt-12 md:mb-16 md:pt-14") => (
  <div className={className}>{content}</div>
);

export function resolveVisual(
  key: VisualKey,
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
        content: visualBareWrap(<OriginalWorkflowModel />),
      };
    case "workflow-challenge":
      return {
        label,
        text,
        bare: true,
        content: visualBareWrap(<WorkflowChallenge />),
      };
    case "triptych-architecture":
      return {
        label,
        text,
        bare: true,
        content: visualBareWrap(<TriptychVisual />, "mb-16 mt-14 md:mt-16"),
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
    case "outputs-overview":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="flat" />,
      };
    case "outputs-challenge":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="hierarchy" />,
      };
    case "outputs-approach":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="pipeline" />,
      };
    case "outputs-outcome":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="hierarchy" />,
      };
    case "reconstruction-overview":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="grid" />,
      };
    case "reconstruction-challenge":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="flat" />,
      };
    case "reconstruction-approach":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="pipeline" />,
      };
    case "reconstruction-outcome":
      return {
        label,
        text,
        content: <PlaceholderDiagram title={label} variant="grid" />,
      };
    default:
      return {
        label: "Visual",
        text,
        content: <PlaceholderDiagram title="Visual" />,
      };
  }
}
