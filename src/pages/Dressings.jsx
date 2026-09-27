import React from 'react';
import { DisplayLg, TitleLg, BodyLg, LabelMd } from '../components/Typography';
import { IngredientScrap } from '../components/IngredientScrap';
import { ManifestoBanner } from '../components/ManifestoBanner';
import { Link } from '../Link';
import { recipePath, navigate } from '../router';
import { dressings, dressingPath } from '../data/dressings';
import { imageSrcSet } from '../images';
import './StaticPages.css';
import './RecipeDetail.css';
import './Dressings.css';

export const DressingsIndex = () => (
  <>
    <article className="static-page-layout">
      <header className="static-header">
        <LabelMd className="editorial-tracking-text">HOMEMADE, EVERY TIME</LabelMd>
        <DisplayLg className="static-title">The Dressings</DisplayLg>
      </header>
      <div className="static-content">
        <BodyLg>
          I have never once bought a bottle of salad dressing, and I'm not about to start. Every salad in
          the book has its own dressing, made from scratch in about three minutes. Here they all are, with the
          salad each one was built for. Make extra. They keep for a week and they fix a lot of boring lunches.
        </BodyLg>
        <ul className="dressing-list">
          {dressings.map((d) => (
            <li key={d.slug} className="dressing-row">
              <Link to={dressingPath(d.slug)} className="dressing-row-link">
                <img
                  src={`/img/${d.salad.id}-480.webp`}
                  srcSet={imageSrcSet(d.salad.id)}
                  sizes="96px"
                  alt=""
                  width="96"
                  height="96"
                  loading="lazy"
                  className="dressing-row-image"
                />
                <span className="dressing-row-text">
                  <TitleLg className="dressing-row-title">{d.name}</TitleLg>
                  <span className="dressing-row-meta">{d.seoName} · from {d.salad.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </article>
    <ManifestoBanner
      colorScheme="pink"
      quote="Dress your greens better than you dress yourself."
    />
  </>
);

export const DressingDetail = ({ dressing }) => {
  const d = dressing;
  return (
    <>
      <article className="recipe-editorial-page">
        <nav className="recipe-nav">
          <Link to="/dressings" className="btn-back">
            <LabelMd>← All Dressings</LabelMd>
          </Link>
        </nav>

        <header className="editorial-header">
          <div className="editorial-text-col">
            <LabelMd className="editorial-tracking-text">DRESSING &nbsp;&mdash;&nbsp; {d.seoName.toUpperCase()}</LabelMd>
            <DisplayLg className="editorial-title">{d.name}</DisplayLg>
            <BodyLg className="editorial-subtitle">
              The dressing from <Link to={recipePath(d.salad.id)}>{d.salad.title}</Link>, our {d.salad.seoName}.
            </BodyLg>
            <div className="editorial-pills">
              <span className="editorial-pill">{d.ingredients.length} INGREDIENTS</span>
              <span className="editorial-pill">ABOUT 3 MINS</span>
            </div>
          </div>
          <div className="editorial-image-col">
            <Link to={recipePath(d.salad.id)} aria-label={`${d.salad.title} recipe`}>
              <img
                src={`/img/${d.salad.id}-1024.webp`}
                srcSet={imageSrcSet(d.salad.id)}
                sizes="(max-width: 900px) 100vw, 50vw"
                alt={`${d.salad.title} salad, dressed with ${d.name}`}
                width="1024"
                height="1024"
                fetchPriority="high"
                className="editorial-main-image"
              />
            </Link>
          </div>
        </header>

        <div className="editorial-body">
          <div className="editorial-story">
            <BodyLg className="editorial-headnote">"{d.salad.headnote}"</BodyLg>
          </div>
          <div className="editorial-components">
            <section className="editorial-section">
              <TitleLg className="editorial-section-title">Ingredients</TitleLg>
              <div className="ingredients-list">
                {d.ingredients.map((ing, i) => (
                  <IngredientScrap key={i} item={ing.name} note={ing.item} />
                ))}
              </div>
            </section>
            <section className="editorial-section">
              <TitleLg className="editorial-section-title">Method</TitleLg>
              <BodyLg className="dressing-method">{d.method}</BodyLg>
            </section>
            <section className="editorial-section">
              <TitleLg className="editorial-section-title">Use it on</TitleLg>
              <BodyLg>
                <Link to={recipePath(d.salad.id)}>{d.salad.title}</Link> — {d.salad.seoName}.
              </BodyLg>
            </section>
          </div>
        </div>
      </article>
      <ManifestoBanner
        colorScheme="amber"
        quote="More acid. More salt. More everything."
        buttonText="SEE ALL DRESSINGS"
        onClick={() => navigate('/dressings')}
      />
    </>
  );
};
