// Fourthwall Storefront API client + a tiny localStorage cart.
//
// The shop works in two modes:
//  - LIVE: VITE_FOURTHWALL_TOKEN is set (Fourthwall dashboard → Settings →
//    For Developers → Storefront token). Products come from the API and
//    checkout happens on the Fourthwall-hosted checkout page.
//  - PREVIEW: no token yet. The page renders the upcoming drop from local
//    images with a "join the list" CTA instead of buy buttons.
//
// The storefront token is a public, read-only browsing credential (it ships
// in client code by design — Fourthwall's own docs call it from fetch() in
// the browser). It is NOT the Platform API key; never put that one here.

const TOKEN = import.meta.env.VITE_FOURTHWALL_TOKEN || '';
// The Fourthwall-hosted shop origin, e.g. "https://notsosimplesalads-shop.fourthwall.com"
// or a custom domain like "https://shop.notsosimplesalads.com".
const SHOP_ORIGIN = (import.meta.env.VITE_FOURTHWALL_SHOP_URL || '').replace(/\/+$/, '');

const API = 'https://storefront-api.fourthwall.com/v1';

export const shopConfigured = () => Boolean(TOKEN && SHOP_ORIGIN);

async function api(path, params = {}) {
  const q = new URLSearchParams({ storefront_token: TOKEN, currency: 'USD', ...params });
  const resp = await fetch(`${API}${path}?${q}`);
  if (!resp.ok) throw new Error(`Fourthwall ${path} → ${resp.status}`);
  return resp.json();
}

// Every Fourthwall shop has a built-in "all" collection.
export async function fetchProducts() {
  const data = await api('/collections/all/products', { size: '50' });
  return (data.results || []).map((p) => {
    const variant = p.variants?.[0];
    return {
      id: p.id,
      slug: p.slug,
      name: p.name,
      description: p.description,
      image: p.images?.[0]?.transformedUrl || p.images?.[0]?.url || variant?.images?.[0]?.url,
      price: variant?.unitPrice?.value,
      compareAt: variant?.compareAtPrice?.value,
      variantId: variant?.id,
      variantCount: p.variants?.length || 0,
      url: SHOP_ORIGIN ? `${SHOP_ORIGIN}/products/${p.slug}` : null,
    };
  });
}

// ---- cart (variantId -> qty), persisted per browser ----
const CART_KEY = 'nsss-cart-v1';

export function readCart() {
  try {
    return JSON.parse(window.localStorage.getItem(CART_KEY)) || {};
  } catch {
    return {};
  }
}

function writeCart(cart) {
  try {
    window.localStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch {
    /* private mode etc. — cart just won't persist */
  }
}

export function addToCart(variantId, qty = 1) {
  const cart = readCart();
  cart[variantId] = (cart[variantId] || 0) + qty;
  writeCart(cart);
  return cart;
}

export function removeFromCart(variantId) {
  const cart = readCart();
  delete cart[variantId];
  writeCart(cart);
  return cart;
}

export function clearCart() {
  writeCart({});
  return {};
}

export const cartCount = (cart) => Object.values(cart).reduce((a, b) => a + b, 0);

// Fourthwall-hosted checkout: /cart/checkout?products=<variantId>:<qty>,...
// (variant UUIDs, not product ids). Checkout, payment, tax and fulfillment
// all happen on Fourthwall's side — we never touch payment details.
export function checkoutUrl(cart) {
  const items = Object.entries(cart)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => `${id}:${qty}`)
    .join(',');
  if (!items || !SHOP_ORIGIN) return null;
  return `${SHOP_ORIGIN}/cart/checkout?products=${items}&currency=USD`;
}
