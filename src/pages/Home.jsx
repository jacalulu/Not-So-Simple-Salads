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
          // Handle .png vs .jpg and fallbacks
          let img = salad.imagePlaceholder;
          const availableImages = [
            'salad_1_cauli_marble.png', 
            'salad_2_noodle_marble.png', 
            'salad_3_banhmi_marble.png',
            'salad_4_cobb_marble.jpg',
            'salad_5_thai_flank_marble.jpg',
            'salad_6_nicoise_marble.jpg',
            'salad_7_greek_marble.jpg',
            'salad_8_caesar_marble.jpg',
            'salad_9_wonton_marble.jpg',
            'salad_10_thai_peanut_marble.jpg',
            'salad_11_salmon_marble.jpg',
            'salad_12_pasta_marble.jpg'
          ];
          
          let imgSrc = `/${img}.png`;
          const foundMatch = availableImages.find(f => f.startsWith(img));
          if (foundMatch) {
            imgSrc = `/${foundMatch}`;
          } else {
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
