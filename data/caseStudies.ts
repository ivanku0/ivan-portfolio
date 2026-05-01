export type CaseStudy = {
  title: string;
  description: string;
  href: string;
};

/** Update to your preferred contact address; used in case study footers. */
export const portfolioContactEmail = "hello@ivankuo.com";

export const caseStudies: CaseStudy[] = [
  {
    title: "Designing Predictable AI Workflows",
    description:
      "A redesign of AI workflow UX from an implicit prompt chain to a visible system where each saved step updates a traceable report section.",
    href: "/work/workflows",
  },
  {
    title: "Designing Structured AI Outputs",
    description:
      "A system redesign that mapped workflow steps to document hierarchy so AI-generated content became structured, styled, and immediately usable for enterprise deliverables.",
    href: "/work/outputs",
  },
  {
    title: "From Screenshots to System",
    description:
      "An AI-assisted reconstruction pipeline that converted production screenshots into reusable, high-fidelity design assets for faster and more credible concept exploration.",
    href: "/work/reconstruction",
  },
];

export function getNextCaseStudy(currentHref: string): CaseStudy | null {
  const index = caseStudies.findIndex((c) => c.href === currentHref);
  if (index < 0) return null;
  return caseStudies[(index + 1) % caseStudies.length];
}
