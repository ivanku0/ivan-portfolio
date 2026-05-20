import type { CaseStudyContent } from "@/content/types";

export const deskSwarmCaseStudy: CaseStudyContent = {
  slug: "desk-swarm",
  splash: "desk-swarm",
  card: {
    title: "Desk swarm",
    description:
      "A mobile-first Commander counter for exponential token boards, with preset-specific rules, a readable pixel swarm, and controls built for play at the table.",
  },
  page: {
    title: "Desk swarm",
    subtitle:
      "Personal product: math is for blockers, a PWA-style web app for tracking Scute Swarm, Homunculus Horde, and other niche “how many creatures?” moments without spreadsheets or dice math.",
    hook: "When the board is a pile of identical tokens, the tool should match how you actually count, not how a generic life tracker thinks.",
    metaDescription:
      "Case study on designing Desk swarm, a Commander token counter with preset rules, canvas swarm visualization, and mobile table UX.",
  },
  sections: {
    overview: [
      "Desk swarm is a fan-built web app I designed and shipped end to end. It targets a narrow Commander problem: tracking creature counts that explode through copying effects (Scute Swarm, Homunculus Horde, Krenko-style goblin boards) when you need a fast answer at the table, not a full rules engine.",
      "The product is intentionally small: installable shell, offline-friendly manifest, mobile-first layout. The interaction model is not generic. Each preset encodes how that card actually behaves in casual play: doubling from zero, undo, grow shortcuts, and preset-specific wipe flows.",
      "Oracle text and Gatherer rulings load from Scryfall in the info sheet so players can sanity-check behavior without leaving the app. The counter stays focused on the number you care about right now.",
    ],
    challenge: [
      "Generic life counters and dice are wrong for the job. Exponential growth blows past comfortable mental math; spreadsheets break flow; ring-shaped token visualizations do not match how swarms feel on the board.",
      "The UX problem is legibility under stress: one-handed phone use, glances between players, counts that jump from 8 to 256 in a turn, and house rules that differ by playgroup.",
      "Visualization had to stay readable as n grew. Token size, camera zoom, and layout could not jump discontinuously when density changed. The counter also needed to stay honest at Commander scale, so the model uses BigInt instead of floating-point shortcuts.",
    ],
    approach: [
      "I structured the app around presets, not a universal token editor. Scute and Horde share cardinal proliferation layout so colonies clump instead of forming rings. Krenko gets a separate boss-and-horde flow with its own controls and death animation.",
      "The track screen pairs a hero digit meter with a canvas pixel field: PNG sprites with glyph fallbacks, continuous size easing as count rises, and zoom that holds steady for small boards then steps by octave before the log curve kicks in above 256.",
      "The main menu uses a character-select carousel (pantone-style cards, oracle snippets, flavor easter eggs, recent stats) so picking a preset feels like choosing a deck piece, not opening settings.",
      "Under the hood, grow/undo/manual entry rules live in a small tracking module covered by Vitest (layout math, zoom steps, preset grow behavior). That kept iteration on feel separate from rendering details in the canvas layer.",
    ],
    outcome: [
      "Desk swarm ships as a focused table tool: big number, swarm you can read, controls mapped to the flows players actually use mid-game, plus share-image export of the current board state.",
      "It is a contrast piece in this portfolio: same systems thinking as enterprise AI work, applied to a zero-stake domain where speed, clarity, and delight at the table are the whole brief.",
      "Magic: The Gathering is Wizards of the Coast’s trademark. This is an independent fan project, not affiliated with or endorsed by Wizards.",
    ],
  },
  visuals: {
    overview: "desk-swarm-overview",
    challenge: "desk-swarm-challenge",
    approach: "desk-swarm-approach",
    outcome: "desk-swarm-outcome",
  },
  visualLabels: {
    overview: {
      label: "Character select",
      text: "Preset carousel with card art, oracle text, and one-tap entry into a tuned track screen, not a generic counter settings panel.",
    },
    challenge: {
      label: "Table friction",
      text: "Dice, mental math, and spreadsheets break down when counts double every landfall. The product targets that specific failure mode.",
    },
    approach: {
      label: "Track screen",
      text: "Digit meter, canvas swarm field, and preset grow/undo/wipe controls, with layout and zoom tuned for readability as n scales.",
    },
    outcome: {
      label: "In the hand",
      text: "PWA-style install, offline shell, Scryfall-backed info sheet, and shareable swarm snapshots for post-game flex.",
    },
  },
};
