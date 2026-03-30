import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { TitleLg } from './components/Typography';
import { mealSalads, lighterSalads } from './data/salads';

const allSalads = [...mealSalads, ...lighterSalads];

function App() {
  const [selectedSalad, setSelectedSalad] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const found = allSalads.find(s => s.id === hash);
        setSelectedSalad(found || null);
      } else {
        setSelectedSalad(null);
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
        <TitleLg className="brand-logotype">Not So Simple Salads</TitleLg>
        <nav className="main-nav">
          <a href="#" className="nav-link active">Recipes</a>
        </nav>
      </header>

      <main className="app-main">
        {selectedSalad ? (
          <RecipeDetail salad={selectedSalad} onBack={handleBack} />
        ) : (
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
              <a href="#">All Recipes</a>
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
