import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#050505] border-t border-white/5 selection:bg-[#FF5722]/30">
      {/* STANDARD MAX-WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        
        <div className="grid grid-cols-1 gap-16 text-center md:text-left md:grid-cols-[2fr_1fr_1fr]">
          
          {/* Brand Section */}
          <div className="flex flex-col items-center gap-6 md:items-start">
            <h3 className="text-3xl font-['Cinzel_Decorative'] text-[#FF5722] tracking-tighter">
              RAJWADA
            </h3>
            <p className="text-sm leading-relaxed text-gray-500 max-w-sm mx-auto md:mx-0 italic">
              Preserving the authentic flavors of Shegaon through generations of culinary heritage and royal hospitality.
            </p>
            {/* Social Icons - Redesigned for Dark Theme */}
            <div className="flex gap-4 mt-2">
              {[Facebook, Instagram, Twitter].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="p-3 text-white/40 border border-white/10 rounded-full transition-all duration-500 hover:border-[#FF5722] hover:text-[#FF5722] hover:-translate-y-1 bg-[#0a0a0a]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#FF5722]">Reach Us</h4>
            <ul className="space-y-5 text-sm text-gray-500">
              <li className="flex items-start justify-center gap-4 md:justify-start group">
                <MapPin size={18} className="text-[#FF5722] shrink-0" />
                <span className="group-hover:text-white transition-colors">Navi Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center justify-center gap-4 md:justify-start group">
                <Phone size={18} className="text-[#FF5722] shrink-0" />
                <span className="group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-center justify-center gap-4 md:justify-start group">
                <Mail size={18} className="text-[#FF5722] shrink-0" />
                <span className="group-hover:text-white transition-colors">royals@rajwada.com</span>
              </li>
            </ul>
          </div>

          {/* Service Hours */}
          <div className="flex flex-col items-center md:items-end"> 
            <h4 className="mb-6 text-[10px] font-black uppercase tracking-[0.4em] text-[#FF5722]">
              Dining Hours
            </h4>
            <ul className="w-full max-w-[240px] space-y-4 text-sm text-gray-500">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span className="font-bold text-white/80">Tue - Sun</span>
                <span>11:00 - 23:00</span>
              </li>
              <li className="flex justify-between italic text-white/20">
                <span>Monday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 pt-12 mt-20 border-t border-white/5 md:flex-row">
          <p className="text-[9px] font-medium text-gray-600 uppercase tracking-[0.4em]">
            © 2026 Crafted with Passion for
            <span className="text-[#FF5722] ml-2">Rajwada Heritage</span>
          </p>
          <div className="flex gap-8 text-[9px] text-gray-600 uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-[#FF5722] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#FF5722] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Aesthetic Bottom Edge */}
      <div className="mt-8 h-1 w-full bg-gradient-to-r from-transparent via-[#FF5722]/20 to-transparent" />
    </footer>
  );
};

export default Footer;