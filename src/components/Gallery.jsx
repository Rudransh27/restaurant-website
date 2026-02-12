import gallery1 from '../assets/gallery1.png';
import gallery2 from '../assets/item9.jpg';
import gallery3 from '../assets/item8.jpg';
import gallery4 from '../assets/gallery4.png';
import gallery5 from '../assets/gallery5.png';

const galleryImages = [
  {
    src: gallery4,
    alt: "Rustic Restaurant Interior",
    span: "row-span-2 md:col-span-1", 
  },
  {
    src: gallery2,
    alt: "Gourmet Chocolate Cake",
    span: "col-span-1", 
  },
  {
    src: gallery1,
    alt: "Sharing a Meal",
    span: "row-span-2 md:col-span-1", 
  },
  {
    src: gallery3,
    alt: "Fresh Strawberry & Greens Salad",
    span: "col-span-1", 
  },
  {
    src: gallery5,
    alt: "Table Full of Delicious Food",
    span: "col-span-2 md:col-span-3",
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="px-6 py-20 bg-[#F3EBF0]">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-purple-900 md:text-4xl">
            Gallery
          </h2>
          <p className="mt-3 text-gray-500">
            A glimpse into our atmosphere and culinary creations.
          </p>
        </div>

        {/* Mosaic Grid Layout */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 auto-rows-[250px] grid-flow-dense">
          {galleryImages.map((img, idx) => (
            <div 
            key={idx} 
            className={`relative overflow-hidden rounded-2xl group shadow-md ${img.span}`} >
              <img 
              src={img.src} 
              alt={img.alt} 
              className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110" />
              
              {/* Dark Gradient Overlay on Hover */}
              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-linear-to-t from-black/70 via-black/20 to-transparent group-hover:opacity-100" />
              
              <div
              className="absolute inset-0 flex items-end justify-center p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <span className="font-semibold tracking-wide text-white drop-shadow-md">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;