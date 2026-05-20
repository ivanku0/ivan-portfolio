import type { CaseStudySplashVariant } from "@/content/types";

type CaseStudySplashProps = {
  variant: CaseStudySplashVariant;
};

export function CaseStudySplash({ variant }: CaseStudySplashProps) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-border-subtle/28 bg-background/26 p-3">
      {variant === "workflows" ? (
        <div className="grid h-24 grid-cols-[0.95fr_1.25fr_0.85fr] gap-2 rounded-lg bg-background/8 p-1.5">
          <div className="relative h-full">
            <div className="splash-soft-jitter absolute left-[6%] top-[10%] h-4 w-[64%] rounded border border-dashed border-border-subtle/26 bg-surface-raised/24" />
            <div className="splash-soft-jitter absolute left-[24%] top-[26%] h-4 w-[58%] rounded border border-border-subtle/20 bg-surface-raised/20" />
            <div className="splash-soft-jitter absolute left-[12%] top-[42%] h-4 w-[70%] rounded border border-dashed border-border-subtle/24 bg-surface-raised/18" />
            <div className="splash-soft-jitter absolute left-[18%] top-[58%] h-4 w-[60%] rounded border border-border-subtle/22 bg-surface-raised/18" />
          </div>

          <div className="h-full rounded-md border border-border-subtle/24 bg-surface-alt/34 p-1.5">
            <div className="space-y-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className={`h-4 rounded border border-border-subtle/20 bg-background/22 ${
                    i === 1 ? "ml-1 w-[88%]" : i === 3 ? "ml-2 w-[83%]" : "w-[95%]"
                  } ${i === 2 ? "splash-soft-settle" : ""}`}
                />
              ))}
            </div>
          </div>

          <div className="h-full rounded border border-dashed border-border-subtle/22 bg-background/14 p-2">
            <div className="space-y-1">
              <div className="h-2 rounded bg-border-subtle/28" />
              <div className="h-2 w-[80%] rounded bg-border-subtle/24" />
              <div className="h-2 w-[70%] rounded bg-border-subtle/20" />
            </div>
          </div>
        </div>
      ) : variant === "outputs" ? (
        <div className="h-24 rounded-lg bg-surface-alt/20 p-2">
          <div className="h-full rounded-md border border-border-subtle/20 bg-background/16 px-2.5 py-2">
            <div className="splash-soft-pulse text-[15px] font-semibold leading-none tracking-tight text-accent-secondary/84">
              Aa
            </div>
            <p className="mt-1.5 truncate text-[9px] tracking-[0.02em] text-foreground/58">
              The quick brown fox jumps over the lazy dog...
            </p>
            <div className="mt-2.5 space-y-1">
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-[28%] rounded bg-border-subtle/30" />
                <span className="h-1.5 w-[14%] rounded bg-border-subtle/24" />
                <span className="h-1.5 w-[22%] rounded bg-border-subtle/30" />
                <span className="h-1.5 w-[18%] rounded bg-border-subtle/24" />
              </div>
              <div className="flex items-center gap-1">
                <span className="h-1.5 w-[20%] rounded bg-border-subtle/24" />
                <span className="h-1.5 w-[32%] rounded bg-border-subtle/30" />
                <span className="h-1.5 w-[16%] rounded bg-border-subtle/24" />
                <span className="h-1.5 w-[12%] rounded bg-border-subtle/20" />
              </div>
            </div>
          </div>
        </div>
      ) : variant === "reconstruction" ? (
        <div className="grid h-24 grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded border border-border-subtle/22 bg-background/16 p-2">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 rounded-[2px] ${i % 3 === 0 ? "bg-border-subtle/38" : "bg-border-subtle/22"}`}
                />
              ))}
            </div>
          </div>
          <span className="text-[10px] text-foreground/60">→</span>
          <div className="rounded border border-border-subtle/22 bg-surface-alt/30 p-2">
            <div className="grid grid-cols-4 gap-1">
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 rounded-[2px] ${
                    i % 4 === 0
                      ? "bg-accent-secondary/42"
                      : i % 2 === 0
                        ? "bg-border-subtle/34"
                        : "bg-border-subtle/24"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="relative h-24 overflow-hidden rounded-lg bg-background/12 p-3">
          <p className="text-[9px] font-medium uppercase tracking-[0.18em] text-muted">desk swarm</p>
          <p className="mt-1 text-lg font-semibold tabular-nums text-accent-secondary/88">64</p>
          <div className="absolute bottom-2 left-2 right-2 grid grid-cols-10 gap-0.5 opacity-90">
            {Array.from({ length: 30 }).map((_, i) => (
              <span
                key={i}
                className={`aspect-square rounded-[1px] ${
                  i % 6 === 0 ? "bg-accent-secondary/55" : "bg-border-subtle/30"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
