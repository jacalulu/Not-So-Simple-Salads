import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import RecipeIndex from './components/RecipeIndex';
import RecipeDetail from './components/RecipeDetail';
import Thoughts from './components/Thoughts';

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-green-200">
        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="fixed top-4 left-4 z-30 p-2 bg-white rounded-full shadow-lg lg:hidden text-stone-800 hover:text-green-700"
        >
          <Menu size={24} />
        </button>

        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

        {/* Main Content Area */}
        <main className="lg:pl-72 transition-all duration-300">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/thoughts" element={<Thoughts />} />
            <Route path="/recipes" element={<RecipeIndex />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
