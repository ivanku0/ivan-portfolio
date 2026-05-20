import type { CaseStudyContent } from "@/content/types";

export const reconstructionCaseStudy: CaseStudyContent = {
  slug: "reconstruction",
  splash: "reconstruction",
  card: {
    title: "From Screenshots to System",
    description:
      "Built an AI-assisted pipeline to turn production screenshots into reusable design assets—so concept work stayed grounded in the real product.",
  },
  page: {
    title: "From Screenshots to System",
    subtitle:
      "When early concepts looked generic and stakeholders questioned fidelity, I reconstructed the live interface into reusable components for faster, credible exploration.",
    hook: "Fast concept exploration breaks down when design work is not grounded in production reality.",
    metaDescription:
      "Case study on AI-assisted reconstruction of production UIs into reusable design assets.",
  },
  sections: {
    overview: [
      "The team needed to explore new assistant concepts quickly, but early mocks looked generic and disconnected from the production product.",
      "There was no design system, no reusable component library, and limited brand-ready assets. Speed was high; trust in reviews was low.",
      "I built a production-grounded foundation by reconstructing the existing interface from artifacts, then turning that reconstruction into assets for concept work.",
    ],
    challenge: [
      "The bottleneck was credibility, not idea volume. Without reusable assets, explorations drifted from real product behavior.",
      "Reviews stalled on fidelity instead of direction. Teams debated whether mocks reflected the live product before they could evaluate the idea.",
      "Manual recreation was too slow. The process had to produce high-fidelity artifacts quickly while staying anchored to production.",
    ],
    approach: [
      "The constraint was missing design infrastructure—not lack of concepts.",
      "I used AI-assisted tooling to ingest screenshots and convert interface regions into editable design components.",
      "I cross-checked layouts against frontend CSS references, aligning spacing, typography, and visual behavior to the live product.",
      "From that base I built reusable assets teams could extend and recombine—iteration without losing realism.",
    ],
    outcome: [
      "Concept development accelerated while fidelity improved. Exploration started from assets grounded in production behavior, not blank canvases.",
      "Review quality improved: teams evaluated interaction direction directly instead of arguing about mock accuracy first.",
      "The method became a repeatable pattern—deconstruct the live interface into infrastructure, then iterate quickly without sacrificing realism.",
    ],
  },
  visuals: {
    overview: "reconstruction-overview",
    challenge: "reconstruction-challenge",
    approach: "reconstruction-approach",
    outcome: "reconstruction-outcome",
  },
  visualLabels: {
    overview: {
      label: "Production interface",
      text: "Screenshots and CSS references as the source of truth.",
    },
    challenge: {
      label: "No system",
      text: "Concepts start from scratch and drift from production behavior.",
    },
    approach: {
      label: "Reconstruction pipeline",
      text: "Screenshot ingestion, component extraction, and CSS alignment.",
    },
    outcome: {
      label: "Reusable assets",
      text: "A lightweight library for credible concept exploration.",
    },
  },
};
