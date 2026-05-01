import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";

const overview = [
  "The team needed to explore new assistant concepts quickly, but early concepts looked generic and disconnected from the production product.",
  "There was no established design system, no reusable component library, and limited brand-ready assets. Starting from scratch produced ideas fast, but not ideas stakeholders trusted.",
  "My role was to build a production-grounded design foundation by reconstructing the existing interface from artifacts, then turning that reconstruction into reusable assets for concept work.",
];

const challenge = [
  "The challenge was credibility, not idea quantity. Without a system or reusable assets, concept explorations drifted away from real product behavior.",
  "That made reviews harder. Stakeholders questioned fidelity instead of evaluating direction, and teams spent time debating realism rather than product decisions.",
  "Manual recreation would have been too slow, so the process needed to produce high-fidelity design artifacts quickly while staying anchored to production reality.",
];

const approach = [
  "A key realization was that the bottleneck was not concept speed, it was the lack of production-grounded design infrastructure.",
  "I approached the problem as reconstruction, not greenfield design. First, I used AI-assisted tooling to ingest screenshots and convert interface regions into editable design components.",
  "Then I cross-checked reconstructed layouts against frontend CSS references, aligning spacing, typography, and visual behavior to the live product.",
  "From that base, I built reusable assets that could be extended and recombined for new concepts, so teams could iterate quickly without losing realism.",
  "This created a lightweight reconstruction pipeline that functioned like a practical design system for ongoing exploration.",
];

const outcome = [
  "The approach accelerated concept development while improving fidelity. Instead of starting from a blank canvas, exploration began from assets already grounded in production behavior.",
  "This improved review quality because teams could evaluate interaction direction directly, rather than first debating whether mocks reflected the real product.",
  "From a product perspective, the method reduced concept-to-review friction and increased confidence in exploratory proposals.",
  "It also demonstrated a repeatable pattern for AI-assisted design work: deconstruct existing interfaces into reusable infrastructure, then iterate quickly without sacrificing realism.",
];

export default function ReconstructionPage() {
  return (
    <CaseStudyTemplate
      title="From Screenshots to System"
      subtitle="A case study on using AI-assisted reconstruction to turn production interfaces into reusable design assets for faster and more realistic concept exploration."
      hook="Fast concept exploration breaks down when design work is not grounded in production reality."
      currentCaseStudyHref="/work/reconstruction"
      overview={overview}
      overviewVisual="Production interface"
      challenge={challenge}
      challengeVisual="Lack of system"
      approach={approach}
      approachVisual="AI-assisted reconstruction"
      outcome={outcome}
      outcomeVisual="Reusable design system"
    />
  );
}
