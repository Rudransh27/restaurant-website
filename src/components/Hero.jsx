import Navbar from "./Navbar"
import heroBg from '../assets/backimg.png'
import { ArrowRight } from "lucide-react"

const Hero = () => {

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero"
    className="relative h-screen min-h-150 flex flex-col bg-black overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="TrueCuisine Atmosphere"
        className="w-full h-full object-cover opacity-50 scale-105 animate-subtle-zoom" />
        <div
        className="absolute inset-0 bg-linear-to-b from-black/70 via-transparent to-black/90" />
      </div>

      <div 
      className="relative z-10 flex flex-col items-center justify-center grow px-4 text-center text-white">
        <div className="max-w-4xl animate-fade-in-up">
          <h1 
          className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl drop-shadow-lg">
           Experience the <span className="text-orange-400">Royal Heritage</span>  of Authentic Varadi Cuisine.
          </h1>
          <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-200 drop-shadow-md">
            Experience the authentic spices and rich culinary heritage of Vidarbha at Hotel Rajwada, Shegaon.
          </p>
          <button 
          className="group flex items-center gap-3 px-6 py-3 mx-auto font-medium transition-all bg-orange-700 rounded-full cursor-pointer hover:bg-orange-600 hover:scale-105 active:scale-95 shadow-xl shadow-purple-900/20"
          onClick={(e) => scrollToSection(e, "menu")} >
            Discover now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero