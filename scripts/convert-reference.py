"""Convert the audited live snapshot; never writes to the downloaded source."""
from pathlib import Path
from bs4 import BeautifulSoup, Comment
import json, sys, re

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / 'src'
COMPONENTS = SRC / 'components/intrio'
COMPONENTS.mkdir(parents=True, exist_ok=True)
DATA = SRC / 'data'
DATA.mkdir(exist_ok=True)
SNAPSHOT = SRC / 'reference'

def clean(soup):
    for comment in soup.find_all(string=lambda t: isinstance(t, Comment)):
        comment.extract()
    for tag in soup.find_all(True):
        for attr in ('href', 'src', 'poster', 'action'):
            value = tag.get(attr)
            if value and not value.startswith(('/', '#', 'http:', 'https:', 'mailto:', 'tel:', 'data:')):
                tag[attr] = '/' + value
        for attr in ('data-bgimage', 'style'):
            if tag.has_attr(attr):
                tag[attr] = re.sub(r'url\(([\"\']?)(images/)', r'url(\1/\2', tag[attr])
    for form in soup.find_all('form'):
        form['data-local-form'] = ''
        form['action'] = '#'
        for field in form.select('input:not([type=checkbox]):not([type=submit]), select, textarea'):
            if not (form.get('id') == 'interior-estimator-form' and field.get('name') == 'message'):
                field['required'] = ''
            if field.get('name') == 'email' or field.get('id') == 'email':
                field['type'] = 'email'
            if not field.get('aria-label') and not field.get('id'):
                label = field.find_previous_sibling('label')
                field['aria-label'] = field.get('placeholder') or (label.get_text() if label else 'Your details')
    return soup

home = clean(BeautifulSoup((SNAPSHOT / 'index.html').read_text(encoding='utf-8'), 'html.parser'))
headers = {}
for name in ('index', 'index-2', 'index-3', 'index-4', 'index-5', 'index-6', 'about', 'contact'):
    page = clean(BeautifulSoup((SNAPSHOT / f'{name}.html').read_text(encoding='utf-8'), 'html.parser'))
    headers[name] = str(page.header)
(DATA / 'headers.json').write_text(json.dumps(headers, ensure_ascii=False, indent=2), encoding='utf-8')
(COMPONENTS / 'Header.astro').write_text("---\nimport headers from '../../data/headers.json';\ninterface Props { variant?: keyof typeof headers }\nconst { variant = 'index' } = Astro.props;\n---\n<Fragment set:html={headers[variant]} />\n", encoding='utf-8')
for name, tag in [('Footer', home.footer), ('SitePanel', home.select_one('#extra-wrap'))]:
    (COMPONENTS / f'{name}.astro').write_text(str(tag), encoding='utf-8')

sections = list(home.main.find_all('section', recursive=False))
section_names = ['Hero', 'About', 'Services', 'Testimonials', 'Projects', 'Process', 'Video', 'FAQ', 'Blog']
assert len(sections) == len(section_names), len(sections)
for name, section in zip(section_names, sections):
    (COMPONENTS / f'{name}.astro').write_text(str(section), encoding='utf-8')
homepage = "---\nimport Layout from '../layouts/Layout.astro';\n"
homepage += ''.join(f"import {n} from '../components/intrio/{n}.astro';\n" for n in section_names)
homepage += '---\n<Layout slider>\n' + '\n'.join(f'  <{n} />' for n in section_names) + '\n</Layout>\n'
(SRC / 'pages/index.astro').write_text(homepage, encoding='utf-8')

if '--homepage' not in sys.argv:
    for path in sorted(SNAPSHOT.glob('*.html')):
        if path.name == 'index.html':
            continue
        soup = clean(BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser'))
        for tag in soup.main.select('#back-to-top, #de-loader, script'):
            tag.decompose()
        name = path.stem
        component = ''.join(part.title() for part in name.split('-')) + 'Content'
        (COMPONENTS / f'{component}.astro').write_text(soup.main.decode_contents(), encoding='utf-8')
        variant = name if name in headers else 'about'
        slider = ' slider' if soup.select_one('.swiper') else ''
        (SRC / 'pages' / f'{name}.astro').write_text(f"---\nimport Layout from '../layouts/Layout.astro';\nimport Content from '../components/intrio/{component}.astro';\n---\n<Layout headerVariant=\"{variant}\"{slider}><Content /></Layout>\n", encoding='utf-8')
    for alias, destination in [('index-7', 'index-6'), ('contact-2', 'contact')]:
        (SRC / 'pages' / f'{alias}.astro').write_text(f"---\nimport Page from './{destination}.astro';\n---\n<Page />\n", encoding='utf-8')
    # All of these are the migration's superseded wrappers. Astro adds .html
    # itself in file mode; a .html.astro page would emit a double extension.
    for old in (SRC / 'pages').glob('*.html.astro'):
        old.unlink()
print('Converted homepage' if '--homepage' in sys.argv else 'Converted all 20 live pages plus compatibility routes')
