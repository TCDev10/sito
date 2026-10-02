export type Album = {
  id: string;
  slug: string;
  /** Labels per locale */
  name: { it: string; en: string };
  description: { it: string; en: string };
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
      it: 'Paesaggi, natura e outdoor.',
      en: 'Landscapes, nature, and outdoors.',
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
      it: 'Ritratti e persone.',
      en: 'Portraits and people.',
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
      it: 'Eventi e reportage leggero.',
      en: 'Events and light reportage.',
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
