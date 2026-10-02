import { SITE, type Locale } from '../data/site';

export function isLocale(value: string): value is Locale {
  return (SITE.locales as readonly string[]).includes(value);
}

export function otherLocale(locale: Locale): Locale {
  return locale === 'it' ? 'en' : 'it';
}

/** Swap /it/... <-> /en/... keeping the rest of the path. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  const stripped = clean.replace(/^\/(it|en)(?=\/|$)/, '') || '/';
  return `/${locale}${stripped === '/' ? '' : stripped}`;
}

export function negotiateLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return SITE.localeDefault;
  const lower = acceptLanguage.toLowerCase();
  if (lower.includes('it')) return 'it';
  if (lower.includes('en')) return 'en';
  return SITE.localeDefault;
}
