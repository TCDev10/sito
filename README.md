# tcdev.xyz

Portfolio personale di Riccardo "TCDev" — developer & fotografo.

- 🌐 [tcdev.xyz](https://tcdev.xyz)
- 🛠️ Multitool: [tools.tcdev.xyz](https://tools.tcdev.xyz)
- 📸 Instagram: [@tcdev](https://instagram.com/tcdev)
- 💼 LinkedIn: [tcdev0](https://linkedin.com/in/tcdev0)

## Stack

- **[Astro](https://astro.build)** — sito statico, bilingue (IT/EN)
- **[Tailwind CSS 4](https://tailwindcss.com)** — styling (via `@tailwindcss/vite`)
- **Content Collections** — progetti in Markdown con schema zod
- **Cloudflare Pages** — hosting e deploy
- **Cloudflare R2** — hosting foto (sotto `/media/`)

## Struttura

```
src/
├── components/     # HomeContent, ProjectsContent, PhotosContent, ContactsContent, NavBar, Footer, ProjectCard
├── content/
│   ├── config.ts   # Schema zod (projects)
│   └── projects/   # Un .md per progetto
├── i18n/ui.ts      # Dizionari IT/EN + helper (useTranslations, localizeUrl, alternateUrl)
├── layouts/        # BaseLayout.astro
├── pages/          # Route IT root, EN sotto /en/
└── styles/global.css
```

## Comandi

```bash
npm install        # setup
npm run dev        # dev server su localhost:4321
npm run build      # build statico in dist/
npm run preview    # serve dist/
```

## Aggiungere un progetto

Crea `src/content/projects/<slug>.md`:

```yaml
---
title: Nome Progetto
date: 2025-01-01
excerpt: Descrizione italiana (1-2 frasi).
excerptEn: English description (1-2 sentences).
stack: [TypeScript, Astro]
status: active          # active | wip | comingsoon | archived
repoUrl: https://github.com/TCDev10/...
demoUrl: https://...    # opzionale
featured: true          # appare in home
order: 1                # ordinamento
---
```

## Foto

Le foto sono servite da Cloudflare R2. La pagina `/foto` legge un manifest JSON dai media host — vedi `PhotosContent.astro` per la config.

## License

© Riccardo "TCDev" — Tutti i diritti riservati.
