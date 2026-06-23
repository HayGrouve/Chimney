# SEO & Share Links Design

**Date:** 2026-06-23  
**Project:** Kominochistach — https://komini-sofia.com  
**Deployment:** Netlify (SPA via `public/_redirects`)  
**Status:** Approved

## Goal

Add proper SEO and social share preview support for a Bulgarian-only brochure site, covering Google/local search and link previews on Facebook, WhatsApp, and Viber.

## Decisions Summary

| Decision | Choice |
|----------|--------|
| Priority | Search + social sharing equally |
| Per-route metadata | Unified preview for all URLs |
| OG image | Hero/work photo (`jumbotron-img.jpg` → `public/og-image.jpg`) |
| Approach | Static head tags + public assets (no prerender, no react-helmet) |
| Language | Bulgarian Cyrillic throughout (`lang="bg"`, `og:locale=bg_BG`) |

## Architecture

All metadata lives in static HTML and `public/` files so social scrapers and crawlers receive tags without executing JavaScript.

```
index.html          → title, meta, OG, Twitter, canonical, JSON-LD
public/
  og-image.jpg      → 1200×630 share image (from jumbotron-img.jpg)
  robots.txt        → allow all + sitemap URL
  sitemap.xml       → 4 routes on komini-sofia.com
  favicon.ico       → from logo
  apple-touch-icon.png
  _redirects        → unchanged (SPA fallback)
```

No new npm dependencies.

## Copy (Bulgarian)

| Field | Text |
|-------|------|
| **Title** | `Коминочистач София \| Почистване и отпушване на комини` |
| **Description** | `Професионално почистване, отпушване и ремонт на комини и отдушници в София. Изработка на шапки за комини. Свържете се с нас!` |
| **OG site_name** | `Коминочистач` |
| **Canonical / og:url** | `https://komini-sofia.com/` |

## Meta Tags (`index.html`)

```html
<title>Коминочистач София | Почистване и отпушване на комини</title>
<meta name="description" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://komini-sofia.com/" />
```

Existing `lang="bg"` and `charset="UTF-8"` retained.

## Open Graph & Twitter

Unified for all routes:

| Property | Value |
|----------|-------|
| `og:type` | `website` |
| `og:url` | `https://komini-sofia.com/` |
| `og:title` | Same as `<title>` |
| `og:description` | Same as meta description |
| `og:image` | `https://komini-sofia.com/og-image.jpg` |
| `og:image:width` | `1200` |
| `og:image:height` | `630` |
| `og:image:alt` | `Коминочистач — почистване на комини в София` |
| `og:locale` | `bg_BG` |
| `og:site_name` | `Коминочистач` |
| `twitter:card` | `summary_large_image` |
| `twitter:title` | Same as og:title |
| `twitter:description` | Same as og:description |
| `twitter:image` | Same as og:image |

## OG Image

- Source: `src/assets/images/jumbotron-img.jpg`
- Output: `public/og-image.jpg` at **1200×630** (center crop, JPEG ~80% quality)
- Stable URL required (must live in `public/`, not Vite-hashed assets)

## Local SEO

### `public/robots.txt`

```
User-agent: *
Allow: /

Sitemap: https://komini-sofia.com/sitemap.xml
```

### `public/sitemap.xml`

| URL | changefreq | priority |
|-----|------------|----------|
| `https://komini-sofia.com/` | weekly | 1.0 |
| `https://komini-sofia.com/about` | monthly | 0.8 |
| `https://komini-sofia.com/contact` | monthly | 0.8 |

Use current date for `<lastmod>`. Do not include 404 route.

### JSON-LD (`LocalBusiness`)

Embedded in `index.html` `<head>`:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Коминочистач",
  "description": "<same as meta description>",
  "url": "https://komini-sofia.com",
  "telephone": "+359895655895",
  "image": "https://komini-sofia.com/og-image.jpg",
  "areaServed": {
    "@type": "City",
    "name": "София"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "София",
    "addressCountry": "BG"
  },
  "sameAs": [
    "https://www.facebook.com/Коминочистач-1760617057317045"
  ],
  "priceRange": "$$"
}
```

## Favicon

- `public/favicon.ico` — 32×32 from `logo.jpg`
- `public/apple-touch-icon.png` — 180×180 from `logo.jpg`
- `index.html` links:
  - `<link rel="icon" href="/favicon.ico" />`
  - `<link rel="apple-touch-icon" href="/apple-touch-icon.png" />`

## Out of Scope

- Per-route OG/title (requires prerender/SSR)
- `hreflang` (single-language site)
- Google Search Console setup (manual post-deploy)
- Google Business Profile integration
- Analytics

## Verification Checklist (post-deploy)

- [ ] [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) — scrape `https://komini-sofia.com/`, confirm Cyrillic title + image
- [ ] Share link in WhatsApp/Viber — preview shows image + Bulgarian text
- [ ] [Google Rich Results Test](https://search.google.com/test/rich-results) — LocalBusiness valid
- [ ] `https://komini-sofia.com/robots.txt` accessible
- [ ] `https://komini-sofia.com/sitemap.xml` accessible
- [ ] Submit sitemap in Google Search Console

## Bulgarian Locale Notes

- Cyrillic in all meta/OG fields is correct and supported
- `lang="bg"` + `og:locale=bg_BG` sufficient for single-language site
- No `hreflang` needed
