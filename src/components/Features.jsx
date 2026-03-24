import React from 'react';
import { Utensils, Leaf, Flame } from 'lucide-react'; 

const features = [
  {
    title: 'Heritage Flavors',
    desc: 'Experience the soul of Shegaon with our time-honored recipes, crafted with authentic spices and traditional techniques.',
    icon: <Flame size={32} className="text-[#FF5722]" />, 
  },
  {
    title: 'Farm Fresh',
    desc: 'We source our ingredients from local farmers daily, ensuring that every plate serves the freshest produce of the season.',
    icon: <Leaf size={32} className="text-[#FF5722]" />,
  },
  {
    title: 'Royal Ambience',
    desc: 'Dine in a setting that reflects the majesty of Indian heritage, designed to provide a warm and grand experience.',
    icon: <Utensils size={32} className="text-[#FF5722]" />,
  },
];

const FeatureCol = ({ title, desc, icon }) => (
  <div className="flex flex-col items-center max-w-sm text-center group">
    {/* Icon Container with Royal Glow */}
    <div className="mb-8 p-6 bg-[#0a0a0a] border border-white/5 rounded-full transition-all duration-500 
                    group-hover:scale-110 group-hover:border-[#FF5722]/40 group-hover:shadow-[0_0_30px_rgba(255,87,34,0.15)]">
      <div className="transition-transform duration-500 group-hover:rotate-[360deg]">
        {icon}
      </div>
    </div>
    
    {/* Title with Cinzel Font */}
    <h3 className="mb-4 text-xl font-bold text-white group-hover:text-[#FF5722] transition-colors uppercase tracking-widest">
      {title}
    </h3>
    
    {/* Description */}
    <p className="text-sm leading-relaxed text-gray-500 group-hover:text-gray-300 transition-colors italic">
      {desc}
    </p>
  </div>
);

const Features = () => {
  return (
    /* Standard Website Padding & Dark Theme */
    <section id='features' className="px-6 md:px-12 lg:px-24 py-24 bg-[#050505] selection:bg-[#FF5722]/30">
      
      {/* STANDARD MAX-WIDTH: Syncs with Menu & MenuBook */}
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <span className="text-[#FF5722] text-[10px] tracking-[0.6em] uppercase font-bold mb-4 block opacity-80">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cinzel_Decorative'] text-white mb-6 tracking-tight">
            Why <span className="text-[#FF5722]">Rajwada?</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#FF5722]/30" />
            <div className="w-2 h-2 rotate-45 border border-[#FF5722]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#FF5722]/30" />
          </div>
        </div>

        {/* FEATURES GRID */}
        <div className="flex flex-col items-center justify-between gap-16 md:flex-row md:items-start md:gap-12">
          {features.map((feat, idx) => (
            <FeatureCol key={idx} {...feat} />
          ))}
        </div>

        {/* Minimalist Divider */}
        <div className="mt-24 flex justify-center opacity-10">
          <div className="w-full max-w-md h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Features;