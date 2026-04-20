import { CaseStudyTemplate } from "@/components/CaseStudyTemplate";

const overview = [
  "I worked on early design exploration for a mobile virtual assistant experience, where the team needed to quickly prototype new ideas in a way that felt grounded in the existing product.",
  "However, there was no established design system, no reusable assets, and no clear brand guidance available for the team to build from. Starting from scratch would have resulted in generic concepts that did not reflect the actual product experience.",
  "To move faster while maintaining realism, I used AI-assisted tools to reconstruct the existing interface from production artifacts and convert it into a reusable design foundation.",
];

const challenge = [
  "The core challenge was not generating ideas, but generating credible ones.",
  "Without a design system or asset library, any new concept work risked feeling disconnected from the real product. This made it difficult to evaluate ideas, align with stakeholders, or build confidence in proposed directions.",
  "At the same time, manually recreating the interface would have been slow and inefficient. The team needed a way to quickly produce design artifacts that were both high fidelity and grounded in production reality.",
];

const approach = [
  "I approached this as a reconstruction problem rather than a traditional design exercise.",
  "First, I used AI-assisted tooling to ingest screenshots of the existing interface and convert them into editable design components. This allowed me to rapidly recreate the structure, layout, and hierarchy of the production UI inside a design environment.",
  "To improve accuracy, I supplemented this process by referencing frontend CSS from the live system, ensuring that spacing, typography, and styling behavior were consistent with what users actually experienced.",
  "From there, I built out a set of reusable assets based on the reconstructed interface. These assets could be manipulated, extended, and recombined to support new concepts, allowing for rapid iteration without losing alignment with the real product.",
  "This effectively created a lightweight, AI-assisted design system that could be used for ongoing exploration.",
];

const outcome = [
  "This approach significantly accelerated the design process while improving the quality of exploration.",
  "Instead of starting from a blank canvas, I was able to work from a system that was already grounded in production reality. This made concepts easier to evaluate, communicate, and evolve.",
  "It also demonstrated a broader shift in how design work can be done. AI can be used not just to generate new ideas, but to deconstruct and reconstruct existing systems into reusable design infrastructure.",
  "That capability creates a new level of speed and flexibility, allowing designers to move quickly without sacrificing realism or quality.",
];

export default function ReconstructionPage() {
  return (
    <CaseStudyTemplate
      title="From Screenshots to System"
      subtitle="A case study on using AI-assisted reconstruction to turn production interfaces into reusable design assets for faster and more realistic concept exploration."
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
