import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n/ui';
import type { IconName } from '../components/icons';

import musicmania from '../assets/musicmania.png';
import infochange from '../assets/infochange.png';
import orcast from '../assets/orcast.jpeg';
import periodictime from '../assets/periodictime.png';
import modsd from '../assets/modsd.png';

export type ProjectStatus = 'featured' | 'active' | 'deprecated';

export interface Project {
  id: string;
  title: string;
  /** Team the project belongs to; omitted for personal projects. */
  org?: OrgId;
  status: ProjectStatus;
  year?: string;
  description: Localized;
  stack: string[];
  links: { repo?: string; live?: string };
  /** Cover image. Without one the card draws a gradient with `icon`. */
  cover?: {
    src: ImageMetadata;
    fit?: 'cover' | 'contain';
    bg?: string;
    /** Show a portrait screenshot inside a phone frame over the gradient. */
    frame?: 'phone';
  };
  icon: IconName;
  /** Two colours for the generated gradient cover. */
  hue?: [string, string];
  award?: Localized;
  /** Joke label shown on deprecated cards. */
  deprecatedNote?: Localized;
}

export type OrgId = 'afnd' | 'yb';

export const orgs: Record<OrgId, { name: string; github: string; web?: string }> = {
  afnd: {
    name: 'AFND Industries',
    github: 'https://github.com/AFND-Industries',
    web: 'https://afndindustries.es',
  },
  yb: {
    name: 'Yellow Beavers',
    github: 'https://github.com/Yellow-Beavers',
  },
};

export const projects: Project[] = [
  {
    id: 'musicmania',
    title: 'MusicMania',
    status: 'featured',
    year: '2026',
    description: {
      es: 'App Android open source que convierte tu historial de Spotify en estadísticas animadas: tops con cambios de posición, historial completo, reloj de escucha de 24 h, rachas y un recap estilo stories cualquier día del año. Todo se calcula en el dispositivo: sin servidores, sin tracking, sin anuncios.',
      en: 'Open-source Android app that turns your Spotify listening into animated stats: tops with live ranking changes, lifetime history, a 24-hour listening clock, streaks and a story-style recap any day of the year. Everything is computed on device: no servers, no tracking, no ads.',
    },
    stack: ['Kotlin', 'Android', 'Material You', 'Spotify Web API'],
    links: { repo: 'https://github.com/tb18003/musicmania' },
    cover: { src: musicmania, frame: 'phone' },
    icon: 'music',
    hue: ['#c8ff4d', '#7c6cff'],
  },
  {
    id: 'infochange',
    title: 'InfoChange',
    org: 'afnd',
    status: 'featured',
    year: '2024',
    description: {
      es: 'Simulador de exchange de criptomonedas con precios reales de Binance y dinero ficticio: trading al contado, cartera multiactivo, transferencias entre usuarios al estilo Bizum, historial exportable a PDF y panel de administración. Nació en la asignatura de Tecnologías Avanzadas de la Web y se ha reescrito para funcionar entero sobre servicios gratuitos.',
      en: 'Crypto exchange simulator with real Binance prices and fake money: spot trading, a multi-asset wallet, Bizum-style transfers between users, PDF-exportable history and an admin dashboard. It started as a university web course project and was rewritten to run entirely on free-tier services.',
    },
    stack: ['React', 'Vite', 'Hono', 'Postgres', 'Drizzle', 'Capacitor'],
    links: {
      repo: 'https://github.com/AFND-Industries/InfoChange',
      live: 'https://infochange.afndindustries.es',
    },
    cover: { src: infochange, fit: 'contain', bg: '#ffffff' },
    icon: 'coins',
  },
  {
    id: 'parabellum',
    title: 'Parabellum',
    org: 'afnd',
    status: 'active',
    year: '2024',
    description: {
      es: 'Nuestra app para el Malackathon 2024: una web segura para consultar y analizar los embalses de España sobre Oracle Cloud, con búsqueda en un radio de 100 km, filtros, estadísticas y medidas contra el scraping.',
      en: 'Our Malackathon 2024 entry: a secure web app to explore and analyse Spanish reservoirs on Oracle Cloud, with 100 km radius search, filters, statistics and anti-scraping protections.',
    },
    stack: ['JavaScript', 'Oracle Cloud', 'SQL'],
    links: { repo: 'https://github.com/AFND-Industries/parabellum-malackathon' },
    icon: 'droplet',
    hue: ['#0ea5e9', '#1e3a8a'],
    award: {
      es: 'Premio a la app más segura · NICSLab',
      en: 'Most Secure App award · NICSLab',
    },
  },
  {
    id: 'dvm-pentesting',
    title: 'DVM Pentesting',
    status: 'active',
    year: '2026',
    description: {
      es: 'Entorno vulnerable para aprender pentesting: un frontend y un backend que despliegan y monitorizan contenedores Docker que hacen de máquinas víctima, para explotar vulnerabilidades de forma segura y controlada.',
      en: 'A deliberately vulnerable lab to learn pentesting: a frontend and backend that deploy and monitor Docker containers acting as target machines, so you can exploit vulnerabilities safely.',
    },
    stack: ['Docker', 'TypeScript', 'Next.js', 'JWT'],
    links: { repo: 'https://github.com/tb18003/dvm-pentesting' },
    icon: 'shield',
    hue: ['#c8ff4d', '#166534'],
  },
  {
    id: 'llm-btree-tfg',
    title: 'LLM + Behavior Trees',
    status: 'active',
    year: '2025',
    description: {
      es: 'Mi Trabajo Fin de Grado: un paquete ROS2 que identifica tareas a partir de una frase hablada (Whisper + LLM) y planifica su ejecución con árboles de comportamiento en un robot móvil simulado.',
      en: 'My bachelor thesis: a ROS2 package that extracts tasks from a spoken sentence (Whisper + LLM) and plans their execution with behavior trees on a simulated mobile robot.',
    },
    stack: ['ROS2', 'Python', 'LLM', 'Whisper', 'Behavior Trees'],
    links: { repo: 'https://github.com/tb18003/llm-btree-tfg' },
    icon: 'bot',
    hue: ['#a78bfa', '#4338ca'],
  },
  {
    id: 'orcast',
    title: 'Orcast',
    org: 'yb',
    status: 'active',
    year: '2023',
    description: {
      es: 'Aventura 2D con historia en un mundo extraño, desarrollada en Unity con el estudio indie Yellow Beavers.',
      en: 'A story-driven 2D adventure set in a strange world, made in Unity with the indie studio Yellow Beavers.',
    },
    stack: ['Unity', 'C#', 'Game design'],
    links: { repo: 'https://github.com/Yellow-Beavers' },
    cover: { src: orcast },
    icon: 'gamepad',
  },

  // ---------- @deprecated ----------
  {
    id: 'periodic-time',
    title: 'Periodic Time',
    status: 'deprecated',
    description: {
      es: 'La tabla periódica interactiva y más fácil de usar.',
      en: 'The interactive, easiest-to-use periodic table.',
    },
    stack: ['HTML', 'CSS', 'JS'],
    links: { live: '/Periodic-Time/', repo: 'https://github.com/tb18003/Periodic-Time' },
    cover: { src: periodictime },
    icon: 'atom',
    deprecatedNote: { es: 'works on my machine', en: 'works on my machine' },
  },
  {
    id: 'mods-downloader',
    title: 'Mods Downloader',
    status: 'deprecated',
    description: {
      es: 'Un gestor de descargas de mod-packs para cualquier juego.',
      en: 'A mod-pack download manager for any game.',
    },
    stack: ['Java'],
    links: {},
    cover: { src: modsd },
    icon: 'download',
    deprecatedNote: { es: 'abandonware', en: 'abandonware' },
  },
  {
    id: 'prcantor',
    title: 'prCantor',
    org: 'afnd',
    status: 'deprecated',
    description: {
      es: '¡Cantoriza y Gödeliza cualquier vector de enteros! Estuvo en Google Play.',
      en: 'Cantorize and Gödelize any integer vector! It used to be on Google Play.',
    },
    stack: ['Android','Java'],
    links: {},
    icon: 'infinity',
    hue: ['#f472b6', '#7e22ce'],
    deprecatedNote: { es: 'EOL: f(n) = ∅', en: 'EOL: f(n) = ∅' },
  },
  {
    id: 'prbarcos',
    title: 'prBarcos',
    org: 'afnd',
    status: 'deprecated',
    description: {
      es: 'Un remake del clásico juego de mesa de hundir la flota. Estuvo en Google Play.',
      en: 'A remake of the classic Battleship board game. It used to be on Google Play.',
    },
    stack: ['Android','Java'],
    links: {},
    icon: 'ship',
    hue: ['#38bdf8', '#0f766e'],
    deprecatedNote: { es: 'tocado y hundido', en: 'you sank my repo' },
  },
];

export const featured = projects.filter((p) => p.status === 'featured');
export const active = projects.filter((p) => p.status === 'active');
export const deprecated = projects.filter((p) => p.status === 'deprecated');
