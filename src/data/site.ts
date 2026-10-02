export const SITE = {
  name: 'TCDev',
  domain: 'tcdev.xyz',
  url: 'https://tcdev.xyz',
  email: 'email@tcdev.xyz',
  localeDefault: 'it' as const,
  locales: ['it', 'en'] as const,
  social: {
    instagram: 'https://instagram.com/TCDev',
    linkedin: 'https://linkedin.com/in/tcdev0',
    github: 'https://github.com/TCDev10',
    email: 'mailto:email@tcdev.xyz',
  },
  gear: [
    'Sony A6700',
    'Tamron 28-75mm f/2.8 Di III RXD',
    'Sony 18-105mm G',
  ],
} as const;

export type Locale = (typeof SITE.locales)[number];
