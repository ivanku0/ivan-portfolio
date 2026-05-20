import {
  CaseStudyCard,
  HomeHero,
  HomePrinciples,
  HomeSection,
  RevealOnScroll,
  SectionHeading,
} from "@/components/home";
import { SiteFooter } from "@/components/layout";
import { getCaseStudyCards } from "@/content";

export default function Home() {
  const cards = getCaseStudyCards();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HomeHero>
        <section aria-label="Intro" className="space-y-7 md:space-y-8">
          <p className="hero-intro">你好, i&apos;m ivan!</p>
          <h1 className="prose-width max-w-5xl text-[length:var(--text-display)] font-semibold tracking-[-0.02em]">
            I design AI products where speed and judgment both matter.
          </h1>
          <p className="text-secondary prose-width text-[length:var(--text-hero-lead)] leading-8 md:leading-9">
            Ten years in human-centered design, now focused on AI-native workflows, structured
            outputs, and systems people can trust in production, not just in demos.
          </p>
        </section>
      </HomeHero>

      <main className="pb-36 md:pb-44">
        <RevealOnScroll>
          <HomeSection
            id="work"
            variant="featured"
            atmosphere="structural"
            labelledBy="selected-work-heading"
          >
            <div className="space-y-12 md:space-y-14">
              <SectionHeading
                id="selected-work-heading"
                title="Selected Work"
                description="Four projects across enterprise AI platforms and a personal product I shipped end to end."
              />

              <div className="grid gap-5 md:grid-cols-2 md:gap-6">
                {cards.map((caseStudy) => (
                  <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
                ))}
              </div>
            </div>
          </HomeSection>
        </RevealOnScroll>

        <RevealOnScroll className="mt-12 md:mt-16">
          <HomeSection
            id="how-i-think"
            variant="panel"
            atmosphere="organic"
            labelledBy="how-i-think-heading"
          >
            <div className="space-y-10 md:space-y-12">
              <SectionHeading id="how-i-think-heading" title="How I Think" />
              <p className="home-section-lead">
                AI makes iteration cheap. The hard calls are still human: what to build, what good
                looks like, when to stop.
              </p>
              <p className="home-section-body">
                I use AI-native tools to move faster and human-centered design to decide what
                deserves that speed.
              </p>
              <HomePrinciples />
            </div>
          </HomeSection>
        </RevealOnScroll>

        <RevealOnScroll className="mt-10 md:mt-12">
          <HomeSection
            id="background"
            variant="panel"
            atmosphere="blend"
            labelledBy="background-heading"
          >
            <div className="space-y-8 md:space-y-9">
              <SectionHeading id="background-heading" title="Background" />
              <p className="home-section-lead">
                Ten-plus years designing across enterprise, federal, and emerging technology:
                research, facilitation, interaction design, and systems thinking, with a growing
                focus on AI-native products and design infrastructure.
              </p>
              <ul className="home-credential-list" aria-label="Selected experience">
                <li>LIGER AI platform</li>
                <li>VA and USPS federal systems</li>
                <li>KPMG and Booz Allen consulting</li>
              </ul>
            </div>
          </HomeSection>
        </RevealOnScroll>

        <RevealOnScroll className="mt-16 px-6 md:mt-20">
          <div className="layout-width mx-auto border-t border-border-subtle/35 pt-12 md:pt-14">
            <SiteFooter />
          </div>
        </RevealOnScroll>
      </main>
    </div>
  );
}
