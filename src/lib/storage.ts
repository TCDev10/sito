import { SEED_ALBUMS, type Album, type Photo } from './albums';

const ALBUMS_KEY = 'albums.json';

type AlbumFile = { albums: Album[]; photos: Photo[] };

/** Process-local mock when R2 is unbound (dev / build / preview). */
let mockStore: AlbumFile | null = null;

function seedStore(): AlbumFile {
  return {
    albums: structuredClone(SEED_ALBUMS),
    photos: [],
  };
}

function getMock(): AlbumFile {
  if (!mockStore) mockStore = seedStore();
  return mockStore;
}

function getBucket(locals?: App.Locals): PhotosBucket | undefined {
  return locals?.runtime?.env?.PHOTOS_BUCKET;
}

async function readFile(bucket: PhotosBucket | undefined): Promise<AlbumFile> {
  if (!bucket) return getMock();
  const obj = await bucket.get(ALBUMS_KEY);
  if (!obj) {
    const seeded = seedStore();
    await bucket.put(ALBUMS_KEY, JSON.stringify(seeded), {
      httpMetadata: { contentType: 'application/json' },
    });
    return seeded;
  }
  return JSON.parse(await obj.text()) as AlbumFile;
}

async function writeFile(
  bucket: PhotosBucket | undefined,
  data: AlbumFile,
): Promise<void> {
  if (!bucket) {
    mockStore = data;
    return;
  }
  await bucket.put(ALBUMS_KEY, JSON.stringify(data), {
    httpMetadata: { contentType: 'application/json' },
  });
}

export async function listAlbums(
  locals?: App.Locals,
  opts?: { includeArchived?: boolean },
): Promise<Album[]> {
  const data = await readFile(getBucket(locals));
  return data.albums.filter((a) => opts?.includeArchived || !a.archived);
}

export async function getAlbumBySlug(
  slug: string,
  locals?: App.Locals,
): Promise<Album | undefined> {
  const albums = await listAlbums(locals, { includeArchived: true });
  return albums.find((a) => a.slug === slug || a.id === slug);
}

export async function getAlbumById(
  id: string,
  locals?: App.Locals,
): Promise<Album | undefined> {
  const data = await readFile(getBucket(locals));
  return data.albums.find((a) => a.id === id);
}

export async function saveAlbum(
  album: Album,
  locals?: App.Locals,
): Promise<Album> {
  const bucket = getBucket(locals);
  const data = await readFile(bucket);
  const idx = data.albums.findIndex((a) => a.id === album.id);
  if (idx >= 0) data.albums[idx] = album;
  else data.albums.push(album);
  await writeFile(bucket, data);
  return album;
}

export async function archiveAlbum(
  id: string,
  archived: boolean,
  locals?: App.Locals,
): Promise<Album | undefined> {
  const album = await getAlbumById(id, locals);
  if (!album) return undefined;
  album.archived = archived;
  album.updatedAt = new Date().toISOString();
  return saveAlbum(album, locals);
}

export async function listPhotos(
  albumId: string,
  locals?: App.Locals,
): Promise<Photo[]> {
  const data = await readFile(getBucket(locals));
  return data.photos.filter((p) => p.albumId === albumId);
}

export async function addPhoto(
  photo: Photo,
  bytes: ArrayBuffer,
  contentType: string,
  locals?: App.Locals,
): Promise<Photo> {
  const bucket = getBucket(locals);
  const data = await readFile(bucket);
  if (bucket) {
    await bucket.put(photo.key, bytes, {
      httpMetadata: { contentType },
    });
    photo.url = `/api/photos/${encodeURIComponent(photo.key)}`;
  } else {
    // Mock: data-URL stub so the admin UI can preview without R2
    const b64 = arrayBufferToBase64(bytes);
    photo.url = `data:${contentType};base64,${b64}`;
  }
  data.photos.push(photo);
  await writeFile(bucket, data);
  return photo;
}

export async function getPhotoObject(
  key: string,
  locals?: App.Locals,
): Promise<{ body: ArrayBuffer; contentType: string } | null> {
  const bucket = getBucket(locals);
  if (!bucket) return null;
  const obj = await bucket.get(key);
  if (!obj) return null;
  return {
    body: await obj.arrayBuffer(),
    contentType: obj.httpMetadata?.contentType ?? 'image/webp',
  };
}

export function usingMockStorage(locals?: App.Locals): boolean {
  return !getBucket(locals);
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunk = 0x8000;
  let binary = '';
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}
