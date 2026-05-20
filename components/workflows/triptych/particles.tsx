"use client";

import { useEffect, useMemo, type CSSProperties } from "react";

function startAmbientDotSpecs(seed: number): {
  key: number;
  left: number;
  top: number;
  delay: number;
  duration: number;
}[] {
  let s = (seed * 7919 + 104729) % 1000003 || 1;
  const next = () => {
    s = (s * 48271) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: 16 }, (_, i) => ({
    key: i,
    left: next() * 86 + 7,
    top: next() * 78 + 8,
    delay: Math.floor(next() * 3200),
    duration: 6 + next() * 5,
  }));
}

export function StartAmbientSideParticles({ seed }: { seed: number }) {
  const dots = useMemo(() => startAmbientDotSpecs(seed), [seed]);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden
    >
      {dots.map((d) => (
        <span
          key={d.key}
          className="triptych-start-ambient absolute h-1 w-1 rounded-[1px] bg-accent-secondary/50"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            animationDuration: `${d.duration}s`,
            animationDelay: `${d.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}

type CompletionParticleSpec = {
  leftPct: number;
  topPx: number;
  delayMs: number;
  durationSec: number;
  driftXPx: number;
  driftYPx: number;
  startOpacity: number;
  sizePx: number;
  tint: "accent" | "neutral";
};

function completionParticleSpecs(seed: number, count: number): CompletionParticleSpec[] {
  let s = (seed * 9301 + 49297) % 233280 || 1;
  const rnd = () => {
    s = (s * 1103515245 + 12345) % 2147483647;
    return s / 2147483647;
  };
  return Array.from({ length: count }, () => ({
    leftPct: rnd() * 82 + 9,
    topPx: Math.floor(rnd() * 10),
    delayMs: Math.floor(rnd() * 480),
    durationSec: 2.55 + rnd() * 1.15,
    driftXPx: (rnd() - 0.5) * 16,
    driftYPx: 160 + rnd() * 88,
    startOpacity: 0.55 + rnd() * 0.25,
    sizePx: 6 + Math.floor(rnd() * 5),
    tint: rnd() > 0.35 ? "accent" : "neutral",
  }));
}

function completionParticleKeyframeCss(burstId: number, specs: CompletionParticleSpec[]): string {
  return specs
    .map((p, i) => {
      const name = `triptychProductPc_${burstId}_${i}`;
      const midO = p.startOpacity * 0.48;
      const mx = p.driftXPx * 0.55;
      const my = p.driftYPx * 0.55;
      return `@keyframes ${name}{0%{opacity:${p.startOpacity};transform:translate3d(0,0,0)}72%{opacity:${midO};transform:translate3d(${mx}px,${my}px,0)}100%{opacity:0;transform:translate3d(${p.driftXPx}px,${p.driftYPx}px,0)}}`;
    })
    .join("");
}

export function CompletionParticleBurst({
  burstId,
  onSettled,
}: {
  burstId: number;
  onSettled: () => void;
}) {
  const specs = useMemo(() => completionParticleSpecs(burstId, 18), [burstId]);
  const keyframeBlock = useMemo(() => completionParticleKeyframeCss(burstId, specs), [burstId, specs]);

  useEffect(() => {
    const t = window.setTimeout(onSettled, 4500);
    return () => window.clearTimeout(t);
  }, [burstId, onSettled]);

  return (
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 top-0 z-[2] min-h-[12rem] overflow-hidden md:min-h-0"
      aria-hidden
    >
      <style dangerouslySetInnerHTML={{ __html: keyframeBlock }} />
      {specs.map((p, i) => (
        <span
          key={`${burstId}-${i}`}
          className={
            p.tint === "accent"
              ? "absolute rounded-[1px] bg-accent-secondary ring-1 ring-accent-secondary/20"
              : "absolute rounded-[1px] bg-muted"
          }
          style={
            {
              left: `${p.leftPct}%`,
              top: `${p.topPx}px`,
              width: p.sizePx,
              height: p.sizePx,
              animation: `triptychProductPc_${burstId}_${i} ${p.durationSec}s ease-out ${p.delayMs}ms forwards`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
