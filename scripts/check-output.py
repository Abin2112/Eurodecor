"""Check built routes, local assets and CSS font/image dependencies."""
from pathlib import Path
from urllib.parse import urlsplit, unquote
from bs4 import BeautifulSoup
import json, re, sys

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / 'dist'
issues = []
pages = list(DIST.rglob('*.html'))
checked = set()
def check(value, owner, base):
    if not value or value.startswith(('#', 'data:', 'mailto:', 'tel:', 'javascript:')):
        return
    url = urlsplit(value)
    if url.scheme or url.netloc:
        return
    path = unquote(url.path)
    target = DIST / path.lstrip('/') if path.startswith('/') else base / path
    key = (str(target), value)
    if key in checked:
        return
    checked.add(key)
    if not target.exists() and not (target / 'index.html').exists():
        issues.append({'owner': str(owner.relative_to(DIST)), 'url': value})

for file in pages:
    soup = BeautifulSoup(file.read_text(encoding='utf-8'), 'html.parser')
    if soup.find('html') is None or soup.find('main') is None:
        issues.append({'owner': str(file.relative_to(DIST)), 'error': 'Missing document/main'})
    for tag in soup.find_all(True):
        for attr in ('src', 'href', 'poster'):
            if tag.has_attr(attr):
                check(tag[attr], file, file.parent)
        for attr in ('data-bgimage', 'style'):
            for value in re.findall(r'url\(["\']?([^\)"\']+)', tag.get(attr, '')):
                check(value, file, file.parent)
for file in DIST.rglob('*.css'):
    for value in re.findall(r'url\(["\']?([^\)"\']+)', file.read_text(encoding='utf-8')):
        check(value, file, file.parent)

report = {'html_documents': len(pages), 'local_references_checked': len(checked), 'issues': issues}
(ROOT / 'output-check.json').write_text(json.dumps(report, indent=2))
print(json.dumps(report, indent=2))
sys.exit(bool(issues))
