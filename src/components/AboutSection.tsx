export default function AboutSection() {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-[#0B2428] transform translate-x-4 translate-y-4 rounded-sm"></div>
              <img 
                src="/about.png" 
                alt="Brand Essence" 
                className="relative z-10 w-full h-auto object-cover rounded-sm shadow-xl"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#CD8E63] uppercase tracking-[0.2em] text-sm font-semibold mb-4">About True Elegance</h2>
            <h3 className="font-serif text-3xl md:text-4xl text-[#0B2428] font-bold mb-8 leading-tight">
              Redefining Luxury & Value
            </h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-serif text-2xl text-[#0B2428] font-semibold mb-2">What We Do</h4>
                <p className="text-gray-600 font-sans leading-relaxed">
                  We curate and deliver the pinnacle of luxury directly to you. True Elegance is your ultimate destination for high-end fashion, exquisite jewellery, and premium cosmetics. We exist to elevate your everyday lifestyle with products that make a statement.
                </p>
              </div>
              
              <div>
                <h4 className="font-serif text-2xl text-[#0B2428] font-semibold mb-2">How We Do It</h4>
                <p className="text-gray-600 font-sans leading-relaxed">
                  By partnering directly with master artisans and top-tier designers, we eliminate unnecessary middlemen. This meticulous approach allows us to maintain uncompromising quality while consistently offering the best value in the luxury market.
                </p>
              </div>

              <div>
                <h4 className="font-serif text-2xl text-[#0B2428] font-semibold mb-3">Our Offerings</h4>
                <ul className="space-y-3">
                   <li className="flex items-start">
                     <span className="text-[#CD8E63] mr-3 mt-1 text-lg leading-none">✦</span>
                     <span className="text-gray-700 leading-relaxed"><strong>Premium Cosmetics:</strong> Radiant, skin-friendly beauty essentials offering unmatched glow and care.</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-[#CD8E63] mr-3 mt-1 text-lg leading-none">✦</span>
                     <span className="text-gray-700 leading-relaxed"><strong>Fine Jewellery:</strong> Bespoke, timeless pieces crafted with precision to celebrate your milestones.</span>
                   </li>
                   <li className="flex items-start">
                     <span className="text-[#CD8E63] mr-3 mt-1 text-lg leading-none">✦</span>
                     <span className="text-gray-700 leading-relaxed"><strong>Luxury Clothing:</strong> Tailored perfection using only the finest fabrics for unparalleled comfort and style.</span>
                   </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
