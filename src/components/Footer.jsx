import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 bg-[#F3EBF0] border-t border-white/40">
      <div
       className="grid grid-cols-1 gap-12 px-6 mx-auto max-w-6xl text-center md:text-left md:grid-cols-[2fr_1fr_auto]">
        
        {/* Brand Section */}
        <div className="flex flex-col items-center gap-4 md:items-start">
          <h3 className="text-3xl font-bold text-[#7E3D5D]">TrueCuisine</h3>
          <p className="text-sm leading-relaxed text-gray-600 max-w-sm mx-auto md:mx-0">
            Crafting unforgettable dining experiences through passion, fresh ingredients, and culinary innovation.
          </p>
        </div>
        
        {/* Contact Info */}
        <div className="space-y-6">
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#7E3D5D]/70">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-600">
            <li className="flex items-start justify-center gap-3 md:justify-start">
              <MapPin size={18} className="text-[#7E3D5D] mt-0.5" />
              <span>123 Market Street, NY 10001</span>
            </li>
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <Phone size={18} className="text-[#7E3D5D]" />
              <span>(555) 123-4567</span>
            </li>
            <li className="flex items-center justify-center gap-3 md:justify-start">
              <Mail size={18} className="text-[#7E3D5D]" />
              <span>TrueCuisine@food.com</span>
            </li>
          </ul>
        </div>

        {/* Opening Hours */}
        <div className="flex flex-col items-center md:items-end md:min-w-max"> 
          <h4
           className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#7E3D5D]/70">
            Service Hours
          </h4>
          <ul className="w-full max-w-70 space-y-3 text-sm text-gray-600">
            <li className="flex justify-between gap-12">
              <span className="font-semibold text-gray-900">Tue - Sun</span>
              <span>10:00 - 22:00</span>
            </li>
            <li className="flex justify-between gap-12 italic text-gray-400">
              <span>Mon</span>
              <span>Closed</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div 
       className="flex flex-col items-center justify-between gap-8 px-6 pt-6 mt-10 border-t border-gray-300/30 max-w-6xl mx-auto md:flex-row">
        <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
          © 2024 
          <a href="https://ilham-bouk.github.io/ilhambouktir/" target='_blank'
          className='font-semibold text-gray-600'> Ilham Bouktir </a>
          . All rights reserved.
        </p>
        <div className="flex gap-4">
          {[Facebook, Instagram, Twitter].map((Icon, idx) => (
            <a key={idx} href="#" 
             className="p-2.5 text-[#7E3D5D] bg-white rounded-full shadow-sm hover:bg-[#7E3D5D] hover:text-white transition-all duration-300 hover:-translate-y-1">
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;