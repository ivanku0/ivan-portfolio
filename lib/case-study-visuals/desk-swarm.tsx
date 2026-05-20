import { CaseStudyCapture } from "@/components/case-study/CaseStudyCapture";
import {
  DeskSwarmVisual,
  type DeskSwarmVisualVariant,
} from "@/components/case-study/desk-swarm/DeskSwarmVisual";
import type { CaseStudyVisualSlot } from "@/lib/case-study-visuals/types";

export type DeskSwarmVisualKey =
  | "desk-swarm-overview"
  | "desk-swarm-challenge"
  | "desk-swarm-approach"
  | "desk-swarm-outcome";

/** Flip to true after adding files listed in docs/visual-assets.md */
export const USE_DESK_SWARM_CAPTURES = false;

const KEY_TO_VARIANT: Record<DeskSwarmVisualKey, DeskSwarmVisualVariant> = {
  "desk-swarm-overview": "character-select",
  "desk-swarm-challenge": "table-friction",
  "desk-swarm-approach": "track-screen",
  "desk-swarm-outcome": "in-hand",
};

const KEY_TO_CAPTURE: Record<DeskSwarmVisualKey, { src: string; alt: string }> = {
  "desk-swarm-overview": {
    src: "/work/desk-swarm/overview.png",
    alt: "Desk swarm main menu with preset carousel and start track control",
  },
  "desk-swarm-challenge": {
    src: "/work/desk-swarm/challenge.png",
    alt: "Desk swarm track screen showing a large token count and pixel swarm field",
  },
  "desk-swarm-approach": {
    src: "/work/desk-swarm/approach.png",
    alt: "Desk swarm track screen with digit meter and grow controls",
  },
  "desk-swarm-outcome": {
    src: "/work/desk-swarm/outcome.png",
    alt: "Desk swarm info sheet or share export of the swarm board",
  },
};

export function resolveDeskSwarmVisual(
  key: DeskSwarmVisualKey,
  labels?: { label: string; text: string },
): CaseStudyVisualSlot {
  const label = labels?.label ?? "Visual";
  const text = labels?.text ?? "";
  const capture = KEY_TO_CAPTURE[key];

  const content =
    USE_DESK_SWARM_CAPTURES && capture ? (
      <CaseStudyCapture src={capture.src} alt={capture.alt} />
    ) : (
      <DeskSwarmVisual variant={KEY_TO_VARIANT[key]} />
    );

  return {
    label,
    text,
    content,
    bare: USE_DESK_SWARM_CAPTURES,
  };
}

export function isDeskSwarmVisualKey(key: string): key is DeskSwarmVisualKey {
  return key in KEY_TO_VARIANT;
}
