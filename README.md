# tb18003.github.io

Mi portfolio personal: **https://tb18003.github.io** ([EN](https://tb18003.github.io/en/))

Hecho con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com). Genera HTML estático y se despliega solo en GitHub Pages con cada push a `master` ([workflow](.github/workflows/static.yml)).

## Desarrollo

Necesitas Node 22.23.4 o superior (ver `.nvmrc`).

```sh
npm install
npm run dev       # servidor local en http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ en local
npm run check     # comprueba tipos
```

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Proyectos (activos y `@deprecated`) | [src/data/projects.ts](src/data/projects.ts) |
| Textos ES/EN y frases aleatorias del hero | [src/i18n/ui.ts](src/i18n/ui.ts) |
| Redes sociales | [src/data/social.ts](src/data/social.ts) |
| Secciones de la página | [src/components/](src/components/) |
| Colores y tema claro/oscuro | [src/styles/global.css](src/styles/global.css) |
| Portadas de proyectos | [src/assets/](src/assets/) |

Para añadir un proyecto, añade una entrada a `projects` en `src/data/projects.ts`. Con `status: 'deprecated'` pasa a la sección legacy.

## Archivos que se sirven tal cual

Todo lo que hay en [public/](public/) se copia sin cambios a la raíz del sitio:

- `/.well-known/assetlinks.json` y `/musicmania/callback`: App Link del login con Spotify de [MusicMania](https://github.com/tb18003/musicmania). **No moverlos ni renombrarlos.**
- `/horario/`: el antiguo proyecto Horario.

Los proyectos con su propio repo de Pages (como `/Periodic-Time/`) se sirven desde sus repos y no dependen de este.

## Licencia

[CC BY 4.0](LICENSE): puedes reutilizarlo y adaptarlo, también con fines comerciales, siempre que cites la autoría. El material de terceros (iconos, fuentes e imágenes de los proyectos de equipo) mantiene su propia licencia; los detalles están en [LICENSE](LICENSE).
