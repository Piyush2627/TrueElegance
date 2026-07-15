export default function FounderSection() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Copper accent box behind image */}
              <div className="absolute inset-0 bg-[#CD8E63] transform -translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/founder.jpg" 
                alt="Founder of True Elegance" 
                className="relative z-10 w-72 md:w-80 h-auto object-cover rounded-sm shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-[#CD8E63] uppercase tracking-[0.2em] text-sm font-semibold mb-4">Meet The Founder</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-[#0B2428] font-bold mb-6 leading-tight">
              Driven by Passion, Designed for You.
            </h3>
            
            <div className="space-y-6">
              <p className="text-gray-600 font-sans leading-relaxed italic border-l-4 border-[#CD8E63] pl-4">
                "True Elegance was born out of a simple vision: to make uncompromising luxury accessible without sacrificing quality. We believe that everyone deserves to experience the confidence that comes from truly premium craftsmanship."
              </p>
              
              <p className="text-gray-600 font-sans leading-relaxed">
                Every product you see here is a testament to our dedication to excellence. From sourcing the finest raw materials to partnering directly with the world's best artisans, my personal promise is that True Elegance will always deliver the absolute best value in the market.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-serif text-xl text-[#0B2428] font-bold">Piyush Dahiwadkar</p>
              <p className="text-xs text-[#CD8E63] uppercase tracking-widest mt-1 font-semibold">Founder & CEO, True Elegance</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
