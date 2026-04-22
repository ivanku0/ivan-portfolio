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
      "Placeholder summary for problem framing, shipped solution, and measurable outcomes.",
    href: "/work/workflows",
  },
  {
    title: "Designing Structured AI Outputs",
    description:
      "Placeholder summary for product strategy, interaction design, and operational rollout.",
    href: "/work/outputs",
  },
  {
    title: "From Screenshots to System",
    description:
      "Using AI to reconstruct production interfaces into reusable design systems for rapid exploration.",
    href: "/work/reconstruction",
  },
];

export function getNextCaseStudy(currentHref: string): CaseStudy | null {
  const index = caseStudies.findIndex((c) => c.href === currentHref);
  if (index < 0) return null;
  return caseStudies[(index + 1) % caseStudies.length];
}
