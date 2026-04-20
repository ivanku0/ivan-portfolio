import { caseStudies } from "@/data/caseStudies";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { HeroAtmosphere } from "@/components/HeroAtmosphere";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden px-6 pb-12 pt-24 md:pb-18 md:pt-32">
        <HeroAtmosphere />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(90%_90%_at_34%_38%,rgba(28,13,38,0.46)_0%,rgba(28,13,38,0.22)_45%,rgba(28,13,38,0)_75%)]"
        />
        <div className="mx-auto max-w-6xl">
          <section aria-label="Intro" className="relative z-20 space-y-7 md:space-y-8">
            <p className="text-muted text-xs uppercase tracking-[0.22em] md:text-sm">
              Ivan Kuo
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.02em] md:text-6xl">
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
        <div className="mx-auto max-w-6xl space-y-28 md:space-y-40">
          <RevealOnScroll>
            <section
              id="selected-work"
              aria-labelledby="selected-work-heading"
              className="space-y-12 pt-20 md:space-y-14 md:pt-28"
            >
              <SectionHeading
                id="selected-work-heading"
                title="Selected Work"
                description="Placeholder for case studies and outcomes. This section will highlight a few projects with context, process, and impact."
              />

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {caseStudies.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.href} caseStudy={caseStudy} />
                ))}
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section
              id="how-i-think"
              aria-labelledby="how-i-think-heading"
              className="section-divider space-y-6 border-t pt-18 md:pt-24"
            >
              <SectionHeading
                id="how-i-think-heading"
                title="How I Think"
                description="Placeholder for principles, decision-making framework, and philosophy behind product, design, and AI systems work."
              />
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section
              id="background"
              aria-labelledby="background-heading"
              className="section-divider space-y-6 border-t pt-18 md:pt-24"
            >
              <SectionHeading
                id="background-heading"
                title="Background"
                description="Placeholder for experience, timeline, and selected roles across design, strategy, and AI-enabled product development."
              />
            </section>
          </RevealOnScroll>
          <RevealOnScroll>
            <SiteFooter />
          </RevealOnScroll>
        </div>
      </main>
    </div>
  );
}