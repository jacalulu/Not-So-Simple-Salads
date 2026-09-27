import { mealSalads, lighterSalads } from './data/salads';
import { recipePath } from './router';
import { dressings, dressingPath } from './data/dressings';

export const SITE = {
  name: 'Not So Simple Salads',
  url: 'https://www.notsosimplesalads.com',
  tagline: 'I have opinions about salads. Strong ones.',
  description:
    'Bold, texture-obsessed salad recipes from the Not So Simple Salads cookbook by Jaclyn Konzelmann. Meal salads and lighter salads with homemade dressings, big acid, and zero limp lettuce.',
  author: { name: 'Jaclyn Konzelmann', url: 'https://blog.jaclynkonzelmann.com' },
  instagram: 'https://www.instagram.com/notsosimplesalads/',
  x: 'https://x.com/BoldSalads',
  xHandle: '@BoldSalads',
  defaultImage: '/header_generic.jpg',
  // Bump when recipe content changes; used for sitemap lastmod and datePublished.
  contentDate: '2026-04-11',
};

const allSalads = [
  ...mealSalads.map((s) => ({ ...s, category: 'Meal' })),
  ...lighterSalads.map((s) => ({ ...s, category: 'Lighter' })),
];

export const abs = (path) => (path.startsWith('http') ? path : `${SITE.url}${path}`);

const clip = (text, max = 155) => {
  const t = (text || '').replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max - 1);
  return cut.slice(0, cut.lastIndexOf(' ')) + '…';
};

const isoDuration = (time) => {
  const m = /(\d+)\s*(min|hr|hour)/i.exec(time || '');
  if (!m) return undefined;
  return /hr|hour/i.test(m[2]) ? `PT${m[1]}H` : `PT${m[1]}M`;
};

const ingredientLine = (ing) => {
  // saladIngredients use {item, note}; dressing/component use {item: qty, name}
  if (ing.name) return `${ing.item || ''} ${ing.name}`.trim();
  return `${ing.note || ''} ${ing.item}`.trim();
};

export function recipeJsonLd(salad) {
  const url = abs(recipePath(salad.id));
  const steps = [];
  if (salad.componentRecipe) {
    steps.push({
      '@type': 'HowToStep',
      name: salad.componentRecipe.title,
      text: salad.componentRecipe.method,
    });
  }
  steps.push({
    '@type': 'HowToStep',
    name: `Make the ${salad.dressingName}`,
    text: `Combine ${salad.dressingIngredients.map(ingredientLine).join(', ')}.`,
  });
  steps.push({
    '@type': 'HowToStep',
    name: 'Assemble',
    text: `Toss ${salad.saladIngredients.map((i) => i.item.toLowerCase()).join(', ')} with the ${salad.dressingName} and serve.`,
  });

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': `${url}#recipe`,
    name: salad.seoName || salad.title,
    alternateName: salad.seoName ? salad.title : undefined,
    url,
    mainEntityOfPage: url,
    image: [abs(`/${salad.id}.jpg`)],
    description: salad.headnote,
    author: { '@type': 'Person', name: SITE.author.name, url: SITE.author.url },
    datePublished: SITE.contentDate,
    recipeCategory: salad.category === 'Meal' ? 'Meal salad' : 'Lighter salad',
    keywords: [salad.seoName, salad.title, salad.dressingName, 'salad', `${salad.category.toLowerCase()} salad`]
      .concat(salad.saladIngredients.slice(0, 4).map((i) => i.item))
      .join(', '),
    recipeYield: `${salad.serves} servings`,
    totalTime: isoDuration(salad.time),
    recipeIngredient: [
      ...salad.saladIngredients.map(ingredientLine),
      ...salad.dressingIngredients.map(ingredientLine),
      ...(salad.componentRecipe ? salad.componentRecipe.ingredients.map(ingredientLine) : []),
    ],
    recipeInstructions: steps,
    isPartOf: { '@type': 'WebSite', '@id': `${SITE.url}/#website` },
  };
  if (salad.video) {
    data.video = {
      '@type': 'VideoObject',
      name: `${salad.title} — Not So Simple Salads`,
      description: salad.headnote,
      contentUrl: abs(`/${salad.video}`),
      thumbnailUrl: [abs(`/${salad.video.replace('.mp4', '-poster.jpg')}`)],
      uploadDate: SITE.contentDate,
    };
  }
  return data;
}

export function dressingJsonLd(d) {
  const url = abs(dressingPath(d.slug));
  return {
    '@context': 'https://schema.org',
    '@type': 'Recipe',
    '@id': `${url}#recipe`,
    name: d.seoName,
    alternateName: d.name,
    url,
    mainEntityOfPage: url,
    image: [abs(`/${d.salad.id}.jpg`)],
    description: `The homemade dressing from the ${d.salad.seoName} in the Not So Simple Salads cookbook.`,
    author: { '@type': 'Person', name: SITE.author.name, url: SITE.author.url },
    datePublished: SITE.contentDate,
    recipeCategory: 'Salad dressing',
    keywords: [d.seoName, d.name, 'salad dressing', 'homemade dressing', 'vinaigrette'].join(', '),
    totalTime: 'PT3M',
    recipeIngredient: d.ingredients.map(ingredientLine),
    recipeInstructions: [{ '@type': 'HowToStep', text: d.method }],
    isPartOf: { '@type': 'WebSite', '@id': `${SITE.url}/#website` },
  };
}

const websiteJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  name: SITE.name,
  url: `${SITE.url}/`,
  description: SITE.description,
  inLanguage: 'en',
  author: { '@type': 'Person', name: SITE.author.name, url: SITE.author.url, sameAs: [SITE.instagram, SITE.x] },
});

const breadcrumbJsonLd = (crumbs) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: crumbs.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: c.name,
    item: abs(c.path),
  })),
});

const STATIC_META = {
  home: {
    title: 'Not So Simple Salads — Bold salad recipes with homemade dressings',
    description: SITE.description,
    image: SITE.defaultImage,
  },
  intro: {
    title: 'Introduction | Not So Simple Salads',
    description:
      'Why these salads exist: strong opinions, big flavor, and a decade of recipes collected for friends and family. Read the introduction to the Not So Simple Salads cookbook.',
  },
  'how-to': {
    title: 'How To Use This Book | Not So Simple Salads',
    description:
      'How the cookbook is organized (meal salads and lighter salads), what the lab marker means, and notes on technique: julienning, salt, pepper, and fresh everything.',
  },
  pantry: {
    title: 'Stock Your Pantry | Not So Simple Salads',
    description:
      'The spice shelf, the acid arsenal, the umami layer, and the specialty ingredients that turn a fine salad into one people ask for the recipe for.',
  },
  about: {
    title: 'About Jaclyn Konzelmann | Not So Simple Salads',
    description:
      'Jaclyn Konzelmann is a self-taught home cook with strong opinions about flavor, acid, and texture. She makes every dressing from scratch and wrote the Not So Simple Salads cookbook.',
  },
  dressings: {
    title: 'Homemade Salad Dressing Recipes | Not So Simple Salads',
    description:
      'Eighteen from-scratch salad dressings: nam jim, ginger miso, Caesar, preserved lemon, Thai peanut, citrus vinaigrette and more. Each one takes about three minutes and comes with the salad it was built for.',
  },
  'not-found': {
    title: 'Page not found | Not So Simple Salads',
    description: 'That page does not exist. Browse all the salad recipes instead.',
    noindex: true,
  },
};

export function pageMeta(route) {
  if (route.type === 'recipe') {
    const s = allSalads.find((x) => x.id === route.data.id) || route.data;
    const path = recipePath(s.id);
    return {
      title: `${s.seoName} | Not So Simple Salads`,
      ogTitle: `${s.title} — ${s.seoName}`,
      description: clip(`${s.seoName}. ${s.headnote}`),
      canonical: abs(path),
      image: abs(`/${s.id}.jpg`),
      type: 'article',
      jsonLd: [
        recipeJsonLd(s),
        breadcrumbJsonLd([
          { name: 'Recipes', path: '/' },
          { name: s.title, path },
        ]),
      ],
    };
  }
  if (route.type === 'dressing') {
    const d = route.data;
    const path = dressingPath(d.slug);
    return {
      title: `${d.seoName} recipe | Not So Simple Salads`,
      ogTitle: `${d.name} — ${d.seoName}`,
      description: clip(`${d.seoName}: the homemade dressing from our ${d.salad.seoName}. ${d.ingredients.length} ingredients, about three minutes. ${d.method}`),
      canonical: abs(path),
      image: abs(`/${d.salad.id}.jpg`),
      type: 'article',
      jsonLd: [dressingJsonLd(d), breadcrumbJsonLd([{ name: 'Dressings', path: '/dressings' }, { name: d.name, path }])],
    };
  }
  const base = STATIC_META[route.type] || STATIC_META['not-found'];
  const path = route.type === 'not-found' ? null : route.path || '/';
  const jsonLd = [];
  if (route.type === 'home') {
    jsonLd.push(websiteJsonLd());
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'All Not So Simple Salads recipes',
      itemListElement: allSalads.map((s, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: s.title,
        url: abs(recipePath(s.id)),
      })),
    });
  } else if (path) {
    jsonLd.push(breadcrumbJsonLd([{ name: 'Home', path: '/' }, { name: base.title.split(' | ')[0], path }]));
  }
  return {
    title: base.title,
    description: base.description,
    canonical: path ? abs(path) : null,
    image: abs(base.image || SITE.defaultImage),
    type: 'website',
    noindex: !!base.noindex,
    jsonLd,
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Head markup injected at build time for each pre-rendered page.
export function headHtml(meta) {
  const lines = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    meta.noindex ? `<meta name="robots" content="noindex" />` : `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    meta.canonical ? `<link rel="canonical" href="${esc(meta.canonical)}" />` : '',
    `<meta property="og:site_name" content="${esc(SITE.name)}" />`,
    `<meta property="og:type" content="${meta.type}" />`,
    `<meta property="og:title" content="${esc(meta.ogTitle || meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    meta.canonical ? `<meta property="og:url" content="${esc(meta.canonical)}" />` : '',
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta property="og:locale" content="en_US" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:site" content="${SITE.xHandle}" />`,
    `<meta name="twitter:title" content="${esc(meta.ogTitle || meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
    ...meta.jsonLd.map(
      (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, '\\u003c')}</script>`
    ),
  ];
  return lines.filter(Boolean).join('\n    ');
}

// Runtime update on client-side navigation so the tab title, description and
// canonical always match the page the visitor is on.
export function applyMeta(meta) {
  if (typeof document === 'undefined') return;
  document.title = meta.title;
  const set = (selector, attr, value, create) => {
    let el = document.head.querySelector(selector);
    if (!el && create) {
      el = create();
      document.head.appendChild(el);
    }
    if (el) el.setAttribute(attr, value);
  };
  set('meta[name="description"]', 'content', meta.description, () => {
    const m = document.createElement('meta');
    m.name = 'description';
    return m;
  });
  set('meta[property="og:title"]', 'content', meta.ogTitle || meta.title);
  set('meta[property="og:description"]', 'content', meta.description);
  set('meta[property="og:image"]', 'content', meta.image);
  set('meta[name="twitter:title"]', 'content', meta.ogTitle || meta.title);
  set('meta[name="twitter:description"]', 'content', meta.description);
  set('meta[name="twitter:image"]', 'content', meta.image);
  if (meta.canonical) {
    set('link[rel="canonical"]', 'href', meta.canonical, () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    });
    set('meta[property="og:url"]', 'content', meta.canonical);
  }
}

// ---- Text files for crawlers and agents ----------------------------------

export function sitemapXml(paths) {
  const rows = paths
    .map((p) => {
      const priority = p === '/' ? '1.0' : p.startsWith('/recipe/') ? '0.9' : p.startsWith('/dressing') ? '0.8' : '0.6';
      return `  <url>\n    <loc>${abs(p)}</loc>\n    <lastmod>${SITE.contentDate}</lastmod>\n    <priority>${priority}</priority>\n  </url>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${rows}\n</urlset>\n`;
}

export function robotsTxt() {
  return `# Not So Simple Salads — everything here is meant to be found.
User-agent: *
Allow: /

# AI assistants and answer engines are welcome. Structured summaries live at /llms.txt.
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;
}

export function llmsTxt() {
  const recipeLine = (s) => `- [${s.title} — ${s.seoName}](${abs(recipePath(s.id))}): ${clip(s.headnote, 120)} Dressing: ${s.dressingName}. Serves ${s.serves}, ${s.time}.`;
  const dressingLine = (d) => `- [${d.name} — ${d.seoName}](${abs(dressingPath(d.slug))}): ${d.ingredients.length} ingredients, about 3 minutes. Made for ${d.salad.title}.`;
  return `# ${SITE.name}

> ${SITE.description}

Not So Simple Salads is a cookbook and website by ${SITE.author.name} (${SITE.author.url}). Every recipe lists the salad ingredients, a from-scratch dressing, and any sub-recipe (marinades, pickles, croutons). Recipes are split into hearty Meal Salads and brighter Lighter Salads. The tone is opinionated: more acid, more salt, more texture, no limp lettuce.

## Meal Salads

${allSalads.filter((s) => s.category === 'Meal').map(recipeLine).join('\n')}

## Lighter Salads

${allSalads.filter((s) => s.category === 'Lighter').map(recipeLine).join('\n')}

## Dressings

All homemade, all about three minutes. Index: ${abs('/dressings')}

${dressings.map(dressingLine).join('\n')}

## About the book

- [Introduction](${abs('/introduction')}): why these salads exist and the philosophy behind them.
- [How To Use This Book](${abs('/how-to-use')}): how the recipes are organized, plus notes on technique.
- [Stock Your Pantry](${abs('/pantry')}): the spices, acids, umami and specialty ingredients the recipes lean on.
- [About the Author](${abs('/about')}): ${SITE.author.name}, self-taught home cook, strong opinions.

## Optional

- [Full recipe text](${abs('/llms-full.txt')}): every ingredient list, dressing and sub-recipe in one file.
- [Sitemap](${abs('/sitemap.xml')})
- Instagram: ${SITE.instagram} · X: ${SITE.x}
`;
}

export function llmsFullTxt() {
  const block = (s) => `## ${s.title} — ${s.seoName}
URL: ${abs(recipePath(s.id))}
Category: ${s.category} salad · Serves ${s.serves} · ${s.time}
Headnote: ${s.headnote}
Manifesto: "${s.manifestoQuote}"

Salad ingredients:
${s.saladIngredients.map((i) => `- ${ingredientLine(i)}`).join('\n')}

Dressing (${s.dressingName} — ${s.dressingSeoName}), page: ${abs(dressingPath(s.dressingSlug))}
${s.dressingIngredients.map((i) => `- ${ingredientLine(i)}`).join('\n')}
Dressing method: ${s.dressingMethod}
${
  s.componentRecipe
    ? `
Sub-recipe (${s.componentRecipe.title}):
${s.componentRecipe.ingredients.map((i) => `- ${ingredientLine(i)}`).join('\n')}
Method: ${s.componentRecipe.method}
`
    : ''
}`;
  return `# ${SITE.name} — full recipe index

> ${SITE.description}

Author: ${SITE.author.name} (${SITE.author.url})
Site: ${SITE.url}

${allSalads.map(block).join('\n---\n\n')}`;
}
