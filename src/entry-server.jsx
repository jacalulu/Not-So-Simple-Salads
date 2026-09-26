import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';
import { allPaths, resolveRoute } from './router';
import { pageMeta, headHtml, sitemapXml, robotsTxt, llmsTxt, llmsFullTxt } from './seo';

export function render(url) {
  const route = resolveRoute(url);
  const meta = pageMeta(route);
  const html = renderToString(<App url={url} />);
  return { html, head: headHtml(meta), route };
}

export { allPaths, sitemapXml, robotsTxt, llmsTxt, llmsFullTxt };
