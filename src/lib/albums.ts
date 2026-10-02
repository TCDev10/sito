export type Album = {
  id: string;
  slug: string;
  /** Labels per locale */
  name: { it: string; en: string };
  description: { it: string; en: string };
  /** Optional cover photo id; public pages fall back to first photo if missing. */
  coverPhotoId?: string;
  archived: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Photo = {
  id: string;
  albumId: string;
  key: string;
  /** Public or relative URL when available */
  url: string;
  width?: number;
  height?: number;
  createdAt: string;
};

export const SEED_ALBUMS: Album[] = [
  {
    id: 'landscapes',
    slug: 'paesaggi-natura',
    name: { it: 'Paesaggi / natura', en: 'Landscapes / nature' },
    description: {
      it: 'Paesaggi, natura e outdoor. Selezione fotografica di TCDev.',
      en: 'Landscapes, nature, and outdoors. Selected photography by TCDev.',
    },
    archived: false,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'portraits',
    slug: 'ritratti-persone',
    name: { it: 'Ritratti / persone', en: 'Portraits / people' },
    description: {
      it: 'Ritratti e persone. Portfolio fotografico di TCDev.',
      en: 'Portraits and people. TCDev photographic portfolio.',
    },
    archived: false,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
  {
    id: 'events',
    slug: 'eventi',
    name: { it: 'Eventi', en: 'Events' },
    description: {
      it: 'Eventi e reportage leggero. Portfolio fotografico di TCDev.',
      en: 'Events and light reportage. TCDev photographic portfolio.',
    },
    archived: false,
    createdAt: '2026-01-01T00:00:00.000Z',
    updatedAt: '2026-01-01T00:00:00.000Z',
  },
];

export function slugify(input: string): string {
  return input
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 64);
}

/** Cover photo if set and still present; otherwise first photo. */
export function resolveCoverPhoto(album: Album, photos: Photo[]): Photo | undefined {
  if (album.coverPhotoId) {
    const cover = photos.find((p) => p.id === album.coverPhotoId);
    if (cover) return cover;
  }
  return photos[0];
}
