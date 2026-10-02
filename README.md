# TCDev - personal portfolio

Dual-section site (**Dev** + **Photo**) for [tcdev.xyz](https://tcdev.xyz).  
Astro SSG/SSR on **Cloudflare Pages**, bilingual **IT/EN**, photo albums on **R2**.

## Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 (`output: 'server'`) + `@astrojs/cloudflare` |
| Public pages | Prerendered where possible; photos routes SSR for live album metadata |
| Styles | Tailwind CSS v4 |
| i18n | Locale prefixes `/it` and `/en`; `/` redirects from `Accept-Language` |
| Photos | Cloudflare R2 (`PHOTOS_BUCKET`); JSON metadata in `albums.json` |
| Admin | `/admin` + `/api/*`, password/token via `ADMIN_TOKEN` env only |
| Deploy | Cloudflare Pages (+ optional GitHub Pages fallback workflow) |

## Local development

```bash
npm install
cp .env.example .env   # set ADMIN_TOKEN if you want auth locally
npm run dev            # http://localhost:4321
```

Without an R2 binding the app uses **in-memory mock storage** seeded with:

- Paesaggi / natura (`paesaggi-natura`)
- Ritratti / persone (`ritratti-persone`)
- Eventi (`eventi`)

`npm run build` succeeds without Cloudflare credentials.

## Routes

| Path | Notes |
|------|-------|
| `/` | Browser-language redirect to `/it` or `/en` |
| `/{lang}` | Home (Dev + Photo) |
| `/{lang}/projects` | Public + coming soon (data in `src/data/projects.ts`) |
| `/{lang}/photos` | Album index (SSR) |
| `/{lang}/photos/[album]` | Album gallery from metadata |
| `/{lang}/about` | Bio + gear |
| `/{lang}/contact` | Email, IG, LinkedIn, GitHub |
| `/admin` | Albums CRUD + drag-and-drop upload |
| `/api/albums` | List / create albums |
| `/api/albums/[id]` | Get / rename / archive |
| `/api/upload` | Accept WebP (client-resized) into album |
| `/api/auth` | Set admin cookie from token |
| `/api/photos/[...key]` | Serve R2 object |

## Admin auth

1. Set `ADMIN_TOKEN` in Cloudflare Pages (Production + Preview) or `.env`.
2. Open `/admin`, paste the token, Unlock.
3. API calls send `Authorization: Bearer <token>` or the `admin_token` cookie.

Never commit real tokens. `.env` is gitignored.

## Photos + R2

Object layout:

```
albums.json
albums/{albumId}/{photoId}.webp
```

### Bind R2 on Cloudflare Pages

1. Create bucket `tcdev-photos` (or your name).
2. Pages project → Settings → Bindings → R2 → binding name **`PHOTOS_BUCKET`**.
3. Redeploy.

`wrangler.toml` documents the binding (commented until the bucket exists).

### Upload pipeline

Admin UI resizes (longest edge 2400px) and converts to **WebP in the browser**, then POSTs to `/api/upload`.  
That keeps the Worker free of native `sharp` (not available on the edge runtime).

Optional later: a Node-compatible Worker/Pages Function with `sharp` for server-side processing, or Cloudflare Image Resizing on delivery.

## i18n

- Default locale: `it` (also `x-default` hreflang).
- Prefixes always on: `/it/...`, `/en/...`.
- Copy lives in `src/i18n/ui.ts`; projects in `src/data/projects.ts`.
- Middleware redirects `/` and bare routes (`/projects`, …) using `Accept-Language`.

## Deploy (Cloudflare Pages)

- Build command: `npm run build`
- Output / deploy: Astro Cloudflare adapter (Pages looks at the generated Worker + assets)
- Env vars: see `.env.example` (`ADMIN_TOKEN`, `PUBLIC_SITE_URL`)
- Binding: `PHOTOS_BUCKET` → R2

Git integration on `main` is the primary path.  
`.github/workflows/pages.yml` remains a **manual** GitHub Pages fallback only.

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |

## Content notes

- Public name: **Riccardo** / **TCDev** (no surname in site copy).
- Gear: Sony A6700; Tamron 28-75mm f/2.8 Di III RXD; Sony 18-105mm G.
- Contacts: IG TCDev, LinkedIn [tcdev0](https://linkedin.com/in/tcdev0), GitHub TCDev10, `email@tcdev.xyz`.

## Notes

- Astro Cloudflare may log a SESSION KV binding hint at build time; this site does not use Astro sessions, so no SESSION namespace is required.
- Photo upload uses client-side resize + WebP; optional server-side sharp would need a Node-compatible runtime (documented above).
