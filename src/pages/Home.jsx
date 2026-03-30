import React from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { mealSalads, lighterSalads } from '../data/salads';
import './Home.css';

export const Home = ({ onSelectSalad }) => {
  const allSalads = [...mealSalads, ...lighterSalads];
  
  return (
    <div className="home-layout">
      
      {/* Editorial Hero */}
      <section className="index-hero">
        <DisplayLg className="index-title">
          Not So<br/>
          <span className="highlight-simple">Simple</span><br/>
          Salads
        </DisplayLg>
        <div className="hero-badge">
          i have opinions about salads. strong ones.
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="masonry-gallery">
        {allSalads.map((salad, index) => {
          // Handle dynamically using salad IDs instead of placeholders
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
          
          let imgSrc = `/${salad.id}.png`; // fallback if neither hit
          const foundMatch = availableImages.find(f => f.startsWith(salad.id));
          if (foundMatch) {
            imgSrc = `/${foundMatch}`;
          } else {
            // Pick a robust fallback out of existing loaded assets
            imgSrc = `/${availableImages[index % availableImages.length]}`;
          }

          const heights = ['tall', 'medium', 'short', 'xtall'];
          const tileHeight = heights[index % heights.length];

          return (
            <div 
              key={salad.id} 
              className={`masonry-tile ${tileHeight}`}
              onClick={() => onSelectSalad(salad)}
            >
              <div className="tile-image-wrapper">
                <img src={imgSrc} alt={salad.title} className="tile-image" />
                <div className="tile-overlay">
                  <TitleLg className="tile-title">{salad.title}</TitleLg>
                  <LabelMd className="tile-meta">{salad.time}</LabelMd>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      
    </div>
  );
};
