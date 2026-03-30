import React from 'react';
import { TitleSm, LabelSm } from './Typography';
import './IngredientScrap.css';

export const IngredientScrap = ({ item, note = '' }) => {
  return (
    <div className="ingredient-scrap">
      <TitleSm className="scrap-title">{item}</TitleSm>
      {note && <LabelSm className="scrap-note">{note}</LabelSm>}
    </div>
  );
};
