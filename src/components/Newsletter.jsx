import React from 'react';

const Newsletter = () => {
  return (
    /* Standard Website Padding & Dark Theme Background */
    <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#050505] selection:bg-[#FF5722]/30">
      
      {/* Container to match site-wide horizontal alignment */}
      <div className="max-w-7xl mx-auto">
        
        {/* Newsletter Box - Uses a deep gradient and subtle border */}
        <div className="relative overflow-hidden bg-gradient-to-br from-[#0a0a0a] to-[#111] rounded-[2rem] border border-white/5 shadow-2xl px-6 py-12 md:px-16 md:py-20 text-center">
          
          {/* Decorative Background Element */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#FF5722]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#FF5722]/5 rounded-full blur-3xl" />

          {/* Text Content with Cinzel Typography */}
          <span className="text-[#FF5722] text-[10px] tracking-[0.6em] uppercase font-bold mb-6 block opacity-80">
            The Inner Circle
          </span>
          
          <h2 className="mb-6 text-3xl md:text-5xl font-['Cinzel_Decorative'] text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Experience <span className="text-[#FF5722]">Rajwada</span> in your Inbox
          </h2>
          
          <p className="mb-10 text-gray-500 italic text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Join our exclusive list for heritage recipes, royal announcements, and private dining invitations.
          </p>

          {/* Form - Redesigned with custom orange/black contrast */}
          <form className="flex flex-col gap-4 sm:flex-row justify-center max-w-md mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="grow px-8 py-4 text-white transition-all bg-[#050505] border border-white/10 rounded-full focus:outline-none focus:border-[#FF5722]/50 focus:ring-1 focus:ring-[#FF5722]/50 placeholder:text-gray-700" 
            />
            <button 
              type="button" 
              className="px-10 py-4 font-black uppercase text-[11px] tracking-[0.2em] text-white transition-all bg-[#FF5722] rounded-full hover:bg-[#ff7a52] hover:shadow-[0_10px_20px_-5px_rgba(255,87,34,0.4)] cursor-pointer active:scale-95" 
            >
              Subscribe
            </button>
          </form>

          <p className="mt-8 text-[10px] text-gray-600 uppercase tracking-widest opacity-60">
            Respecting your privacy since 2024.
          </p>

          {/* Royal Corner Elements to match Gallery and MenuBook */}
          <div className="absolute top-8 left-8 w-6 h-6 border-t border-l border-[#FF5722]/20" />
          <div className="absolute bottom-8 right-8 w-6 h-6 border-b border-r border-[#FF5722]/20" />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;