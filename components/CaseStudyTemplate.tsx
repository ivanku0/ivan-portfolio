import Link from "next/link";
import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/RevealOnScroll";

type VisualVariant = "large" | "medium" | "split";

type VisualConfig = {
  variant?: VisualVariant;
  label?: string;
  text?: string;
  content?: ReactNode;
};

type CaseStudyTemplateProps = {
  title: string;
  subtitle: string;
  hook?: string;
  overview: string | string[];
  challenge: string | string[];
  approach: string | string[];
  outcome: string | string[];
  overviewVisual?: ReactNode | string | VisualConfig;
  challengeVisual?: ReactNode | string | VisualConfig;
  approachVisual?: ReactNode | string | VisualConfig;
  outcomeVisual?: ReactNode | string | VisualConfig;
};

export function CaseStudyTemplate({
  title,
  subtitle,
  hook,
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

  const normalizeVisual = (
    visual: ReactNode | string | VisualConfig | undefined,
    fallbackText?: string,
    fallbackVariant: VisualVariant = "medium",
  ): { label: string; text?: string; variant: VisualVariant; content?: ReactNode } => {
    if (typeof visual === "string") {
      return { label: "Visual placeholder", text: visual, variant: fallbackVariant };
    }

    if (
      visual &&
      typeof visual === "object" &&
      !Array.isArray(visual) &&
      ("variant" in visual || "label" in visual || "text" in visual || "content" in visual)
    ) {
      const config = visual as VisualConfig;
      return {
        label: config.label ?? "Visual placeholder",
        text: config.text ?? fallbackText,
        variant: config.variant ?? fallbackVariant,
        content: config.content as ReactNode | undefined,
      };
    }

    return {
      label: "Visual placeholder",
      text: fallbackText,
      variant: fallbackVariant,
      content: visual && typeof visual !== "string" ? (visual as ReactNode) : undefined,
    };
  };

  const renderVisualBlock = ({
    label,
    text,
    variant,
    content,
  }: {
    label: string;
    text?: string;
    variant: VisualVariant;
    content?: ReactNode;
  }) => (
    <div
      className={
        variant === "split"
          ? "grid max-w-[82ch] gap-6 md:grid-cols-2 md:gap-8"
          : variant === "large"
            ? "max-w-[82ch] space-y-6 md:space-y-7"
            : "max-w-[82ch] space-y-6 md:space-y-7"
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
          <div className="min-h-40 rounded-lg bg-[var(--color-surface-raised)]/52 p-5 md:min-h-56 md:p-6">
            <p className="text-muted text-[11px] uppercase tracking-[0.16em]">Visual area</p>
            {content ? <div className="mt-3">{content}</div> : null}
          </div>
        </>
      ) : (
        <>
          <div className="space-y-4">
            <p className="text-muted text-[11px] uppercase tracking-[0.16em]">{label}</p>
            {text ? (
              <p className="text-secondary max-w-[62ch] text-sm leading-7 md:text-base md:leading-8">
                {text}
              </p>
            ) : null}
          </div>
          <div
            className={
              variant === "large"
                ? "min-h-64 rounded-lg bg-[var(--color-surface-raised)]/52 p-5 md:min-h-80 md:p-6"
                : "min-h-44 rounded-lg bg-[var(--color-surface-raised)]/52 p-5 md:min-h-56 md:p-6"
            }
          >
            <p className="text-muted text-[11px] uppercase tracking-[0.16em]">Visual area</p>
            {content ? <div className="mt-3">{content}</div> : null}
          </div>
        </>
      )}
    </div>
  );

  const sections = [
    {
      title: "Overview",
      content: toParagraphs(overview),
      visual: {
        ...normalizeVisual(
          overviewVisual,
          "Add supporting visuals for context, scope, and timeline.",
          "medium",
        ),
        label: "Overview visual",
        variant: "medium" as VisualVariant,
      },
    },
    {
      title: "Challenge",
      content: toParagraphs(challenge),
      visual: {
        ...normalizeVisual(
          challengeVisual,
          "Add a visual that highlights key constraints and friction points.",
          "split",
        ),
        label: "Challenge visual",
        variant: "split" as VisualVariant,
      },
    },
    {
      title: "Approach",
      content: toParagraphs(approach),
      visual: {
        ...normalizeVisual(
          approachVisual,
          "Add workflow models, wireframes, or diagrams that show the process.",
          "large",
        ),
        label: "Approach visual",
        variant: "large" as VisualVariant,
      },
    },
    {
      title: "Outcome",
      content: toParagraphs(outcome),
      visual: {
        ...normalizeVisual(
          outcomeVisual,
          "Add outcomes, impact snapshots, or result-oriented visuals.",
          "medium",
        ),
        label: "Outcome visual",
        variant: "medium" as VisualVariant,
      },
    },
  ] as const;

  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="mx-auto max-w-5xl space-y-24 md:space-y-32">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <div className="space-y-7 md:space-y-9">
          <header className="space-y-10">
            <h1 className="max-w-[18ch] text-4xl font-semibold tracking-[-0.02em] md:text-6xl md:leading-[1.02]">
              {title}
            </h1>
            <p className="text-secondary max-w-[60ch] text-base leading-8 md:text-xl md:leading-9">
              {subtitle}
            </p>
          </header>

          {hook ? (
            <blockquote className="max-w-[50ch] border-l border-[var(--color-border-subtle)]/32 pl-5 md:pl-6">
              <p className="text-foreground/95 text-xl font-medium tracking-tight md:text-2xl md:leading-tight">
                {hook}
              </p>
            </blockquote>
          ) : null}
        </div>

        {sections.map((section, index) => (
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
                    ? "max-w-[82ch] space-y-10 rounded-2xl bg-[var(--color-surface-raised)]/16 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                    : index % 2 === 0
                      ? "max-w-[82ch] space-y-10 rounded-2xl bg-[var(--color-surface-raised)]/12 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                      : "max-w-[82ch] space-y-10 rounded-2xl bg-[var(--color-surface-alt)]/12 px-5 py-10 md:space-y-12 md:px-6 md:py-12"
                }
              >
                <div className="space-y-4">
                  <p className="text-muted text-xs uppercase tracking-[0.16em]">Section</p>
                  <h2 className="max-w-[22ch] text-3xl font-semibold tracking-[-0.01em] md:text-4xl">
                    {section.title}
                  </h2>
                </div>
                <div className="max-w-[68ch] space-y-7 md:space-y-8">
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

              <div className="pt-2 md:pt-3">{renderVisualBlock(section.visual)}</div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </main>
  );
}
