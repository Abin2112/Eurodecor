# Intrio migration verification

## Automated checks

- Baseline build reproduced the unmatched closing-tag error in blog-single.
- Production build succeeds after HTML normalization, component extraction and route correction.
- 22 static HTML pages: 20 live reference pages plus index-7 and contact-2 compatibility aliases. Root and index.html share homepage 1.
- `scripts/check-output.py` checks local links, scripts, images, CSS imports and font/image URLs in production output. Final result: 22 HTML documents, 140 local references checked, zero issues. Report: `output-check.json`.
- No npm dependencies added; package.json and lockfile preserved.

## Browser checks

Every page was opened in the running Astro dev server: homepage 1–6, services 1–3 and service detail, projects 1–2 and project detail, about, FAQ, testimonials, blog and article, contact and consultation. Both compatibility aliases were also opened.

- No broken rendered images or horizontal page overflow in desktop route checks.
- No console warnings/errors in tested pages.
- Hero Swiper and all three homepage Owl carousels initialize.
- Service and project next buttons change carousel track positions.
- Information panel opens and closes.
- FAQ opens and closes; keyboard controls and expanded state added.
- Project image lightbox displays the correct original image and closes.
- Mobile viewport 390 × 844: homepage typography/images, menu opening, Services submenu and Services 2 navigation work; consultation layout does not overflow.
- Tablet viewport 768 × 1024: projects layout loads original images without overflow.
- Desktop viewport 1440 × 900: homepage, galleries and inner pages checked.
- Direct comparison at 1280 × 720: both hero headings have identical computed font and bounding boxes; all nine homepage section heights and top positions match the live reference. Evidence: `qa/geometry-comparison.json`; screenshot: `qa/homepage-desktop.png`.
- Contact form rejects invalid email; valid local submissions show an explicit unsent-preview message.
- Consultation selects and additional-service checkbox work. Valid submission works with optional notes empty and shows explicit unsent-preview feedback.

## Deliberate limits

This is the static template recreation. Contact, consultation and article-comment forms have local validation and feedback; a real delivery backend is not configured. No test information is sent to the reference site. Original social-profile and other demo placeholder links are retained where the template supplies no real destination. The reference's external YouTube player and Google Maps embed retain their original remote destinations and depend on those services.

Google Sans uses the reference's Google Fonts stylesheet. Icon fonts, theme scripts, stylesheets and images are served locally. Timing-dependent hero slide and carousel positions may differ between screenshots while retaining the original animations.

The original `www.designesia.com/themes/intrio` folder was only read. All implementation and restored assets are inside `eurodecor-astro`.
