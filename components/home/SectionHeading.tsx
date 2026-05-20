type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
  size?: "lg" | "md";
};

export function SectionHeading({
  id,
  title,
  description,
  size = "lg",
}: SectionHeadingProps) {
  const titleClass =
    size === "lg"
      ? "text-[length:var(--text-section)] font-semibold tracking-tight"
      : "text-[length:var(--text-section-sm)] font-medium tracking-tight";

  return (
    <div className="space-y-4">
      <h2 id={id} className={titleClass}>
        {title}
      </h2>
      {description ? (
        <p className="text-secondary prose-width text-base leading-8">{description}</p>
      ) : null}
    </div>
  );
}
