import { outputsCaseStudy } from "@/content/case-studies/outputs";
import { reconstructionCaseStudy } from "@/content/case-studies/reconstruction";
import { workflowsCaseStudy } from "@/content/case-studies/workflows";
import type { CaseStudyContent, CaseStudySlug } from "@/content/types";

export const portfolioContactEmail = "hello@ivankuo.com";

export const caseStudies: CaseStudyContent[] = [
  workflowsCaseStudy,
  outputsCaseStudy,
  reconstructionCaseStudy,
];

export function getCaseStudyBySlug(slug: string): CaseStudyContent | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudyHref(slug: CaseStudySlug): string {
  return `/work/${slug}`;
}

export function getNextCaseStudy(currentSlug: CaseStudySlug): CaseStudyContent | null {
  const index = caseStudies.findIndex((study) => study.slug === currentSlug);
  if (index < 0) return null;
  return caseStudies[(index + 1) % caseStudies.length];
}

/** Home grid + cards */
export function getCaseStudyCards() {
  return caseStudies.map((study) => ({
    slug: study.slug,
    title: study.card.title,
    description: study.card.description,
    href: getCaseStudyHref(study.slug),
    splash: study.splash,
  }));
}

export type { CaseStudyContent, CaseStudySlug } from "@/content/types";
