export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export type Localized = Record<Lang, string>;

export const defaultLang: Lang = 'es';

/** Home URL for each language. */
export const homeUrl: Record<Lang, string> = { es: '/', en: '/en/' };

const es = {
  'meta.title': 'Toni Blas · Analista de Seguridad',
  'meta.description':
    'Portfolio de Toni Blas: analista de seguridad, Ingeniero del Software (UMA) y Máster en Ciberseguridad (UJA). Proyectos: MusicMania, InfoChange, AFND Industries y Yellow Beavers.',

  'nav.about': 'Sobre mí',
  'nav.projects': 'Proyectos',
  'nav.orgs': 'Equipos',
  'nav.deprecated': 'Legacy',
  'nav.contact': 'Contacto',
  'nav.menu': 'Abrir menú',
  'nav.theme': 'Cambiar tema',
  'nav.skip': 'Saltar al contenido',

  'hero.greeting': 'Hola, soy',
  'hero.role': 'Analista de Seguridad',
  'hero.location': 'Málaga, España',
  'hero.intro':
    'Ingeniero del Software con un Máster en Ciberseguridad. De día busco fallos antes que nadie; en mi tiempo libre construyo apps, webs y algún que otro juego.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.github': 'GitHub',
  'hero.prompt.next': 'Otra frase',

  'about.kicker': 'Sobre mí',
  'about.title': 'Seguridad de día, código siempre.',
  'about.p1':
    'Soy Toni, de Málaga. Estudié Ingeniería del Software en la Universidad de Málaga y después el Máster en Ciberseguridad en la Universidad de Jaén. Hoy trabajo como analista de seguridad.',
  'about.p2':
    'Fuera del trabajo sigo programando: apps Android, webs, entornos para aprender pentesting y videojuegos con amigos en AFND Industries y Yellow Beavers. Todo lo que puedo publicar está en GitHub, abierto y de uso libre.',
  'about.timeline': 'Trayectoria',
  'about.skills': 'Con lo que trabajo',
  'about.now': 'Actualidad',
  'about.job': 'Analista de Seguridad',
  'about.job.detail': 'Ciberseguridad',
  'about.master': 'Máster en Ciberseguridad',
  'about.master.place': 'Universidad de Jaén',
  'about.degree': 'Grado en Ingeniería del Software',
  'about.degree.place': 'Universidad de Málaga',
  'about.degree.detail': 'TFG: LLMs + Behavior Trees para robots móviles',

  'projects.kicker': 'Proyectos',
  'projects.title': 'En lo que he estado trabajando',
  'projects.subtitle':
    'Proyectos personales y en equipo. Los de equipo son de AFND Industries y Yellow Beavers.',
  'projects.repo': 'Código',
  'projects.live': 'Web',
  'projects.org': 'Org',
  'projects.personal': 'Personal',
  'projects.featured': 'Destacado',

  'orgs.kicker': 'Equipos',
  'orgs.title': 'Donde programo con más gente',
  'orgs.afnd':
    'Grupo de desarrollo que formamos varios compañeros de la Universidad de Málaga. De aquí salen InfoChange, Parabellum y nuestras primeras apps Android.',
  'orgs.yb':
    'Estudio indie de videojuegos en Unity formado por estudiantes de Ingeniería del Software. Nuestro primer título es Orcast.',
  'orgs.github': 'GitHub',
  'orgs.web': 'Web',

  'deprecated.badge': '@deprecated',
  'deprecated.tooltip': 'Siguen funcionando (algunos). No esperes parches.',
  'deprecated.title': 'Proyectos legacy',
  'deprecated.warning.label': 'DeprecationWarning',
  'deprecated.warning':
    'toni.proyectosAntiguos() está obsoleto desde la v2022 y se eliminará en una versión futura. Usa toni.proyectos() en su lugar.',
  'deprecated.summary': 'Mostrar {n} proyectos legacy (bajo tu propia responsabilidad)',
  'deprecated.hide': 'Ocultar',
  'deprecated.footnote':
    'Estos proyectos ya no reciben actualizaciones. Se quedan aquí por nostalgia y porque borrar código da pena.',
  'deprecated.open': 'Abrir',

  'contact.kicker': 'Contacto',
  'contact.title': '¿Hablamos?',
  'contact.text':
    'Si quieres colaborar en algún proyecto, antes de hacer un fork escríbeme por LinkedIn o por DM. También puedes abrir un issue en el repo.',
  'contact.linkedin': 'LinkedIn',
  'contact.github': 'GitHub',
  'contact.x': 'X / Twitter',

  'footer.made': 'Hecho con Astro y demasiado café.',
  'footer.source': 'Código fuente',
} as const;

export type UIKey = keyof typeof es;

const en: Record<UIKey, string> = {
  'meta.title': 'Toni Blas · Security Analyst',
  'meta.description':
    'Portfolio of Toni Blas: security analyst, Software Engineer (University of Málaga) and MSc in Cybersecurity (University of Jaén). Projects: MusicMania, InfoChange, AFND Industries and Yellow Beavers.',

  'nav.about': 'About',
  'nav.projects': 'Projects',
  'nav.orgs': 'Teams',
  'nav.deprecated': 'Legacy',
  'nav.contact': 'Contact',
  'nav.menu': 'Open menu',
  'nav.theme': 'Toggle theme',
  'nav.skip': 'Skip to content',

  'hero.greeting': "Hi, I'm",
  'hero.role': 'Security Analyst',
  'hero.location': 'Málaga, Spain',
  'hero.intro':
    'Software Engineer with an MSc in Cybersecurity. By day I find the bugs before anyone else does; in my spare time I build apps, websites and the occasional game.',
  'hero.cta.projects': 'See projects',
  'hero.cta.github': 'GitHub',
  'hero.prompt.next': 'Another one',

  'about.kicker': 'About',
  'about.title': 'Security by day, code all the time.',
  'about.p1':
    "I'm Toni, from Málaga. I studied Software Engineering at the University of Málaga and then an MSc in Cybersecurity at the University of Jaén. Today I work as a security analyst.",
  'about.p2':
    'Outside work I keep coding: Android apps, websites, pentesting labs and video games with friends at AFND Industries and Yellow Beavers. Everything I can publish is on GitHub, open and free to use.',
  'about.timeline': 'Path',
  'about.skills': 'What I work with',
  'about.now': 'Now',
  'about.job': 'Security Analyst',
  'about.job.detail': 'Cybersecurity',
  'about.master': 'MSc in Cybersecurity',
  'about.master.place': 'University of Jaén',
  'about.degree': 'BSc in Software Engineering',
  'about.degree.place': 'University of Málaga',
  'about.degree.detail': 'Thesis: LLMs + Behavior Trees for mobile robots',

  'projects.kicker': 'Projects',
  'projects.title': "What I've been building",
  'projects.subtitle':
    'Personal and team projects. Team projects belong to AFND Industries and Yellow Beavers.',
  'projects.repo': 'Code',
  'projects.live': 'Website',
  'projects.org': 'Org',
  'projects.personal': 'Personal',
  'projects.featured': 'Featured',

  'orgs.kicker': 'Teams',
  'orgs.title': 'Where I code with other people',
  'orgs.afnd':
    'A dev group a few classmates from the University of Málaga started. InfoChange, Parabellum and our first Android apps came out of it.',
  'orgs.yb':
    'An indie Unity game studio made up of Software Engineering students. Our first title is Orcast.',
  'orgs.github': 'GitHub',
  'orgs.web': 'Website',

  'deprecated.badge': '@deprecated',
  'deprecated.tooltip': 'Some still work. Do not expect patches.',
  'deprecated.title': 'Legacy projects',
  'deprecated.warning.label': 'DeprecationWarning',
  'deprecated.warning':
    'toni.oldProjects() is deprecated since v2022 and will be removed in a future release. Use toni.projects() instead.',
  'deprecated.summary': 'Show {n} legacy projects (at your own risk)',
  'deprecated.hide': 'Hide',
  'deprecated.footnote':
    'These projects no longer get updates. They stay here for nostalgia, and because deleting code hurts.',
  'deprecated.open': 'Open',

  'contact.kicker': 'Contact',
  'contact.title': "Let's talk",
  'contact.text':
    'If you want to collaborate on a project, message me on LinkedIn or by DM before forking. You can also open an issue on the repo.',
  'contact.linkedin': 'LinkedIn',
  'contact.github': 'GitHub',
  'contact.x': 'X / Twitter',

  'footer.made': 'Built with Astro and too much coffee.',
  'footer.source': 'Source code',
};

const ui: Record<Lang, Record<UIKey, string>> = { es, en };

export function useTranslations(lang: Lang) {
  return (key: UIKey, vars?: Record<string, string | number>) => {
    let s = ui[lang][key] ?? ui[defaultLang][key];
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replace(`{${k}}`, String(v));
    return s;
  };
}

/** Random taglines for the hero prompt, ported (and pruned) from the old random.js. */
export const phrases: Record<Lang, string[]> = {
  es: [
    'Puro entretenimiento :)',
    'Energy = Much · Coffee²',
    'git commit -m "añadiendo bugs y novedades :P"',
    'Sea un AFD, M = (K, Σ, δ, s, F)',
    'Si tiramos un dado 100 veces...',
    'SortedSet set = new SortedSet();',
    'programmer like a lifestyle',
    'pensando demasiado ;:u',
    'status: playgramming',
    'Linux forever',
    'rAnDoM nUmBeEeEeEr',
    '¿para cuándo un GTA?',
    'all u need is love <3',
    'Frases random, no está mal, ¿eh?',
    'sudo make me a sandwich',
    "' OR 1=1 -- (aquí no, gracias)",
    'Mi contraseña no es 123456. Es 1234567.',
    'Zero trust, mucho café',
    'chmod 600 ~/.vida',
    "It's not a bug, it's a CVE",
    'Revisando logs a las 3 a.m.',
    'nmap -sV --top-ports 1000 mi-vida',
  ],
  en: [
    'Pure entertainment :)',
    'Energy = Much · Coffee²',
    'git commit -m "adding bugs and features :P"',
    'Let M = (K, Σ, δ, s, F) be a DFA',
    'If we roll a die 100 times...',
    'SortedSet set = new SortedSet();',
    'programmer like a lifestyle',
    'overthinking ;:u',
    'status: playgramming',
    'Linux forever',
    'rAnDoM nUmBeEeEeEr',
    'GTA when?',
    'all u need is love <3',
    'Random phrases, not bad, huh?',
    'sudo make me a sandwich',
    "' OR 1=1 -- (not here, thanks)",
    'My password is not 123456. It is 1234567.',
    'Zero trust, lots of coffee',
    'chmod 600 ~/.life',
    "It's not a bug, it's a CVE",
    'Reading logs at 3 a.m.',
    'nmap -sV --top-ports 1000 my-life',
  ],
};
