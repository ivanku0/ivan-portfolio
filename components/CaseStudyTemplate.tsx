import Link from "next/link";
import type { ReactNode } from "react";

type CaseStudyTemplateProps = {
  title: string;
  subtitle: string;
  overview: string | string[];
  challenge: string | string[];
  approach: string | string[];
  outcome: string | string[];
  overviewVisual?: ReactNode;
  challengeVisual?: ReactNode;
  approachVisual?: ReactNode;
  outcomeVisual?: ReactNode;
};

export function CaseStudyTemplate({
  title,
  subtitle,
  overview,
  challenge,
  approach,
  outcome,
  overviewVisual,
  challengeVisual,
  approachVisual,
  outcomeVisual,
}: CaseStudyTemplateProps) {
  const toParagraphs = (content: string | string[]) =>
    Array.isArray(content) ? content : [content];

  const sections = [
    {
      title: "Overview",
      content: toParagraphs(overview),
      visual: overviewVisual,
      defaultVisual: "Add supporting visuals for context, scope, and timeline.",
    },
    {
      title: "Challenge",
      content: toParagraphs(challenge),
      visual: challengeVisual,
      defaultVisual: "Add a visual that highlights key constraints and friction points.",
    },
    {
      title: "Approach",
      content: toParagraphs(approach),
      visual: approachVisual,
      defaultVisual:
        "Add workflow models, wireframes, or diagrams that show the process.",
    },
    {
      title: "Outcome",
      content: toParagraphs(outcome),
      visual: outcomeVisual,
      defaultVisual: "Add outcomes, impact snapshots, or result-oriented visuals.",
    },
  ] as const;

  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <header className="space-y-6">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            {title}
          </h1>
          <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg">
            {subtitle}
          </p>
        </header>

        {sections.map((section) => (
          <section
            key={section.title}
            className="section-divider space-y-5 border-t pt-10 md:pt-12"
          >
            <h2 className="text-2xl font-medium tracking-tight">{section.title}</h2>
            <div className="max-w-3xl space-y-5">
              {section.content.map((paragraph) => (
                <p key={paragraph} className="text-secondary leading-8">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="card-surface max-w-3xl rounded-2xl p-6 shadow-lg shadow-black/20">
              <p className="text-muted text-xs uppercase tracking-[0.16em]">
                Visual placeholder
              </p>
              <p className="text-secondary mt-4 leading-7">
                {typeof section.visual === "string"
                  ? section.visual
                  : section.defaultVisual}
              </p>
              {section.visual && typeof section.visual !== "string" ? (
                <div className="mt-4">{section.visual}</div>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
