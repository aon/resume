# CLAUDE.md

## Project Overview

This is an Astro + TypeScript resume repository for me, a Software Engineer. It renders resume variants as A4 web pages and exports them to PDF with headless Chromium. The resume is optimized for ATS (Applicant Tracking System) parsing and career fair/online applications.

This resume should be written in a concise yet professional style. It should have a few bullet points per job/education, and one sentence only per bullet point.

## Commands

- Tool setup: `mise install` (Node.js and pnpm versions are pinned in `mise.toml`)
- Dev server: `pnpm dev` (view variants at /dev and /education)
- Build PDFs: `pnpm build`

## Architecture and Structure

### Main Files

- `src/data/types.ts` - Typed content model (Resume, Section, Job, etc.)
- `src/data/common.ts` - Shared content (contact info, education entries)
- `src/data/dev.ts` - Full Stack Engineer variant (English)
- `src/data/education.ts` - Teaching assistant variant (Spanish)
- `src/components/` - Astro components that render a Resume object
- `src/layouts/ResumeLayout.astro` - Page shell, loads Geist font and styles
- `src/styles/tailwind.css` - Tailwind entry point and A4 page setup
- `@phosphor-icons/core` - Contact icons, using regular-weight SVGs imported as Astro components
- `scripts/export-pdf.ts` - Exports A4 PDFs via Puppeteer

Editing the resume = editing the TS objects in `src/data/`. Components only render.

Use Tailwind CSS v4 utilities in Astro templates for all styling, including print variants. Do not add custom CSS selectors or inline styles; the stylesheet only imports Tailwind and declares the print-only `@page` size and margins.

## Generated Files

- `dist/` - Astro build output
- `output/` - Generated PDFs (names are mapped per variant in `scripts/export-pdf.ts`)
