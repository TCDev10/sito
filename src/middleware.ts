import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname, search } = context.url;

  // www -> apex (only for requests that reach the Worker; static assets need a CF Redirect Rule).
  const host = (context.request.headers.get('host') || context.url.host).toLowerCase();
  if (host === 'www.tcdev.xyz') {
    return new Response(null, { status: 301, headers: { Location: `https://tcdev.xyz${pathname}${search}` } });
  }

  // Legacy / alias URLs (pre-rebuild site) -> permanent new equivalents.
  if (pathname === '/sitemap.xml') return context.redirect('/sitemap-index.xml', 301);
  if (/^\/foto(\/.*)?$/i.test(pathname)) return context.redirect('/it/photos', 301);

  // Defense in depth for SSR routes that hit the Worker (admin, photos, api).
  // Static prerendered pages use build.format:'file' + public/_redirects instead.
  if (pathname.length > 1 && pathname.endsWith('/')) {
    return context.redirect(`${pathname.slice(0, -1)}${search}`, 301);
  }

  // Root: permanent redirect to the default locale (x-default = /it).
  if (pathname === '/' || pathname === '') {
    return context.redirect(`/it${search}`, 301);
  }

  // Bare locale-less known public routes -> /it (301).
  // Keep /admin unprefixed (there is no /{lang}/admin page).
  const bare = pathname.match(/^\/(projects|photos|about|contact)(\/.*)?$/i);
  if (bare) {
    return context.redirect(`/it${pathname.toLowerCase()}${search}`, 301);
  }

  return next();
});
