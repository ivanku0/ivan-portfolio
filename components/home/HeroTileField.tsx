"use client";

import { useEffect, useRef } from "react";

const TILE = 14;
const GAP = 3;
const STAGGER_MS = 58;
const LIT_HOLD_MS = 520;
const INFLUENCE_RADIUS = 3;
const MAX_WAVE = 28;

type GridTile = {
  shade: number;
  litUntil: number;
};

function gridForSize(width: number, height: number) {
  const cols = Math.max(8, Math.floor((width + GAP) / (TILE + GAP)));
  const rows = Math.max(6, Math.floor((height + GAP) / (TILE + GAP)));
  return { cols, rows };
}

function buildTiles(cols: number, rows: number): GridTile[] {
  return Array.from({ length: cols * rows }, () => ({
    shade: 0.38 + Math.random() * 0.34,
    litUntil: 0,
  }));
}

export function HeroTileField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({
    cols: 18,
    rows: 10,
    tiles: buildTiles(18, 10),
    pointer: { x: -1, y: -1 },
    colors: {
      base: "42, 24, 51",
      lit: "183, 163, 255",
      deep: "18, 8, 24",
    },
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const host = canvas.parentElement;
    if (!host) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarse = window.matchMedia("(pointer: coarse)");
    const interactive = () => !reducedMotion.matches && !coarse.matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let lastCell = "";

    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      stateRef.current.colors = {
        base: style.getPropertyValue("--color-surface-raised-rgb").trim() || "42, 24, 51",
        lit: style.getPropertyValue("--color-accent-secondary-rgb").trim() || "183, 163, 255",
        deep: style.getPropertyValue("--color-hero-well-rgb").trim() || "18, 8, 24",
      };
    };

    const resize = () => {
      const rect = host.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const { cols, rows } = gridForSize(width, height);
      stateRef.current.cols = cols;
      stateRef.current.rows = rows;
      stateRef.current.tiles = buildTiles(cols, rows);
      lastCell = "";
    };

    const pulseAt = (col: number, row: number, now: number) => {
      if (!interactive()) return;
      const { cols, rows, tiles } = stateRef.current;
      const wave: { index: number; dist: number }[] = [];

      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          const dist = Math.abs(c - col) + Math.abs(r - row);
          if (dist > INFLUENCE_RADIUS) continue;
          wave.push({ index: r * cols + c, dist });
        }
      }

      wave.sort((a, b) => a.dist - b.dist);
      wave.slice(0, MAX_WAVE).forEach(({ index, dist }) => {
        tiles[index].litUntil = now + dist * STAGGER_MS + LIT_HOLD_MS;
      });
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!interactive()) return;
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;

      const { cols, rows } = stateRef.current;
      const col = Math.min(cols - 1, Math.floor((x / width) * cols));
      const row = Math.min(rows - 1, Math.floor((y / height) * rows));
      const key = `${col},${row}`;
      if (key === lastCell) return;
      lastCell = key;
      pulseAt(col, row, performance.now());
    };

    const draw = (time: number) => {
      const { cols, rows, tiles, colors } = stateRef.current;
      ctx.fillStyle = `rgb(${colors.deep})`;
      ctx.fillRect(0, 0, width, height);

      const gridW = cols * TILE + (cols - 1) * GAP;
      const gridH = rows * TILE + (rows - 1) * GAP;
      const padX = Math.max(12, width - gridW - 24);
      const padY = Math.max(8, (height - gridH) / 2);

      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const index = row * cols + col;
          const tile = tiles[index];
          const x = padX + col * (TILE + GAP);
          const y = padY + row * (TILE + GAP);

          const lit =
            tile.litUntil > time
              ? Math.min(1, (tile.litUntil - time) / LIT_HOLD_MS)
              : 0;
          const baseAlpha = tile.shade;
          ctx.fillStyle = `rgba(${colors.base}, ${Math.min(0.92, baseAlpha * (1 - lit * 0.4))})`;
          ctx.fillRect(x, y, TILE, TILE);

          if (lit > 0.04) {
            ctx.fillStyle = `rgba(${colors.lit}, ${lit * 0.55})`;
            ctx.fillRect(x, y, TILE, TILE);
            ctx.strokeStyle = `rgba(${colors.lit}, ${lit * 0.35})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
          } else {
            ctx.strokeStyle = `rgba(${colors.base}, ${0.12 + baseAlpha * 0.2})`;
            ctx.lineWidth = 1;
            ctx.strokeRect(x + 0.5, y + 0.5, TILE - 1, TILE - 1);
          }
        }
      }

      if (!reducedMotion.matches) {
        frame = requestAnimationFrame(draw);
      }
    };

    readColors();
    resize();

    const observer = new ResizeObserver(resize);
    observer.observe(host);

    canvas.addEventListener("pointermove", onPointerMove);

    if (reducedMotion.matches) {
      draw(0);
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="hero-tile-canvas"
    />
  );
}
