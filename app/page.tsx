import { CaseStudyCard, HeroAtmosphere, RevealOnScroll, SectionHeading } from "@/components/home";
import { SiteFooter } from "@/components/layout";
import { getCaseStudyCards } from "@/content";

export default function Home() {
  const cards = getCaseStudyCards();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="relative overflow-hidden px-6 pb-12 pt-24 md:pb-16 md:pt-32">
        <HeroAtmosphere />
        <div
          aria-hidden="true"
          className="hero-readability-overlay pointer-events-none absolute inset-0 z-10"
        />
        <div className="layout-width mx-auto">
          <section aria-label="Intro" className="relative z-20 space-y-7 md:space-y-8">
            <p className="text-muted text-xs uppercase tracking-[0.22em] md:text-sm">
              hi, I&apos;m ivan
            </p>
            <h1 className="prose-width max-w-5xl text-[length:var(--text-display)] font-semibold tracking-[-0.02em]">
              I design AI products where speed and judgment both matter.
            </h1>
            <p className="text-secondary prose-width text-[length:var(--text-hero-lead)] leading-8 md:leading-9">
              Ten years in human-centered design, now focused on AI-native workflows, structured
              outputs, and systems people can trust in production—not just in demos.
            </p>
          </section>
        </div>
      </header>

      <main className="px-6 pb-36 md:pb-44">
        <div className="layout-width mx-auto space-y-section md:space-y-section-md">
          <RevealOnScroll>
            <section
              id="work"
              aria-labelledby="selected-work-heading"
              className="scroll-mt-28 space-y-14 pt-28 md:space-y-16 md:pt-32"
            >
              <SectionHeading
                id="selected-work-heading"
                title="Selected Work"
                description="Three projects on making AI systems predictable, structured, and grounded in real product constraints."
              />

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {cards.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section
              id="how-i-think"
              aria-labelledby="how-i-think-heading"
              className="space-y-7 pt-20 md:space-y-8 md:pt-28"
            >
              <SectionHeading
                id="how-i-think-heading"
                title="How I Think"
                size="lg"
              />
              <p className="text-secondary prose-width text-[length:var(--text-hero-lead)] leading-8 md:leading-9">
                AI makes iteration cheap. It does not make the hard calls cheap—what to build, what
                good looks like, when to stop.
              </p>
              <p className="text-secondary prose-width text-base leading-8 md:text-lg md:leading-9">
                I use AI-native tools to move faster, and human-centered design to decide what
                deserves that speed: taste, tradeoffs, and whether the result holds up for real
                users in real environments.
              </p>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section
              id="background"
              aria-labelledby="background-heading"
              className="space-y-6 pt-16 md:space-y-7 md:pt-24"
            >
              <SectionHeading id="background-heading" title="Background" size="md" />
              <p className="text-secondary prose-width text-base leading-8">
                I&apos;ve spent 10+ years designing products across enterprise, federal, and
                emerging technology environments—research, facilitation, interaction design, and
                systems thinking, with increasing focus on AI-native products and design
                infrastructure.
              </p>
              <ul className="text-secondary list-disc space-y-2 pl-5 text-sm leading-7 marker:text-muted md:text-[0.95rem]">
                <li>LIGER AI platform</li>
                <li>Federal systems including VA and USPS</li>
                <li>Consulting environments including KPMG and Booz Allen</li>
              </ul>
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
