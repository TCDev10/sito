export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';
export type Lang = keyof typeof languages;

export const ui = {
  it: {
    'site.title': 'TCDev',
    'site.description': 'Riccardo "TCDev" — developer e fotografo da Bergamo. Progetti software e fotografia.',
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.photos': 'Foto',
    'nav.contacts': 'Contatti',
    'hero.greeting': 'Ciao, sono Riccardo',
    'hero.role': 'Studente · Developer · Fotografo · Tinkerer',
    'hero.bio': "Di Bergamo. Scrivo codice, scatto foto e smonto le cose per capire come funzionano.",
    'hero.cta.projects': 'Vedi i progetti',
    'hero.cta.photos': 'Guarda le foto',
    'home.dev.title': 'Sviluppo',
    'home.dev.text': 'Costruisco app desktop, web e tool di automazione. TypeScript, Python, C#, Java — e tutto ciò che risolve un problema reale.',
    'home.photo.title': 'Fotografia',
    'home.photo.text': 'Paesaggi, ritratti ed eventi. La fotografia è il mio modo di fermare il tempo e raccontare storie.',
    'home.projects.title': 'Progetti in evidenza',
    'home.projects.all': 'Tutti i progetti →',
    'home.photos.title': 'Ultime foto',
    'home.photos.all': 'Tutte le foto →',
    'home.title': 'TCDev — Developer & Fotografo',
    'home.description': 'Portfolio di Riccardo "TCDev": progetti software e fotografia.',
    'home.featured': 'Progetti in evidenza',
    'home.latest': 'Ultime foto',
    'home.viewall': 'Vedi tutto',
    'hero.subtitle': 'Studente · Developer · Fotografo · Tinkerer — Bergamo',
    'projects.title': 'Progetti',
    'projects.heading': 'Progetti',
    'projects.description': 'I progetti software di TCDev: app, tool ed esperimenti.',
    'projects.subtitle': 'Software, tool ed esperimenti che ho costruito.',
    'projects.comingsoon': 'In arrivo',
    'projects.featured': 'In evidenza',
    'projects.other': 'Altri progetti',
    'projects.repo': 'Codice',
    'projects.demo': 'Demo',
    'projects.active': 'Attivo',
    'projects.wip': 'In lavorazione',
    'projects.archived': 'Archiviato',
    'projects.visit': 'Visita',
    'photos.title': 'Foto',
    'photos.description': 'Fotografia di TCDev: paesaggi, ritratti ed eventi.',
    'photos.subtitle': 'Paesaggi, ritratti ed eventi.',
    'photos.all': 'Tutte',
    'photos.landscapes': 'Paesaggi',
    'photos.portraits': 'Ritratti',
    'photos.events': 'Eventi',
    'photos.follow': 'Seguimi su Instagram',
    'photos.loading': 'Caricamento foto…',
    'photos.empty': 'Foto in arrivo — nel frattempo seguimi su Instagram.',
    'contacts.title': 'Contatti',
    'contacts.heading': 'Contatti',
    'contacts.description': 'Contatta TCDev: email e social.',
    'contacts.subtitle': 'Scrivimi per collaborazioni, progetti o servizi fotografici.',
    'contacts.email': 'Email',
    'contacts.social': 'Social',
    'notfound.title': '404',
    'notfound.heading': 'Pagina non trovata',
    'notfound.message': 'La pagina che cerchi non esiste o è stata spostata.',
    'notfound.home': 'Torna alla home',
    '404.title': 'Pagina non trovata',
    '404.text': 'La pagina che cerchi non esiste o è stata spostata.',
    '404.back': 'Torna alla home',
    'footer.tagline': 'Developer & fotografo — Bergamo, Italia',
    'footer.explore': 'Esplora',
    'footer.rights': 'Tutti i diritti riservati.',
  },
  en: {
    'site.title': 'TCDev',
    'site.description': 'Riccardo "TCDev" — developer and photographer from Bergamo, Italy. Software projects and photography.',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.photos': 'Photos',
    'nav.contacts': 'Contacts',
    'hero.greeting': "Hi, I'm Riccardo",
    'hero.role': 'Student · Developer · Photographer · Tinkerer',
    'hero.bio': "From Bergamo, Italy. I write code, take photos, and take things apart to understand how they work.",
    'hero.cta.projects': 'View projects',
    'hero.cta.photos': 'See photos',
    'home.dev.title': 'Development',
    'home.dev.text': 'I build desktop apps, web apps and automation tools. TypeScript, Python, C#, Java — anything that solves a real problem.',
    'home.photo.title': 'Photography',
    'home.photo.text': 'Landscapes, portraits and events. Photography is my way of freezing time and telling stories.',
    'home.projects.title': 'Featured projects',
    'home.projects.all': 'All projects →',
    'home.photos.title': 'Latest photos',
    'home.photos.all': 'All photos →',
    'home.title': 'TCDev — Developer & Photographer',
    'home.description': 'Portfolio of Riccardo "TCDev": software projects and photography.',
    'home.featured': 'Featured projects',
    'home.latest': 'Latest photos',
    'home.viewall': 'View all',
    'hero.subtitle': 'Student · Developer · Photographer · Tinkerer — Bergamo, Italy',
    'projects.title': 'Projects',
    'projects.heading': 'Projects',
    'projects.description': 'Software projects by TCDev: apps, tools and experiments.',
    'projects.subtitle': 'Software, tools and experiments I have built.',
    'projects.comingsoon': 'Coming soon',
    'projects.featured': 'Featured',
    'projects.other': 'Other projects',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'projects.active': 'Active',
    'projects.wip': 'Work in progress',
    'projects.archived': 'Archived',
    'projects.visit': 'Visit',
    'photos.title': 'Photos',
    'photos.description': 'Photography by TCDev: landscapes, portraits and events.',
    'photos.subtitle': 'Landscapes, portraits and events.',
    'photos.all': 'All',
    'photos.landscapes': 'Landscapes',
    'photos.portraits': 'Portraits',
    'photos.events': 'Events',
    'photos.follow': 'Follow me on Instagram',
    'photos.loading': 'Loading photos…',
    'photos.empty': 'Photos coming soon — meanwhile follow me on Instagram.',
    'contacts.title': 'Contacts',
    'contacts.heading': 'Contacts',
    'contacts.description': 'Contact TCDev: email and socials.',
    'contacts.subtitle': 'Get in touch for collaborations, projects or photo shoots.',
    'contacts.email': 'Email',
    'contacts.social': 'Social',
    'notfound.title': '404',
    'notfound.heading': 'Page not found',
    'notfound.message': 'The page you are looking for does not exist or has been moved.',
    'notfound.home': 'Back to home',
    '404.title': 'Page not found',
    '404.text': 'The page you are looking for does not exist or has been moved.',
    '404.back': 'Back to home',
    'footer.tagline': 'Developer & photographer — Bergamo, Italy',
    'footer.explore': 'Explore',
    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)['it'];

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return defaultLang;
}

export function localizeUrl(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/en${clean}`;
}

/** Returns the equivalent path in the other language */
export function alternateUrl(url: URL, lang: Lang): string {
  const path = url.pathname;
  if (lang === 'en') {
    // current is en -> alternate is it
    return path.replace(/^\/en(?=\/|$)/, '') || '/';
  }
  return `/en${path === '/' ? '/' : path}`;
}
