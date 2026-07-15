export default function PromoBanner() {
  return (
    <section className="relative py-24 bg-[#0B2428] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0B2428]/80 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?auto=format&fit=crop&q=80&w=2000" 
          alt="Sale Banner" 
          className="w-full h-full object-cover object-center grayscale opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-8 md:mb-0 max-w-xl">
          <p className="text-[#E8AD85] uppercase tracking-widest text-sm font-semibold mb-3">Limited Time Offer</p>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-4 leading-tight">
            Flat <span className="text-[#CD8E63]">30% OFF</span> on New Arrivals
          </h2>
          <p className="text-gray-300 font-sans mb-8">
            Elevate your wardrobe and beauty routine with our latest premium collections. Offer valid while stocks last.
          </p>
          <button className="bg-[#CD8E63] text-[#0B2428] px-8 py-3 text-sm uppercase tracking-wider font-bold hover:bg-white hover:text-[#0B2428] transition-colors duration-300">
            Shop the Sale
          </button>
        </div>
        
        <div className="hidden md:block w-1/3 relative">
           <div className="absolute inset-0 border-2 border-[#CD8E63] transform translate-x-4 -translate-y-4"></div>
           <img 
            src="https://images.unsplash.com/photo-1618002631557-0ceb68a83d78?auto=format&fit=crop&q=80&w=800"
            alt="Fashion Model"
            className="relative z-10 w-full h-auto shadow-2xl"
           />
        </div>
      </div>
    </section>
  );
}
