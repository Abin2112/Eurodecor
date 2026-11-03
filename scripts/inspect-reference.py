from pathlib import Path
from bs4 import BeautifulSoup
import re
for path in sorted(Path('src/reference').glob('*.html')):
    soup = BeautifulSoup(path.read_text(encoding='utf-8'), 'html.parser')
    print(path.name, 'body:', [(t.name, t.get('id'),t.get('class')) for t in soup.body.children if getattr(t,'name',None)], 'scripts:', [t.get('src', 'INLINE') for t in soup.find_all('script')])
print('FORMS')
for name in ('contact', 'consultation', 'blog-single'):
    soup = BeautifulSoup(Path(f'src/reference/{name}.html').read_text(encoding='utf-8'), 'html.parser')
    for form in soup.find_all('form'):
        print(name, str(form))
