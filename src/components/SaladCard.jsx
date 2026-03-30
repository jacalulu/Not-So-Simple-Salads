import React from 'react';
import { TitleLg, BodyLg } from './Typography';
import { Button } from './Buttons';
import './SaladCard.css';

export const SaladCard = ({ salad, variant = 'vertical', onReadMore }) => {
  // Use absolute paths to the public directory
  const imageUrl = `/${salad.imagePlaceholder === 'hero' ? 'hero_cauli_dream' : salad.imagePlaceholder === 'index' ? 'thai_river_salad' : 'caprese_edit'}.png`;

  return (
    <div className={`salad-card salad-card-${variant}`}>
      <div className="salad-card-image-wrapper">
        <img src={imageUrl} alt={salad.title} className="salad-card-image rounded-lg botanical-shadow" />
      </div>
      <div className="salad-card-content surface-container-lowest glass">
        <TitleLg className="salad-card-title">{salad.title}</TitleLg>
        <BodyLg className="salad-card-headnote">{salad.headnote.substring(0, 100)}...</BodyLg>
        <Button variant="tertiary" onClick={() => onReadMore?.(salad)}>Read Recipe</Button>
      </div>
    </div>
  );
};
