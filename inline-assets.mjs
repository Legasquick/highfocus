import fs from 'fs';
import path from 'path';

const dist = 'dist-offline';
const htmlPath = path.join(dist, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf-8');

// Inline all files referenced as ./photos/... or ./fonts/...
html = html.replace(/(["'(])\.\/((photos|fonts)\/[^"')]+)/g, (match, prefix, filePath) => {
  const full = path.join(dist, filePath);
  if (!fs.existsSync(full)) return match;
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = { png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp', svg: 'image/svg+xml', ttf: 'font/ttf' }[ext] || 'application/octet-stream';
  const b64 = fs.readFileSync(full).toString('base64');
  return `${prefix}data:${mime};base64,${b64}`;
});

fs.writeFileSync(htmlPath, html);
console.log('Inlined all assets into index.html');
