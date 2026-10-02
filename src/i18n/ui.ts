import type { Locale } from '../data/site';

export const ui = {
  it: {
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.photos': 'Foto',
    'nav.about': 'Chi sono',
    'nav.contact': 'Contatti',
    'nav.admin': 'Admin',
    'nav.dev': 'Dev',
    'nav.photo': 'Photo',
    'nav.primary': 'Navigazione principale',
    'nav.switchLang': "Passa all'inglese",
    'nav.breadcrumb': 'Percorso',
    'a11y.skip': 'Vai al contenuto',
    'home.eyebrow': 'Sviluppatore e fotografo a Bergamo',
    'home.title': 'Software e fotografia, da Bergamo.',
    'home.bio':
      'Mi chiamo Riccardo, online mi trovi come TCDev. Sono uno sviluppatore e fotografo di Bergamo: progetto e scrivo software, e fotografo paesaggi e natura, ritratti e eventi.',
    'home.cta.projects': 'Vedi i progetti',
    'home.cta.photos': 'Sfoglia le foto',
    'home.cta.about': 'Chi sono',
    'home.section.dev': 'Lato Dev',
    'home.section.photo': 'Lato Photo',
    'home.dev.blurb':
      'Applicazioni, tool e esperimenti. Codice pubblico su GitHub quando ha senso, altro in arrivo come coming soon.',
    'home.photo.blurb':
      'Paesaggi e natura, ritratti e persone, eventi. Album curati dal portfolio fotografico a Bergamo.',
    'home.bridge':
      'Un solo sito: progetti software e album fotografici. Passa dal codice alle foto senza cambiare brand.',
    'home.faq.title': 'Domande frequenti',
    'projects.title': 'Progetti',
    'projects.subtitle':
      'Software pubblico e lavori in corso di TCDev, sviluppatore a Bergamo. Tool, app e esperimenti; alcuni repo sono ancora privati e restano come coming soon.',
    'projects.public': 'Pubblici',
    'projects.soon': 'In arrivo',
    'projects.soon.badge': 'Coming soon',
    'projects.soon.hint': 'Repo ancora privata. Torna qui quando sarà pronta.',
    'projects.visit': 'Apri',
    'projects.repo': 'Repository',
    'projects.cross': 'Oltre al codice: guarda anche il portfolio fotografico (paesaggi, ritratti, eventi).',
    'projects.cross.cta': 'Vai alle foto',
    'photos.title': 'Foto',
    'photos.subtitle':
      "Portfolio fotografico di TCDev a Bergamo: paesaggi e natura, ritratti e persone, eventi. Gli album si aggiornano dall'admin.",
    'photos.empty': 'Nessuna foto in questo album per ora.',
    'photos.empty.title': 'Album ancora vuoto',
    'photos.empty.body':
      'Le foto arriveranno qui. Nel frattempo puoi guardare gli altri album o i progetti software.',
    'photos.empty.short': 'In arrivo',
    'photos.empty.badge': 'Vuoto',
    'photos.empty.list.title': 'Nessun album pubblicato',
    'photos.empty.list.body':
      "Gli album si creano dall'admin. Torna più tardi o passa ai progetti.",
    'photos.back': 'Tutti gli album',
    'photos.count': 'foto',
    'photos.cross': 'Cerchi anche il lato developer? Ecco i progetti software pubblici e in arrivo.',
    'photos.cross.cta': 'Vai ai progetti',
    'about.title': 'Chi sono',
    'about.bio':
      'Mi chiamo Riccardo, online mi trovi come TCDev. Sono uno sviluppatore e fotografo di Bergamo: progetto e scrivo software, e fotografo paesaggi e natura, ritratti e eventi.',
    'about.work.dev.title': 'Come sviluppatore',
    'about.work.dev':
      'Progetto e scrivo software: utility, tool web, piccoli prodotti e esperimenti. Sul sito trovi i progetti pubblici (con link quando disponibili) e una lista di lavori ancora privati, segnalati come coming soon.',
    'about.work.photo.title': 'Come fotografo',
    'about.work.photo':
      'Fotografo paesaggi e natura, ritratti e persone, eventi. Gli album pubblici sono sul sito; attrezzatura: Sony A6700 con Tamron 28-75mm f/2.8 Di III RXD e Sony 18-105mm G.',
    'about.gear': 'Attrezzatura',
    'about.where': 'Dove trovarmi',
    'about.faq.title': 'Domande frequenti',
    'about.cta.projects': 'Progetti software',
    'about.cta.photos': 'Album fotografici',
    'faq.q1': 'Chi è TCDev?',
    'faq.a1':
      'Mi chiamo Riccardo, online mi trovi come TCDev. Sono uno sviluppatore e fotografo di Bergamo: progetto e scrivo software, e fotografo paesaggi e natura, ritratti e eventi.',
    'faq.q2': 'Di dove sei?',
    'faq.a2': 'Bergamo, Italia. Lavoro sul software e sulla fotografia da qui.',
    'faq.q3': 'Che tipo di foto pubblichi?',
    'faq.a3':
      'Tre temi di partenza: paesaggi e natura, ritratti e persone, eventi. Posso aggiungere altri album dal portfolio.',
    'faq.q4': 'I progetti sono tutti open source?',
    'faq.a4':
      'No. Alcuni sono pubblici su GitHub (profilo TCDev10). Altri restano privati e sul sito compaiono solo come coming soon, senza link al codice.',
    'faq.q5': 'Come ti contatto?',
    'faq.a5':
      'Email email@tcdev.xyz, Instagram @TCDev, LinkedIn linkedin.com/in/tcdev0, GitHub TCDev10.',
    'contact.title': 'Contatti',
    'contact.subtitle':
      'Scrivimi per collaborazioni software o fotografia a Bergamo, oppure seguimi sui social.',
    'contact.email': 'Email',
    'footer.rights': 'TCDev. Built with Astro.',
    'footer.nav': 'Pagine',
    'seo.home.title': 'TCDev | Sviluppatore e fotografo a Bergamo',
    'seo.home.desc':
      'Riccardo (TCDev): sviluppatore e fotografo a Bergamo. Progetti software, paesaggi e natura, ritratti ed eventi. IT/EN.',
    'seo.projects.title': 'Progetti software | TCDev Bergamo',
    'seo.projects.desc':
      'Progetti pubblici e coming soon di TCDev, sviluppatore a Bergamo: tool, app e esperimenti su GitHub.',
    'seo.photos.title': 'Portfolio fotografico | TCDev Bergamo',
    'seo.photos.desc':
      'Foto di TCDev a Bergamo: album di paesaggi e natura, ritratti e persone, eventi.',
    'seo.about.title': 'Chi sono | Riccardo TCDev Bergamo',
    'seo.about.desc':
      'Riccardo, online TCDev: sviluppatore e fotografo di Bergamo. Software, paesaggi, ritratti, eventi. Contatti e gear.',
    'seo.contact.title': 'Contatti | TCDev',
    'seo.contact.desc':
      'Contatta TCDev (Bergamo) via email, Instagram, LinkedIn o GitHub per software e fotografia.',
    'album.landscapes': 'Paesaggi / natura',
    'album.portraits': 'Ritratti / persone',
    'album.events': 'Eventi',
    'album.landscapes.desc':
      'Paesaggi, natura e outdoor. Selezione fotografica di TCDev.',
    'album.portraits.desc': 'Ritratti e persone. Portfolio fotografico di TCDev.',
    'album.events.desc': 'Eventi e reportage leggero. Portfolio fotografico di TCDev.',
    '404.title': 'Pagina non trovata',
    '404.body': 'La pagina non esiste o è stata spostata.',
    '404.home': 'Torna alla home',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.photos': 'Photos',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.admin': 'Admin',
    'nav.dev': 'Dev',
    'nav.photo': 'Photo',
    'nav.primary': 'Primary navigation',
    'nav.switchLang': 'Switch to Italian',
    'nav.breadcrumb': 'Breadcrumb',
    'a11y.skip': 'Skip to content',
    'home.eyebrow': 'Developer and photographer in Bergamo',
    'home.title': 'Software and photography, from Bergamo.',
    'home.bio':
      "I'm Riccardo, online as TCDev. I'm a developer and photographer from Bergamo: I build software, and I shoot landscapes and nature, portraits, and events.",
    'home.cta.projects': 'See projects',
    'home.cta.photos': 'Browse photos',
    'home.cta.about': 'About me',
    'home.section.dev': 'Dev side',
    'home.section.photo': 'Photo side',
    'home.dev.blurb':
      'Apps, tools, and experiments. Public code on GitHub when it makes sense; more listed as coming soon.',
    'home.photo.blurb':
      'Landscapes and nature, portraits and people, events. Curated photo portfolio albums from Bergamo.',
    'home.bridge':
      'One site for software projects and photo albums. Move from code to photos without switching brands.',
    'home.faq.title': 'FAQ',
    'projects.title': 'Projects',
    'projects.subtitle':
      'Public software and work in progress by TCDev, a developer in Bergamo. Tools, apps, and experiments; some repos stay private and appear as coming soon.',
    'projects.public': 'Public',
    'projects.soon': 'Coming soon',
    'projects.soon.badge': 'Coming soon',
    'projects.soon.hint': 'Still private. Check back when it ships.',
    'projects.visit': 'Open',
    'projects.repo': 'Repository',
    'projects.cross': 'Beyond code: also browse the photo portfolio (landscapes, portraits, events).',
    'projects.cross.cta': 'Go to photos',
    'photos.title': 'Photos',
    'photos.subtitle':
      'TCDev photo portfolio in Bergamo: landscapes and nature, portraits and people, events. Albums are managed from admin.',
    'photos.empty': 'No photos in this album yet.',
    'photos.empty.title': 'This album is empty',
    'photos.empty.body':
      'Photos will land here. Meanwhile browse other albums or the software projects.',
    'photos.empty.short': 'Coming soon',
    'photos.empty.badge': 'Empty',
    'photos.empty.list.title': 'No published albums',
    'photos.empty.list.body':
      'Albums are created from the admin. Come back later or check the projects.',
    'photos.back': 'All albums',
    'photos.count': 'photos',
    'photos.cross': 'Looking for the developer side too? See public and upcoming software projects.',
    'photos.cross.cta': 'Go to projects',
    'about.title': 'About',
    'about.bio':
      "I'm Riccardo, online as TCDev. I'm a developer and photographer from Bergamo: I build software, and I shoot landscapes and nature, portraits, and events.",
    'about.work.dev.title': 'As a developer',
    'about.work.dev':
      'I design and build software: utilities, web tools, small products, and experiments. This site lists public projects (with links when available) and private work marked coming soon.',
    'about.work.photo.title': 'As a photographer',
    'about.work.photo':
      'I shoot landscapes and nature, portraits and people, and events. Public albums live on this site. Gear: Sony A6700 with Tamron 28-75mm f/2.8 Di III RXD and Sony 18-105mm G.',
    'about.gear': 'Gear',
    'about.where': 'Find me',
    'about.faq.title': 'FAQ',
    'about.cta.projects': 'Software projects',
    'about.cta.photos': 'Photo albums',
    'faq.q1': 'Who is TCDev?',
    'faq.a1':
      "I'm Riccardo, online as TCDev. I'm a developer and photographer from Bergamo: I build software, and I shoot landscapes and nature, portraits, and events.",
    'faq.q2': 'Where are you based?',
    'faq.a2': 'Bergamo, Italy. I work on software and photography from here.',
    'faq.q3': 'What kinds of photos do you publish?',
    'faq.a3':
      'Three starting themes: landscapes and nature, portraits and people, and events. More albums can be added to the portfolio.',
    'faq.q4': 'Are all projects open source?',
    'faq.a4':
      'No. Some are public on GitHub (TCDev10). Others stay private and only appear here as coming soon, with no source link.',
    'faq.q5': 'How can I contact you?',
    'faq.a5':
      'Email email@tcdev.xyz, Instagram @TCDev, LinkedIn linkedin.com/in/tcdev0, GitHub TCDev10.',
    'contact.title': 'Contact',
    'contact.subtitle':
      'Reach out for software or photography work in Bergamo, or follow along on socials.',
    'contact.email': 'Email',
    'footer.rights': 'TCDev. Built with Astro.',
    'footer.nav': 'Pages',
    'seo.home.title': 'TCDev | Developer and photographer in Bergamo',
    'seo.home.desc':
      'Riccardo (TCDev): developer and photographer in Bergamo. Software projects, landscapes and nature, portraits, and events. IT/EN.',
    'seo.projects.title': 'Software projects | TCDev Bergamo',
    'seo.projects.desc':
      'Public and coming-soon projects by TCDev, a developer in Bergamo: tools, apps, and experiments on GitHub.',
    'seo.photos.title': 'Photo portfolio | TCDev Bergamo',
    'seo.photos.desc':
      'TCDev photography in Bergamo: albums for landscapes and nature, portraits and people, events.',
    'seo.about.title': 'About | Riccardo TCDev Bergamo',
    'seo.about.desc':
      'Riccardo, online as TCDev: developer and photographer from Bergamo. Software, landscapes, portraits, events. Contact and gear.',
    'seo.contact.title': 'Contact | TCDev',
    'seo.contact.desc':
      'Contact TCDev (Bergamo) via email, Instagram, LinkedIn, or GitHub for software and photography.',
    'album.landscapes': 'Landscapes / nature',
    'album.portraits': 'Portraits / people',
    'album.events': 'Events',
    'album.landscapes.desc':
      'Landscapes, nature, and outdoors. Selected photography by TCDev.',
    'album.portraits.desc': 'Portraits and people. TCDev photographic portfolio.',
    'album.events.desc': 'Events and light reportage. TCDev photographic portfolio.',
    '404.title': 'Page not found',
    '404.body': 'The page you asked for is missing or was moved.',
    '404.home': 'Back home',
  },
} as const;

export type UiKey = keyof (typeof ui)['it'];

export function t(locale: Locale, key: UiKey): string {
  return ui[locale][key] ?? ui.it[key] ?? key;
}

/** FAQ pairs used on About (and FAQPage JSON-LD). Must match visible copy. */
export function faqItems(locale: Locale): { question: string; answer: string }[] {
  return [
    { question: t(locale, 'faq.q1'), answer: t(locale, 'faq.a1') },
    { question: t(locale, 'faq.q2'), answer: t(locale, 'faq.a2') },
    { question: t(locale, 'faq.q3'), answer: t(locale, 'faq.a3') },
    { question: t(locale, 'faq.q4'), answer: t(locale, 'faq.a4') },
    { question: t(locale, 'faq.q5'), answer: t(locale, 'faq.a5') },
  ];
}
