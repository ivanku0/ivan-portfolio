import Link from "next/link";

export default function OutputsPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <header className="space-y-6">
          <p className="text-muted text-xs uppercase tracking-[0.16em]">Work</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            AI Outputs
          </h1>
          <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg">
            A case study on shaping AI-generated outputs into high-quality
            deliverables that are consistent, usable, and aligned with product
            goals across real project constraints.
          </p>
        </header>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Overview</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for project brief, stakeholder context, and the
            output formats this work needed to support.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Challenge</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for quality gaps, trust issues, and operational
            constraints that blocked reliable output performance.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Approach</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for prompt strategy, evaluation criteria,
            iteration loops, and workflow integration details.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Outcome</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for adoption impact, speed and quality gains, and
            lessons carried into subsequent delivery cycles.
          </p>
        </section>
      </div>
    </main>
  );
}
