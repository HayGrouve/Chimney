# SEO & Share Links Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add static SEO meta tags, Open Graph/Twitter cards, robots.txt, sitemap.xml, JSON-LD, favicon, and OG image for https://komini-sofia.com.

**Architecture:** All metadata in `index.html` and `public/` assets — no JS runtime, no new dependencies. OG image and favicons generated from existing photos via ImageMagick or sharp CLI at build/setup time.

**Tech Stack:** Vite (existing), static HTML, Netlify

**Spec:** `docs/superpowers/specs/2026-06-23-seo-share-links-design.md`

---

## File Map

| File | Action |
|------|--------|
| `index.html` | Add meta, OG, Twitter, canonical, JSON-LD, favicon links |
| `public/og-image.jpg` | Create 1200×630 from jumbotron-img.jpg |
| `public/favicon.ico` | Create from logo.jpg |
| `public/apple-touch-icon.png` | Create 180×180 from logo.jpg |
| `public/robots.txt` | Create |
| `public/sitemap.xml` | Create |

---

### Task 1: Generate public assets (OG image + favicons)

**Files:**
- Create: `public/og-image.jpg`
- Create: `public/favicon.ico`
- Create: `public/apple-touch-icon.png`

- [ ] **Step 1: Check ImageMagick availability**

Run: `which convert || which magick`

If available, use ImageMagick. If not, use `pnpm dlx sharp-cli` or Node one-liner with sharp.

- [ ] **Step 2: Create OG image (1200×630 center crop)**

Run (ImageMagick):
```bash
cd /home/tsvetomir/projects/Chimney
convert src/assets/images/jumbotron-img.jpg -gravity center -crop 1200x630+0+0 +repage -quality 85 public/og-image.jpg
```

Or with magick:
```bash
magick src/assets/images/jumbotron-img.jpg -gravity center -crop 1200x630+0+0 +repage -quality 85 public/og-image.jpg
```

Expected: `public/og-image.jpg` exists, ~1200×630.

- [ ] **Step 3: Create favicon.ico (32×32)**

```bash
convert src/assets/images/logo.jpg -resize 32x32 public/favicon.ico
```

- [ ] **Step 4: Create apple-touch-icon.png (180×180)**

```bash
convert src/assets/images/logo.jpg -resize 180x180 public/apple-touch-icon.png
```

- [ ] **Step 5: Verify dimensions**

Run: `identify public/og-image.jpg public/apple-touch-icon.png`  
Expected: 1200×630 and 180×180.

---

### Task 2: Create robots.txt and sitemap.xml

**Files:**
- Create: `public/robots.txt`
- Create: `public/sitemap.xml`

- [ ] **Step 1: Create `public/robots.txt`**

```
User-agent: *
Allow: /

Sitemap: https://komini-sofia.com/sitemap.xml
```

- [ ] **Step 2: Create `public/sitemap.xml`**

Use today's date for lastmod (ISO 8601 date):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://komini-sofia.com/</loc>
    <lastmod>2026-06-23</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://komini-sofia.com/about</loc>
    <lastmod>2026-06-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://komini-sofia.com/contact</loc>
    <lastmod>2026-06-23</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

---

### Task 3: Update index.html with full SEO head

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Replace `<head>` content**

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Коминочистач София | Почистване и отпушване на комини</title>
  <meta
    name="description"
    content="Професионално почистване, отпушване и ремонт на комини и отдушници в София. Изработка на шапки за комини. Свържете се с нас!"
  />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://komini-sofia.com/" />

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" sizes="32x32" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

  <!-- Open Graph -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://komini-sofia.com/" />
  <meta property="og:title" content="Коминочистач София | Почистване и отпушване на комини" />
  <meta
    property="og:description"
    content="Професионално почистване, отпушване и ремонт на комини и отдушници в София. Изработка на шапки за комини. Свържете се с нас!"
  />
  <meta property="og:image" content="https://komini-sofia.com/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Коминочистач — почистване на комини в София" />
  <meta property="og:locale" content="bg_BG" />
  <meta property="og:site_name" content="Коминочистач" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Коминочистач София | Почистване и отпушване на комини" />
  <meta
    name="twitter:description"
    content="Професионално почистване, отпушване и ремонт на комини и отдушници в София. Изработка на шапки за комини. Свържете се с нас!"
  />
  <meta name="twitter:image" content="https://komini-sofia.com/og-image.jpg" />

  <!-- JSON-LD -->
  <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Коминочистач",
      "description": "Професионално почистване, отпушване и ремонт на комини и отдушници в София. Изработка на шапки за комини.",
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
        "https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045"
      ],
      "priceRange": "$$"
    }
  </script>
</head>
```

Keep `<html lang="bg" class="dark">` unchanged.

---

### Task 4: Verify build and static assets

- [ ] **Step 1: Build**

Run: `pnpm build`  
Expected: `dist/` contains `og-image.jpg`, `robots.txt`, `sitemap.xml`, `favicon.ico`, `apple-touch-icon.png`, and updated `index.html` with all meta tags.

- [ ] **Step 2: Spot-check dist/index.html**

Run: `grep -c 'og:image' dist/index.html`  
Expected: at least 1 match.

- [ ] **Step 3: Preview locally (optional)**

Run: `pnpm preview`  
Check: view page source — meta tags present; `/robots.txt` and `/sitemap.xml` load.

---

### Task 5: Post-deploy verification (manual)

- [ ] Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/ — enter `https://komini-sofia.com/`, click Scrape Again
- [ ] Google Rich Results Test: https://search.google.com/test/rich-results — paste homepage URL
- [ ] Share link in WhatsApp — confirm Cyrillic title + hero image preview
- [ ] Google Search Console — submit `https://komini-sofia.com/sitemap.xml`

---

## Spec Coverage Checklist

| Spec requirement | Task |
|------------------|------|
| Bulgarian title + description | Task 3 |
| OG + Twitter unified card | Task 3 |
| og-image.jpg 1200×630 | Task 1 |
| lang="bg" + og:locale bg_BG | Task 3 |
| robots.txt | Task 2 |
| sitemap.xml (3 URLs) | Task 2 |
| LocalBusiness JSON-LD | Task 3 |
| Favicon + apple-touch-icon | Task 1, Task 3 |
| Canonical URL | Task 3 |
| No new dependencies | All tasks |
