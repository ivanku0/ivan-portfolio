import Link from "next/link";
import { RevealOnScroll } from "@/components/home";
import {
  getNextCaseStudy,
  portfolioContactEmail,
  type CaseStudyContent,
} from "@/content";
import { resolveVisual, type CaseStudyVisualSlot } from "@/lib/case-study-visuals";

type VisualVariant = "large" | "medium" | "split";

type CaseStudyTemplateProps = {
  study: CaseStudyContent;
  contactEmail?: string;
};

function renderVisualBlock(
  visual: CaseStudyVisualSlot,
  variant: VisualVariant = "medium",
) {
  const { label, text, content, bare } = visual;

  return (
    <div
      className={
        variant === "split"
          ? "prose-width grid gap-6 md:grid-cols-2 md:gap-8"
          : "prose-width space-y-6 md:space-y-7"
      }
    >
      {variant === "split" ? (
        <>
          <div className="space-y-4">
            <p className="text-muted text-[11px] uppercase tracking-[0.16em]">{label}</p>
            {text ? (
              <p className="text-secondary max-w-[32ch] text-sm leading-7 md:text-base md:leading-8">
                {text}
              </p>
            ) : null}
          </div>
          <div
            className={
              bare
                ? "min-h-40 md:min-h-56"
                : "min-h-40 rounded-lg bg-surface-raised/52 p-5 md:min-h-56 md:p-6"
            }
          >
            {content}
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <p className="text-muted text-[11px] uppercase tracking-[0.16em]">{label}</p>
            {text ? (
              <p
                className={`text-secondary text-sm leading-7 md:text-base md:leading-8 ${
                  variant === "large" ? "max-w-[78ch]" : "max-w-[62ch]"
                }`}
              >
                {text}
              </p>
            ) : null}
          </div>
          <div
            className={
              bare
                ? variant === "large"
                  ? "min-h-64 md:min-h-80"
                  : "min-h-44 md:min-h-56"
                : variant === "large"
                  ? "min-h-64 rounded-lg bg-surface-raised/52 p-5 md:min-h-80 md:p-6"
                  : "min-h-44 rounded-lg bg-surface-raised/52 p-5 md:min-h-56 md:p-6"
            }
          >
            {content}
          </div>
        </>
      )}
    </div>
  );
}

export function CaseStudyTemplate({
  study,
  contactEmail = portfolioContactEmail,
}: CaseStudyTemplateProps) {
  const { page, sections, visuals, visualLabels } = study;

  const sectionsList = [
    {
      title: "Overview",
      content: sections.overview,
      visual: resolveVisual(visuals.overview, visualLabels?.overview),
      variant: "medium" as const,
    },
    {
      title: "Challenge",
      content: sections.challenge,
      visual: resolveVisual(visuals.challenge, visualLabels?.challenge),
      variant: "large" as const,
    },
    {
      title: "Approach",
      content: sections.approach,
      visual: resolveVisual(visuals.approach, visualLabels?.approach),
      variant: "large" as const,
    },
    {
      title: "Outcome",
      content: sections.outcome,
      visual: resolveVisual(visuals.outcome, visualLabels?.outcome),
      variant: "medium" as const,
    },
  ];

  const nextCaseStudy = getNextCaseStudy(study.slug);

  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="layout-width mx-auto max-w-5xl space-y-24 md:space-y-32">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <div className="space-y-7 md:space-y-9">
          <header className="space-y-10">
            <h1 className="prose-width max-w-[18ch] text-[length:var(--text-display)] font-semibold leading-[1.05] tracking-[-0.02em]">
              {page.title}
            </h1>
            <p className="text-secondary prose-width text-base leading-8 md:text-xl md:leading-9">
              {page.subtitle}
            </p>
          </header>

          <blockquote className="prose-width max-w-[50ch] border-l border-border-subtle/32 pl-5 md:pl-6">
            <p className="text-foreground/95 text-xl font-medium tracking-tight md:text-2xl md:leading-tight">
              {page.hook}
            </p>
          </blockquote>
        </div>

        {sectionsList.map((section, index) => (
          <RevealOnScroll key={section.title}>
            <div
              className={
                section.title === "Overview"
                  ? "space-y-20 md:space-y-28"
                  : "space-y-16 md:space-y-24"
              }
            >
              <section
                className={
                  section.title === "Overview"
                    ? "prose-width space-y-10 rounded-2xl bg-surface-raised/16 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                    : index % 2 === 0
                      ? "prose-width space-y-10 rounded-2xl bg-surface-raised/12 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                      : "prose-width space-y-10 rounded-2xl bg-surface-alt/12 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                }
              >
                <div className="space-y-4">
                  <p className="text-muted text-xs uppercase tracking-[0.16em]">Section</p>
                  <h2 className="max-w-[22ch] text-[length:var(--text-section)] font-semibold tracking-[-0.01em]">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-7 md:space-y-8">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-secondary text-[1.02rem] leading-8 md:leading-9"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <div className="min-w-0 overflow-x-auto pt-2 md:pt-3">
                {renderVisualBlock(section.visual, section.variant)}
              </div>
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll>
          <div className="space-y-16 md:space-y-24">
            <section className="prose-width space-y-8 rounded-2xl bg-surface-raised/12 px-5 py-10 md:space-y-9 md:px-6 md:py-12">
              <div className="space-y-4">
                <p className="text-muted text-xs uppercase tracking-[0.16em]">Closing</p>
                <h2 className="max-w-[28ch] text-[length:var(--text-section)] font-semibold tracking-[-0.01em]">
                  Want to work together?
                </h2>
                <p className="text-secondary text-[1.02rem] leading-8 md:leading-9">
                  Reach out at{" "}
                  <a href={`mailto:${contactEmail}`} className="text-sm md:text-[1.02rem]">
                    {contactEmail}
                  </a>
                  .
                </p>
              </div>
              <div className="flex flex-col gap-3 border-t border-border-subtle/22 pt-8 text-sm md:flex-row md:items-center md:justify-between md:gap-6 md:pt-9">
                <Link href="/" className="inline-block">
                  {"<- Back to home"}
                </Link>
                {nextCaseStudy ? (
                  <Link
                    href={`/work/${nextCaseStudy.slug}`}
                    className="inline-block md:text-right"
                  >
                    {`Next case study: ${nextCaseStudy.card.title} →`}
                  </Link>
                ) : null}
              </div>
            </section>
          </div>
        </RevealOnScroll>
      </div>
    </main>
  );
}
