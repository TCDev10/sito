// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SEED_ALBUMS } from './src/lib/albums.ts';

const SITE_URL = 'https://tcdev.xyz';

/** Locale-prefixed public routes that SSR (not discovered by the sitemap crawl). */
const ssrPhotoPages = ['it', 'en'].flatMap((lang) => [
  `${SITE_URL}/${lang}/photos`,
  ...SEED_ALBUMS.filter((a) => !a.archived).map(
    (a) => `${SITE_URL}/${lang}/photos/${a.slug}`,
  ),
]);

function stripTrailingSlash(url) {
  if (url.endsWith('/') && url !== `${SITE_URL}/`) {
    return url.slice(0, -1);
  }
  return url;
}

/**
 * Build reciprocal hreflang links aligned with HTML head (it/en + x-default → IT).
 * Avoids @astrojs/sitemap i18n helper, which treats unprefixed `/` as default locale
 * even when prefixDefaultLocale is true.
 */
function localeAlternates(canonicalUrl) {
  const path = new URL(canonicalUrl).pathname.replace(/\/$/, '') || '/';
  const match = path.match(/^\/(it|en)(\/.*)?$/);
  if (!match) return undefined;
  const rest = match[2] || '';
  const itUrl = `${SITE_URL}/it${rest}`;
  const enUrl = `${SITE_URL}/en${rest}`;
  return [
    { url: itUrl, lang: 'it' },
    { url: enUrl, lang: 'en' },
    { url: itUrl, lang: 'x-default' },
  ];
}

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'never',
  // Cloudflare Pages 308s directory indexes (/it → /it/). With format:'directory'
  // that fought public/_redirects (/it/ → /it) and looped. Emit flat HTML files instead.
  build: {
    format: 'file',
  },
  output: 'server',
  adapter: cloudflare({
    imageService: 'compile',
  }),
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      // Do not use sitemap i18n: with prefixDefaultLocale it invents `/` as it-IT.
      filter: (page) => {
        const path = new URL(page).pathname.replace(/\/$/, '') || '/';
        if (path === '/') return false; // Accept-Language redirect only
        if (path.startsWith('/admin') || path.startsWith('/api')) return false;
        if (!/^\/(it|en)(\/|$)/.test(path)) return false;
        return true;
      },
      customPages: ssrPhotoPages,
      serialize(item) {
        const url = stripTrailingSlash(item.url);
        const links = localeAlternates(url);
        if (!links) return undefined;
        return {
          url,
          links,
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
