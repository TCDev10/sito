import { defineMiddleware } from 'astro:middleware';
import { negotiateLocale } from './i18n';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  // Defense in depth for SSR routes that hit the Worker (admin, photos, api).
  // Static prerendered pages use build.format:'file' + public/_redirects instead.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return context.redirect(`${pathname.slice(0, -1)}${search}`, 301);
  }

  // Root: browser-language redirect into /it or /en (302 is correct for lang negotiation).
  if (pathname === '/' || pathname === '') {
    const locale = negotiateLocale(context.request.headers.get('accept-language'));
    return context.redirect(`/${locale}`, 302);
  }

  // Bare locale-less known public routes -> negotiated locale.
  // Keep /admin unprefixed (there is no /{lang}/admin page).
  const bare = pathname.match(/^\/(projects|photos|about|contact)(\/.*)?$/i);
  if (bare) {
    const locale = negotiateLocale(context.request.headers.get('accept-language'));
    return context.redirect(`/${locale}${pathname}${search}`, 302);
  }

  return next();
});
