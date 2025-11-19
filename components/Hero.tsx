import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-stone-50 flex flex-col lg:block">
      {/* 
        Image Section 
        Mobile: Takes up top 55% of screen.
        Desktop: Full screen absolute positioning.
      */}
      <div className="relative h-[55vh] lg:absolute lg:inset-0 lg:h-full w-full overflow-hidden">
        <img 
          src="https://lh3.googleusercontent.com/d/1Ywyd5sRD6-PKp3T0Zi-rRD6K-vf1_tDb" 
          alt="Not So Simple Salads Spread" 
          className="w-full h-full object-cover object-center transition-all duration-700"
        />
        
        {/* Desktop-only Gradient: Creates artificial negative space on the right if the screen gets too narrow */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-stone-50/90 via-stone-50/40 to-transparent" />
      </div>

      {/* 
        Content Section 
        Mobile: Flex item taking remaining space (solid background).
        Desktop: Absolute overlay on the right side (transparent background).
      */}
      <div className="flex-1 bg-stone-50 lg:bg-transparent lg:absolute lg:inset-0 flex flex-col justify-center items-center lg:items-end p-8 md:p-12 lg:pr-24 relative z-10 text-center lg:text-right shadow-[0_-20px_30px_-15px_rgba(0,0,0,0.1)] lg:shadow-none">
        
        <div className="max-w-2xl space-y-6">
            <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-[0.2em] text-stone-900 uppercase border border-stone-900/30 rounded-full lg:bg-white/50 lg:backdrop-blur-sm">
                    The Collection
                </span>
                <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-stone-900 leading-[0.9] tracking-tight drop-shadow-sm">
                    Not So <br/>
                    <span className="italic text-green-900">Simple Salads</span>
                </h1>
            </div>
            
            <p className="text-lg md:text-xl lg:text-2xl text-stone-700 lg:text-stone-900 font-medium max-w-md leading-relaxed mx-auto lg:mx-0 lg:ml-auto">
                A gourmet journey through greens, grains, and perfectly emulsified dressings.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-6">
                <Link 
                    to="/thoughts"
                    className="text-stone-900 font-bold border-b-2 border-stone-200 hover:border-green-800 transition-colors pb-1"
                >
                    Read Philosophy
                </Link>

                <Link 
                    to="/recipes"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-stone-900 text-stone-50 rounded-full font-medium transition-all hover:bg-green-900 hover:scale-105 shadow-lg"
                >
                    Start Cooking 
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;