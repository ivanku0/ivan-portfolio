# Theme Tokens Reference

This project uses CSS custom properties in `app/globals.css` as the primary source of truth for visual theming.

## Core tokens

Defined under `:root`:

- `--color-page-bg`
- `--color-surface-raised`
- `--color-surface-alt`
- `--color-border-subtle`
- `--color-text-primary`
- `--color-text-secondary`
- `--color-text-muted`
- `--color-accent-primary`
- `--color-accent-secondary`
- `--color-accent-deep`

Tailwind v4 maps these via `@theme inline` as `background`, `foreground`, `surface-raised`, `surface-alt`, `border-subtle`, `accent`, etc.

## RGB companion tokens (alpha composition)

- `--color-page-bg-rgb`
- `--color-surface-raised-rgb`
- `--color-surface-alt-rgb`
- `--color-muted-rgb`
- `--color-accent-primary-rgb`
- `--color-accent-secondary-rgb`
- `--color-border-subtle-rgb`

Use `rgb(var(--color-*-rgb) / 0.28)` patterns instead of hardcoded rgba in components.

## Typography and spacing

- `--text-display`, `--text-hero-lead`, `--text-section`, `--text-section-sm`, `--text-body`, `--text-ui-label`, `--text-ui-caption`
- `--space-section-y`, `--space-section-y-md`, `--space-block-y`, `--space-block-y-md`
- Utility classes: `.prose-width` (~65ch), `.layout-width` (72rem max)

## Shadows

- `--shadow-card`, `--shadow-card-hover` — used by `.card-surface`

## Light mock chrome (`--color-mock-light-*`)

Mapped in `@theme inline` as `mock-light-bg`, `mock-light-surface`, `mock-light-border`, `mock-light-text`, `mock-light-muted`, `mock-light-accent`.

Used by `components/workflows/OriginalWorkflowModel.tsx` for intentional light “app screenshot” contrast against the dark marketing shell.

## Where tokens are used

- `app/globals.css` — body, links, cards, hero overlay, reveal animation, splash keyframes
- `components/home/HeroAtmosphere.tsx` — canvas reads RGB tokens via `getComputedStyle`
- `components/case-study/mock/MockPrimitives.tsx` — shared mock UI class strings
- `components/workflows/*` — triptych and workflow diagrams

## Updating color schemes

1. Update token values in `:root` (`app/globals.css`)
2. Keep semantic names the same
3. Adjust alpha/intensity only if needed for readability or motion balance

Marketing and mock UIs should stay on tokens; only `OriginalWorkflowModel` uses the documented light exception.
