# Collection detail pages

Edit `src/data/collections.js` for product names, descriptions, sections and per-product images. Collection identities and main images come from `src/data/services.js`. A null product image uses its collection image. Veneer, marquetry and parquetry cards are initial design directions pending confirmed catalogue entries.

Routes: `/services/laminates.html`, `/services/veneers.html`, `/services/marquetry.html`, `/services/parquetry.html`. Flat HTML URLs preserve the existing static build configuration. `/service-single.html` defaults to Laminates.

One shared `ServiceSingleContent.astro` retains the original banner, What We Do, six included cards, four process steps, and Why Choose Us structures and classes. `CollectionRange.astro` adds the new grid immediately after the banner, with scoped image proportions. Header, footer and global CSS/JS were not changed.

Verification: `npm run build` passed (26 pages); `python scripts/check-collections.py` passed. Browser checked all four titles, products and section order; no observed console errors or broken images. Mobile 390px and tablet 768px checked without overflow. Listing click-through to Marquetry passed.
