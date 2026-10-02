import type { APIRoute } from 'astro';
import { getAdminToken, isAuthorized } from '../../lib/auth';

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
  if (!expected) {
    // Dev without token: accept any login and set a soft cookie
    const soft = body.token || 'dev';
    return new Response(JSON.stringify({ ok: true, mock: true }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'set-cookie': `admin_token=${encodeURIComponent(soft)}; Path=/; HttpOnly; SameSite=Lax`,
      },
    });
  }
  if (body.token !== expected) {
    return Response.json({ error: 'Invalid token' }, { status: 401 });
  }
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'set-cookie': `admin_token=${encodeURIComponent(body.token)}; Path=/; HttpOnly; SameSite=Lax; Secure`,
    },
  });
};
