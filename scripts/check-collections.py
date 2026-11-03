"""Verify collection routing and rendered content after npm run build."""
from pathlib import Path
from bs4 import BeautifulSoup

root = Path(__file__).resolve().parents[1]
slugs = ['laminates', 'veneers', 'marquetry', 'parquetry']
for slug in slugs:
    page = BeautifulSoup((root / f'dist/services/{slug}.html').read_text(encoding='utf-8'), 'html.parser')
    assert page.h1.get_text(strip=True) == slug.upper(), slug
    sections = page.select('main > section')
    assert sections[1].get('id') == 'our-collection', slug
    assert sections[2].select_one('.subtitle').get_text(strip=True) == 'What We Do', slug
    assert len(sections[1].select('h3')) == (6 if slug == 'laminates' else 4), slug
    assert len(sections[3].select('.col-md-4')) == 6, slug
    assert len(sections[4].select('.de-step')) == 4, slug
    assert 'Furniture & Decor Selection' not in page.main.get_text(), slug
    if slug != 'laminates':
        assert 'SYNCHRO' not in sections[1].get_text(), slug
    for image in page.main.select('img[src^="/"]'):
        assert (root / 'public' / image['src'].lstrip('/')).is_file(), image['src']
for route in ['index.html', 'services.html']:
    page = BeautifulSoup((root / 'dist' / route).read_text(encoding='utf-8'), 'html.parser')
    for slug in slugs:
        assert page.select_one(f'a[href="/services/{slug}.html"]'), (route, slug)
print('PASS: four collection pages, section order, product counts, six included items, four steps, local images and homepage/listing links')
