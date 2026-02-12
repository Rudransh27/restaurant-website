import { useState } from 'react';
import { Utensils, Soup, Flame, Beef, Salad, EggFried, Fish, CakeSlice, Hamburger } from 'lucide-react';
import item1 from '../assets/item1.jpg'
import item2 from '../assets/item2.jpg'
import item3 from '../assets/item3.jpg'
import item4 from '../assets/item4.jpg'
import item5 from '../assets/item5.jpg'
import item6 from '../assets/item6.jpg'
import item7 from '../assets/item7.jpg'
import item8 from '../assets/item8.jpg'
import item9 from '../assets/item9.jpg'
import item10 from '../assets/item10.jpg'
import item11 from '../assets/item11.jpg'
import item12 from '../assets/item12.jpg'

const categories = [
  { id: 'popular', name: 'Popular', icon: <Flame size={16} /> },
  { id: 'breakfast', name: 'Breakfast', icon: <EggFried size={16} /> },
  { id: 'soups', name: 'Soups', icon: <Soup size={16} /> },
  { id: 'salads', name: 'Salads', icon: <Salad size={16} /> },
  { id: 'burgers', name: 'Burgers', icon: <Hamburger size={16} /> },
  { id: 'steaks', name: 'Steaks', icon: <Beef size={16} /> },
  { id: 'seafood', name: 'Seafood', icon: <Fish size={16} /> },
  { id: 'desserts', name: 'Desserts', icon: <CakeSlice size={16} /> },
  { id: 'sides', name: 'Sides', icon: <Utensils size={16} /> },
];

const allMenuItems = [
  {
    id: 1,
    category: 'breakfast',
    isPopular: true,
    title: 'Pancakes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione quo, iusto earum',
    image: item1,
  },
  {
    id: 2,
    category: 'soups',
    isPopular: true,
    title: 'Boston Clam Chowder',
    desc: 'Creamy, rich chowder packed with fresh clams, potatoes, and celery. Served with oyster crackers.',
    image: item2,
  },
  {
    id: 3,
    category: 'soups',
    isPopular: false,
    title: 'Tomato Basil Bisque',
    desc: 'Smooth roasted tomato soup with fresh basil and a hint of cream. Perfect for dipping grilled cheese.',
    image: item3,
  },
  {
    id: 4,
    category: 'salads',
    isPopular: true,
    title: 'Greek',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione quo, iusto earum',
    image: item4,
  },
  {
    id: 5,
    category: 'burgers',
    isPopular: true,
    title: 'Classic Cheeseburger',
    desc: 'Juicy angus beef patty topped with melted cheddar, crisp lettuce, tomato, and our secret house sauce.',
    image: item5,
  },
  {
    id: 6,
    category: 'seafood',
    isPopular: false,
    title: 'Fried Fish',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione quo, iusto earum',
    image: item6,
  },
  {
    id: 7,
    category: 'seafood',
    isPopular: false,
    title: 'Grilled Salmon',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione quo, iusto earum',
    image: item7,
  },
  {
    id: 8,
    category: 'desserts',
    isPopular: true,
    title: 'Apple Pie',
    desc: 'Classic American dessert with spiced apple filling in a flaky buttery crust.',
    image: item8,
  },
  {
    id: 9,
    category: 'desserts',
    isPopular: false,
    title: 'Chocolate Cake',
    desc: 'Warm chocolate cake with a gooey center, served with vanilla bean ice cream.',
    image: item9,
  },
  {
    id: 10,
    category: 'sides',
    isPopular: false,
    title: 'French Fries',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione',
    image: item10,
  },
  {
    id: 11,
    category: 'sides',
    isPopular: false,
    title: 'Mashed Potatos',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione',
    image: item11,
  },
  {
    id: 12,
    category: 'sides',
    isPopular: false,
    title: 'Battered Onion Rings',
    desc:  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores ratione',
    image: item12,
  },
];

// --- Components ---

const CategoryPill = ({ name, icon, isActive, onClick }) => (
  <button 
  onClick={onClick}
  className={`flex items-center gap-3 px-4 py-3 transition-all shadow-sm rounded-xl border
    ${isActive 
      ? 'bg-purple-800 text-white shadow-md scale-105 border-purple-800' 
      : 'bg-white text-gray-800 hover:shadow-md hover:scale-105 hover:border-purple-200 border-transparent'
    }`} >
    <div className={`flex items-center justify-center w-10 h-10 overflow-hidden rounded-full 
    ${isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-orange-600'}`}>
      {icon}
    </div>
    <span className="font-semibold">{name}</span>
  </button>
);

const MenuItemCard = ({ title, desc, image }) => (
  <div className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white rounded-2xl hover:-translate-y-2 hover:shadow-xl group animate-fade-in">
    <div className="h-56 overflow-hidden">
      <img 
      src={image} 
      alt={title} 
      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110" />
    </div>
    <div className="flex flex-col grow p-6">
      <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
      <p className="grow text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  </div>
);

const Menu = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState('popular');

  // Filter logic
  const filteredItems = allMenuItems.filter(item => {
    if (activeCategory === 'popular') return item.isPopular;
    return item.category === activeCategory;
  });

  return (
    <section id="menu" className="px-6 py-20 bg-[#F3EBF0] min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Categories */}
        <div className="mb-16 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">Food by category</h2>
          <p className="mb-10 text-gray-500">Choose a category to filter the menu.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <CategoryPill 
              key={cat.id} 
              {...cat} 
              isActive={activeCategory === cat.id}
              onClick={() => setActiveCategory(cat.id)}/>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <MenuItemCard key={item.id} {...item} />
            ))
          ) : (
            <p className="col-span-full py-10 text-center text-gray-500">No items found in this category yet. Coming soon!</p>
          )}
        </div>

      </div>
    </section>
  );
};

export default Menu;