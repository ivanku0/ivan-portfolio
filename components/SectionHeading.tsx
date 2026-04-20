type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      <h2 id={id} className="text-xl font-medium tracking-tight md:text-2xl">
        {title}
      </h2>
      {description ? (
        <p className="text-secondary max-w-3xl text-base leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
