import React from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { ManifestoBanner } from '../components/ManifestoBanner';
import { Link } from '../Link';
import { navigate } from '../router';
import { imageSrcSet } from '../images';
import '../components/Buttons.css';
import './BookPage.css';

// TODO: swap for the real Amazon product pages (ASIN links) once the listings are live.
const BUY = {
  hardcover: 'https://www.amazon.com/s?k=%22not+so+simple+salads%22+jaclyn+konzelmann',
  paperback: 'https://www.amazon.com/s?k=%22not+so+simple+salads%22+jaclyn+konzelmann',
};

const BookImage = ({ name, alt, sizes = '(max-width: 900px) 92vw, 44vw', eager = false, w = 1536, h = 2752 }) => (
  <img
    src={`/img/${name}-800.webp`}
    srcSet={imageSrcSet(name)}
    sizes={sizes}
    alt={alt}
    width={w}
    height={h}
    loading={eager ? 'eager' : 'lazy'}
    decoding="async"
  />
);

export const BookPage = () => (
  <article className="book-page">
    {/* Hero: type commands the space, the book breaks the grid */}
    <section className="book-hero">
      <div className="book-hero-copy">
        <span className="book-kicker">The cookbook &middot; Out now</span>
        <DisplayLg className="book-hero-title">
          Salads that go hard,<br />
          <span className="book-hero-accent">now in print.</span>
        </DisplayLg>
        <div className="book-cta-row">
          <a className="btn btn-primary book-btn" href={BUY.hardcover} target="_blank" rel="noopener">
            Get the hardcover &mdash; $36.99
          </a>
          <a className="btn btn-secondary book-btn" href={BUY.paperback} target="_blank" rel="noopener">
            Paperback &mdash; $24.99
          </a>
        </div>
        <LabelMd className="book-cta-note">Printed in premium color &middot; Sold on Amazon</LabelMd>
        <BodyLg className="book-hero-sub">
          Nineteen recipes with strong opinions &mdash; fourteen that are fully dinner,
          five that keep it lighter &mdash; and every dressing made from scratch, across
          one hundred pages of premium color. No limp lettuce. Zero apologies.
        </BodyLg>
      </div>
      <div className="book-hero-art">
        <BookImage
          name="book-standing-slate"
          alt="The Not So Simple Salads hardcover standing upright on dark slate, surrounded by ingredients from its cover"
          eager
        />
      </div>
    </section>

    {/* The numbers, catalog fine-print style */}
    <section className="book-stats" aria-label="What is in the book">
      {[
        ['100', 'pages of premium color'],
        ['19', 'recipes built with intention'],
        ['14 + 5', 'meal salads, lighter salads'],
        ['19', 'dressings, all from scratch'],
      ].map(([n, l]) => (
        <div className="book-stat" key={l}>
          <span className="book-stat-number">{n}</span>
          <LabelMd className="book-stat-label">{l}</LabelMd>
        </div>
      ))}
    </section>

    {/* The launch film */}
    <section className="book-film">
      <div className="book-film-frame">
        <video
          controls
          playsInline
          preload="metadata"
          poster="/book-launch-film-poster.jpg"
          className="book-film-video"
          aria-label="Not So Simple Salads launch film"
        >
          <source src="/book-launch-film.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="book-film-copy">
        <span className="book-kicker">The launch film</span>
        <TitleLg className="book-film-title">
          Thirty-two seconds of salads behaving dramatically.
        </TitleLg>
        <BodyLg>
          Every line on screen is straight from the book &mdash; the manifestos, the counts,
          the opinions. Sound on for the full effect.
        </BodyLg>
        <a
          className="book-follow-link"
          href="https://www.instagram.com/notsosimplesalads/"
          target="_blank"
          rel="noopener"
        >
          Follow @notsosimplesalads &rarr;
        </a>
      </div>
    </section>

    {/* What the pages actually look like: the food, not the cover again */}
    <section className="book-gallery">
      <figure className="book-gallery-item tilt-left">
        <BookImage name="book-food-fennel" alt="Shaved fennel, watermelon radish and blood orange from Fennel Countdown" w={1024} h={1365} sizes="(max-width: 900px) 92vw, 30vw" />
        <figcaption>
          <LabelMd>Fennel Countdown &middot; Lighter Salads</LabelMd>
        </figcaption>
      </figure>
      <figure className="book-gallery-item tilt-right">
        <BookImage name="book-food-banhmi" alt="Pickled carrots, cucumber and herbs from Banh Mi Over" w={1024} h={1365} sizes="(max-width: 900px) 92vw, 30vw" />
        <figcaption>
          <LabelMd>Banh Mi Over &middot; Meal Salads</LabelMd>
        </figcaption>
      </figure>
      <figure className="book-gallery-item tilt-left">
        <BookImage name="book-food-watermelon" alt="Chili-dusted watermelon and feta from Water, Fire...and Feta!" w={1024} h={1365} sizes="(max-width: 900px) 92vw, 30vw" />
        <figcaption>
          <LabelMd>Water, Fire...and Feta! &middot; Lighter Salads</LabelMd>
        </figcaption>
      </figure>
    </section>

    <ManifestoBanner
      quote="Boring salads are a moral failing."
      author="FROM THE BOOK"
      colorScheme="pink"
      buttonText="BROWSE EVERY RECIPE"
      onClick={() => navigate('/')}
    />

    {/* What you're actually getting */}
    <section className="book-inside">
      <div className="book-inside-card">
        <TitleLg className="book-inside-title">The recipes</TitleLg>
        <p className="book-inside-body">
          Layered, textured, and fully committed. Each one lists the salad, its dressing,
          and any sub-recipe &mdash; millionaire&rsquo;s bacon, quick pickles, za&rsquo;atar croutons.
        </p>
        <Link to="/" className="book-inside-link">See the index &rarr;</Link>
      </div>
      <div className="book-inside-card stagger">
        <TitleLg className="book-inside-title">The dressings</TitleLg>
        <p className="book-inside-body">
          Nineteen from scratch, about three minutes each. Store-bought has never once
          come close, and the book explains exactly why yours will.
        </p>
        <Link to="/dressings" className="book-inside-link">Meet the dressings &rarr;</Link>
      </div>
      <div className="book-inside-card">
        <TitleLg className="book-inside-title">The pantry</TitleLg>
        <p className="book-inside-body">
          The spice shelf, the acid arsenal, the umami layer &mdash; the ingredients that
          make people put down their fork and ask questions.
        </p>
        <Link to="/pantry" className="book-inside-link">Stock yours &rarr;</Link>
      </div>
    </section>

    {/* Final ask */}
    <section className="book-final">
      <DisplayLg className="book-final-title">Bring the opinions home.</DisplayLg>
      <div className="book-cta-row book-cta-center">
        <a className="btn btn-primary book-btn" href={BUY.hardcover} target="_blank" rel="noopener">
          Hardcover &mdash; $36.99
        </a>
        <a className="btn btn-secondary book-btn" href={BUY.paperback} target="_blank" rel="noopener">
          Paperback &mdash; $24.99
        </a>
      </div>
      <Link to="/introduction" className="book-final-link">
        Or read the introduction first &rarr;
      </Link>
    </section>
  </article>
);
