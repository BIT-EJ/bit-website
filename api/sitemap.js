const fs = require('fs');
const path = require('path');

const baseUrl = 'https://www.bitej.com.br';
const rootDir = path.join(__dirname, '..');

const ignorar = new Set([
  'node_modules',
  '.git',
  '.vercel',
  'scripts'
]);

function encontrarHtml(dir) {
  const arquivos = [];

  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    if (ignorar.has(item.name)) continue;

    const caminho = path.join(dir, item.name);

    if (item.isDirectory()) {
      arquivos.push(...encontrarHtml(caminho));
    } else if (item.isFile() && item.name.endsWith('.html')) {
      arquivos.push(caminho);
    }
  }

  return arquivos;
}

function gerarUrl(caminho) {
  let url = path.relative(rootDir, caminho);

  // Converte Windows "\" para "/"
  url = url.replace(/\\/g, '/');

  // index.html vira /
  if (url === 'index.html') {
    return '/';
  }

  // pasta/index.html vira /pasta/
  url = url.replace(/\/index\.html$/, '/');

  return `/${url}`;
}

const arquivosHtml = encontrarHtml(rootDir);

const urls = arquivosHtml
  .map(gerarUrl)
  .sort();

const dataAtual = new Date().toISOString();

let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const url of urls) {
  xml += `  <url>\n`;
  xml += `    <loc>${baseUrl}${url}</loc>\n`;
  xml += `    <lastmod>${dataAtual}</lastmod>\n`;
  xml += `  </url>\n`;
}

xml += `</urlset>\n`;

const sitemapPath = path.join(rootDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, xml, 'utf8');

console.log(`Sitemap gerado: ${sitemapPath}`);
console.log(`${urls.length} páginas encontradas.`);

for (const url of urls) {
  console.log(` - ${baseUrl}${url}`);
}
