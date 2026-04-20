import { CaseStudyTemplate } from "@/src/components/CaseStudyTemplate";

const placeholderOverview =
  "Placeholder content for the high-level context, project scope, key collaborators, and timeline.";
const placeholderChallenge =
  "Placeholder content for constraints, friction points, and the core problem this engagement set out to solve.";
const placeholderApproach =
  "Placeholder content for research, decision-making process, design iterations, and system architecture choices.";
const placeholderOutcome =
  "Placeholder content for launch impact, measurable outcomes, and what changed for users and teams after implementation.";

export default function ReconstructionPage() {
  return (
    <CaseStudyTemplate
      title="From Screenshots to System"
      subtitle="A case study on using AI-assisted reconstruction to turn production interfaces into reusable design assets for faster and more realistic concept exploration."
      overview={placeholderOverview}
      challenge={placeholderChallenge}
      approach={placeholderApproach}
      outcome={placeholderOutcome}
    />
  );
}
