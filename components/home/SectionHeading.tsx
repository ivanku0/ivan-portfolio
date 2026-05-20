type SectionHeadingProps = {
  id: string;
  title: string;
  description?: string;
};

export function SectionHeading({ id, title, description }: SectionHeadingProps) {
  return (
    <header className="home-section-header">
      <h2 id={id} className="home-section-title">
        {title}
      </h2>
      {description ? <p className="home-section-desc">{description}</p> : null}
    </header>
  );
}
