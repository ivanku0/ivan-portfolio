const PRINCIPLES = [
  {
    label: "Cheap to try",
    body: "AI lowers the cost of iteration. Explore more, commit later.",
  },
  {
    label: "Costly to decide",
    body: "Judgment calls stay human: scope, quality bar, when to ship.",
  },
  {
    label: "Earned in production",
    body: "Trust comes from systems that hold up for real users, not demos.",
  },
] as const;

export function HomePrinciples() {
  return (
    <ul className="home-principles" aria-label="Design principles">
      {PRINCIPLES.map((item) => (
        <li key={item.label} className="home-principles__item">
          <span className="home-principles__label">{item.label}</span>
          <p className="home-principles__body">{item.body}</p>
        </li>
      ))}
    </ul>
  );
}
