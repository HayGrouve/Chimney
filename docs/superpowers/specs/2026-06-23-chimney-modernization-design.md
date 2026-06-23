# Chimney Site Modernization Design

**Date:** 2026-06-23  
**Project:** Kominochistach (Chimney) — Bulgarian chimney cleaning business brochure site  
**Status:** Approved

## Goal

Modernize a legacy Create React App site to run on Node 24 LTS and refresh the UI with a dark-themed shadcn/ui design, while preserving all existing Bulgarian content and photos.

## Decisions Summary

| Decision | Choice |
|----------|--------|
| Modernization approach | In-place refresh (Option A) |
| Visual direction | Refined dark theme |
| Styling | Tailwind CSS + shadcn/ui (remove Bootstrap entirely) |
| Content scope | UI refresh + light restructure (Option B) |
| Migration strategy | Fresh Vite scaffold in-place, rewrite components, remove CRA artifacts |

## Toolchain & Runtime

| Item | Choice |
|------|--------|
| Node | 24.x LTS (`.nvmrc` + `engines` in `package.json`) |
| Package manager | pnpm |
| Bundler | Vite 6 |
| Framework | React 19 |
| Language | TypeScript (required for shadcn/ui) |
| Routing | react-router-dom v6 |
| Styling | Tailwind CSS + shadcn/ui, dark mode default |
| Icons | react-icons (retained) |
| Deployment | Static build → Netlify (`public/_redirects` SPA fallback) |

### Removed

- Create React App / `react-scripts`
- Bootstrap 4 CDN CSS and JS
- jQuery
- CRA test boilerplate (out of scope unless requested later)

## Theme & Visual Direction

- **Background:** Deep charcoal/slate (`bg-background` dark theme tokens)
- **Text:** Warm off-white foreground tokens
- **Accent:** Muted amber/orange for CTAs and highlights (replacing Bootstrap green)
- **Typography:** shadcn default sans-serif (Geist or Inter via `@fontsource` or CDN)
- **Spacing:** Generous padding; no cramped jumbotron layout
- **Images:** Rounded corners, subtle border/shadow, consistent aspect ratios in gallery

Dark mode applied via `class="dark"` on `<html>` — no theme toggle needed.

## Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx       # Fixed header, desktop nav, logo
│   │   └── MobileNav.tsx        # shadcn Sheet hamburger menu
│   ├── home/
│   │   ├── HeroSection.tsx      # Full-width hero with bg image overlay
│   │   └── FeatureCards.tsx     # "За мен" + "Цени и срокове" cards
│   ├── about/
│   │   ├── AboutIntro.tsx       # Two informational paragraphs
│   │   └── PhotoGallery.tsx     # Responsive grid + Dialog lightbox
│   ├── contact/
│   │   └── ContactPanel.tsx     # Card-based contact info
│   └── ui/                      # shadcn generated components
├── pages/
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── NotFoundPage.tsx
├── data/
│   └── gallery-images.ts        # Single array of image imports
├── lib/
│   └── utils.ts                 # shadcn cn() helper
├── assets/images/               # Existing photos (unchanged)
├── App.tsx
├── main.tsx
└── index.css                    # Tailwind + shadcn CSS variables
```

## shadcn/ui Components

Install via CLI:

- `button`
- `card`
- `sheet`
- `dialog`
- `separator`

## Page Specifications

### Home

- **HeroSection:** Background image (`jumbotron-img.jpg`) with dark overlay; headline "Запушен комин?"; lead paragraph; CTA button linking to `/contact`
- **FeatureCards:** Two shadcn `Card` components side-by-side (stack on mobile):
  - "За мен" — selfie image, bio excerpt, link to `/about`
  - "Цени и срокове" — chimney image, pricing note, link to `/contact`

### About

- **AboutIntro:** Two styled sections with existing Bulgarian copy (cleaning process + maintenance advice)
- **PhotoGallery:** Responsive grid (3 → 2 → 1 columns); 21 images from `gallery-images.ts`; click opens `Dialog` lightbox with prev/next navigation

### Contact

- **ContactPanel:** shadcn `Card` with:
  - Name: Милан Манчев
  - Phone: 0895 655 895 (`tel:0895655895` link)
  - Facebook button linking to existing profile URL
- Single responsive layout for all screen sizes (replaces table + 400px breakpoint hack)

### Not Found (404)

- Centered message: "Грешна страница!"
- Button linking home with house icon

## Routing

```tsx
/         → HomePage
/about    → AboutPage
/contact  → ContactPage
*         → NotFoundPage
```

Uses `BrowserRouter`, `Routes`, `Route` from react-router-dom v6.

## Data

### gallery-images.ts

Centralized array of `{ src: string; alt: string }` objects importing all 21 about-page images. Replaces 21 duplicated JSX blocks in the old `AboutContent.js`.

### Contact constants

Inline in `ContactPanel.tsx` or a small `data/contact.ts` — name, phone, Facebook URL.

## Error Handling & Edge Cases

- Unknown routes → `NotFoundPage`
- Broken image imports fail at Vite build time
- External links (Facebook): `target="_blank"` + `rel="noopener noreferrer"`
- Phone: `tel:` link for mobile tap-to-call

No backend, contact forms, or authentication.

## Deployment

- Build output: `dist/` (Vite default)
- Netlify: keep `public/_redirects` with `/* /index.html 200` for SPA routing
- Move `_redirects` to `public/` (Vite convention) if not already there

## Verification Checklist

- [ ] `pnpm build` succeeds on Node 24
- [ ] All 4 routes render correctly
- [ ] Mobile nav (Sheet) opens and links work
- [ ] Gallery lightbox opens, prev/next navigates all 21 images
- [ ] Contact phone and Facebook links work
- [ ] Netlify SPA redirect still configured

## Out of Scope

- Content/copy changes beyond alt text fixes
- Image optimization or new photography
- Unit/integration tests
- Contact form or email backend
- SEO beyond existing `<title>` tag
- Analytics

## Content Preservation

All Bulgarian copy from the existing site is preserved verbatim:

- Home hero text and card descriptions
- About intro paragraphs (2 sections)
- All 21 gallery photos (same files)
- Contact details (name, phone, Facebook)
- 404 message
