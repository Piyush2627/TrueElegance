export default function Hero() {
  return (
    <div className="relative bg-[#0B2428] text-[#CD8E63] overflow-hidden min-h-[80vh] flex items-center">
      {/* Background with slight gradient and image overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B2428] via-[#0B2428]/90 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Fashion" 
          className="w-full h-full object-cover object-center opacity-40"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <h2 className="text-[#E8AD85] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            Discover True Elegance
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Elevate Your <br />
            <span className="text-[#CD8E63] italic">Everyday Style</span>
          </h1>
          <p className="text-lg md:text-xl text-[#CD8E63]/80 mb-10 max-w-xl font-sans leading-relaxed">
            A curated collection of premium cosmetics, fine jewellery, and luxury clothing designed for the modern connoisseur.
          </p>
          <div className="flex gap-4">
            <button className="bg-[#CD8E63] hover:bg-[#E8AD85] text-[#0B2428] px-8 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300 transform hover:-translate-y-1 shadow-lg shadow-[#CD8E63]/20">
              Shop Now
            </button>
            <button className="border border-[#CD8E63] text-[#CD8E63] hover:bg-[#CD8E63]/10 px-8 py-4 text-sm uppercase tracking-wider font-bold transition-all duration-300">
              Explore Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
