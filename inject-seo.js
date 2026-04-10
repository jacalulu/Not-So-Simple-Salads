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
// remove old noscript if exists
html = html.replace(/<noscript id="seo-content">[\s\S]*?<\/noscript>/g, '');

const insertion = `<noscript id="seo-content">\n${seoText}\n</noscript>\n    <div id="root">`;
html = html.replace('<div id="root">', insertion);
fs.writeFileSync('./index.html', html);
console.log("Headless scraper SEO payload statically injected into index.html successfully!");
