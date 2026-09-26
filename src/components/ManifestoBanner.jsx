import React from 'react';
import { navigate } from '../router';
import { DisplayLg } from './Typography';
import './ManifestoBanner.css';

export const ManifestoBanner = ({ 
  quote = "Vegetables are the new Haute Couture.",
  author = "NOT SO SIMPLE SALADS",
  colorScheme = "green", // green, pink, amber
  buttonText = "READ HOW TO USE THIS BOOK",
  onClick = () => navigate('/how-to-use'),
  style = {}
}) => {
  return (
    <section 
      className={`manifesto-banner scheme-${colorScheme}`} 
      onClick={onClick}
      style={style}
    >
      <DisplayLg className="manifesto-quote">"{quote}"</DisplayLg>
      <div className="manifesto-author">{author}</div>
      <button className="manifesto-btn">{buttonText}</button>
    </section>
  );
};
