import { Utensils, Leaf, Flame } from 'lucide-react'; 

const features = [
  {
    title: 'Authentic Taste',
    desc: 'Experience the true flavors of America with our traditional recipes, from slow-smoked BBQ to classic homestyle pies.',
    icon: <Flame size={32} className="text-orange-500" />, 
  },
  {
    title: 'Fresh Ingredients',
    desc: 'We source our produce locally and use only the finest, freshest ingredients to ensure every dish bursts with flavor.',
    icon: <Leaf size={32} className="text-green-600" />,
  },
  {
    title: 'Warm Atmosphere',
    desc: 'Enjoy your meal in a cozy, rustic setting designed to make you feel right at home, whether you are with family or friends.',
    icon: <Utensils size={32} className="text-purple-600" />,
  },
];

const FeatureCol = ({ title, desc, icon }) => (
  <div className="flex flex-col items-center max-w-sm md:max-w-xs text-center group">
    <div
    className="mb-6 p-4 bg-gray-50 rounded-full transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-50 group-hover:shadow-lg">
      {icon}
    </div>
    <h3
    className="mb-3 text-xl font-bold text-purple-900 group-hover:text-purple-700 transition-colors">
      {title}
    </h3>
    <p className="text-sm leading-relaxed text-gray-600">
      {desc}
    </p>
  </div>
);

const Features = () => {
  return (
    <section id='features' className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="mb-16 text-3xl font-bold text-purple-900 md:text-4xl">
          Why Choose Us?
        </h2>
        
        <div className="flex flex-col items-center justify-between gap-12 md:flex-row md:items-start md:gap-8">
          {features.map((feat, idx) => (
            <FeatureCol key={idx} {...feat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;