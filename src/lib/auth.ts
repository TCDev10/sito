export function getAdminToken(locals?: App.Locals): string | undefined {
  const fromRuntime = locals?.runtime?.env?.ADMIN_TOKEN;
  const fromEnv = import.meta.env.ADMIN_TOKEN;
  const raw =
    (typeof fromRuntime === 'string' && fromRuntime) ||
    (typeof fromEnv === 'string' && fromEnv) ||
    undefined;
  return raw?.trim() || undefined;
}

/** True only for local `astro dev`. Production/preview builds are fail-closed. */
export function isLocalDev(): boolean {
  return import.meta.env.DEV === true;
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

export function timingSafeEqual(a: string, b: string): boolean {
  const enc = new TextEncoder();
  const ab = enc.encode(a);
  const bb = enc.encode(b);
  const len = Math.max(ab.length, bb.length);
  let diff = ab.length ^ bb.length;
  for (let i = 0; i < len; i++) {
    diff |= (ab[i] ?? 0) ^ (bb[i] ?? 0);
  }
  return diff === 0;
}

export function tokenMatches(provided: string | undefined, expected: string): boolean {
  if (!provided) return false;
  return timingSafeEqual(provided, expected);
}

export function isAuthorized(request: Request, locals?: App.Locals): boolean {
  const expected = getAdminToken(locals);
  // Fail closed outside local dev when ADMIN_TOKEN is missing.
  if (!expected) {
    return isLocalDev();
  }
  return tokenMatches(extractBearer(request), expected);
}

/** Set-Cookie for admin_token: HttpOnly + SameSite=Lax; Secure on HTTPS/prod. */
export function adminTokenCookie(token: string, request: Request): string {
  const https =
    new URL(request.url).protocol === 'https:' || import.meta.env.PROD === true;
  const parts = [
    `admin_token=${encodeURIComponent(token)}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
  ];
  if (https) parts.push('Secure');
  return parts.join('; ');
}

export function clearAdminTokenCookie(request: Request): string {
  const https =
    new URL(request.url).protocol === 'https:' || import.meta.env.PROD === true;
  const parts = [
    'admin_token=',
    'Path=/',
    'HttpOnly',
    'SameSite=Lax',
    'Max-Age=0',
  ];
  if (https) parts.push('Secure');
  return parts.join('; ');
}

export function unauthorized(): Response {
  return new Response(JSON.stringify({ error: 'Unauthorized' }), {
    status: 401,
    headers: { 'content-type': 'application/json' },
  });
}
