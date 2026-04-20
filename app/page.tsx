export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-5xl">
          <section aria-label="Intro" className="space-y-6">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Ivan Kuo
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight md:text-6xl">
              Designing AI systems grounded in human judgment, taste, and
              real-world use.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              Combining 10+ years of human-centered design with AI-native tools
              to build workflows, outputs, and systems that are fast, usable,
              and actually work.
            </p>
          </section>
        </div>
      </header>

      <main className="px-6 pb-32">
        <div className="mx-auto max-w-5xl space-y-28 md:space-y-36">
          <section
            id="selected-work"
            aria-labelledby="selected-work-heading"
            className="space-y-6 border-t border-zinc-800 pt-12 md:pt-16"
          >
            <h2
              id="selected-work-heading"
              className="text-2xl font-medium tracking-tight md:text-3xl"
            >
              Selected Work
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400">
              Placeholder for case studies and outcomes. This section will
              highlight a few projects with context, process, and impact.
            </p>
          </section>

          <section
            id="how-i-think"
            aria-labelledby="how-i-think-heading"
            className="space-y-6 border-t border-zinc-800 pt-12 md:pt-16"
          >
            <h2
              id="how-i-think-heading"
              className="text-2xl font-medium tracking-tight md:text-3xl"
            >
              How I Think
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400">
              Placeholder for principles, decision-making framework, and
              philosophy behind product, design, and AI systems work.
            </p>
          </section>

          <section
            id="background"
            aria-labelledby="background-heading"
            className="space-y-6 border-t border-zinc-800 pt-12 md:pt-16"
          >
            <h2
              id="background-heading"
              className="text-2xl font-medium tracking-tight md:text-3xl"
            >
              Background
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400">
              Placeholder for experience, timeline, and selected roles across
              design, strategy, and AI-enabled product development.
            </p>
          </section>

          <section
            id="contact"
            aria-labelledby="contact-heading"
            className="space-y-6 border-t border-zinc-800 pt-12 md:pt-16"
          >
            <h2
              id="contact-heading"
              className="text-2xl font-medium tracking-tight md:text-3xl"
            >
              Contact
            </h2>
            <p className="max-w-3xl text-base leading-8 text-zinc-400">
              Placeholder for email, social links, and collaboration inquiries.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}