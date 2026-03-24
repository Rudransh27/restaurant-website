import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
    { name: "Speciality", href: "#speciality", section: "speciality" },
    { name: "Our Menu", href: "#menu", section: "menu" },
    { name: "Features", href: "#features", section: "features" },
    { name: "Gallery", href: "#gallery", section: "gallery" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    if (ele) {
      setIsOpen(false);
      ele.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(255,87,34,0.1)] py-3 border-b border-[#FF5722]/10"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        {/* LOGO */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className="relative z-[110] text-xl md:text-2xl font-['Cinzel_Decorative'] font-bold tracking-tighter cursor-pointer"
        >
          <span className="text-white">HOTEL</span>{" "}
          <span className="text-[#FF5722] drop-shadow-[0_0_10px_rgba(255,87,34,0.3)]">RAJWADA</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10">
          {Links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.section)}
                className="text-[11px] uppercase tracking-[0.3em] font-bold text-gray-300 hover:text-[#FF5722] transition-all duration-300 cursor-pointer relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#FF5722] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] md:hidden text-[#FF5722] cursor-pointer p-2"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-700 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible -translate-y-10"
        }`}
      >
        {Links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.section)}
            className="text-2xl font-['Cinzel_Decorative'] text-white hover:text-[#FF5722] transition-all duration-300 cursor-pointer"
          >
            {link.name}
          </a>
        ))}
        
        {/* Decorative Badge for Mobile */}
        <div className="mt-10 h-px w-20 bg-[#FF5722]/40"></div>
        <p className="text-[10px] tracking-[0.5em] text-[#FF5722]/60 uppercase">Dine Like Royalty</p>
      </div>
    </nav>
  );
};

export default Navbar;