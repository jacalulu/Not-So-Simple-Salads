import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { Introduction, HowToUse, AboutAuthor, Pantry } from './pages/StaticPages';
import { TitleLg } from './components/Typography';
import { mealSalads, lighterSalads } from './data/salads';

const allSalads = [...mealSalads, ...lighterSalads];

function App() {
  const [currentRoute, setCurrentRoute] = useState({ type: 'home' });

  useEffect(() => {
    const handleHashChange = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      
      const hash = window.location.hash.replace('#', '');
      if (hash === 'intro') {
        setCurrentRoute({ type: 'intro' });
      } else if (hash === 'how-to') {
        setCurrentRoute({ type: 'how-to' });
      } else if (hash === 'about') {
        setCurrentRoute({ type: 'about' });
      } else if (hash === 'pantry') {
        setCurrentRoute({ type: 'pantry' });
      } else if (hash) {
        const found = allSalads.find(s => s.id === hash);
        setCurrentRoute(found ? { type: 'recipe', data: found } : { type: 'home' });
      } else {
        setCurrentRoute({ type: 'home' });
      }
    };
    
    // Check on mount
    handleHashChange();
    
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectSalad = (salad) => {
    window.location.hash = salad.id;
  };

  const handleBack = () => {
    window.location.hash = ''; // clear hash, triggers navigate back
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <a href="#" style={{textDecoration: 'none'}}><TitleLg className="brand-logotype">Not So Simple Salads</TitleLg></a>
        <nav className="main-nav">
          <a href="#" className={`nav-link ${['home', 'recipe'].includes(currentRoute.type) ? 'active' : ''}`}>Recipes</a>
          <a href="#intro" className={`nav-link ${currentRoute.type === 'intro' ? 'active' : ''}`}>Introduction</a>
          <a href="#how-to" className={`nav-link ${currentRoute.type === 'how-to' ? 'active' : ''}`}>How To Use</a>
          <a href="#pantry" className={`nav-link ${currentRoute.type === 'pantry' ? 'active' : ''}`}>Pantry</a>
          <a href="#about" className={`nav-link ${currentRoute.type === 'about' ? 'active' : ''}`}>About</a>
        </nav>
      </header>

      <main className="app-main">
        {currentRoute.type === 'intro' && <Introduction />}
        {currentRoute.type === 'how-to' && <HowToUse />}
        {currentRoute.type === 'pantry' && <Pantry />}
        {currentRoute.type === 'about' && <AboutAuthor />}
        {currentRoute.type === 'recipe' && (
          <RecipeDetail salad={currentRoute.data} onBack={handleBack} />
        )}
        {currentRoute.type === 'home' && (
          <Home onSelectSalad={handleSelectSalad} />
        )}
      </main>
      
      <footer className="app-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <TitleLg>Not So Simple<br/>Salads</TitleLg>
            <p className="footer-copy">Redefining the agricultural narrative through the lens of luxury, texture, and high-fashion horticulture.</p>
          </div>
          <div className="footer-links">
            <div>
              <span className="footer-title">Explore</span>
              <a href="#">Recipes</a>
              <a href="#how-to">How To Use This Book</a>
              <a href="#pantry">Pantry Essentials</a>
              <a href="#about">About the Author</a>
            </div>
            <div>
              <span className="footer-title">Follow</span>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
