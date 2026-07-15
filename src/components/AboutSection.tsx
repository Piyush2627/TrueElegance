export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0B2428] transform translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="https://images.unsplash.com/photo-1574634534894-89d7576c8259?auto=format&fit=crop&q=80&w=1000" 
                alt="Brand Essence" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#CD8E63] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Our Story</h2>
            <h3 className="font-serif text-4xl md:text-5xl text-[#0B2428] font-bold mb-6 leading-tight">
              Crafting Elegance for the Modern Era
            </h3>
            <p className="text-gray-600 font-sans mb-6 leading-relaxed">
              At True Elegance, we believe that luxury is not just a price tag—it is an experience, a statement, and a way of life. Founded on the principles of impeccable craftsmanship and timeless design, we curate collections that transcend fleeting trends.
            </p>
            <p className="text-gray-600 font-sans mb-8 leading-relaxed">
              From our radiant cosmetics that enhance your natural beauty, to our bespoke jewellery pieces that mark unforgettable moments, and our premium clothing line tailored to perfection. We are dedicated to providing you with an unparalleled shopping experience that celebrates your unique style.
            </p>
            
            <div className="grid grid-cols-3 gap-6 mb-8 text-center">
              <div>
                <h4 className="font-serif text-3xl text-[#0B2428] font-bold mb-1">10+</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-[#0B2428] font-bold mb-1">50k</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
              <div>
                <h4 className="font-serif text-3xl text-[#0B2428] font-bold mb-1">100%</h4>
                <p className="text-xs text-gray-500 uppercase tracking-wider">Premium Quality</p>
              </div>
            </div>
            
            <button className="border border-[#0B2428] text-[#0B2428] px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-[#0B2428] hover:text-[#CD8E63] transition-colors duration-300">
              Read Our Full Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
