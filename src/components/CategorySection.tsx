const categories = [
  {
    title: 'Cosmetics',
    description: 'Radiant beauty essentials.',
    image: '/cat_cosmetics.png',
  },
  {
    title: 'Jewellery',
    description: 'Timeless luxury pieces.',
    image: '/cat_jewellery.png',
  },
  {
    title: 'Clothing',
    description: 'Premium everyday wear.',
    image: '/cat_clothing.png',
  }
];

export default function CategorySection() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#0B2428] font-bold mb-4">Shop by Category</h2>
          <div className="w-16 h-1 bg-[#CD8E63] mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group relative h-96 overflow-hidden rounded-sm shadow-md cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10" />
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-serif text-3xl text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 font-sans mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {category.description}
                  </p>
                  <button className="text-[#CD8E63] font-semibold uppercase tracking-wider text-sm flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:text-[#E8AD85]">
                    Explore <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
