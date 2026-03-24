import React from 'react';
import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/item9.jpg';
import gallery3 from '../assets/item8.jpg';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';

const galleryImages = [
  {
    src: gallery4,
    alt: "Royal Interior",
    span: "row-span-2 md:col-span-1", 
  },
  {
    src: gallery2,
    alt: "Signature Dessert",
    span: "col-span-1", 
  },
  {
    src: gallery1,
    alt: "Traditional Feast",
    span: "row-span-2 md:col-span-1", 
  },
  {
    src: gallery3,
    alt: "Heritage Spices",
    span: "col-span-1", 
  },
  {
    src: gallery5,
    alt: "The Rajwada Spread",
    span: "col-span-2 md:col-span-3",
  }
];

const Gallery = () => {
  return (
    /* Standard Website Padding & Dark Theme */
    <section id="gallery" className="px-6 md:px-12 lg:px-24 py-24 bg-[#050505] selection:bg-[#FF5722]/30">
      
      {/* STANDARD MAX-WIDTH: Syncs with Menu & Features */}
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-20 text-center">
          <span className="text-[#FF5722] text-[10px] tracking-[0.6em] uppercase font-bold mb-4 block opacity-80">
            Visual Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-['Cinzel_Decorative'] text-white mb-6 tracking-tight">
            Our <span className="text-[#FF5722]">Gallery</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-12 bg-[#FF5722]/20" />
            <div className="w-2 h-2 rotate-45 border border-[#FF5722]" />
            <div className="h-[1px] w-12 bg-[#FF5722]/20" />
          </div>
          <p className="mt-6 text-gray-500 italic text-sm max-w-lg mx-auto">
            A glimpse into the soul of Shegaon and our culinary legacy.
          </p>
        </div>

        {/* MOSAIC GRID: Perfectly contained within Max-Width */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 auto-rows-[280px] grid-flow-dense">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden rounded-2xl group border border-white/5 shadow-2xl ${img.span}`}
            >
              {/* Image with slower, smoother zoom */}
              <img 
                src={img.src} 
                alt={img.alt} 
                className="object-cover w-full h-full transition-transform duration-[1500ms] ease-out group-hover:scale-110" 
              />
              
              {/* Premium Dark Gradient Overlay */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-[#050505] via-[#050505]/20 to-transparent group-hover:opacity-90" />
              
              {/* Animated Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 transition-all duration-500 translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                <span className="text-[#FF5722] text-[10px] font-black uppercase tracking-[0.4em] mb-2">
                  Discover
                </span>
                <span className="font-['Cinzel_Decorative'] text-lg text-white drop-shadow-md text-center">
                  {img.alt}
                </span>
                {/* Decorative Line under title on hover */}
                <div className="w-8 h-[1px] bg-white/30 mt-4 group-hover:w-16 transition-all duration-700" />
              </div>

              {/* Royal Frame corners (Only visible on hover) */}
              <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#FF5722] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;