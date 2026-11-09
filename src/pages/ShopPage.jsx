import React, { useEffect, useMemo, useState } from 'react';
import { DisplayLg, TitleLg, BodyLg, LabelMd } from '../components/Typography';
import { Link } from '../Link';
import {
  shopConfigured,
  fetchProducts,
  readCart,
  addToCart,
  removeFromCart,
  cartCount,
  checkoutUrl,
} from '../shop';
import '../components/Buttons.css';
import './ShopPage.css';

const BUY = {
  hardcover: 'https://www.amazon.com/dp/B0HQMW4CBJ',
  paperback: 'https://www.amazon.com/dp/B0HQPB3ZFD',
};

// The first drop, shown as a preview until the Fourthwall storefront token
// is configured (then the live catalog replaces it).
const DROP_PREVIEW = [
  {
    key: 'apron',
    name: 'The Romaine Calm Apron',
    blurb: 'Caesar’s got a flame. You’ve got a plan. Riso-printed grilled romaine, big calm energy.',
    image: '/img/merch/apron-preview.jpg',
  },
  {
    key: 'tote',
    name: 'The Fennel Countdown Tote',
    blurb: 'For the farmers’ market runs where it’s the final countdown to dinner.',
    image: '/img/merch/tote-preview.jpg',
  },
  {
    key: 'stickers',
    name: 'The Produce Section — sticker sheet',
    blurb: 'The book’s riso pantry, kiss-cut and ready for laptops, water bottles, and recipe binders.',
    image: '/img/merch/sticker-sheet-preview.jpg',
  },
  {
    key: 'plushie',
    name: 'Crouton (the plushie)',
    blurb: 'A soft, golden, emotionally supportive crouton. In development — made-to-order campaign coming after the holidays.',
    image: '/img/merch/plushie-preview.jpg',
    badge: 'In development',
  },
];

const ProductCard = ({ p, inCart, onAdd, onRemove }) => (
  <div className="shop-card">
    <div className="shop-card-art">
      {p.image && <img src={p.image} alt={p.name} loading="lazy" decoding="async" />}
      {p.badge && <span className="shop-badge">{p.badge}</span>}
    </div>
    <TitleLg className="shop-card-name">{p.name}</TitleLg>
    {p.blurb && <p className="shop-card-blurb">{p.blurb}</p>}
    {p.price != null && (
      <LabelMd className="shop-card-price">
        ${p.price.toFixed(2)}
        {p.variantCount > 1 && <span className="shop-card-variants"> &middot; more options on the product page</span>}
      </LabelMd>
    )}
    {p.variantId && (
      <div className="shop-card-actions">
        {inCart ? (
          <button className="btn btn-secondary shop-btn" onClick={() => onRemove(p.variantId)}>
            Remove from cart
          </button>
        ) : (
          <button className="btn btn-primary shop-btn" onClick={() => onAdd(p.variantId)}>
            Add to cart
          </button>
        )}
        {p.url && (
          <a className="shop-card-link" href={p.url} target="_blank" rel="noopener">
            Details
          </a>
        )}
      </div>
    )}
  </div>
);

export const ShopPage = () => {
  const live = shopConfigured();
  const [products, setProducts] = useState(null); // null = loading (live mode)
  const [error, setError] = useState(false);
  const [cart, setCart] = useState({});

  useEffect(() => {
    setCart(readCart());
    if (!live) return;
    let on = true;
    fetchProducts()
      .then((ps) => on && setProducts(ps))
      .catch(() => on && setError(true));
    return () => {
      on = false;
    };
  }, [live]);

  const count = useMemo(() => cartCount(cart), [cart]);
  const checkout = useMemo(() => checkoutUrl(cart), [cart]);
  const showLive = live && !error && Array.isArray(products) && products.length > 0;

  return (
    <article className="shop-page">
      <section className="shop-hero">
        <span className="shop-kicker">The merch &middot; First drop</span>
        <DisplayLg className="shop-hero-title">
          The Produce <span className="shop-hero-accent">Section.</span>
        </DisplayLg>
        <BodyLg className="shop-hero-sub">
          The cookbook&rsquo;s riso-printed pantry, loose on aprons, totes, and sticker
          sheets. Printed to order, shipped to your kitchen. Same two inks,
          zero limp lettuce.
        </BodyLg>
      </section>

      {showLive ? (
        <>
          <section className="shop-grid">
            {products.map((p) => (
              <ProductCard
                key={p.id}
                p={p}
                inCart={Boolean(cart[p.variantId])}
                onAdd={(id) => setCart({ ...addToCart(id) })}
                onRemove={(id) => setCart({ ...removeFromCart(id) })}
              />
            ))}
          </section>
          {count > 0 && checkout && (
            <div className="shop-cart-bar">
              <LabelMd>
                {count} item{count === 1 ? '' : 's'} in your cart
              </LabelMd>
              <a className="btn btn-primary shop-btn" href={checkout}>
                Check out
              </a>
            </div>
          )}
        </>
      ) : (
        <>
          {live && !error && products === null && (
            <LabelMd className="shop-loading">Setting the table&hellip;</LabelMd>
          )}
          <section className="shop-grid">
            {DROP_PREVIEW.map((p) => (
              <ProductCard key={p.key} p={p} />
            ))}
          </section>
          <section className="shop-preview-note">
            <TitleLg>The shop opens soon.</TitleLg>
            <BodyLg>
              The first drop is at the printer&rsquo;s. Until the doors open, the
              cookbook is the merch &mdash; and it ships in time for the holidays.
            </BodyLg>
            <div className="shop-cta-row">
              <Link to="/book" className="btn btn-primary shop-btn">
                Get the cookbook
              </Link>
            </div>
          </section>
        </>
      )}

      <section className="shop-book">
        <div className="shop-book-copy">
          <span className="shop-kicker">The book, direct</span>
          <TitleLg className="shop-book-title">Signed copies, straight from Jaclyn&rsquo;s kitchen.</TitleLg>
          <BodyLg>
            A short run of signed hardcovers is coming to this shop &mdash; printed
            with real endpapers, the way the book was designed. Until then, both
            editions are on Amazon.
          </BodyLg>
          <div className="shop-cta-row">
            <a className="btn btn-secondary shop-btn" href={BUY.hardcover} target="_blank" rel="noopener">
              Hardcover on Amazon
            </a>
            <a className="btn btn-secondary shop-btn" href={BUY.paperback} target="_blank" rel="noopener">
              Paperback on Amazon
            </a>
          </div>
        </div>
      </section>
    </article>
  );
};
