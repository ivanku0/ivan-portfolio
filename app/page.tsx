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
          className="hero-readability-overlay pointer-events-none absolute inset-0 z-10"
        />
        <div className="mx-auto max-w-6xl">
          <section aria-label="Intro" className="relative z-20 space-y-7 md:space-y-8">
            <p className="text-muted text-xs uppercase tracking-[0.22em] md:text-sm">
              hi, i'm ivan!
            </p>
            <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.02em] md:text-6xl">
              I design AI systems grounded in human judgment, taste, and
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
        <div className="mx-auto max-w-6xl space-y-32 md:space-y-48">
          <RevealOnScroll>
            <section
              id="work"
              aria-labelledby="selected-work-heading"
              className="scroll-mt-28 space-y-14 pt-28 md:space-y-16 md:pt-38"
            >
              <div className="space-y-5">
                <h2
                  id="selected-work-heading"
                  className="text-2xl font-semibold tracking-tight md:text-3xl"
                >
                  Selected Work
                </h2>
                <p className="text-secondary max-w-3xl text-base leading-8">
                  Selected projects exploring how AI systems can be structured,made predictable, and applied to real production work.
                </p>
              </div>

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
              className="space-y-7 pt-22 md:space-y-8 md:pt-30"
            >
              <div className="space-y-5">
                <h2
                  id="how-i-think-heading"
                  className="text-[1.7rem] font-semibold tracking-tight md:text-[2rem]"
                >
                  How I Think
                </h2>
                <p className="text-secondary max-w-3xl text-lg leading-8 md:text-xl md:leading-9">
                  AI enables speed, but not judgment.
                </p>
                <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg md:leading-9">
                  Good products still depend on taste, decision making, and
                  understanding real human needs. I use AI-native tools to move
                  faster, but I rely on human-centered design to decide what
                  should be built, how it should work, and what quality looks
                  like in practice.
                </p>
              </div>
            </section>
          </RevealOnScroll>

          <RevealOnScroll>
            <section
              id="background"
              aria-labelledby="background-heading"
              className="space-y-6 pt-18 md:space-y-7 md:pt-24"
            >
              <div className="space-y-4">
                <h2
                  id="background-heading"
                  className="text-xl font-medium tracking-tight md:text-2xl"
                >
                  Background
                </h2>
                <p className="text-secondary max-w-3xl text-base leading-8">
                  I&apos;ve spent 10+ years designing products across enterprise,
                  federal, and emerging technology environments. My work has
                  spanned research, facilitation, interaction design, and
                  systems thinking, and now increasingly focuses on AI-native
                  products, workflows, and design infrastructure.
                </p>
                <ul className="text-secondary list-disc space-y-2 pl-5 text-sm leading-7 marker:text-[var(--color-text-muted)] md:text-[0.95rem]">
                  <li>LIGER AI platform</li>
                  <li>Federal systems including VA and USPS</li>
                  <li>
                    Consulting environments including KPMG and Booz Allen
                  </li>
                </ul>
              </div>
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