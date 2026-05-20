import type { ReactNode } from "react";

/** Shared class strings for in-product mock UIs */
export const mockLabelClass =
  "text-[length:var(--text-ui-label)] uppercase tracking-[0.14em] text-muted";

export const mockLayerTitleClass =
  "text-[0.73rem] font-semibold uppercase tracking-[0.16em] text-foreground/92";

export const mockPanelClass =
  "rounded-xl border border-border-subtle/30 bg-surface-raised/40";

export const mockActiveShellClass =
  "border border-accent-secondary/38 bg-surface-alt/62";

type MockPanelProps = {
  children: ReactNode;
  className?: string;
};

export function MockPanel({ children, className = "" }: MockPanelProps) {
  return <div className={`${mockPanelClass} ${className}`.trim()}>{children}</div>;
}

type MockEyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function MockEyebrow({ children, className = "" }: MockEyebrowProps) {
  return <p className={`${mockLabelClass} ${className}`.trim()}>{children}</p>;
}

type MockCaptionProps = {
  children: ReactNode;
  className?: string;
};

export function MockCaption({ children, className = "" }: MockCaptionProps) {
  return (
    <p className={`text-[length:var(--text-ui-caption)] text-muted ${className}`.trim()}>
      {children}
    </p>
  );
}
