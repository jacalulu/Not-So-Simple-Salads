import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, ChefHat, Leaf, Home } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
      isActive 
        ? 'bg-green-100 text-green-800 font-medium' 
        : 'text-stone-600 hover:bg-stone-50 hover:text-green-700'
    }`;

  return (
    <>
      {/* Mobile overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      <aside
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white border-r border-stone-200 shadow-xl lg:shadow-none transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-8 border-b border-stone-100">
            <h1 className="font-serif text-2xl text-stone-800 tracking-tight">
              Not So <br />
              <span className="text-green-700 italic">Simple Salads</span>
            </h1>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            <NavLink to="/" className={linkClass} onClick={() => setIsOpen(false)}>
              <Home size={20} />
              <span>Cover</span>
            </NavLink>
            
            <NavLink to="/thoughts" className={linkClass} onClick={() => setIsOpen(false)}>
              <ChefHat size={20} />
              <span>Jaclyn's Thoughts</span>
            </NavLink>

            <NavLink to="/recipes" className={linkClass} end onClick={() => setIsOpen(false)}>
              <BookOpen size={20} />
              <span>Recipe Index</span>
            </NavLink>
            
            <div className="pt-6 pb-2 px-4">
                <p className="text-xs font-bold text-stone-400 uppercase tracking-wider">The Collection</p>
            </div>

            <div className="space-y-1">
                <NavLink to="/recipes/nicoise" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Niçoise</span>
                </NavLink>
                <NavLink to="/recipes/thai" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Thai Steak</span>
                </NavLink>
                 <NavLink to="/recipes/cobb" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Cobb</span>
                </NavLink>
                <NavLink to="/recipes/banhmi" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Banh Mi</span>
                </NavLink>
                 <NavLink to="/recipes/noodle" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Soba Noodle</span>
                </NavLink>
                 <NavLink to="/recipes/cauliflower" className={linkClass} onClick={() => setIsOpen(false)}>
                    <Leaf size={16} /> <span className="text-sm">Cauliflower</span>
                </NavLink>
            </div>
          </nav>

          <div className="p-6 border-t border-stone-100 bg-stone-50">
            <p className="text-xs text-stone-500 font-serif italic">
              "Fresh ingredients, thoughtful preparation, happy eating."
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
