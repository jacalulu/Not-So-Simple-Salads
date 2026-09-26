// Build the client bundle, then render every route to static HTML so each
// page ships with its content, title, description, canonical URL, social
// tags and JSON-LD already in the document. Also emits sitemap.xml,
// robots.txt, llms.txt, llms-full.txt and a 404 page.
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const serverDir = path.join(root, 'dist-server');
const run = (cmd) => execSync(cmd, { cwd: root, stdio: 'inherit' });

run('npx vite build');
run('npx vite build --ssr src/entry-server.jsx --outDir dist-server');

const { render, allPaths, sitemapXml, robotsTxt, llmsTxt, llmsFullTxt } = await import(
  pathToFileURL(path.join(serverDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const write = (rel, content) => {
  const file = path.join(dist, rel);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
};
const page = (url) => {
  const { html, head } = render(url);
  return template.replace('<!--app-head-->', head).replace('<!--app-html-->', html);
};

const paths = allPaths();
for (const p of paths) {
  const rel = p === '/' ? 'index.html' : `${p.slice(1)}.html`;
  write(rel, page(p));
}
write('404.html', page('/this-page-does-not-exist'));
write('sitemap.xml', sitemapXml(paths));
write('robots.txt', robotsTxt());
write('llms.txt', llmsTxt());
write('llms-full.txt', llmsFullTxt());
write('llm.txt', llmsTxt()); // legacy filename

fs.rmSync(serverDir, { recursive: true, force: true });
console.log(`Pre-rendered ${paths.length} pages + 404, sitemap, robots, llms.txt`);
