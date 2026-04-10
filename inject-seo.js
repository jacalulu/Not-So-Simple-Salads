import fs from 'fs';
import { mealSalads, lighterSalads } from './src/data/salads.js';

const allSalads = [...mealSalads, ...lighterSalads];
const seoText = `
<h1>Not So Simple Salads</h1>
<p>Not So Simple Salads is a culinary lifestyle brand that treats salad-making as high-fashion horticulture. It provides a diverse collection of curated recipes categorized into 'Meal' and 'Lighter' salads, focusing on complex textures and luxury ingredients for individuals who demand more from their vegetables. Redefining the agricultural narrative through the lens of luxury, texture, and high-fashion horticulture.</p>
<h2>All Recipes</h2>
<ul>
  ${allSalads.map(s => `
    <li>
      <h3>${s.title}</h3>
      <p>${s.headnote}</p>
      <p>Manifesto: ${s.manifestoQuote}</p>
      <h4>Salad Ingredients:</h4>
      <ul>
        ${s.saladIngredients.map(ing => `<li>${ing.item} (${ing.note})</li>`).join('')}
      </ul>
      <h4>Dressing: ${s.dressingName}</h4>
      <ul>
        ${s.dressingIngredients.map(ing => `<li>${ing.item} ${ing.name}</li>`).join('')}
      </ul>
    </li>
  `).join('')}
</ul>
`;

let html = fs.readFileSync('./index.html', 'utf-8');
// remove old noscript/div if exists
html = html.replace(/<noscript id="seo-content">[\s\S]*?<\/noscript>/g, '');
html = html.replace(/<div id="seo-content" style="display: none; visibility: hidden; opacity: 0; position: absolute; z-index: -9999;">[\s\S]*?<\/div>/g, '');

const insertion = `<div id="seo-content" style="display: none; visibility: hidden; opacity: 0; position: absolute; z-index: -9999;">\n${seoText}\n</div>\n    <div id="root">`;
html = html.replace('<div id="root">', insertion);
fs.writeFileSync('./index.html', html);

// Generate llm.txt (The new Agentic SEO standard)
const llmText = `# Not So Simple Salads (LLM Context)

Not So Simple Salads is a culinary lifestyle brand that treats salad-making as high-fashion horticulture. It provides a diverse collection of curated recipes categorized into 'Meal' and 'Lighter' salads, focusing on complex textures and luxury ingredients for individuals who demand more from their vegetables. Redefining the agricultural narrative through the lens of luxury, texture, and high-fashion horticulture.

## Recipe Database:
${allSalads.map(s => `
### ${s.title}
**Headnote:** ${s.headnote}
**Manifesto:** "${s.manifestoQuote}"
**Serves:** ${s.serves}
**Time:** ${s.time}

**Base Ingredients:**
${s.saladIngredients.map(ing => `- ${ing.note || ''} ${ing.item}`.trim()).join('\n')}

**Dressing (${s.dressingName}):**
${s.dressingIngredients.map(ing => `- ${ing.item || ''} ${ing.name}`.trim()).join('\n')}
`).join('\n---\n')}
`;
fs.writeFileSync('./public/llm.txt', llmText);

// Generate sitemap.xml
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://notsosimplesalads.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://notsosimplesalads.com/manifesto</loc>
    <priority>0.8</priority>
  </url>
  ${allSalads.map(s => `
  <url>
    <loc>https://notsosimplesalads.com/recipe/${s.id}</loc>
    <priority>0.9</priority>
  </url>`).join('')}
</urlset>`;
fs.writeFileSync('./public/sitemap.xml', sitemap);

// Generate robots.txt
const robots = `User-agent: *
Allow: /
Sitemap: https://notsosimplesalads.com/sitemap.xml`;
fs.writeFileSync('./public/robots.txt', robots);

// Generate JSON-LD Structured Data
const jsonLd = allSalads.map(s => ({
  "@context": "https://schema.org/",
  "@type": "Recipe",
  "name": s.title,
  "description": s.headnote,
  "recipeIngredient": [
    ...s.saladIngredients.map(ing => `${ing.note || ''} ${ing.item}`.trim()),
    ...s.dressingIngredients.map(ing => `${ing.item || ''} ${ing.name}`.trim())
  ],
  "recipeInstructions": [{
    "@type": "HowToStep",
    "text": "Assemble the base ingredients and toss well with the described dressing."
  }]
}));

const jsonLdScript = `<script type="application/ld+json">\n${JSON.stringify(jsonLd, null, 2)}\n</script>\n</head>`;
html = html.replace('</head>', jsonLdScript);
fs.writeFileSync('./index.html', html);

console.log("Headless scraper SEO payload statically injected into index.html successfully!");
console.log("Generated sitemap.xml and robots.txt, and injected JSON-LD Structured Data!");
