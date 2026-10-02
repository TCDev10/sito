import type { APIRoute } from 'astro';
import {
  adminTokenCookie,
  clearAdminTokenCookie,
  getAdminToken,
  isAuthorized,
  isLocalDev,
  tokenMatches,
} from '../../lib/auth';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals }) => {
  return Response.json({
    ok: isAuthorized(request, locals),
    tokenConfigured: Boolean(getAdminToken(locals)),
  });
};

export const POST: APIRoute = async ({ request, locals }) => {
  let body: { token?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const expected = getAdminToken(locals);

  // Production / preview without ADMIN_TOKEN: refuse (fail closed).
  if (!expected) {
    if (!isLocalDev()) {
      return Response.json(
        { error: 'ADMIN_TOKEN is not configured' },
        { status: 503 },
      );
    }
    // Local astro dev only: accept any non-empty token for mock admin UX.
    const soft = (body.token || '').trim() || 'dev';
    return new Response(JSON.stringify({ ok: true, mock: true }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'set-cookie': adminTokenCookie(soft, request),
      },
    });
  }

  if (!tokenMatches(body.token, expected)) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'set-cookie': adminTokenCookie(body.token!, request),
    },
  });
};

export const DELETE: APIRoute = async ({ request }) => {
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'set-cookie': clearAdminTokenCookie(request),
    },
  });
};
