import Link from "next/link";

export default function ReconstructionPage() {
  return (
    <main className="min-h-screen bg-background px-6 pb-32 pt-20 text-foreground md:pb-40 md:pt-28">
      <div className="mx-auto max-w-4xl space-y-16 md:space-y-20">
        <Link href="/" className="inline-block text-sm">
          {"<- Back to home"}
        </Link>

        <header className="space-y-6">
          <p className="text-muted text-xs uppercase tracking-[0.16em]">Work</p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            From Screenshots to System
          </h1>
          <p className="text-secondary max-w-3xl text-base leading-8 md:text-lg">
            Using AI to reconstruct production interfaces into reusable design
            systems for rapid exploration, prototyping, and scalable decision
            making across product teams.
          </p>
        </header>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Overview</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for project framing, source materials, and the
            intended role of reconstruction in the broader product process.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Challenge</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for inconsistencies in production UI, component
            drift, and the cost of reverse engineering existing screens.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Approach</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for the AI reconstruction pipeline, systematized
            patterns, and validation process with design and engineering.
          </p>
        </section>

        <section className="section-divider space-y-5 border-t pt-10 md:pt-12">
          <h2 className="text-2xl font-medium tracking-tight">Outcome</h2>
          <p className="text-secondary max-w-3xl leading-8">
            Placeholder content for speed improvements, system consistency gains,
            and how the work enabled faster exploration in future projects.
          </p>
        </section>
      </div>
    </main>
  );
}
