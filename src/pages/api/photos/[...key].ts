import type { APIRoute } from 'astro';
import { getPhotoObject } from '../../../lib/storage';

export const prerender = false;

export const GET: APIRoute = async ({ params, locals }) => {
  const key = params.key;
  if (!key) return new Response('Not found', { status: 404 });
  const obj = await getPhotoObject(key, locals);
  if (!obj) return new Response('Not found', { status: 404 });
  return new Response(obj.body, {
    headers: {
      'content-type': obj.contentType,
      'cache-control': 'public, max-age=31536000, immutable',
    },
  });
};
