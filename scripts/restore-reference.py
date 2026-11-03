"""Restore incomplete HTTrack assets without modifying the downloaded source."""
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.parse import urljoin, urlparse, unquote
from concurrent.futures import ThreadPoolExecutor
import re, json

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / 'www.designesia.com/themes/intrio'
BASE = 'https://www.designesia.com/themes/intrio/'
PUBLIC = ROOT / 'public'
CACHE = ROOT / 'src/reference'
CACHE.mkdir(parents=True, exist_ok=True)
errors = []

def fetch(url):
    req = Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    with urlopen(req, timeout=45) as r:
        return r.read(), r.headers.get('Content-Type', '')

def page(name):
    try:
        data, mime = fetch(BASE + name)
        if b'<title>Intrio' not in data:
            raise ValueError('Not an Intrio page')
        (CACHE / name).write_bytes(data)
        return name, data.decode('utf-8')
    except Exception as e:
        errors.append({'url': BASE + name, 'error': str(e)})
        return name, ''

names = [p.name for p in SOURCE.glob('*.html') if p.name != 'contact-2.html']
with ThreadPoolExecutor(max_workers=6) as pool:
    pages = dict(pool.map(page, names))

# Start with every downloaded asset, retaining byte-identical original images.
import shutil
for directory in ('css', 'images', 'fonts'):
    shutil.copytree(SOURCE / directory, PUBLIC / directory, dirs_exist_ok=True)

pending = set()
for html in pages.values():
    for value in re.findall(r'(?:src|href)=["\']([^"\']+)', html):
        if value.startswith(('css/', 'js/', 'fonts/', 'images/')) or value.endswith('.js'):
            pending.add(urljoin(BASE, value))
    for value in re.findall(r'url\(["\']?([^\)"\']+)', html):
        pending.add(urljoin(BASE, value))

seen = set()
def asset(url):
    try:
        parsed = urlparse(url)
        if parsed.netloc != 'www.designesia.com' or not parsed.path.startswith('/themes/intrio/'):
            return []
        relative = unquote(parsed.path.removeprefix('/themes/intrio/'))
        target = PUBLIC / relative
        if not target.resolve().is_relative_to(PUBLIC.resolve()):
            raise ValueError('Asset outside public directory')
        if target.exists() and target.stat().st_size > 0 and not relative.endswith('.css'):
            data = target.read_bytes()
        else:
            data, mime = fetch(url)
            if 'text/html' in mime:
                raise ValueError('HTML response for asset')
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_bytes(data)
        dependencies = []
        if relative.endswith('.css'):
            css = data.decode('utf-8')
            # The mirrored stylesheet renamed the missing icon CSS to .html.
            css = re.sub(r'(fonts/[^"\')]+)\.html', r'\1.css', css)
            target.write_text(css, encoding='utf-8')
            dependencies = [urljoin(url, v) for v in re.findall(r'url\(["\']?([^\)"\']+)', css) if not v.startswith('data:')]
        return dependencies
    except Exception as e:
        errors.append({'url': url, 'error': str(e)})
        return []

while pending:
    batch = sorted(pending - seen)
    if not batch:
        break
    seen.update(batch)
    with ThreadPoolExecutor(max_workers=8) as pool:
        pending = {u for deps in pool.map(asset, batch) for u in deps}

(ROOT / 'reference-restoration.json').write_text(json.dumps({'pages': [n for n,s in pages.items() if s], 'assets_checked': len(seen), 'errors': errors}, indent=2))
for empty in PUBLIC.rglob('*.html'):
    if empty.stat().st_size == 0:
        empty.unlink()
print(json.dumps({'pages': len([s for s in pages.values() if s]), 'assets_checked': len(seen), 'errors': errors}, indent=2))
