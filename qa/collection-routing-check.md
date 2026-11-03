# Collection navigation investigation

The reported listing-only failure was not reproducible in the local checkout before changes: all four listing clicks displayed their matching title. Both listing and homepage anchors already had correct, distinct URLs. No netlify.toml or _redirects rules were present, and no collection-selection navigation override was found in the shared scripts.

The detail component did have an unsafe implicit `collections[0]` fallback. Removed that fallback: collection is now a required validated prop. The dynamic route resolves the actual `Astro.params.slug`; the legacy service-single page selects Laminates explicitly. Invalid dynamic paths are not generated and do not fall back to Laminates.

Verification after changes:

- Clicked all four cards from Services: matching .html URL, heading and product list.
- Clicked all four homepage carousel cards: matching heading.
- No console warnings/errors observed.
- npm run build: passed, 26 pages including all four collection routes.
- python scripts/check-collections.py: passed section/content/link checks.
- No design, image, animation, header, footer or link changes were made.

If the failure persists on a hosted copy, its deployed build and redirect configuration still need inspection; local testing cannot establish the cause of a different deployed version.
