import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const Links = [
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/60 backdrop-blur-md shadow-md py-3" // Scrolled: Blur
          : "bg-transparent py-6" // Top: Transparent
      }`}
    >
      <div className="container px-6 mx-auto flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, "hero")}
          className={`relative z-10 text-2xl font-bold tracking-widest transition-colors duration-300 ${
            isScrolled || isOpen ? "text-gray-800" : "text-white"
          }`}
        >
          True<span className={isScrolled || isOpen ? "text-purple-600" : "text-purple-400"}>Cuisine</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className={`hidden md:flex items-center gap-8 font-medium transition-colors duration-300 ${
          isScrolled ? "text-gray-700" : "text-gray-100"
        }`}>
          {Links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.section)}
                className="hover:text-purple-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <div className="relative z-50 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`cursor-pointer transition-colors duration-300 ${
              isScrolled || isOpen ? "text-gray-800" : "text-white"
            }`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`absolute top-0 left-0 w-full bg-white/90 backdrop-blur-lg p-8 flex flex-col items-center gap-6 text-lg font-medium text-gray-700 transition-transform duration-500 md:hidden ${
          isOpen ? "translate-y-0 shadow-2xl" : "-translate-y-full"
        }`}
      >
        <div className="h-10"></div> 
        
        {Links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => scrollToSection(e, link.section)}
            className="hover:text-purple-600 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar