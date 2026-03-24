import React, { useState } from 'react';
import { RAJWADA_100_ITEMS } from './menuData';

const Menu = () => {
  const [activeTab, setActiveTab] = useState("Waradi");
  const categories = [...new Set(RAJWADA_100_ITEMS.map(item => item.cat))];

  // Strictly taking 5 items to fit the specialized 5-column grid
  const filteredItems = RAJWADA_100_ITEMS
    .filter(item => item.cat === activeTab)
    .slice(0, 5);

  return (
    /* Standard Website Padding: px-6 for mobile, md:px-12 for tablets, lg:px-24 for desktop */
    <section className="bg-[#050505] py-24 px-6 md:px-12 lg:px-24 selection:bg-[#FF5722]/30">
      
      {/* STANDARD MAX-WIDTH: Matches the MenuBook layout exactly */}
      <div className="max-w-7xl mx-auto">
        
        {/* 1. SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="text-[#FF5722] text-[10px] tracking-[0.6em] uppercase font-bold mb-4 block opacity-80">
            Royal Favourites
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cinzel_Decorative'] text-white mb-6 tracking-tight">
            Our <span className="text-[#FF5722]">Speciality</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF5722]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#FF5722]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF5722]/40" />
          </div>
        </div>

        {/* 2. CATEGORY TABS */}
        <div className="flex overflow-x-auto gap-4 no-scrollbar mb-20 justify-start md:justify-center pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`
                px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500 whitespace-nowrap border
                ${activeTab === cat 
                  ? 'bg-[#FF5722] border-[#FF5722] text-white shadow-[0_15px_30px_-10px_rgba(255,87,34,0.4)] scale-105' 
                  : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3. 5-CARD GRID: Contained within the 7xl margin */}
        {/* lg:grid-cols-5 forces the cards to be smaller to fit the row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-[#0a0a0a] rounded-2xl overflow-hidden flex flex-col h-full border border-white/5 hover:border-[#FF5722]/40 transition-all duration-500 hover:-translate-y-2 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]"
            >
              {/* Compact Image - Height reduced for 'Small Card' feel */}
              <div className="h-44 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10" />
                <img 
                  src={`https://source.unsplash.com/600x600/?indian-food,${item.name.replace(/\s+/g, '-')}`} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute bottom-4 right-4 z-20 text-[#FF5722] font-black text-xl tracking-tighter">
                  ₹{item.price}
                </div>
              </div>

              {/* Compact Text Content */}
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-[13px] font-bold text-white mb-2 group-hover:text-[#FF5722] transition-colors line-clamp-1 uppercase tracking-widest">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-[11px] leading-relaxed italic mb-6 line-clamp-2 group-hover:text-gray-400 transition-colors">
                  {item.desc}
                </p>
                
                {/* Minimalist Bottom Bar */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[8px] text-white/20 font-bold uppercase tracking-[0.3em]">Rajwada</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FF5722]/20 group-hover:bg-[#FF5722] group-hover:shadow-[0_0_8px_#FF5722] transition-all" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;