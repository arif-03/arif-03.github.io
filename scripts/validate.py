#!/usr/bin/env python3
"""Small dependency-free integrity check for the static portfolio."""
from pathlib import Path
from html.parser import HTMLParser
import re
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[1]
ERRORS = []

class RefParser(HTMLParser):
    def __init__(self, source):
        super().__init__()
        self.source = source
    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        for attr in ('href', 'src'):
            ref = values.get(attr)
            if not ref or ref.startswith(('#', 'http://', 'https://', 'mailto:', 'tel:', 'data:')):
                continue
            clean = ref.split('#',1)[0].split('?',1)[0]
            target = (ROOT / clean).resolve()
            if not target.exists():
                ERRORS.append(f'{self.source}: missing {attr} target: {ref}')

for html in ROOT.glob('*.html'):
    parser = RefParser(html.name)
    parser.feed(html.read_text(encoding='utf-8'))

# Check local assets referenced inside the central data file and renderer.
for source in [ROOT/'assets/js/content.js', ROOT/'assets/js/site.js']:
    text = source.read_text(encoding='utf-8')
    for ref in re.findall(r'["\'](assets/(?:images|documents)/[^"\']+)["\']', text):
        if not (ROOT/ref).exists():
            ERRORS.append(f'{source.relative_to(ROOT)}: missing asset: {ref}')

# Syntax-check JavaScript with Node when available.
try:
    for js in [ROOT/'assets/js/content.js', ROOT/'assets/js/site.js']:
        result = subprocess.run(['node', '--check', str(js)], capture_output=True, text=True)
        if result.returncode:
            ERRORS.append(f'{js.relative_to(ROOT)}: JavaScript syntax error:\n{result.stderr.strip()}')
except FileNotFoundError:
    print('Note: node not installed; skipped JavaScript syntax check.')

if ERRORS:
    print('Validation failed:')
    for err in ERRORS:
        print(' -', err)
    sys.exit(1)

print('Validation passed: HTML references, local assets and JavaScript syntax look good.')
