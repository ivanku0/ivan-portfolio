import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="px-6 pb-16 pt-28 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-6xl">
          <section aria-label="Intro" className="space-y-8 md:space-y-10">
            <p className="text-muted text-xs uppercase tracking-[0.22em] md:text-sm">
              Ivan Kuo
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.02em] md:text-7xl">
              Designing AI systems grounded in human judgment, taste, and
              real-world use.
            </h1>
            <p className="text-secondary max-w-3xl text-lg leading-8 md:text-xl md:leading-9">
              Combining 10+ years of human-centered design with AI-native tools
              to build workflows, outputs, and systems that are fast, usable,
              and actually work.
            </p>
          </section>
        </div>
      </header>

      <main className="px-6 pb-36 md:pb-44">
        <div className="mx-auto max-w-6xl space-y-32 md:space-y-44">
          <section
            id="selected-work"
            aria-labelledby="selected-work-heading"
            className="section-divider space-y-10 border-t pt-14 md:space-y-12 md:pt-20"
          >
            <SectionHeading
              id="selected-work-heading"
              title="Selected Work"
              description="Placeholder for case studies and outcomes. This section will highlight a few projects with context, process, and impact."
            />

            <div className="grid gap-4 md:grid-cols-2">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.href} caseStudy={caseStudy} />
              ))}
            </div>
          </section>

          <section
            id="how-i-think"
            aria-labelledby="how-i-think-heading"
            className="section-divider space-y-6 border-t pt-14 md:pt-20"
          >
            <SectionHeading
              id="how-i-think-heading"
              title="How I Think"
              description="Placeholder for principles, decision-making framework, and philosophy behind product, design, and AI systems work."
            />
          </section>

          <section
            id="background"
            aria-labelledby="background-heading"
            className="section-divider space-y-6 border-t pt-14 md:pt-20"
          >
            <SectionHeading
              id="background-heading"
              title="Background"
              description="Placeholder for experience, timeline, and selected roles across design, strategy, and AI-enabled product development."
            />
          </section>
          <SiteFooter />
        </div>
      </main>
    </div>
  );
}