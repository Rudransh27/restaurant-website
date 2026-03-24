import React, { useState } from 'react';
import { RAJWADA_100_ITEMS } from './menuData';

const MenuBook = () => {
  const [activeCategory, setActiveCategory] = useState("Waradi");
  const categories = [...new Set(RAJWADA_100_ITEMS.map(item => item.cat))];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-16 selection:bg-[#FF5722]/30">
      
      {/* 1. ELEGANT HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20 px-6">
        <span className="text-[#FF5722] text-[10px] tracking-[0.6em] uppercase font-bold mb-4 block">
          Since 2024
        </span>
        <h1 className="text-6xl md:text-7xl font-['Cinzel_Decorative'] text-white tracking-tighter mb-6 leading-none">
          THE <span className="text-[#FF5722]">MENU</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF5722]" />
          <div className="w-2 h-2 rotate-45 border border-[#FF5722]" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF5722]" />
        </div>
      </div>

      {/* 2. AESTHETIC WRAPPED TABS */}
      <div className="max-w-7xl mx-auto mb-24 px-6 md:px-12">
        <div className="flex flex-wrap justify-center gap-3 md:gap-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`
                relative px-7 py-3 rounded-full text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 cursor-pointer overflow-hidden
                ${activeCategory === cat 
                  ? "text-white scale-110 shadow-[0_10px_30px_-10px_rgba(255,87,34,0.5)]" 
                  : "text-white/40 hover:text-white border border-white/10"
                }
              `}
            >
              {activeCategory === cat && (
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF5722] to-[#ff7a52] animate-pulse" />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. THE "ROYAL SPREAD" DISPLAY */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        
        {/* LEFT: FLOATING IMAGE (Sticky & Centered Square) */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 flex flex-col items-center">
          <div className="relative group p-4 border border-white/5 bg-[#0a0a0a] rounded-sm shadow-2xl">
            {/* Royal Corner Elements */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-[#FF5722]/40" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-[#FF5722]/40" />
            
            <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden relative">
              <img 
                src={`https://source.unsplash.com/1000x1000/?indian-food,spices,${activeCategory.toLowerCase()}`} 
                alt={activeCategory}
                className="w-full h-full object-cover transition-transform duration-[3000ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            <div className="mt-6 text-center">
              <h3 className="text-3xl font-['Cinzel_Decorative'] text-white italic">
                {activeCategory}
              </h3>
              <p className="text-[#FF5722] text-[9px] tracking-[0.4em] uppercase mt-2 font-bold opacity-80">
                Signature Selection
              </p>
            </div>
          </div>
        </aside>

        {/* RIGHT: SMOOTH SCROLLING LIST */}
        <section 
          className="lg:col-span-7 py-4 space-y-12 h-[600px] lg:h-[800px] overflow-y-auto overscroll-contain scroll-smooth pr-4
          /* Custom Scrollbar Styles */
          scrollbar-thin no-scrollbar scrollbar-thumb-[#FF5722]/20 scrollbar-track-transparent hover:scrollbar-thumb-[#FF5722]/40"
        >
          {RAJWADA_100_ITEMS
            .filter(item => item.cat === activeCategory)
            .map((item, idx) => (
              <div key={item.id} className="group relative">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end gap-4 min-w-0">
                    <h4 className="text-xl md:text-2xl font-bold text-white/90 group-hover:text-[#FF5722] transition-colors duration-300 truncate">
                      <span className="text-[10px] font-mono text-white/20 mr-4">{(idx + 1).toString().padStart(2, '0')}</span>
                      {item.name}
                    </h4>
                    <div className="flex-grow border-b border-white/5 border-dotted mb-2 group-hover:border-[#FF5722]/30 transition-colors" />
                    <span className="text-xl md:text-2xl font-black text-[#FF5722] tracking-tighter whitespace-nowrap">
                      ₹{item.price}
                    </span>
                  </div>
                  <p className="text-gray-500 text-sm font-light leading-relaxed pl-10 max-w-xl group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#FF5722] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}

            <div className="pt-24 pb-10 flex flex-col items-center opacity-20">
                <div className="h-20 w-[1px] bg-gradient-to-b from-white to-transparent" />
                <span className="text-[8px] tracking-[1.5em] uppercase mt-4">Heritage</span>
            </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="mt-20 border-t border-white/5 pt-12 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30 text-[9px] tracking-[0.8em] uppercase">
          <p>Flavors of Shegaon</p>
          <p>Handcrafted with Love • 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default MenuBook;