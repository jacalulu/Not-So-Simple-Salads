import React from 'react';
import { appNotes } from '../data';

const Thoughts: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-6 lg:p-16">
      <div className="max-w-4xl mx-auto">
        <header className="mb-16 text-center">
          <h2 className="text-4xl font-serif text-stone-900 mb-4">Jaclyn's Thoughts</h2>
          <div className="h-1 w-24 bg-green-600 mx-auto"></div>
          <p className="mt-4 text-stone-500 italic">Essential techniques and preferences for the perfect bowl.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Ingredients Laydown Image - Simulating the user's upload */}
            <div className="col-span-1 md:col-span-2 mb-8">
                <div className="relative w-full h-64 md:h-96 bg-stone-100 rounded-xl overflow-hidden shadow-lg group">
                     <img 
                        src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop"
                        alt="Fresh Ingredients Laydown"
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                     />
                     <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/0 transition-colors">
                        <span className="bg-white/90 backdrop-blur-md px-8 py-4 text-2xl font-serif text-stone-800 rounded-full shadow-sm border border-stone-100">
                            Mise en place
                        </span>
                     </div>
                </div>
            </div>

            {appNotes.map((note, index) => (
                <div key={index} className="group">
                    <h3 className="text-xl font-bold text-stone-900 mb-3 group-hover:text-green-700 transition-colors">
                        {note.title}
                    </h3>
                    <p className="text-stone-600 leading-relaxed border-l-2 border-stone-200 pl-4 group-hover:border-green-300 transition-colors">
                        {note.content}
                    </p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Thoughts;