import Link from "next/link";

export default function CaseStudyNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Case study not found</h1>
      <p className="text-secondary max-w-md text-sm leading-7">
        That project may have moved. Head back to the home page to browse selected work.
      </p>
      <Link href="/" className="text-sm">
        {"<- Back to home"}
      </Link>
    </main>
  );
}
