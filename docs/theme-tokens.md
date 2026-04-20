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

These power most UI styles via semantic classes and utility mappings.

## RGB companion tokens (alpha composition)

Also defined in `:root` for gradients/canvas effects:

- `--color-page-bg-rgb`
- `--color-muted-rgb`
- `--color-accent-secondary-rgb`
- `--color-border-subtle-rgb`

Use these whenever you need transparency control in gradients or canvas drawing.

## Where tokens are used

- `app/globals.css`
  - body colors
  - links
  - card surfaces
  - section dividers
  - hero readability overlay (`.hero-readability-overlay`)
- `components/HeroAtmosphere.tsx`
  - reads RGB tokens from `:root` via `getComputedStyle`
  - uses tokenized colors for glyph field, ambient glow, and cursor blinks

## Updating color schemes

To try a new palette:

1. Update token values in `:root` (`app/globals.css`)
2. Keep semantic names the same
3. Adjust only alpha/intensity values if needed for readability/motion balance

No component-level color rewrites should be required when tokens are kept consistent.
