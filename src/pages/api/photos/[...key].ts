import type { APIRoute } from 'astro';
import { getPhotoObject } from '../../../lib/storage';

export const prerender = false;

function sanitizePhotoKey(raw: string | undefined): string | null {
  if (!raw) return null;
  // Astro rest params may join with /; reject traversal and non-album keys.
  let key = raw;
  try {
    key = decodeURIComponent(raw);
  } catch {
    return null;
  }
  if (key.includes('..') || key.includes('\0') || key.startsWith('/')) return null;
  if (!key.startsWith('albums/')) return null;
  return key;
}

export const GET: APIRoute = async ({ params, locals }) => {
  const key = sanitizePhotoKey(params.key);
  if (!key) return new Response('Not found', { status: 404 });
  const obj = await getPhotoObject(key, locals);
  if (!obj) return new Response('Not found', { status: 404 });
  return new Response(obj.body, {
    headers: {
      'content-type': obj.contentType,
      'cache-control': 'public, max-age=31536000, immutable',
      'x-content-type-options': 'nosniff',
    },
  });
};
