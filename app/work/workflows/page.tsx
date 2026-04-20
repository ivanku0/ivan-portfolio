import Link from "next/link";

export default function WorkflowsPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <header className="space-y-6">
          <p className="text-muted text-xs uppercase tracking-[0.16em]">Work</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            AI Workflows
          </h1>
          <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg">
            A case study on designing AI-supported workflows that help teams move
            faster while preserving quality, accountability, and human judgment
            in production environments.
          </p>
        </header>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Overview</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for the high-level context, project scope, key
            collaborators, and timeline.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Challenge</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for constraints, friction points, and the core
            problem this engagement set out to solve.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Approach</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for research, decision-making process, design
            iterations, and system architecture choices.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Outcome</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for launch impact, measurable outcomes, and what
            changed for users and teams after implementation.
          </p>
        </section>
      </div>
    </main>
  );
}
