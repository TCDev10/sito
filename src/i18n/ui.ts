export const languages = {
  it: 'Italiano',
  en: 'English',
} as const;

export const defaultLang = 'it';
export type Lang = keyof typeof languages;

export const ui = {
  it: {
    'site.title': 'TCDev',
    'site.description': 'Riccardo "TCDev" · developer e fotografo da Bergamo. Progetti software e fotografia.',
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.photos': 'Foto',
    'nav.contacts': 'Contatti',
    'nav.menu.open': 'Apri menu',
    'nav.menu.close': 'Chiudi menu',
    'hero.greeting': 'Riccardo · Bergamo, Italia',
    'hero.title.a': 'Costruisco',
    'hero.title.b': 'software',
    'hero.title.c': 'e racconto per',
    'hero.title.d': 'immagini',
    'hero.bio': "Studio, scrivo codice e scatto foto. Mi piace capire come funzionano le cose, e poi costruirne di mie. Qui raccolgo i progetti a cui tengo di più.",
    'hero.cta.projects': 'Vedi i progetti',
    'hero.cta.photos': 'Guarda le foto',
    'home.title': 'TCDev · Developer & Fotografo',
    'home.description': 'Portfolio di Riccardo "TCDev": progetti software e fotografia.',
    'home.featured': 'Progetti in evidenza',
    'home.latest': 'Ultime foto',
    'home.viewall.projects': 'Tutti i progetti',
    'home.viewall.photos': 'Tutte le foto',
    'projects.title': 'Progetti',
    'projects.heading': 'Cose che ho',
    'projects.heading.accent': 'costruito',
    'projects.description': 'I progetti software di TCDev: app, tool ed esperimenti.',
    'projects.subtitle': 'App, tool ed esperimenti: dal prototipo del weekend ai progetti che uso ogni giorno.',
    'projects.comingsoon': 'In arrivo',
    'projects.featured': 'In evidenza',
    'projects.repo': 'Codice',
    'projects.demo': 'Demo',
    'projects.active': 'Attivo',
    'projects.wip': 'In lavorazione',
    'projects.archived': 'Archiviato',
    'projects.visit': 'Visita',
    'photos.title': 'Foto',
    'photos.heading': 'Per',
    'photos.heading.accent': 'immagini',
    'photos.description': 'Fotografia di TCDev: paesaggi, ritratti ed eventi.',
    'photos.subtitle': 'Paesaggi, ritratti ed eventi.',
    'photos.all': 'Tutte',
    'photos.landscapes': 'Paesaggi',
    'photos.portraits': 'Ritratti',
    'photos.events': 'Eventi',
    'photos.follow': 'Seguimi su Instagram',
    'photos.loading': 'Caricamento foto…',
    'photos.empty': 'Foto in arrivo. Nel frattempo seguimi su Instagram.',
    'photos.error': 'Impossibile caricare le foto ora. Riprova più tardi.',
    'photos.close': 'Chiudi',
    'photos.prev': 'Foto precedente',
    'photos.next': 'Foto successiva',
    'contacts.title': 'Contatti',
    'contacts.heading': 'Parliamone',
    'contacts.description': 'Contatta TCDev: email e social.',
    'contacts.subtitle': 'Collaborazioni, progetti, servizi fotografici, o anche solo due chiacchiere.',
    'contacts.email': 'Email',
    'contacts.email.action': 'Scrivimi',
    'contacts.social': 'Altrove',
    'notfound.title': '404',
    'notfound.heading': 'Pagina non trovata',
    'notfound.message': 'La pagina che cerchi non esiste o è stata spostata.',
    'notfound.home': 'Torna alla home',
    'footer.tagline': 'Developer & fotografo · Bergamo, Italia',
    'footer.explore': 'Esplora',
    'footer.rights': 'Tutti i diritti riservati.',
  },
  en: {
    'site.title': 'TCDev',
    'site.description': 'Riccardo "TCDev" · developer and photographer from Bergamo, Italy. Software projects and photography.',
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.photos': 'Photos',
    'nav.contacts': 'Contacts',
    'nav.menu.open': 'Open menu',
    'nav.menu.close': 'Close menu',
    'hero.greeting': 'Riccardo · Bergamo, Italy',
    'hero.title.a': 'I build',
    'hero.title.b': 'software',
    'hero.title.c': 'and tell stories in',
    'hero.title.d': 'images',
    'hero.bio': "Student, coder and photographer. I like understanding how things work, then building my own. This is where I keep the projects I care about most.",
    'hero.cta.projects': 'View projects',
    'hero.cta.photos': 'See photos',
    'home.title': 'TCDev · Developer & Photographer',
    'home.description': 'Portfolio of Riccardo "TCDev": software projects and photography.',
    'home.featured': 'Featured projects',
    'home.latest': 'Latest photos',
    'home.viewall.projects': 'All projects',
    'home.viewall.photos': 'All photos',
    'projects.title': 'Projects',
    'projects.heading': "Things I've",
    'projects.heading.accent': 'built',
    'projects.description': 'Software projects by TCDev: apps, tools and experiments.',
    'projects.subtitle': 'Apps, tools and experiments: from weekend prototypes to projects I use every day.',
    'projects.comingsoon': 'Coming soon',
    'projects.featured': 'Featured',
    'projects.repo': 'Code',
    'projects.demo': 'Demo',
    'projects.active': 'Active',
    'projects.wip': 'Work in progress',
    'projects.archived': 'Archived',
    'projects.visit': 'Visit',
    'photos.title': 'Photos',
    'photos.heading': 'In',
    'photos.heading.accent': 'images',
    'photos.description': 'Photography by TCDev: landscapes, portraits and events.',
    'photos.subtitle': 'Landscapes, portraits and events.',
    'photos.all': 'All',
    'photos.landscapes': 'Landscapes',
    'photos.portraits': 'Portraits',
    'photos.events': 'Events',
    'photos.follow': 'Follow me on Instagram',
    'photos.loading': 'Loading photos…',
    'photos.empty': 'Photos coming soon. Meanwhile follow me on Instagram.',
    'photos.error': 'Could not load photos right now. Please try again later.',
    'photos.close': 'Close',
    'photos.prev': 'Previous photo',
    'photos.next': 'Next photo',
    'contacts.title': 'Contacts',
    'contacts.heading': "Let's talk",
    'contacts.description': 'Contact TCDev: email and socials.',
    'contacts.subtitle': 'Collaborations, projects, photo shoots, or just a chat.',
    'contacts.email': 'Email',
    'contacts.email.action': 'Write me',
    'contacts.social': 'Elsewhere',
    'notfound.title': '404',
    'notfound.heading': 'Page not found',
    'notfound.message': 'The page you are looking for does not exist or has been moved.',
    'notfound.home': 'Back to home',
    'footer.tagline': 'Developer & photographer · Bergamo, Italy',
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
