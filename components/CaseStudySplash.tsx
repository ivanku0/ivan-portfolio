type CaseStudySplashProps = {
  href: string;
};

export function CaseStudySplash({ href }: CaseStudySplashProps) {
  const variant =
    href === "/work/workflows"
      ? "workflows"
      : href === "/work/outputs"
        ? "outputs"
        : "reconstruction";

  return (
    <div className="relative overflow-hidden rounded-xl border border-[var(--color-border-subtle)]/28 bg-[var(--color-page-bg)]/26 p-3">
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes splashSoftPulse {
  0%,100% { opacity: 0.34; }
  50% { opacity: 0.62; }
}
@keyframes splashSoftSettle {
  0%,100% { opacity: 0.78; }
  50% { opacity: 1; }
}
@keyframes splashSoftJitter {
  0%,100% { transform: translate3d(0,0,0); }
  50% { transform: translate3d(0.8px,-0.6px,0); }
}
@media (prefers-reduced-motion: reduce) {
  .splash-soft-pulse, .splash-soft-settle, .splash-soft-jitter { animation: none !important; }
}
`,
        }}
      />
      {variant === "workflows" ? (
        <div className="grid h-24 grid-cols-[0.95fr_1.25fr_0.85fr] gap-2 rounded-lg bg-[var(--color-page-bg)]/8 p-1.5">
          <div className="relative h-full">
              <div className="splash-soft-jitter absolute left-[6%] top-[10%] h-4 w-[64%] rounded border border-dashed border-[var(--color-border-subtle)]/26 bg-[var(--color-surface-raised)]/24" style={{ animation: "splashSoftJitter 7.6s ease-in-out infinite" }} />
              <div className="splash-soft-jitter absolute left-[24%] top-[26%] h-4 w-[58%] rounded border border-[var(--color-border-subtle)]/20 bg-[var(--color-surface-raised)]/20" style={{ animation: "splashSoftJitter 8.8s ease-in-out infinite" }} />
              <div className="splash-soft-jitter absolute left-[12%] top-[42%] h-4 w-[70%] rounded border border-dashed border-[var(--color-border-subtle)]/24 bg-[var(--color-surface-raised)]/18" style={{ animation: "splashSoftJitter 9.4s ease-in-out infinite" }} />
              <div className="splash-soft-jitter absolute left-[18%] top-[58%] h-4 w-[60%] rounded border border-[var(--color-border-subtle)]/22 bg-[var(--color-surface-raised)]/18" style={{ animation: "splashSoftJitter 8.2s ease-in-out infinite" }} />
          </div>

          <div className="h-full rounded-md border border-[var(--color-border-subtle)]/24 bg-[var(--color-surface-alt)]/34 p-1.5">
            <div className="space-y-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-4 rounded border border-[var(--color-border-subtle)]/20 bg-[var(--color-page-bg)]/22 ${
                    i === 1 ? "ml-1 w-[88%]" : i === 3 ? "ml-2 w-[83%]" : "w-[95%]"
                  } ${i === 2 ? "splash-soft-settle" : ""}`}
                  style={i === 2 ? { animation: "splashSoftSettle 7.8s ease-in-out infinite" } : undefined}
                />
              ))}
            </div>
          </div>

          <div className="h-full rounded border border-dashed border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/14 p-2">
            <div className="space-y-1">
              <div className="h-2 rounded bg-[var(--color-border-subtle)]/28" />
              <div className="h-2 w-[80%] rounded bg-[var(--color-border-subtle)]/24" />
              <div className="h-2 w-[70%] rounded bg-[var(--color-border-subtle)]/20" />
            </div>
          </div>
        </div>
      ) : variant === "outputs" ? (
        <div className="h-24 rounded-lg bg-[var(--color-surface-alt)]/20 p-2">
          <div className="h-full rounded-md border border-[var(--color-border-subtle)]/20 bg-[var(--color-page-bg)]/16 px-2.5 py-2">
            <div
              className="splash-soft-pulse text-[15px] font-semibold leading-none tracking-tight text-[var(--color-accent-secondary)]/84"
              style={{ animation: "splashSoftPulse 7.2s ease-in-out infinite" }}
            >
              Aa
            </div>
            <p className="mt-1.5 truncate text-[9px] tracking-[0.02em] text-foreground/58">
              The quick brown fox jumps over the lazy dog...
            </p>
            <div className="mt-2.5 space-y-1">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-[28%] rounded bg-[var(--color-border-subtle)]/30" />
                <span className="h-1.5 w-[14%] rounded bg-[var(--color-border-subtle)]/24" />
                <span className="h-1.5 w-[22%] rounded bg-[var(--color-border-subtle)]/30" />
                <span className="h-1.5 w-[18%] rounded bg-[var(--color-border-subtle)]/24" />
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-[20%] rounded bg-[var(--color-border-subtle)]/24" />
                <span className="h-1.5 w-[32%] rounded bg-[var(--color-border-subtle)]/30" />
                <span className="h-1.5 w-[16%] rounded bg-[var(--color-border-subtle)]/24" />
                <span className="h-1.5 w-[12%] rounded bg-[var(--color-border-subtle)]/20" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid h-24 grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded border border-[var(--color-border-subtle)]/22 bg-[var(--color-page-bg)]/16 p-2">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 rounded-[2px] ${i % 3 === 0 ? "bg-[var(--color-border-subtle)]/38" : "bg-[var(--color-border-subtle)]/22"}`}
                />
              ))}
            </div>
          </div>
          <span className="text-[10px] text-foreground/60">→</span>
          <div className="rounded border border-[var(--color-border-subtle)]/22 bg-[var(--color-surface-alt)]/30 p-2">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 rounded-[2px] ${
                    i % 4 === 0
                      ? "bg-[var(--color-accent-secondary)]/42"
                      : i % 2 === 0
                        ? "bg-[var(--color-border-subtle)]/34"
                        : "bg-[var(--color-border-subtle)]/24"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
