import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { recipes } from '../data';
import { ArrowLeft, Share2, ChefHat } from 'lucide-react';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const recipe = recipes.find(r => r.id === id);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!recipe) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h2 className="text-2xl font-serif">Recipe not found</h2>
            <button onClick={() => navigate('/recipes')} className="text-green-600 mt-4 hover:underline">Back to Index</button>
        </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
        {/* Left Side - Image & Header (Mobile: Top) */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-screen lg:sticky lg:top-0 bg-stone-100">
             <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            
            {/* Mobile Overlay Text */}
            <div className="absolute bottom-0 left-0 p-6 lg:hidden text-white">
                <h1 className="text-3xl font-serif font-bold">{recipe.title}</h1>
                <p className="text-lg italic opacity-90">{recipe.subtitle}</p>
            </div>

            {/* Mobile Back Button (Overlay) */}
            <button 
                onClick={() => navigate('/recipes')}
                className="absolute top-6 left-6 p-3 bg-white/20 backdrop-blur-md text-white rounded-full hover:bg-white hover:text-stone-900 transition-all z-10 lg:hidden"
            >
                <ArrowLeft size={24} />
            </button>
        </div>

        {/* Right Side - Content (Mobile: Bottom) */}
        <div className="lg:w-1/2 p-6 lg:p-16 lg:overflow-y-auto relative">
            
            {/* Desktop Navigation Breadcrumb */}
            <div className="hidden lg:flex items-center gap-2 text-stone-400 text-sm font-medium mb-8">
                <Link to="/recipes" className="hover:text-green-700 flex items-center gap-1 transition-colors">
                    <ArrowLeft size={14} /> Back to Recipes
                </Link>
                <span>/</span>
                <span className="text-stone-800">{recipe.title}</span>
            </div>

            {/* Desktop Header */}
            <div className="hidden lg:block mb-12">
                 <h1 className="text-5xl font-serif font-bold text-stone-900 mb-2">{recipe.title}</h1>
                 <p className={`text-2xl font-serif italic text-${recipe.colorTheme}`}>{recipe.subtitle}</p>
                 <p className="mt-6 text-stone-600 text-lg leading-relaxed">{recipe.description}</p>
            </div>
            
            <div className="space-y-10">
                {recipe.ingredients.map((section, idx) => (
                    <div key={idx} className="bg-stone-50 p-6 rounded-2xl">
                        <h3 className={`text-lg font-bold uppercase tracking-wider mb-4 text-${recipe.colorTheme} border-b border-stone-200 pb-2`}>
                            {section.title}
                        </h3>
                        <ul className="space-y-3">
                            {section.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-stone-700">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-${recipe.colorTheme} flex-shrink-0`} />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-12 pt-12 border-t border-stone-100 flex justify-between items-center">
                <Link to="/" className="text-stone-400 font-serif italic hover:text-green-700 transition-colors">
                    Not So Simple Salads
                </Link>
                <button className="flex items-center gap-2 text-stone-500 hover:text-green-700 transition-colors">
                    <Share2 size={18} /> <span className="text-sm font-bold uppercase tracking-wide">Share Recipe</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default RecipeDetail;