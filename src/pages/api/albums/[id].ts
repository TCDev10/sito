import type { APIRoute } from 'astro';
import { isAuthorized, unauthorized } from '../../../lib/auth';
import {
  archiveAlbum,
  getAlbumById,
  listPhotos,
  saveAlbum,
} from '../../../lib/storage';

export const prerender = false;

export const GET: APIRoute = async ({ params, request, locals }) => {
  const album = await getAlbumById(params.id!, locals);
  if (!album) return Response.json({ error: 'Not found' }, { status: 404 });
  if (album.archived && !isAuthorized(request, locals)) return unauthorized();
  const photos = await listPhotos(album.id, locals);
  return Response.json({ album, photos });
};

export const PATCH: APIRoute = async ({ params, request, locals }) => {
  if (!isAuthorized(request, locals)) return unauthorized();
  const album = await getAlbumById(params.id!, locals);
  if (!album) return Response.json({ error: 'Not found' }, { status: 404 });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  if (typeof body.nameIt === 'string') album.name.it = body.nameIt;
  if (typeof body.nameEn === 'string') album.name.en = body.nameEn;
  if (typeof body.descriptionIt === 'string') album.description.it = body.descriptionIt;
  if (typeof body.descriptionEn === 'string') album.description.en = body.descriptionEn;
  if (typeof body.slug === 'string') album.slug = body.slug;
  if (typeof body.archived === 'boolean') album.archived = body.archived;

  if ('coverPhotoId' in body) {
    const raw = body.coverPhotoId;
    if (raw !== null && raw !== undefined && typeof raw !== 'string') {
      return Response.json({ error: 'coverPhotoId must be a string or null' }, { status: 400 });
    }
    if (raw == null || raw === '') {
      delete album.coverPhotoId;
    } else {
      const albumPhotos = await listPhotos(album.id, locals);
      if (!albumPhotos.some((p) => p.id === raw)) {
        return Response.json({ error: 'Photo not found in album' }, { status: 400 });
      }
      album.coverPhotoId = raw;
    }
  }

  album.updatedAt = new Date().toISOString();
  await saveAlbum(album, locals);
  const photos = await listPhotos(album.id, locals);
  return Response.json({ album, photos });
};

export const DELETE: APIRoute = async ({ params, request, locals }) => {
  if (!isAuthorized(request, locals)) return unauthorized();
  const album = await archiveAlbum(params.id!, true, locals);
  if (!album) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json({ album });
};
