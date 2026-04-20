"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  phase: number;
  pulse: number;
  glyph: string;
  color: string;
  depth: 0 | 1 | 2;
  isAnomaly: boolean;
};

type CursorBlink = {
  x: number;
  y: number;
  size: number;
  phase: number;
  speed: number;
};

const SYMBOLS = [".", ":", "|", "/", "\\", "_", "+", "*", "[", "]", "{", "}", "<", ">"];
const FRAGMENTS = ["::", "...", "[]>", "_|_", "//", "++", "<>"];
const ANOMALY_GLYPHS = ["o_O", ">_<", "|_|", ":|:", "<_>", ".-.", "<:>", "[::]", "<||>"];
const COLORS = ["168, 156, 172", "183, 163, 255", "101, 88, 104"];

export function HeroAtmosphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mediaQuery = window.matchMedia("(max-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let animationFrame = 0;
    let particles: Particle[] = [];
    let cursors: CursorBlink[] = [];

    const randomGlyph = () =>
      Math.random() < 0.8
        ? SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)]
        : FRAGMENTS[Math.floor(Math.random() * FRAGMENTS.length)];

    const randomAnomalyGlyph = (exclude?: string) => {
      const filtered = exclude
        ? ANOMALY_GLYPHS.filter((glyph) => glyph !== exclude)
        : ANOMALY_GLYPHS;
      return filtered[Math.floor(Math.random() * filtered.length)];
    };

    const canPlaceAnomaly = (index: number, list: Particle[]) => {
      const candidate = list[index];
      if (!candidate) return false;

      // Keep anomaly glyphs sparse; avoid nearby anomaly neighbors.
      for (let i = 0; i < list.length; i += 1) {
        if (i === index || !list[i].isAnomaly) continue;
        const dx = list[i].x - candidate.x;
        const dy = list[i].y - candidate.y;
        const distSq = dx * dx + dy * dy;
        if (distSq < 48 * 48) return false;
      }

      return true;
    };

    const buildField = () => {
      const isMobile = mediaQuery.matches;
      const density = isMobile ? 130 : 270;
      const cursorCount = isMobile ? 6 : 14;

      const baseParticles = Array.from({ length: density }, () => ({
        depth: (Math.random() < 0.34 ? 0 : Math.random() < 0.72 ? 1 : 2) as 0 | 1 | 2,
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (isMobile ? 0.12 : 0.18),
        vy: (Math.random() - 0.5) * (isMobile ? 0.08 : 0.14),
        size: isMobile ? 0 : 0, // assigned below
        alpha: isMobile ? 0.12 + Math.random() * 0.12 : 0.14 + Math.random() * 0.18,
        phase: Math.random() * Math.PI * 2,
        pulse: 0.001 + Math.random() * 0.0018,
        glyph: randomGlyph(),
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        isAnomaly: false,
      }));

      // Seed sparse anomaly glyphs (~5-10%) with distance checks.
      const anomalyTarget = Math.floor(density * (isMobile ? 0.05 : 0.07));
      let anomalyCount = 0;
      let attempts = 0;
      while (anomalyCount < anomalyTarget && attempts < density * 6) {
        attempts += 1;
        const idx = Math.floor(Math.random() * baseParticles.length);
        if (baseParticles[idx].isAnomaly) continue;
        if (!canPlaceAnomaly(idx, baseParticles)) continue;
        baseParticles[idx].isAnomaly = true;
        baseParticles[idx].glyph = randomAnomalyGlyph();
        anomalyCount += 1;
      }

      particles = baseParticles.map((particle) => {
        if (isMobile) {
          const sizeByDepth = [11 + Math.random() * 3, 15 + Math.random() * 4, 19 + Math.random() * 5];
          const alphaByDepth = [0.09 + Math.random() * 0.05, 0.14 + Math.random() * 0.08, 0.2 + Math.random() * 0.1];
          return {
            ...particle,
            size: sizeByDepth[particle.depth],
            alpha: alphaByDepth[particle.depth] * (particle.isAnomaly ? 0.8 : 1),
          };
        }

        const sizeByDepth = [13 + Math.random() * 4, 18 + Math.random() * 6, 26 + Math.random() * 8];
        const alphaByDepth = [0.1 + Math.random() * 0.06, 0.16 + Math.random() * 0.09, 0.24 + Math.random() * 0.12];
        return {
          ...particle,
          size: sizeByDepth[particle.depth],
          alpha: alphaByDepth[particle.depth] * (particle.isAnomaly ? 0.8 : 1),
        };
      });

      cursors = Array.from({ length: cursorCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: isMobile ? 6 : 8,
        phase: Math.random() * Math.PI * 2,
        speed: 0.0018 + Math.random() * 0.0022,
      }));
    };

    const resize = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      buildField();
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Base low-contrast field so the effect is always perceptible.
      const bg = ctx.createRadialGradient(
        width * 0.52,
        height * 0.42,
        0,
        width * 0.52,
        height * 0.42,
        Math.max(width, height) * 0.7,
      );
      bg.addColorStop(0, "rgba(183, 163, 255, 0.11)");
      bg.addColorStop(0.42, "rgba(168, 156, 172, 0.065)");
      bg.addColorStop(1, "rgba(28, 13, 38, 0)");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Draw far -> near to mimic subtle depth layering.
      particles.sort((a, b) => a.depth - b.depth);

      particles.forEach((particle) => {
        const fieldX = Math.sin((particle.y + time * 0.03) * 0.004) * 0.08;
        const fieldY = Math.cos((particle.x - time * 0.024) * 0.003) * 0.06;
        particle.x += particle.vx + fieldX;
        particle.y += particle.vy + fieldY;

        if (particle.x < -24) particle.x = width + 24;
        if (particle.x > width + 24) particle.x = -24;
        if (particle.y < -24) particle.y = height + 24;
        if (particle.y > height + 24) particle.y = -24;

        const flicker = 0.72 + 0.28 * Math.sin(time * particle.pulse + particle.phase);
        const depthBoost = particle.depth === 2 ? 1.12 : particle.depth === 1 ? 1 : 0.86;
        ctx.fillStyle = `rgba(${particle.color}, ${particle.alpha * flicker * depthBoost})`;
        ctx.font = `${particle.size}px var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, monospace`;
        ctx.fillText(particle.glyph, particle.x, particle.y);

        // Low-frequency glyph mutation keeps the field feeling alive.
        if ((time + particle.phase * 1000) % 5200 < 16) {
          if (particle.isAnomaly) {
            // Anomalies occasionally transition toward simpler artifacts.
            if (Math.random() < 0.58) {
              particle.glyph = Math.random() < 0.6 ? ":|:" : "...";
              particle.isAnomaly = false;
              particle.alpha *= 0.95;
            } else {
              particle.glyph = randomAnomalyGlyph(particle.glyph);
            }
          } else {
            particle.glyph = randomGlyph();
            // Rarely promote to anomaly if local neighborhood is quiet.
            if (Math.random() < 0.008) {
              const idx = particles.indexOf(particle);
              if (idx >= 0 && canPlaceAnomaly(idx, particles)) {
                particle.glyph = randomAnomalyGlyph();
                particle.isAnomaly = true;
                particle.alpha *= 0.84;
              }
            }
          }
        }
      });

      cursors.forEach((cursor) => {
        const blink = Math.sin(time * cursor.speed + cursor.phase);
        if (blink > 0.22) {
          ctx.fillStyle = "rgba(183, 163, 255, 0.3)";
          ctx.fillRect(cursor.x, cursor.y, 2, cursor.size);
        }
      });

      if (!reducedMotion.matches) {
        animationFrame = requestAnimationFrame(render);
      }
    };

    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);

    if (!reducedMotion.matches) {
      animationFrame = requestAnimationFrame(render);
    } else {
      render(0);
    }

    window.addEventListener("resize", resize);
    mediaQuery.addEventListener("change", resize);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      mediaQuery.removeEventListener("change", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 block opacity-95 [mask-image:radial-gradient(130%_100%_at_50%_45%,black_64%,transparent_100%)]"
    />
  );
}
