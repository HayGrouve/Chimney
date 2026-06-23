# Коминочистач

Bulgarian brochure site for chimney cleaning services.

## Requirements

- Node.js 24 LTS (see `.nvmrc`)
- pnpm

## Development

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Production

```bash
pnpm build
pnpm preview
```

## Deployment

Static build output is in `dist/`. Netlify SPA routing is configured via `public/_redirects`.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS + shadcn/ui
- react-router-dom
