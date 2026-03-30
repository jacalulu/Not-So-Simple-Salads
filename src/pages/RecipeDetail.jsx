import React from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { IngredientScrap } from '../components/IngredientScrap';
import './RecipeDetail.css';

export const RecipeDetail = ({ salad, onBack }) => {
  const availableImages = [
    'cauli-fornia-dreamin.png', 
    'noodle-me-this.png', 
    'banh-mi-over.png',
    'keep-cobb-and-carry-on.jpg',
    'thaid-and-true.jpg',
    'nicoise-to-meet-you.jpg',
    'greek-expectations.jpg',
    'romaine-calm.jpg',
    'winner-winner-wonton.jpg',
    'thai-me-a-river.jpg',
    'salmon-situation.jpg',
    'packn-pasta.jpg',
    'bacon-me-crazy.jpg',
    'salad-days.jpg'
  ];
  
  let imgSrc = `/${salad.id}.png`;
  const foundMatch = availableImages.find(f => f.startsWith(salad.id));
  if (foundMatch) {
    imgSrc = `/${foundMatch}`;
  } else {
    // Generate deterministic hash from title to keep placeholder consistent across rerenders 
    const idx = salad.title.length % availableImages.length;
    imgSrc = `/${availableImages[idx]}`;
  }

  return (
    <article className="recipe-detail-page">
      <nav className="recipe-nav">
        <button className="btn-back" onClick={onBack}>
          <LabelMd>← Back to Index</LabelMd>
        </button>
      </nav>

      {/* The Artistic Header */}
      <header className="artistic-header">
        <div className="header-overlay"></div>
        <div className="header-text-content">
          <DisplayLg className="recipe-title-huge">{salad.title}</DisplayLg>
        </div>
      </header>

      {/* The Content Body */}
      <div className="recipe-content-grid">
        <div className="recipe-story">
          <div className="recipe-meta-cards">
             <div className="meta-card time-card cabbage-drop">
               <LabelMd>Time</LabelMd>
               <TitleLg>{salad.time}</TitleLg>
             </div>
             <div className="meta-card serves-card cabbage-drop">
               <LabelMd>Serves</LabelMd>
               <TitleLg>{salad.serves}</TitleLg>
             </div>
             {salad.hero && (
               <div className="meta-card hero-card cabbage-drop">
                 <LabelMd>The Hero</LabelMd>
                 <TitleLg>{salad.hero}</TitleLg>
               </div>
             )}
          </div>
          
          {salad.vibe && (
            <BodyLg className="recipe-vibe"><strong>Vibe:</strong> {salad.vibe}</BodyLg>
          )}
          <BodyLg className="recipe-headnote">"{salad.headnote}"</BodyLg>
          
          <div className="recipe-images-inline">
             <img src={imgSrc} alt={salad.title} className="inline-overhead botanical-shadow" />
          </div>
        </div>

        <div className="recipe-components">
          <section className="recipe-ingredients cabbage-drop hairline-border">
            <TitleLg className="section-title">The Foundation</TitleLg>
            <div className="ingredients-list">
              {salad.saladIngredients.map((ing, i) => (
                <IngredientScrap key={i} item={ing.item} note={ing.note} />
              ))}
            </div>
          </section>

          <section className="recipe-dressing cabbage-drop hairline-border">
            <TitleLg className="section-title">
               The Elixir: {salad.dressingName}
            </TitleLg>
            <div className="ingredients-list">
              {salad.dressingIngredients.map((ing, i) => (
                <IngredientScrap key={i} item={ing.name} note={ing.item} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};
