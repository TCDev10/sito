# SEO notes (portfolio rebuild)

Audit + remediation on `feat/portfolio-rebuild` (Astro, IT/EN, Cloudflare Pages).  
No rankings, traffic, or Search Console claims — repo/build evidence only.

## Fixed in this pass

| Finding | Severity | Fix |
|---------|----------|-----|
| Sitemap listed `/` (302 Accept-Language redirect) | High | Filtered out of sitemap |
| Sitemap used trailing slashes while HTML canonicals did not | High | `trailingSlash: 'never'` + serialize strip + `_redirects` |
| Sitemap i18n mapped `it-IT` to both `/` and `/it/` | High | Dropped `@astrojs/sitemap` i18n helper; reciprocal `it` / `en` / `x-default` in serialize |
| SSR photo routes missing from sitemap | High | `customPages` for `/[lang]/photos` + seed albums |
| Empty 404 body for unknown albums | High | `Astro.rewrite('/404')` |
| `/admin` redirected to non-existent `/{lang}/admin` | High | Middleware no longer localizes `/admin`; footer links `/admin` + `rel="nofollow"` |
| No structured data | Medium | `WebSite` + `Person` JSON-LD in `BaseLayout` |
| No `<link rel="sitemap">` | Low | Added in head |

## Already in good shape

- Unique titles/descriptions per route + locale (`seo.*` UI keys)
- One H1 per page, semantic `<main>`, `lang` on `<html>`, viewport
- Reciprocal hreflang + self + x-default → IT in HTML head
- `robots.txt` disallows `/admin` and `/api/`; admin `noindex,nofollow`
- Prerendered public pages emit meaningful initial HTML (titles, headings, links, meta)
- Root `/` uses **302** language negotiation (expected for crawlers)

## Remaining gaps (need live CF / domain / content)

1. **Dynamic albums after deploy** — sitemap only includes seed albums at build time. New admin albums need a rebuild or a Worker-generated sitemap.
2. **R2 photo URLs / CDN** — confirm public photo URLs are HTTPS, cacheable, and return 200 once the bucket is bound.
3. **Custom OG images** — default `logo.jpg` only; per-album/share images optional later.
4. **Photo captions** — alts are `{album} (n)` until per-photo metadata exists.
5. **Search Console / indexing** — submit `https://tcdev.xyz/sitemap-index.xml` after production deploy; verify host + hreflang.
6. **Core Web Vitals** — not measured here (needs field data on the live domain).
7. **404 HTTP status on CF Pages** for SSR rewrites — verify in production that `Astro.rewrite('/404')` returns real 404, not 200.

## Measurement after deploy

- Fetch `/robots.txt`, `/sitemap-index.xml`, and 2–3 canonical HTML pages; confirm status, canonical, hreflang set.
- URL Inspection on `/it`, `/en`, `/it/projects`, `/it/photos`.
- Confirm `/` → 302 → `/it` or `/en`, and trailing-slash URLs 301 to non-slash.
