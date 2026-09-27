import React, { useState, useEffect } from 'react';
import { Home } from './pages/Home';
import { RecipeDetail } from './pages/RecipeDetail';
import { Introduction, HowToUse, AboutAuthor, Pantry } from './pages/StaticPages';
import { NotFound } from './pages/NotFound';
import { DressingsIndex, DressingDetail } from './pages/Dressings';
import { TitleLg } from './components/Typography';
import { RouteContext, navigate, resolveRoute, legacyHashToPath, recipePath } from './router';
import { Link } from './Link';
import { pageMeta, applyMeta, SITE } from './seo';
import './App.css';

// `url` is supplied when rendering at build time; in the browser the route
// comes from the address bar.
function App({ url }) {
  const [route, setRoute] = useState(() =>
    resolveRoute(url ?? (typeof window !== 'undefined' ? window.location.pathname : '/'))
  );

  useEffect(() => {
    const sync = () => {
      setRoute(resolveRoute(window.location.pathname));
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    };
    window.addEventListener('popstate', sync);

    // Old links used hashes (#thaid-and-true, #pantry). Send them to the real URL.
    const legacy = legacyHashToPath(window.location.hash);
    if (legacy) navigate(legacy, { replace: true });

    return () => window.removeEventListener('popstate', sync);
  }, []);

  useEffect(() => {
    applyMeta(pageMeta(route));
  }, [route]);

  const handleSelectSalad = (salad) => navigate(recipePath(salad.id));
  const handleBack = () => navigate('/');
  const active = (types) => (types.includes(route.type) ? 'active' : '');

  return (
    <RouteContext.Provider value={route}>
    <div className="app-container">
      <header className="app-header">
        <Link to="/" style={{textDecoration: 'none'}} aria-label="Not So Simple Salads home"><TitleLg className="brand-logotype">Not So Simple Salads</TitleLg></Link>
        <nav className="main-nav" aria-label="Main">
          <Link to="/" className={`nav-link ${active(['home', 'recipe'])}`}>Recipes</Link>
          <Link to="/introduction" className={`nav-link ${active(['intro'])}`}>Introduction</Link>
          <Link to="/dressings" className={`nav-link ${active(['dressings', 'dressing'])}`}>Dressings</Link>
          <Link to="/how-to-use" className={`nav-link ${active(['how-to'])}`}>How To Use</Link>
          <Link to="/pantry" className={`nav-link ${active(['pantry'])}`}>Pantry</Link>
          <Link to="/about" className={`nav-link ${active(['about'])}`}>About</Link>
        </nav>
      </header>

      <main className="app-main">
        {route.type === 'intro' && <Introduction />}
        {route.type === 'how-to' && <HowToUse />}
        {route.type === 'pantry' && <Pantry />}
        {route.type === 'about' && <AboutAuthor />}
        {route.type === 'recipe' && (
          <RecipeDetail salad={route.data} onBack={handleBack} />
        )}
        {route.type === 'home' && (
          <Home onSelectSalad={handleSelectSalad} />
        )}
        {route.type === 'dressings' && <DressingsIndex />}
        {route.type === 'dressing' && <DressingDetail dressing={route.data} />}
        {route.type === 'not-found' && <NotFound />}
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
              <Link to="/">Recipes</Link>
              <Link to="/dressings">Dressings</Link>
              <Link to="/introduction">Introduction</Link>
              <Link to="/how-to-use">How To Use This Book</Link>
              <Link to="/pantry">Pantry Essentials</Link>
              <Link to="/about">About the Author</Link>
            </div>
            <div>
              <span className="footer-title">Follow</span>
              <a href={SITE.instagram} target="_blank" rel="noopener">Instagram</a>
              <a href={SITE.x} target="_blank" rel="noopener">X</a>
              <a href={SITE.author.url} target="_blank" rel="noopener">Thursday Thoughts on AI</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </RouteContext.Provider>
  );
}

export default App;
