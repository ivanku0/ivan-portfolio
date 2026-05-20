"use client";

import type { ReactNode } from "react";
import { HeroTileField } from "@/components/home/HeroTileField";

type HomeHeroProps = {
  children: ReactNode;
};

export function HomeHero({ children }: HomeHeroProps) {
  return (
    <section className="home-hero-well" aria-label="Introduction">
      <div className="home-hero-well__stage">
        <HeroTileField />
        <div aria-hidden="true" className="hero-readability-overlay" />
        <div className="layout-width home-hero__content mx-auto px-6 pb-14 pt-10 md:pb-16 md:pt-14">
          {children}
        </div>
      </div>
    </section>
  );
}
