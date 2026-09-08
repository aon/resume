# resume

Astro + TypeScript + Tailwind CSS v4 resume that renders as an A4 page and exports to PDF.

```bash
mise install
pnpm install
pnpm dev    # edit in the browser (/dev, /education)
pnpm build  # export PDFs to output/
```

Content lives in `src/data/` as typed TS objects — one file per variant.

`mise.toml` pins Node.js and pnpm (matching `package.json`). If mise is not activated in your shell, use `mise exec -- pnpm install`, `mise exec -- pnpm dev`, or `mise exec -- pnpm build`.
