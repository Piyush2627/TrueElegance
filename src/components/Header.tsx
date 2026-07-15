import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0B2428] text-[#CD8E63] shadow-md shadow-[#0B2428]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer">
            <div className="text-center">
              <h1 className="font-serif text-2xl tracking-widest leading-none font-bold">TRUE</h1>
              <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#E8AD85]">Elegance</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['Home', 'Cosmetics', 'Jewellery', 'Clothing', 'About', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-[#E8AD85] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="hover:text-[#E8AD85] transition-colors"><Search size={20} /></button>
            <button className="hover:text-[#E8AD85] transition-colors"><User size={20} /></button>
            <button className="hover:text-[#E8AD85] transition-colors relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#CD8E63] text-[#0B2428] text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#CD8E63] hover:text-[#E8AD85] focus:outline-none"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0B2428] border-t border-[#113238]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'Cosmetics', 'Jewellery', 'Clothing', 'About', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-3 py-2 rounded-md text-base font-medium text-[#CD8E63] hover:text-[#E8AD85] hover:bg-[#113238]"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
