# Guild of Master Craftsman

A bespoke marketing website for **Guild of Master Craftsman** — high-quality, all-round
building experts across the UK, with a qualified professional for every trade, top to bottom.

The design language is **"Master's Hallmark"**: warm cream parchment, a red **wax-seal** logo
with **gold** engraved lettering, fine gold hairline rules, letterpress detail and a blueprint
title-block footer. Premium, heritage-meets-modern, and intentionally unlike a generic builder
template.

## Tech stack

- **Vite** + **React 19**
- **Tailwind CSS v4** (via `@tailwindcss/vite`) with a custom token-based design system in
  [`src/index.css`](src/index.css)
- **react-router-dom v7**
- Typography: **Cormorant Garamond** (display/headings), **Source Serif 4** (body),
  **Cormorant SC** (small-caps eyebrows) — loaded from Google Fonts
- Custom inline-SVG wax seal and 18 hand-drawn engraved trade icons (no icon libraries, no image
  dependencies)

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Project structure

```
index.html              Fonts, favicon (the wax seal), meta/OG tags
public/seal.svg         Standalone wax-seal favicon
src/
  index.css             Design system: tokens, type scale, textures, all component classes
  main.jsx / App.jsx    Router setup (BrowserRouter + routes)
  data/site.js          Brand facts, nav, the 18 trades, services, projects, accreditations, stats
  components/
    Seal.jsx            The wax-seal logo (full + compact variants, animated press)
    TradeIcon.jsx       18 engraved line icons
    Navbar.jsx          Sticky nav + portalled mobile menu sheet
    Footer.jsx          Blueprint title-block footer
    OxbloodCTA.jsx      Full-bleed wax-gradient call-to-action band
    Layout.jsx          Shell (skip link, nav, main, footer, scroll-to-top)
    ui.jsx              Reveal, SectionHeader, CharterDivider, StatCounter, cards, etc.
    Seo.jsx             Per-page <title> + meta description
  pages/                Home, Services, About, Projects, Testimonials, Contact, NotFound
```

## Before launch — replace these placeholders

The copy and data deliberately use placeholders the client should swap for real details:

- **Contact** — phone `01XXX XXX XXX`, email `enquiries@guildofmastercraftsman.co.uk`,
  address, office hours (in [`src/data/site.js`](src/data/site.js)).
- **`[YEAR]`** — the year the business was established (`BRAND.established`).
- **Stats** — years, projects completed, satisfaction % (`STATS`).
- **Projects** — `[Town]` / `[Village]` locations, years, and ideally real photography
  (drop images into the `Frame` components, which currently render elegant engraved placeholders).
- **Testimonials & craftsmen** — `[Surname]` / `[Name]` / `[Location]`, to be replaced with
  verified client and team details.
- **Accreditations** — confirm the actual schemes the business holds (`ACCREDITATIONS`).

Adding real photography: each placeholder plate is a `<Frame>` — pass a `src` prop
(`<Frame src="/images/your-photo.jpg" alt="…" seal />`) and it will use the photo instead of the
engraving.

## A note on the name

There is an established UK accreditation body called **The Guild of Master Craftsmen**. Before
trading publicly under "Guild of Master Craftsman", it is worth checking for potential
trademark / brand-confusion issues.

---

Built bespoke. Sealed in craft.
