import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { IngredientScrap } from '../components/IngredientScrap';
import { ManifestoBanner } from '../components/ManifestoBanner';
import { mealSalads, lighterSalads } from '../data/salads';
import './RecipeDetail.css';

const allSalads = [...mealSalads, ...lighterSalads];

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
    'salad-days.jpg',
    'caprese-edit.jpg',
    'couscous.jpg',
    'water-fire-feta.jpg',
    'zest-coast.jpg'
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

  const saladIndex = allSalads.findIndex(s => s.id === salad.id);
  const saladNumber = String(saladIndex + 1).padStart(2, '0');

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
          
          <div className="editorial-pills">
            <span className="editorial-pill">{salad.time}</span>
            <span className="editorial-pill">{salad.serves} SERVINGS</span>
            {salad.hero && <span className="editorial-pill">{salad.hero.substring(0, 15)}</span>}
          </div>
        </div>
        
        <div className="editorial-image-col">
          <img src={imgSrc} alt={salad.title} className="editorial-main-image" />
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

      <ManifestoBanner 
        colorScheme={['green', 'pink', 'amber'][saladIndex % 3]}
        quote={salad.manifestoQuote || "Vegetables are the new Haute Couture."}
      />
    </>
  );
};
