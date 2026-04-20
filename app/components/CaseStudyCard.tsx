import Link from "next/link";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
};

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <Link
      href={caseStudy.href}
      className="card-surface group rounded-2xl p-6 shadow-lg shadow-black/20 duration-200 hover:shadow-xl hover:shadow-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent-secondary)]"
      aria-label={`View case study ${caseStudy.title.toLowerCase()}`}
    >
      <p className="text-muted text-xs uppercase tracking-[0.16em]">Case Study</p>
      <h3 className="mt-4 text-xl font-medium tracking-tight">{caseStudy.title}</h3>
      <p className="text-secondary mt-3 text-sm leading-7">
        {caseStudy.description}
      </p>
      <span className="mt-6 inline-block text-sm transition-colors">
        View project {">"}
      </span>
    </Link>
  );
}
