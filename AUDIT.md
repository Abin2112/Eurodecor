# Intrio migration audit

Reference: https://www.designesia.com/themes/intrio/index.html

## Phase 1 findings

- Existing project: Astro 7.4.4, no UI framework or extra dependencies. Existing configuration can be retained.
- Existing pages were copied HTML documents rather than shared Astro components. The starter layout was unused.
- Baseline `npm run build` failed: unmatched closing `div` in `src/pages/blog-single.html.astro`, line 458.
- All six downloaded JavaScript files were zero bytes, as were seven icon-font stylesheets. The mirror renamed their extensions to `.html`.
- The mirror's `contact-2.html` is an error document, incorrectly referenced as a script.
- Homepage numbering was shifted by HTTrack: downloaded `index.html` and `index-2.html` duplicate live homepage 1; downloaded `index-3` through `index-7` correspond to live `index-2` through `index-6`.
- Live `index-7.html` does not exist. Preserve the local URL as an alias for homepage 6.
- Live `contact.js` returns 404. The contact and consultation validation scripts expect PHP delivery endpoints, which are unavailable in this static Astro project.
- Images, Bootstrap, plugin CSS and main theme CSS are present. Missing hero imagery, SVGs, icon fonts and usable JS can be recovered from the live reference.
- The reference uses Google Sans, a brown/beige palette, original Swiper hero transitions, Owl carousels, WOW reveal animations, a sticky header, mega menus, a mobile menu and a side panel.

## Implementation plan

1. Preserve the Astro package/configuration and downloaded source folder. Restore assets only into this project's `public` folder.
2. Cache the live reference HTML to correct mirror URL changes and compare against original markup.
3. Use a shared Astro layout, header variants, footer and side panel. Extract original homepage sections into Hero, About, Services, Testimonials, Projects, Process, Video, FAQ and Blog components.
4. Normalize malformed source HTML before converting other pages to Astro components. Preserve all 20 live page URLs plus `/`, `/index.html` and local compatibility routes.
5. Load the real original scripts in order as classic scripts using `is:inline`. Remove empty or nonexistent script references.
6. Retain original responsive CSS and interactions. Add keyboard access where necessary and browser-native form validation with truthful local-preview feedback. No submission is represented as delivered.
7. Test the rendered homepage against the reference, representative inner pages, desktop/tablet/mobile navigation, carousels, FAQ, image popups, forms, links and assets. Run a production build and verify generated output.

## Source maintenance

- `src/reference`: live HTML snapshot used for migration provenance.
- `scripts/restore-reference.py`: optional restoration helper; writes only inside the Astro project. Requires network access.
- `scripts/convert-reference.py`: one-time conversion helper; requires the already available BeautifulSoup package. Normal development/build does not require Python.
- Do not rerun the conversion helper over later manual component changes unless regeneration is intended.
- The original downloaded folder is read-only for this migration.
