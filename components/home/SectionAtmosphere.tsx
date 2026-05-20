export type SectionAtmosphereTone = "structural" | "organic" | "blend";

type SectionAtmosphereProps = {
  tone: SectionAtmosphereTone;
};

/** Decorative layers that sit behind section content — structural grids vs organic blobs. */
export function SectionAtmosphere({ tone }: SectionAtmosphereProps) {
  return (
    <div aria-hidden className={`section-atmosphere section-atmosphere--${tone}`}>
      <span className="section-atmosphere__blob section-atmosphere__blob--a" />
      <span className="section-atmosphere__blob section-atmosphere__blob--b" />
      <span className="section-atmosphere__structural" />
    </div>
  );
}
