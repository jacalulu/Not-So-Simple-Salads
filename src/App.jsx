import React, { useState } from 'react';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { TitleLg } from './components/Typography';

function App() {
  const [selectedSalad, setSelectedSalad] = useState(null);

  return (
    <div className="app-container">
      <header className="app-header">
        <TitleLg className="brand-logotype">Not So Simple Salads</TitleLg>
        <nav className="main-nav">
          <a href="#" className="nav-link active">Recipes</a>
          <a href="#" className="nav-link">Philosophy</a>
          <a href="#" className="nav-link">About</a>
        </nav>
      </header>

      <main className="app-main">
        {selectedSalad ? (
          <RecipeDetail salad={selectedSalad} onBack={() => setSelectedSalad(null)} />
        ) : (
          <Home onSelectSalad={setSelectedSalad} />
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
              <a href="#">Join the Salad Lab</a>
              <a href="#">Bookshelf</a>
              <a href="#">Philosophy</a>
            </div>
            <div>
              <span className="footer-title">Follow</span>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
