import React, { useState, useMemo } from 'react';
import { TitleLg, DisplayLg, BodyLg, LabelMd } from '../components/Typography';
import { mealSalads, lighterSalads } from '../data/salads';
import './Home.css';

export const Home = ({ onSelectSalad }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All'); // 'All', 'Meal', 'Lighter'

  const allSalads = useMemo(() => {
    // Inject source property to help with filtering
    const meals = mealSalads.map(s => ({...s, category: 'Meal'}));
    const lighters = lighterSalads.map(s => ({...s, category: 'Lighter'}));
    return [...meals, ...lighters];
  }, []);

  const filteredSalads = useMemo(() => {
    let result = allSalads;
    
    // Category Filter
    if (activeFilter !== 'All') {
      result = result.filter(s => s.category === activeFilter);
    }
    
    // Text Search Filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(s => 
        s.title.toLowerCase().includes(q) || 
        (s.vibe && s.vibe.toLowerCase().includes(q)) ||
        s.headnote.toLowerCase().includes(q) ||
        s.saladIngredients.some(ing => ing.item.toLowerCase().includes(q))
      );
    }
    
    return result;
  }, [allSalads, activeFilter, searchQuery]);

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

      {/* Discovery / Filter Bar */}
      <section className="discovery-bar">
        <div className="filter-chips">
          {['All', 'Meal', 'Lighter'].map(filter => (
            <button 
              key={filter} 
              className={`filter-chip ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter} Salads
            </button>
          ))}
        </div>
        
        <div className="search-container">
           <input 
             type="text" 
             className="salad-search-input" 
             placeholder="Search name, vibe, or ingredient..." 
             value={searchQuery}
             onChange={e => setSearchQuery(e.target.value)}
           />
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="masonry-gallery">
        {filteredSalads.length === 0 && (
           <div className="empty-state" style={{gridColumn: '1 / -1', textAlign: 'center', padding: '4rem 0', color: 'var(--on-surface-variant)'}}>
             No salads found matching "{searchQuery}" in {activeFilter} category.
           </div>
        )}

        {filteredSalads.map((salad, index) => {
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
            'salad-days.jpg',
            'caprese-edit.jpg',
            'couscous.jpg',
            'water-fire-feta.jpg',
            'zest-coast.jpg'
          ];
          
          let imgSrc = `/${salad.id}.png`; // fallback if no match
          const foundjpg = availableImages.find(f => f.startsWith(salad.id + '.jpg'));
          const foundpng = availableImages.find(f => f.startsWith(salad.id + '.png'));
          
          if (foundjpg) {
            imgSrc = `/${foundjpg}`;
          } else if (foundpng) {
            imgSrc = `/${foundpng}`;
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
                  <LabelMd className="tile-meta">{salad.time} · {salad.vibe || salad.category}</LabelMd>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      
    </div>
  );
};
