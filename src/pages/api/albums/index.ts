import type { APIRoute } from 'astro';
import { slugify, type Album } from '../../../lib/albums';
import { isAuthorized, unauthorized } from '../../../lib/auth';
import { listAlbums, saveAlbum } from '../../../lib/storage';

export const prerender = false;

export const GET: APIRoute = async ({ request, locals, url }) => {
  const includeArchived = url.searchParams.get('all') === '1';
  if (includeArchived && !isAuthorized(request, locals)) return unauthorized();
  const albums = await listAlbums(locals, { includeArchived });
  return Response.json({ albums, mock: !locals?.runtime?.env?.PHOTOS_BUCKET });
};

export const POST: APIRoute = async ({ request, locals }) => {
  if (!isAuthorized(request, locals)) return unauthorized();
  let body: {
    nameIt?: string;
    nameEn?: string;
    descriptionIt?: string;
    descriptionEn?: string;
    slug?: string;
  };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid JSON' }, { status: 400 });
  }
  if (!body.nameIt || !body.nameEn) {
    return Response.json({ error: 'nameIt and nameEn required' }, { status: 400 });
  }
  const now = new Date().toISOString();
  const id = crypto.randomUUID();
  const album: Album = {
    id,
    slug: body.slug ? slugify(body.slug) : slugify(body.nameEn),
    name: { it: body.nameIt, en: body.nameEn },
    description: {
      it: body.descriptionIt ?? '',
      en: body.descriptionEn ?? '',
    },
    archived: false,
    createdAt: now,
    updatedAt: now,
  };
  await saveAlbum(album, locals);
  return Response.json({ album }, { status: 201 });
};
