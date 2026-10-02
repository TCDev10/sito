# SEO + GEO notes (portfolio rebuild)

Audit + remediation on `feat/portfolio-rebuild` (Astro, IT/EN, Cloudflare Pages).  
No rankings, traffic, or Search Console claims - repo/build evidence only.  
Bios stay locked (no surname, no em dashes). Contacts: email@tcdev.xyz, IG TCDev, LinkedIn tcdev0, GH TCDev10.

## Fixed earlier

| Finding | Severity | Fix |
|---------|----------|-----|
| Sitemap listed `/` (302 Accept-Language redirect) | High | Filtered out of sitemap |
| Trailing-slash vs canonical mismatch | High | `trailingSlash: 'never'` + serialize + `_redirects` |
| Bad sitemap i18n for prefixed default locale | High | Manual reciprocal `it` / `en` / `x-default` |
| SSR photo routes missing from sitemap | High | `customPages` for photos + seed albums |
| Empty 404 for unknown albums | High | `Astro.rewrite('/404')` |
| `/admin` localized incorrectly | High | Middleware keeps `/admin`; footer `rel="nofollow"` |
| No structured data | Medium | WebSite + Person JSON-LD |
| GEO briefing missing | Medium | `llms.txt` + `llms-full.txt` + robots Allow |

## Deeper pass (this commit)

### On-page + content

- Stronger unique titles/descriptions with natural locality/role terms (Bergamo, developer/photographer, paesaggi, ritratti, eventi, TCDev) without stuffing.
- Deeper copy on Home (bridge sentence + dual CTAs), Projects, Photos, About (dev + photo work sections), Contact.
- Internal links: Dev ↔ Photo cross-asides, About CTAs, footer page list, contact shortcuts.
- Visible FAQ on About (5 Q&As) matching locked facts; `FAQPage` JSON-LD only for those visible answers.
- Album seed descriptions slightly richer; album pages use breadcrumbs.

### Structured data + local/person signals

- Person: `jobTitle`, `addressLocality` Bergamo, `addressRegion` Lombardia, `addressCountry` IT, `sameAs`, expanded `knowsAbout`, `image`, `alternateName` TCDev/TCDev10.
- WebSite: `author` + `publisher` → Person.
- `BreadcrumbList` on About, Projects, Photos, Contact, album pages (visible crumb nav when depth > 1).
- `FAQPage` on About only.

### GEO

- `llms.txt` / `llms-full.txt` updated (FAQ mirror, album slugs, Bergamo, About FAQ note).
- Key facts remain in **visible HTML**, not only llms files.
- `rel="describedby"` → `/llms.txt`; robots still Allows both files.
- Added standard `/.well-known/security.txt` (RFC 9116 contact). No invented well-known “standards”.
- **Agentic Resource Discovery / AI Catalog**: `/.well-known/ai-catalog.json` (AICatalogManifest `specVersion` 1.0) lists llms, llms-full, and IT/EN home HTML entries with `urn:air:` ids and representativeQueries. Discovery signals: `Agentmap:` in robots.txt, HTML `<link rel="ai-catalog">` in BaseLayout, HTTP `Link` on `/*`. WebMCP skipped (static portfolio; origin trial / little value).

### Performance / crawl hygiene

- Self-hosted variable fonts (`@fontsource-variable/dm-sans`, `instrument-sans`) instead of render-blocking Google Fonts CSS.
- Images: `decoding="async"`, width/height (or defaults), `sizes` on album grids; first two album images `loading="eager"`.
- Album card heading level prop (h2 vs h3) for outline sanity.
- 404: `noindex`, bilingual message, links to `/it` and `/en` (and projects/photos).
- Admin remains `noindex,nofollow`; robots Disallow `/admin` and `/api/`.

## Post-deploy checklist (honest, off-site)

You must do these after merge/deploy; the repo cannot finish them:

1. **Google Search Console** - verify `https://tcdev.xyz`, submit `https://tcdev.xyz/sitemap-index.xml`, inspect `/it`, `/en`, `/it/projects`, `/it/photos`, `/it/about`.
2. **Bing Webmaster** (optional) - same sitemap submit.
3. **Confirm live HTML** - fetch robots, sitemap, llms.txt, a few pages: status codes, canonical, hreflang reciprocity, JSON-LD validity (Rich Results Test / Schema validator).
4. **Trailing slash + `/` 302** - confirm CF Pages applies `_redirects` and language negotiation.
5. **404 status** - confirm `Astro.rewrite('/404')` returns HTTP 404 (not soft 200) on unknown albums.
6. **Photos** - upload real images via admin; empty albums do not rank for photo intent. Add meaningful alts/captions when metadata exists.
7. **OG images** - still default `logo.jpg`; consider per-page or per-album shares later.
8. **Core Web Vitals** - measure on the live domain (CrUX / PageSpeed Insights); not claimed from this build.
9. **Authority** - backlinks, citations, consistent NAP-like signals on IG/LinkedIn/GitHub/profiles pointing to tcdev.xyz. No fake reviews or fabricated rankings.
10. **Dynamic albums** - new admin albums need rebuild or a Worker sitemap, or they stay out of XML until then.

## Measurement

- Track queries and pages in GSC over weeks; compare impressions for brand (TCDev) and local/role terms only after indexation.
- Do not treat schema or llms.txt alone as a ranking guarantee.
