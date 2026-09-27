import { mealSalads, lighterSalads } from './salads';

// Every recipe carries its own dressing. These pages give each dressing a URL
// of its own (/dressing/<slug>) so it can be found, shared and linked directly.
const allSalads = [...mealSalads, ...lighterSalads];

export const dressings = allSalads.map((s) => ({
  slug: s.dressingSlug,
  name: s.dressingName,
  seoName: s.dressingSeoName,
  ingredients: s.dressingIngredients,
  method: s.dressingMethod,
  salad: { id: s.id, title: s.title, seoName: s.seoName, headnote: s.headnote },
}));

export const dressingPath = (slug) => `/dressing/${slug}`;
export const dressingBySlug = (slug) => dressings.find((d) => d.slug === slug);
