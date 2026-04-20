import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={caseStudy.href}
      className="card-surface group rounded-2xl p-7 shadow-xl shadow-black/20 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-accent-secondary)]/70 hover:shadow-2xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-secondary)] md:p-8"
      aria-label={`View case study ${caseStudy.title.toLowerCase()}`}
    >
      <p className="text-muted text-xs uppercase tracking-[0.16em]">Case Study</p>
      <h3 className="mt-5 text-2xl font-medium tracking-tight md:text-[1.7rem]">
        {caseStudy.title}
      </h3>
      <p className="text-secondary mt-4 text-sm leading-7 md:text-base md:leading-8">
        {caseStudy.description}
      </p>
      <span className="mt-8 inline-block text-sm transition-colors group-hover:text-[var(--color-accent-primary)]">
        View project {">"}
      </span>
    </Link>
  );
}
