import type { ReactNode } from "react";
import { SectionAtmosphere, type SectionAtmosphereTone } from "@/components/home/SectionAtmosphere";

type HomeSectionVariant = "featured" | "panel" | "plain";

type HomeSectionProps = {
  id: string;
  variant?: HomeSectionVariant;
  atmosphere?: SectionAtmosphereTone;
  children: ReactNode;
  className?: string;
  labelledBy?: string;
};

export function HomeSection({
  id,
  variant = "plain",
  atmosphere,
  children,
  className = "",
  labelledBy,
}: HomeSectionProps) {
  if (variant === "featured") {
    return (
      <section
        id={id}
        aria-labelledby={labelledBy}
        className={`section-band section-band--featured scroll-mt-28 ${className}`}
      >
        <div className="section-band__inner layout-width relative mx-auto px-6 py-14 md:py-20">
          {atmosphere ? <SectionAtmosphere tone={atmosphere} /> : null}
          <div className="section-band__content">{children}</div>
        </div>
      </section>
    );
  }

  if (variant === "panel") {
    return (
      <section
        id={id}
        aria-labelledby={labelledBy}
        className={`scroll-mt-28 px-6 ${className}`}
      >
        <div className="layout-width mx-auto">
          <div className="section-panel">
            {atmosphere ? <SectionAtmosphere tone={atmosphere} /> : null}
            <div className="section-panel__content">{children}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} aria-labelledby={labelledBy} className={`scroll-mt-28 px-6 ${className}`}>
      <div className="layout-width mx-auto">{children}</div>
    </section>
  );
}
