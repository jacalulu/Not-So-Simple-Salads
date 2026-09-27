import { createContext, useContext } from 'react';
import { mealSalads, lighterSalads } from './data/salads';
import { dressings, dressingBySlug, dressingPath } from './data/dressings';

const allSalads = [...mealSalads, ...lighterSalads];

// Path-based routes. Every page has a real URL so search engines, social
// previews, and AI agents can reach it directly.
export const STATIC_ROUTES = {
  '/': { type: 'home' },
  '/introduction': { type: 'intro' },
  '/how-to-use': { type: 'how-to' },
  '/pantry': { type: 'pantry' },
  '/about': { type: 'about' },
  '/dressings': { type: 'dressings' },
};

// Old hash routes (#intro, #how-to, #thaid-and-true, …) map onto the new paths
// so links shared before the change keep working.
export const LEGACY_HASH_ROUTES = {
  intro: '/introduction',
  'how-to': '/how-to-use',
  pantry: '/pantry',
  about: '/about',
};

export const recipePath = (id) => `/recipe/${id}`;

export function normalizePath(pathname) {
  let p = (pathname || '/').split('?')[0].split('#')[0];
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  if (p.endsWith('/index.html')) p = p.slice(0, -'/index.html'.length) || '/';
  return p || '/';
}

export function resolveRoute(pathname) {
  const path = normalizePath(pathname);
  if (STATIC_ROUTES[path]) return { ...STATIC_ROUTES[path], path };
  const m = path.match(/^\/recipe\/([a-z0-9-]+)$/);
  if (m) {
    const salad = allSalads.find((s) => s.id === m[1]);
    if (salad) return { type: 'recipe', data: salad, path };
  }
  const dm = path.match(/^\/dressing\/([a-z0-9-]+)$/);
  if (dm) {
    const dressing = dressingBySlug(dm[1]);
    if (dressing) return { type: 'dressing', data: dressing, path };
  }
  return { type: 'not-found', path };
}

export function legacyHashToPath(hash) {
  const key = (hash || '').replace(/^#/, '');
  if (!key) return null;
  if (LEGACY_HASH_ROUTES[key]) return LEGACY_HASH_ROUTES[key];
  if (allSalads.some((s) => s.id === key)) return recipePath(key);
  return null;
}

export function allPaths() {
  return [
    ...Object.keys(STATIC_ROUTES),
    ...allSalads.map((s) => recipePath(s.id)),
    ...dressings.map((d) => dressingPath(d.slug)),
  ];
}

export const RouteContext = createContext({ type: 'home', path: '/' });
export const useRoute = () => useContext(RouteContext);

export function navigate(to, { replace = false } = {}) {
  if (typeof window === 'undefined') return;
  if (replace) window.history.replaceState({}, '', to);
  else window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}
