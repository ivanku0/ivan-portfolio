import type { CaseStudyContent } from "@/content/types";

export const reconstructionCaseStudy: CaseStudyContent = {
  slug: "reconstruction",
  splash: "reconstruction",
  card: {
    title: "From Screenshots to System",
    description:
      "Built an AI-assisted pipeline to reconstruct production screenshots into reusable design assets—so assistant concepts stayed credible under fast exploration.",
  },
  page: {
    title: "From Screenshots to System",
    subtitle:
      "When there was no design system to start from, I turned live UI captures and CSS into a lightweight component library teams could reuse for AI assistant exploration.",
    hook: "Fast concept exploration breaks down when design work is not grounded in production reality.",
    metaDescription:
      "Case study on AI-assisted reconstruction of production interfaces into reusable design assets.",
  },
  sections: {
    overview: [
      "The team needed to explore new AI assistant concepts quickly on a platform with no established design system, no reusable component library, and limited brand-ready assets. Early mocks were fast to produce but looked generic—stakeholders questioned fidelity before they could evaluate direction.",
      "I led reconstruction of the production interface into editable assets: screenshot ingestion, AI-assisted region extraction, CSS cross-checking, and a practical library teams could extend for concept work.",
      "The goal was infrastructure for credible exploration—not another round of one-off screens that looked plausible in isolation but failed in review.",
    ],
    challenge: [
      "The bottleneck was credibility, not idea volume. Without reusable assets grounded in production, concepts drifted from how the product actually behaved.",
      "Reviews stalled on realism. Teams debated whether mocks matched the live app instead of whether the assistant interaction was worth pursuing.",
      "Manual screen recreation was too slow to keep pace with exploration. The process had to produce high-fidelity artifacts quickly while staying anchored to production reality—and without exposing proprietary UI in portfolio artifacts.",
    ],
    approach: [
      "The constraint was missing design infrastructure, not a lack of ideas.",
      "I treated the work as reconstruction, not greenfield design: ingest production screenshots, use AI-assisted tooling to convert interface regions into editable components, then validate against frontend CSS references for spacing, typography, and visual behavior.",
      "From that base I built reusable assets teams could extend and recombine—iteration at concept speed without losing the recognizable patterns of the live system.",
      "The pipeline functioned like a lightweight design system for ongoing exploration: deconstruct what exists, then branch quickly on credible foundations.",
    ],
    outcome: [
      "Concept development accelerated while fidelity improved. Exploration started from production-grounded components instead of blank canvases.",
      "Review quality shifted earlier toward product decisions—stakeholders recognized the live system in the mocks, so conversations focused on interaction direction and scope.",
      "The method became repeatable: deconstruct the interface into reusable infrastructure, validate with CSS, then iterate on assistant concepts without sacrificing realism.",
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
      label: "Production screenshots",
      text: "Live UI captures as the source of truth for reconstruction.",
    },
    challenge: {
      label: "No system",
      text: "Blank-slate concepts look fast—but reviews stall on fidelity, not direction.",
    },
    approach: {
      label: "Reconstruction pipeline",
      text: "Screenshot ingest → component extract → CSS alignment.",
    },
    outcome: {
      label: "Reusable library",
      text: "Components teams extend and recombine for new assistant concepts.",
    },
  },
};
