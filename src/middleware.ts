import { defineMiddleware } from 'astro:middleware';
import { negotiateLocale } from './i18n';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;

  // Root: browser-language redirect into /it or /en
  if (pathname === '/' || pathname === '') {
    const locale = negotiateLocale(context.request.headers.get('accept-language'));
    return context.redirect(`/${locale}`, 302);
  }

  // Bare locale-less known routes -> default negotiation
  const bare = pathname.match(
    /^\/(projects|photos|about|contact|admin)(\/.*)?$/i,
  );
  if (bare) {
    const locale = negotiateLocale(context.request.headers.get('accept-language'));
    return context.redirect(`/${locale}${pathname}`, 302);
  }

  return next();
});
