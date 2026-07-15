export default function Newsletter() {
  return (
    <section className="py-24 bg-[#0B2428] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#CD8E63] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8AD85] rounded-full mix-blend-multiply filter blur-3xl opacity-20 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">Stay Updated</h2>
        <p className="text-[#CD8E63] font-sans mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter to receive exclusive offers, early access to new collections, and styling tips directly to your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-6 py-4 bg-white/10 border border-[#113238] text-white placeholder-gray-400 focus:outline-none focus:border-[#CD8E63] focus:ring-1 focus:ring-[#CD8E63] transition-colors rounded-none"
            required
          />
          <button 
            type="submit" 
            className="bg-[#CD8E63] text-[#0B2428] px-8 py-4 font-bold uppercase tracking-wider hover:bg-[#E8AD85] transition-colors whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
}
