import React from 'react';
import { Link } from 'react-router-dom';
import { recipes } from '../data';
import { ArrowRight } from 'lucide-react';

const RecipeIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50 p-6 lg:p-12">
        <div className="max-w-6xl mx-auto">
            <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-serif text-stone-900">Recipe Index</h2>
                <p className="text-stone-500 mt-2">Select a salad to begin your preparation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {recipes.map((recipe) => (
                    <Link 
                        key={recipe.id} 
                        to={`/recipes/${recipe.id}`}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img 
                                src={recipe.image} 
                                alt={recipe.title} 
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="text-xl font-serif font-bold text-stone-900 mb-1 group-hover:text-green-700 transition-colors">
                                {recipe.title}
                            </h3>
                            <p className="text-sm font-medium text-green-600 mb-3 italic">
                                {recipe.subtitle}
                            </p>
                            <p className="text-stone-500 text-sm line-clamp-3 mb-4 flex-1">
                                {recipe.description}
                            </p>
                            <div className="flex items-center text-sm font-bold text-stone-900 group-hover:translate-x-2 transition-transform">
                                View Recipe <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  );
};

export default RecipeIndex;
