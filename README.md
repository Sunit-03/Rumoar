# RUMOAR — Should It Exist?

A one-page strategy microsite arguing whether the RUMOAR accessories brand should exist — market sizing, competitor read, sourcing economics, a unit-economics calculator, the moat thesis, and the honest risks, all backed by inline footnoted sources.

Built with Next.js (App Router) and TypeScript. No CMS, no database — the entire page is one typed content object rendered by section components.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Editing the content

All page copy lives in one place: [data/content.ts](data/content.ts), typed against [data/types.ts](data/types.ts). There's no content scattered across components — to change any number, claim, or section heading, edit that file. `lib/get-content.ts` is the single seam between the page and its data source, so swapping in a CMS later only means changing that one function.

Each top-level key in `content` (e.g. `hero`, `market`, `sourcing`, `moat`, `gtm`) maps to one section component in `app/page.tsx`.

## Screenshot evidence

Sections that cite Reddit/forum evidence (Moat's "Why Now", GTM's "What People Are Actually Saying") reference image files by path under `public/screenshots/`. Drop the actual screenshot files there using the filenames referenced in each `EvidenceScreenshot`'s `src` field in `data/content.ts` — until a file exists at that path, the slot falls back to a labeled placeholder box.

- `components/EvidenceShot.tsx` — static grid layout (used in Moat)
- `components/EvidenceDeck.tsx` — auto-cycling card stack (used in GTM)

## Project structure

```
app/            Root layout, global styles, the single page route
components/     One component per page section, plus shared pieces
                (Reveal, FootnoteText, EvidenceShot/Deck, TodoBlock)
data/           content.ts (all copy) + types.ts (its shape)
lib/            get-content.ts, use-in-view.ts (scroll-reveal hook)
public/         Static assets, including public/screenshots/
```

### Notable pieces

- **`Reveal`** — wraps a section's contents so it fades/slides in on scroll into view and fades back out when scrolled away (both directions).
- **`FootnoteText`** — renders `[n]` markers embedded in copy as linked superscripts pointing at the Sources section.
- **`TodoBlock`** — renders a visible "TODO — SUNIT" callout for content gaps still to be filled in (see `components/Risks.tsx`, `components/Competitors.tsx`, `components/Footer.tsx` for current usages).

## Build

```bash
npm run build
npm run start
```

## Deploy

Deployable anywhere Next.js runs (e.g. [Vercel](https://vercel.com/new)). No environment variables or external services are required — it's a fully static content page.
