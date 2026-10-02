import type { APIRoute } from 'astro';
import { isAuthorized, unauthorized } from '../../lib/auth';
import { addPhoto, getAlbumById } from '../../lib/storage';
import type { Photo } from '../../lib/albums';

export const prerender = false;

/**
 * Accepts multipart upload already resized/converted to WebP on the client.
 * Server-side sharp is not used on Workers; see README for optional Node worker.
 */
export const POST: APIRoute = async ({ request, locals }) => {
  if (!isAuthorized(request, locals)) return unauthorized();

  const form = await request.formData();
  const albumId = String(form.get('albumId') ?? '');
  const file = form.get('file');
  const width = Number(form.get('width') || 0) || undefined;
  const height = Number(form.get('height') || 0) || undefined;

  if (!albumId || !(file instanceof File)) {
    return Response.json({ error: 'albumId and file required' }, { status: 400 });
  }

  const album = await getAlbumById(albumId, locals);
  if (!album) return Response.json({ error: 'Album not found' }, { status: 404 });

  const id = crypto.randomUUID();
  const key = `albums/${albumId}/${id}.webp`;
  const bytes = await file.arrayBuffer();
  const contentType = file.type || 'image/webp';

  const photo: Photo = {
    id,
    albumId,
    key,
    url: '',
    width,
    height,
    createdAt: new Date().toISOString(),
  };

  const saved = await addPhoto(photo, bytes, contentType, locals);
  return Response.json({ photo: saved }, { status: 201 });
};
