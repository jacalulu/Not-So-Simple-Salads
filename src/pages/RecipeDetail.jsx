import React, { useEffect } from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { IngredientScrap } from '../components/IngredientScrap';
import { ManifestoBanner } from '../components/ManifestoBanner';
import { mealSalads, lighterSalads } from '../data/salads';
import { imageSrcSet } from '../images';
import { Link } from '../Link';
import { dressingPath } from '../data/dressings';
import './Dressings.css';
import './RecipeDetail.css';

const allSalads = [...mealSalads, ...lighterSalads];

export const RecipeDetail = ({ salad, onBack }) => {

  const saladIndex = allSalads.findIndex(s => s.id === salad.id);
  const saladNumber = String(saladIndex + 1).padStart(2, '0');

  useEffect(() => {
    const originalTitle = document.title;
    document.title = `${salad.title} | Not So Simple Salads`;
    return () => { document.title = originalTitle; };
  }, [salad.title]);

  return (
    <>
      <article className="recipe-editorial-page">
        <nav className="recipe-nav">
        <button className="btn-back" onClick={onBack}>
          <LabelMd>← Back to Index</LabelMd>
        </button>
      </nav>

      <header className="editorial-header">
        <div className="editorial-text-col">
          <div className="editorial-watermark">{saladNumber}</div>
          
          <LabelMd className="editorial-tracking-text">
            {saladNumber} &nbsp;&mdash;&nbsp; THE {salad.vibe ? salad.vibe.toUpperCase() : "SEASONAL EDIT"}
          </LabelMd>
          
          <DisplayLg className="editorial-title">{salad.title}</DisplayLg>
          {salad.seoName && <BodyLg className="editorial-subtitle">{salad.seoName}</BodyLg>}
          
          <div className="editorial-pills">
            <span className="editorial-pill">{salad.time}</span>
            <span className="editorial-pill">{salad.serves} SERVINGS</span>
            {salad.hero && <span className="editorial-pill">{salad.hero.substring(0, 15)}</span>}
          </div>
        </div>
        
        <div className="editorial-image-col">
          {salad.video ? (
            <video 
              src={`/${salad.video}`}
              poster={`/${salad.video.replace('.mp4', '-poster.jpg')}`}
              autoPlay
              loop
              muted
              playsInline
              className="editorial-main-image"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          ) : (
            <img
              src={`/img/${salad.id}-1024.webp`}
              srcSet={imageSrcSet(salad.id)}
              sizes="(max-width: 900px) 100vw, 50vw"
              alt={`${salad.title} salad`}
              width="1024"
              height="1024"
              fetchPriority="high"
              className="editorial-main-image"
            />
          )}
        </div>
      </header>

      <div className="editorial-body">
        <div className="editorial-story">
          <BodyLg className="editorial-headnote">"{salad.headnote}"</BodyLg>
        </div>

        <div className="editorial-components">
          <section className="editorial-section">
            <TitleLg className="editorial-section-title">The Foundation</TitleLg>
            <div className="ingredients-list">
              {salad.saladIngredients.map((ing, i) => (
                <IngredientScrap key={i} item={ing.item} note={ing.note} />
              ))}
            </div>
          </section>

          <section className="editorial-section">
            <TitleLg className="editorial-section-title">
               The Elixir: {salad.dressingSlug ? <Link to={dressingPath(salad.dressingSlug)}>{salad.dressingName}</Link> : salad.dressingName}
            </TitleLg>
            <div className="ingredients-list">
              {salad.dressingIngredients.map((ing, i) => (
                <IngredientScrap key={i} item={ing.name} note={ing.item} />
              ))}
            </div>
          </section>

          {salad.componentRecipe && (
            <section className="editorial-section component-recipe-block" style={{marginTop: '2rem'}}>
              <TitleLg className="editorial-section-title">
                 {salad.componentRecipe.title}
              </TitleLg>
              <div className="ingredients-list" style={{marginBottom: '1rem'}}>
                {salad.componentRecipe.ingredients.map((ing, i) => (
                  <IngredientScrap key={i} item={ing.name} note={ing.item} />
                ))}
              </div>
              <BodyLg style={{color: 'var(--on-surface-variant)', fontSize: '0.9rem', lineHeight: '1.6'}}>
                <strong>Method:</strong> {salad.componentRecipe.method}
              </BodyLg>
            </section>
          )}
        </div>
      </div>
      </article>

      <ManifestoBanner 
        colorScheme={['green', 'pink', 'amber'][saladIndex % 3]}
        quote={salad.manifestoQuote || "Vegetables are the new Haute Couture."}
      />
    </>
  );
};
