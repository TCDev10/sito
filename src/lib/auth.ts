export function getAdminToken(locals?: App.Locals): string | undefined {
  return (
    locals?.runtime?.env?.ADMIN_TOKEN ||
    import.meta.env.ADMIN_TOKEN ||
    undefined
  );
}

export function extractBearer(request: Request): string | undefined {
  const header = request.headers.get('authorization');
  if (header?.toLowerCase().startsWith('bearer ')) {
    return header.slice(7).trim();
  }
  const cookie = request.headers.get('cookie') ?? '';
  const match = cookie.match(/(?:^|;\s*)admin_token=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : undefined;
}

export function isAuthorized(request: Request, locals?: App.Locals): boolean {
  const expected = getAdminToken(locals);
  // In local/dev without ADMIN_TOKEN, allow so the admin UI is usable with mock storage.
  if (!expected) {
    return import.meta.env.DEV === true || usingDevFallback();
  }
  const provided = extractBearer(request);
  return Boolean(provided && provided === expected);
}

function usingDevFallback(): boolean {
  // Build-time / preview without secrets: treat missing token as open only when
  // explicitly mocked. Production must set ADMIN_TOKEN.
  return !import.meta.env.PROD;
}

export function unauthorized(): Response {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  });
}
