export type ProjectStatus = 'public' | 'coming-soon';

export type Project = {
  id: string;
  name: string;
  status: ProjectStatus;
  /** Short IT / EN blurbs */
  description: { it: string; en: string };
  /** Public repo or homepage when status is public */
  url?: string;
  repo?: string;
  tags?: string[];
};

export const projects: Project[] = [
  {
    id: 'micapdf',
    name: 'MicaPDF',
    status: 'public',
    description: {
      it: 'Utility per lavorare con PDF in modo semplice e veloce.',
      en: 'A utility for working with PDFs quickly and simply.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['PDF', 'tools'],
  },
  {
    id: 'multitool',
    name: 'multitool',
    status: 'public',
    description: {
      it: 'Raccolta di piccoli tool per sviluppatori e creativi.',
      en: 'A collection of small tools for developers and creators.',
    },
    url: 'https://tools.tcdev.xyz',
    tags: ['web', 'tools'],
  },
  {
    id: 'autoppt',
    name: 'AutoPPT',
    status: 'public',
    description: {
      it: 'Generazione assistita di presentazioni.',
      en: 'Assisted presentation generation.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['productivity'],
  },
  {
    id: 'citysimulator',
    name: 'CitySimulator',
    status: 'public',
    description: {
      it: 'Simulazione e sperimentazione intorno a sistemi urbani.',
      en: 'Simulation and experiments around urban systems.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['simulation'],
  },
  {
    id: 'pyramid-solitaire',
    name: 'Pyramid-Solitaire',
    status: 'public',
    description: {
      it: 'Il classico solitario Pyramid, rivisitato.',
      en: 'Classic Pyramid solitaire, revisited.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['game'],
  },
  {
    id: 'stdatchi',
    name: 'STDatchi',
    status: 'public',
    description: {
      it: 'Progetto sperimentale con focus su interazione e stato.',
      en: 'Experimental project focused on interaction and state.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['experiment'],
  },
  {
    id: 'gamesync',
    name: 'GameSync',
    status: 'public',
    description: {
      it: 'Sincronizzazione e gestione del progresso di gioco.',
      en: 'Sync and manage game progress.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['games'],
  },
  {
    id: 'auratracker',
    name: 'AuraTracker',
    status: 'public',
    description: {
      it: 'Tracker personale per abitudini e metriche.',
      en: 'Personal tracker for habits and metrics.',
    },
    repo: 'https://github.com/TCDev10',
    tags: ['tracking'],
  },
  {
    id: 'markdowner',
    name: 'Markdowner',
    status: 'coming-soon',
    description: {
      it: 'Editor e pipeline Markdown in arrivo.',
      en: 'Markdown editor and pipeline, coming soon.',
    },
    tags: ['markdown'],
  },
  {
    id: 'autoskill',
    name: 'AutoSkill',
    status: 'coming-soon',
    description: {
      it: 'Automazione e skill per flussi di lavoro.',
      en: 'Automation and skills for workflows.',
    },
    tags: ['automation'],
  },
  {
    id: 'abito-invoice',
    name: 'ABITO-Invoice',
    status: 'coming-soon',
    description: {
      it: 'Fatturazione e documenti per piccoli team.',
      en: 'Invoicing and documents for small teams.',
    },
    tags: ['finance'],
  },
  {
    id: 'budgetai',
    name: 'BudgetAI',
    status: 'coming-soon',
    description: {
      it: 'Budgeting assistito da AI.',
      en: 'AI-assisted budgeting.',
    },
    tags: ['finance', 'ai'],
  },
  {
    id: 'inktimely',
    name: 'InkTimely',
    status: 'coming-soon',
    description: {
      it: 'Scrittura e scadenze, nello stesso posto.',
      en: 'Writing and deadlines in one place.',
    },
    tags: ['productivity'],
  },
  {
    id: 'kredenza',
    name: 'kredenza',
    status: 'coming-soon',
    description: {
      it: 'Gestione credenziali e vault personale.',
      en: 'Personal credentials and vault management.',
    },
    tags: ['security'],
  },
  {
    id: 'ordivo',
    name: 'ordivo',
    status: 'coming-soon',
    description: {
      it: 'Ordini e cataloghi per piccoli negozi.',
      en: 'Orders and catalogs for small shops.',
    },
    tags: ['commerce'],
  },
  {
    id: 'newraee',
    name: 'NewRAEE',
    status: 'coming-soon',
    description: {
      it: 'Strumenti intorno a RAEE e tracciamento.',
      en: 'Tools around WEEE tracking and compliance.',
    },
    tags: ['compliance'],
  },
  {
    id: 'gamesaves',
    name: 'GameSaves',
    status: 'coming-soon',
    description: {
      it: 'Backup e sync dei salvataggi di gioco.',
      en: 'Backup and sync for game saves.',
    },
    tags: ['games'],
  },
];

export function publicProjects() {
  return projects.filter((p) => p.status === 'public');
}

export function comingSoonProjects() {
  return projects.filter((p) => p.status === 'coming-soon');
}
