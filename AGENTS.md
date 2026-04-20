<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Theming + Color Change Policy

- Use theme tokens from `app/globals.css` for all new or changed colors.
- Avoid introducing hardcoded color literals in components when a token can be used.
- For alpha/gradient/canvas color work, use the RGB companion tokens (for example `--color-*-rgb`) rather than raw color literals.
- Whenever color/theme behavior changes, update `docs/theme-tokens.md` in the same change so future palette updates remain centralized and reliable.
