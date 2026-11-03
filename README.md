# Intrio / Eurodecor Astro

Faithful recreation of the Intrio reference in the existing Astro project. Original imagery, theme styles and browser scripts are served from `public`.

## Development

Run commands from this folder:

```sh
npm run dev -- --background
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
npm run build
npm run preview
```

The dev URL is http://localhost:4321. Production files are written to `dist` with the original flat `.html` URLs.

## Editing

- `src/layouts/Layout.astro`: shared document and script loading.
- `src/components/intrio`: homepage sections, inner-page content, footer and information panel.
- `src/components/intrio/Header.astro` and `src/data/headers.json`: original header variants.
- `src/pages`: small Astro route wrappers.
- `public/js/site.js` and `public/css/site-fixes.css`: integration, keyboard controls and local form handling.

No new npm dependencies were added. `AUDIT.md` records the findings and plan; `QA.md` records verification and limitations. The Python migration helpers use the already available BeautifulSoup package and are optional; normal Astro development does not require Python.

Contact, consultation and comment forms validate locally and explicitly state that no message has been sent. Configure a delivery backend before using these for real enquiries.

The original downloaded source folder is unchanged.
