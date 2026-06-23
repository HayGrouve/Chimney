# Chimney Site Modernization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Migrate the Kominochistach brochure site from CRA + Bootstrap to Vite + React 19 + TypeScript + shadcn/ui on Node 24 LTS, with a refreshed dark UI.

**Architecture:** Fresh Vite scaffold in-place — replace toolchain config, rewrite four pages as TypeScript components using shadcn/ui primitives, centralize gallery images in a data file, remove all CRA/Bootstrap/jQuery artifacts.

**Tech Stack:** Vite 6, React 19, TypeScript, Tailwind CSS, shadcn/ui, react-router-dom v6, react-icons, pnpm, Node 24 LTS

**Spec:** `docs/superpowers/specs/2026-06-23-chimney-modernization-design.md`

---

## File Map

| File | Responsibility |
|------|----------------|
| `.nvmrc` | Pin Node 24 LTS |
| `package.json` | Vite scripts, dependencies, engines |
| `vite.config.ts` | Vite + React + path alias |
| `tsconfig.json` / `tsconfig.app.json` / `tsconfig.node.json` | TypeScript config |
| `index.html` | Root HTML (moved from `public/`, dark class on html) |
| `components.json` | shadcn/ui config |
| `src/main.tsx` | React entry point |
| `src/App.tsx` | Router setup |
| `src/index.css` | Tailwind + shadcn CSS variables (dark amber accent) |
| `src/lib/utils.ts` | shadcn `cn()` helper |
| `src/data/gallery-images.ts` | 21 image imports + alt text |
| `src/components/layout/SiteHeader.tsx` | Fixed header + desktop nav |
| `src/components/layout/MobileNav.tsx` | Sheet-based mobile menu |
| `src/components/home/HeroSection.tsx` | Hero with overlay + CTA |
| `src/components/home/FeatureCards.tsx` | Two feature cards |
| `src/components/about/AboutIntro.tsx` | Two info sections |
| `src/components/about/PhotoGallery.tsx` | Grid + Dialog lightbox |
| `src/components/contact/ContactPanel.tsx` | Contact card |
| `src/pages/HomePage.tsx` | Composes home components |
| `src/pages/AboutPage.tsx` | Composes about components |
| `src/pages/ContactPage.tsx` | Composes contact panel |
| `src/pages/NotFoundPage.tsx` | 404 page |
| `public/_redirects` | Netlify SPA fallback (keep) |

**Delete after migration:** `src/index.js`, `src/App.js`, old `src/pages/*.js`, old `src/components/*.js`, `package-lock.json`, CRA `public/index.html`

---

### Task 1: Scaffold Vite + TypeScript toolchain

**Files:**
- Create: `.nvmrc`
- Replace: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`
- Create: `index.html` (project root)
- Modify: `.gitignore`

- [ ] **Step 1: Create `.nvmrc`**

```
24
```

- [ ] **Step 2: Replace `package.json`**

```json
{
  "name": "kominochistach",
  "version": "0.2.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24.0.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-icons": "^5.4.0",
    "react-router-dom": "^7.1.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.6.0",
    "@radix-ui/react-dialog": "^1.1.4",
    "@radix-ui/react-separator": "^1.1.1",
    "@radix-ui/react-slot": "^1.1.1"
  },
  "devDependencies": {
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "@vitejs/plugin-react": "^4.3.4",
    "typescript": "^5.7.2",
    "vite": "^6.0.0",
    "tailwindcss": "^4.0.0",
    "@tailwindcss/vite": "^4.0.0"
  }
}
```

- [ ] **Step 3: Create `vite.config.ts`**

```typescript
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 4: Create TypeScript configs**

`tsconfig.json`:
```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

`tsconfig.app.json`:
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "ES2022",
    "useDefineForClassFields": true,
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"]
}
```

`tsconfig.node.json`:
```json
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.node.tsbuildinfo",
    "target": "ES2023",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedSideEffectImports": true
  },
  "include": ["vite.config.ts"]
}
```

- [ ] **Step 5: Create root `index.html`**

```html
<!DOCTYPE html>
<html lang="bg" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Коминочистач</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

- [ ] **Step 6: Update `.gitignore`** — add Vite entries:

```
dist
*.local
node_modules/.tmp
```

Remove `/build` entry (CRA artifact).

- [ ] **Step 7: Install dependencies**

Run: `pnpm install`  
Expected: Clean install, no errors.

- [ ] **Step 8: Delete CRA lockfile**

Run: `rm package-lock.json`

---

### Task 2: Tailwind, shadcn base, and global styles

**Files:**
- Create: `src/index.css`
- Create: `src/lib/utils.ts`
- Create: `components.json`
- Create: `src/components/ui/button.tsx`
- Create: `src/components/ui/card.tsx`
- Create: `src/components/ui/dialog.tsx`
- Create: `src/components/ui/separator.tsx`
- Create: `src/components/ui/sheet.tsx`

- [ ] **Step 1: Create `src/lib/utils.ts`**

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: Create `src/index.css`** with dark theme and amber accent

```css
@import "tailwindcss";

@theme inline {
  --color-background: oklch(0.145 0.005 285);
  --color-foreground: oklch(0.93 0.01 85);
  --color-card: oklch(0.18 0.005 285);
  --color-card-foreground: oklch(0.93 0.01 85);
  --color-primary: oklch(0.75 0.15 65);
  --color-primary-foreground: oklch(0.15 0.02 65);
  --color-muted: oklch(0.25 0.005 285);
  --color-muted-foreground: oklch(0.65 0.01 85);
  --color-border: oklch(0.28 0.005 285);
  --color-ring: oklch(0.75 0.15 65);
  --radius-sm: 0.375rem;
  --radius-md: 0.5rem;
  --radius-lg: 0.75rem;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground antialiased;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  }
}
```

- [ ] **Step 3: Init shadcn/ui components**

Run:
```bash
pnpm dlx shadcn@latest init -y -d
pnpm dlx shadcn@latest add button card dialog separator sheet -y
```

If CLI prompts conflict with existing setup, manually create UI components following shadcn defaults with `@/` imports. Ensure each component uses `cn()` from `@/lib/utils`.

- [ ] **Step 4: Create `src/main.tsx`**

```typescript
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 5: Verify dev server starts**

Run: `pnpm dev`  
Expected: Vite dev server starts (blank page OK — App not yet written).

---

### Task 3: Gallery data and asset verification

**Files:**
- Create: `src/data/gallery-images.ts`
- Verify: `src/assets/images/` contains all images

- [ ] **Step 1: Confirm assets exist**

Run: `ls src/assets/images/`  
Expected files include: `logo.jpg`, `selfie.jpg`, `big-komin.jpg`, `jumbotron-img.jpg`, `komin-1.jpg`, `komin-1_2.jpg`, `komin-2.jpg`, `komin-3.jpg`, `vutre.jpg`, `otvun.jpg`, `1.jpg` through `15.jpg`.

If images are missing from the working tree, restore from git history or original source before continuing.

- [ ] **Step 2: Create `src/data/gallery-images.ts`**

```typescript
import komin1 from "@/assets/images/komin-1.jpg";
import komin12 from "@/assets/images/komin-1_2.jpg";
import komin2 from "@/assets/images/komin-2.jpg";
import komin3 from "@/assets/images/komin-3.jpg";
import vutre from "@/assets/images/vutre.jpg";
import otvun from "@/assets/images/otvun.jpg";
import chimney1 from "@/assets/images/1.jpg";
import chimney2 from "@/assets/images/2.jpg";
import chimney3 from "@/assets/images/3.jpg";
import chimney4 from "@/assets/images/4.jpg";
import chimney5 from "@/assets/images/5.jpg";
import chimney6 from "@/assets/images/6.jpg";
import chimney7 from "@/assets/images/7.jpg";
import chimney8 from "@/assets/images/8.jpg";
import chimney9 from "@/assets/images/9.jpg";
import chimney10 from "@/assets/images/10.jpg";
import chimney11 from "@/assets/images/11.jpg";
import chimney12 from "@/assets/images/12.jpg";
import chimney13 from "@/assets/images/13.jpg";
import chimney14 from "@/assets/images/14.jpg";
import chimney15 from "@/assets/images/15.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
};

export const galleryImages: GalleryImage[] = [
  { src: komin1, alt: "Комин — изглед 1" },
  { src: komin12, alt: "Комин — изглед 2" },
  { src: komin2, alt: "Комин — изглед 3" },
  { src: komin3, alt: "Комин — изглед 4" },
  { src: vutre, alt: "Комин — вътрешен изглед" },
  { src: otvun, alt: "Комин — външен изглед" },
  { src: chimney1, alt: "Работа по комин 1" },
  { src: chimney2, alt: "Работа по комин 2" },
  { src: chimney3, alt: "Работа по комин 3" },
  { src: chimney4, alt: "Работа по комин 4" },
  { src: chimney5, alt: "Работа по комин 5" },
  { src: chimney6, alt: "Работа по комин 6" },
  { src: chimney7, alt: "Работа по комин 7" },
  { src: chimney8, alt: "Работа по комин 8" },
  { src: chimney9, alt: "Работа по комин 9" },
  { src: chimney10, alt: "Работа по комин 10" },
  { src: chimney11, alt: "Работа по комин 11" },
  { src: chimney12, alt: "Работа по комин 12" },
  { src: chimney13, alt: "Работа по комин 13" },
  { src: chimney14, alt: "Работа по комин 14" },
  { src: chimney15, alt: "Работа по комин 15" },
];
```

- [ ] **Step 3: Add Vite image type declaration**

Create `src/vite-env.d.ts`:
```typescript
/// <reference types="vite/client" />
```

---

### Task 4: Layout components (SiteHeader + MobileNav)

**Files:**
- Create: `src/components/layout/SiteHeader.tsx`
- Create: `src/components/layout/MobileNav.tsx`

- [ ] **Step 1: Create `MobileNav.tsx`**

```typescript
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { BsFillHouseDoorFill, BsInfoCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/", label: "Начало", icon: BsFillHouseDoorFill },
  { to: "/about", label: "Информация", icon: BsInfoCircleFill },
  { to: "/contact", label: "Контакти", icon: MdContactPhone },
] as const;

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <AiOutlineMenu className="size-5" />
          <span className="sr-only">Отвори меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <SheetHeader>
          <SheetTitle>Меню</SheetTitle>
        </SheetHeader>
        <nav className="mt-6 flex flex-col gap-2">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-foreground hover:bg-muted"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
```

- [ ] **Step 2: Create `SiteHeader.tsx`**

```typescript
import { Link, NavLink } from "react-router-dom";
import { BsFillHouseDoorFill, BsInfoCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

const navLinks = [
  { to: "/", label: "Начало", icon: BsFillHouseDoorFill },
  { to: "/about", label: "Информация", icon: BsInfoCircleFill },
  { to: "/contact", label: "Контакти", icon: MdContactPhone },
] as const;

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link
          to="/"
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-primary"
        >
          <BsFillHouseDoorFill className="size-5" />
          <span className="font-semibold">Коминочистач</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-1.5 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                  isActive && "bg-muted text-primary"
                )
              }
            >
              <Icon className="size-4" />
              {label}
            </NavLink>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
```

---

### Task 5: Home page components

**Files:**
- Create: `src/components/home/HeroSection.tsx`
- Create: `src/components/home/FeatureCards.tsx`
- Create: `src/pages/HomePage.tsx`

- [ ] **Step 1: Create `HeroSection.tsx`**

```typescript
import { Link } from "react-router-dom";
import { MdContactPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/images/jumbotron-img.jpg";
import logo from "@/assets/images/logo.jpg";

export function HeroSection() {
  return (
    <section
      className="relative mt-16 overflow-hidden rounded-xl bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative flex flex-col gap-6 px-6 py-16 md:flex-row md:items-center md:px-10 md:py-20">
        <img
          src={logo}
          alt="Коминочистач лого"
          className="w-32 rounded-lg shadow-lg md:w-40"
        />
        <div className="max-w-xl space-y-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Запушен комин?
          </h1>
          <p className="text-lg text-muted-foreground">
            Добре дошли! Ние почистваме, отпушваме и ремонтираме комини и
            отдушници. Изработваме шапки за комини и други.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">
              За контакти <MdContactPhone className="ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `FeatureCards.tsx`**

```typescript
import { Link } from "react-router-dom";
import { BsInfoCircleFill } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import selfie from "@/assets/images/selfie.jpg";
import bigKomin from "@/assets/images/big-komin.jpg";

export function FeatureCards() {
  return (
    <section className="grid gap-8 py-12 md:grid-cols-2">
      <Card className="overflow-hidden">
        <img
          src={selfie}
          alt="Милан Манчев — коминочистач"
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle>За мен</CardTitle>
          <CardDescription>
            Професионален коминочистач съм от 20 години, работил съм в няколко
            държави, работя бързо и качественно...
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild variant="secondary">
            <Link to="/about">
              Информация <BsInfoCircleFill className="ml-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>

      <Card className="overflow-hidden">
        <img
          src={bigKomin}
          alt="Голям комин"
          className="h-64 w-full object-cover md:h-80"
        />
        <CardHeader>
          <CardTitle>Цени и срокове</CardTitle>
          <CardDescription>
            Всеки комин изисква различен подход, който налага повече/по-малко
            време и ресурси. Свържете се с мен, с радост ще помогна!
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button asChild>
            <Link to="/contact">
              Контакти <MdContactPhone className="ml-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
```

- [ ] **Step 3: Create `HomePage.tsx`**

```typescript
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureCards } from "@/components/home/FeatureCards";

export function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <HeroSection />
      <FeatureCards />
    </div>
  );
}
```

---

### Task 6: About page with photo gallery lightbox

**Files:**
- Create: `src/components/about/AboutIntro.tsx`
- Create: `src/components/about/PhotoGallery.tsx`
- Create: `src/pages/AboutPage.tsx`

- [ ] **Step 1: Create `AboutIntro.tsx`**

```typescript
import { Separator } from "@/components/ui/separator";

export function AboutIntro() {
  return (
    <section className="space-y-8">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Допълнителна информация
      </h1>

      <div className="space-y-6 border-l-2 border-primary pl-4">
        <p className="text-muted-foreground leading-relaxed">
          Почистването се извършва по следния начин, димоотвода се почиства с
          различен диаметър четки и става, като нов. Саждите и нагара, които
          падат в ревизионния отвор се издърпват със строителна машина, като
          преди това всичко се облепва и няма никаква прах.
        </p>
        <Separator />
        <p className="text-muted-foreground leading-relaxed">
          Отпушване и почистване на комини. Много хора не знаят, че камината
          иска поддържане (обслужване) на всеки 10 кубически изгорели дървета.
          Камината е като на колата двигателя, който например на всеки 50 000
          километра иска сервизна поддръжка. Мога да предложа професионалните си
          услуги, като коминочистач.
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Create `PhotoGallery.tsx`**

```typescript
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { galleryImages } from "@/data/gallery-images";

export function PhotoGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const goTo = (direction: -1 | 1) => {
    if (selectedIndex === null) return;
    const next =
      (selectedIndex + direction + galleryImages.length) %
      galleryImages.length;
    setSelectedIndex(next);
  };

  const selected = selectedIndex !== null ? galleryImages[selectedIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className="group overflow-hidden rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-56 w-full object-cover transition-transform group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={selectedIndex !== null}
        onOpenChange={(open) => !open && setSelectedIndex(null)}
      >
        <DialogContent className="max-w-4xl border-border bg-card p-2">
          <DialogTitle className="sr-only">
            {selected?.alt ?? "Гalerия"}
          </DialogTitle>
          {selected && (
            <div className="relative">
              <img
                src={selected.src}
                alt={selected.alt}
                className="max-h-[80vh] w-full rounded-md object-contain"
              />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => goTo(-1)}
                  aria-label="Предишна снимка"
                >
                  <AiOutlineLeft />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => goTo(1)}
                  aria-label="Следваща снимка"
                >
                  <AiOutlineRight />
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
```

- [ ] **Step 3: Create `AboutPage.tsx`**

```typescript
import { AboutIntro } from "@/components/about/AboutIntro";
import { PhotoGallery } from "@/components/about/PhotoGallery";

export function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-10 px-4 pt-8">
      <AboutIntro />
      <PhotoGallery />
    </div>
  );
}
```

---

### Task 7: Contact page

**Files:**
- Create: `src/components/contact/ContactPanel.tsx`
- Create: `src/pages/ContactPage.tsx`

- [ ] **Step 1: Create `ContactPanel.tsx`**

```typescript
import { FaFacebookSquare } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const FACEBOOK_URL =
  "https://www.facebook.com/%D0%9A%D0%BE%D0%BC%D0%B8%D0%BD%D0%BE%D1%87%D0%B8%D1%81%D1%82%D0%B0%D1%87-1760617057317045";

export function ContactPanel() {
  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Контакти</CardTitle>
        <CardDescription>Свържете се с мен</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Име</p>
          <p className="text-lg font-medium">Милан Манчев</p>
        </div>
        <Separator />
        <div>
          <p className="text-sm text-muted-foreground">Телефон</p>
          <a
            href="tel:0895655895"
            className="flex items-center gap-2 text-lg font-medium text-primary hover:underline"
          >
            <MdContactPhone />
            0895 655 895
          </a>
        </div>
        <Separator />
        <Button asChild variant="secondary" className="w-full">
          <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer">
            Коминочистач <FaFacebookSquare className="ml-1" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
```

- [ ] **Step 2: Create `ContactPage.tsx`**

```typescript
import { ContactPanel } from "@/components/contact/ContactPanel";

export function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-8">
      <ContactPanel />
    </div>
  );
}
```

---

### Task 8: NotFound page, App routing, and layout shell

**Files:**
- Create: `src/pages/NotFoundPage.tsx`
- Create: `src/App.tsx`

- [ ] **Step 1: Create `NotFoundPage.tsx`**

```typescript
import { Link } from "react-router-dom";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { Button } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-4 px-4 pt-24 text-center">
      <h1 className="text-3xl font-bold">Грешна страница!</h1>
      <Button asChild variant="secondary">
        <Link to="/">
          Начало <BsFillHouseDoorFill className="ml-1" />
        </Link>
      </Button>
    </div>
  );
}
```

- [ ] **Step 2: Create `App.tsx`**

```typescript
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { HomePage } from "@/pages/HomePage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <SiteHeader />
        <main className="pb-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
```

- [ ] **Step 3: Verify all routes in dev**

Run: `pnpm dev`  
Check: `/`, `/about`, `/contact`, `/nonexistent` — all render without console errors.

---

### Task 9: Remove CRA artifacts and verify production build

**Files:**
- Delete: `src/index.js`, `src/App.js`, `src/index.css` (old), `src/pages/*.js`, `src/components/*.js`, `src/components/MainContent.js`, etc.
- Delete: `public/index.html` (CRA version)
- Keep: `public/_redirects`

- [ ] **Step 1: Delete old JavaScript source files**

Run:
```bash
rm -f src/index.js src/App.js src/index.css
rm -f src/pages/Home.js src/pages/About.js src/pages/Contact.js src/pages/Error.js
rm -f src/components/Navbar.js src/components/MainContent.js src/components/AboutContent.js src/components/ContactContent.js
rm -f public/index.html
```

- [ ] **Step 2: Verify `_redirects` exists**

`public/_redirects` must contain:
```
/*    /index.html   200
```

- [ ] **Step 3: Production build**

Run: `pnpm build`  
Expected: TypeScript compiles, Vite builds to `dist/` with no errors.

- [ ] **Step 4: Preview production build**

Run: `pnpm preview`  
Check all routes again in the preview server.

- [ ] **Step 5: Update README**

Replace boilerplate CRA README with:
- Node 24 requirement
- `pnpm install` / `pnpm dev` / `pnpm build`
- Netlify deployment note

---

## Spec Coverage Checklist

| Spec requirement | Task |
|------------------|------|
| Node 24 LTS | Task 1 |
| pnpm | Task 1 |
| Vite + React 19 + TS | Task 1, 2 |
| shadcn/ui dark theme | Task 2 |
| Remove Bootstrap/jQuery | Task 9 |
| SiteHeader + MobileNav | Task 4 |
| Home hero + feature cards | Task 5 |
| About intro + gallery lightbox | Task 6 |
| Contact card (no table) | Task 7 |
| 404 page | Task 8 |
| react-router v6 routing | Task 8 |
| Gallery data centralization | Task 3 |
| Netlify SPA redirects | Task 9 |
| Content preserved verbatim | Tasks 5–8 |
| Build verification | Task 9 |
