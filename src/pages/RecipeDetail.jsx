import React from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { IngredientScrap } from '../components/IngredientScrap';
import './RecipeDetail.css';

export const RecipeDetail = ({ salad, onBack }) => {
  let img = salad.imagePlaceholder;
  const availableImages = [
    'salad_1_cauli_marble.png', 
    'salad_2_noodle_marble.png', 
    'salad_3_banhmi_marble.png',
    'salad_4_cobb_marble.jpg'
  ];
  
  let imgSrc = `/${img}.png`;
  const foundMatch = availableImages.find(f => f.startsWith(img));
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
        <div className="header-scatter-bg">
            <span className="scatter-item" style={{top: '10%', left: '15%'}}>🍃</span>
            <span className="scatter-item" style={{top: '80%', left: '10%'}}>🍋</span>
            <span className="scatter-item" style={{top: '30%', right: '20%'}}>🌶️</span>
            <span className="scatter-item" style={{bottom: '20%', right: '15%'}}>🌿</span>
        </div>
        
        <div className="header-text-content">
          <LabelMd className="recipe-meta">
            {salad.time} · {salad.serves} SERVINGS
          </LabelMd>
          <DisplayLg className="recipe-title-huge">{salad.title}</DisplayLg>
        </div>
      </header>

      {/* The Content Body */}
      <div className="recipe-content-grid">
        <div className="recipe-story">
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
