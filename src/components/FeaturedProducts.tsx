import { Heart, Star } from 'lucide-react';
import { products, type Product } from '../data/products';

export default function FeaturedProducts() {
  const handleWhatsAppOrder = (product: Product) => {
    const message = `Hello True Elegance! I would like to place an order for the following product:\n\n*Product*: ${product.name}\n*Category*: ${product.category}\n*Price*: ₹${product.price.toFixed(2)}\n\nPlease let me know the payment and delivery details.`;
    const whatsappUrl = `https://wa.me/917038689547?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return (
    <section className="py-24 bg-white" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-[#0B2428] font-bold mb-4">Featured Collection</h2>
          <div className="w-16 h-1 bg-[#CD8E63] mx-auto mb-6"></div>
          <p className="text-gray-500 font-sans max-w-2xl mx-auto">
            Discover our handpicked selection of premium products, designed to elevate your everyday elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white flex flex-col cursor-pointer"
              onClick={() => handleWhatsAppOrder(product)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
                <button className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-500 hover:text-red-500 hover:bg-white transition-colors duration-300 opacity-0 group-hover:opacity-100 shadow-sm">
                  <Heart size={20} />
                </button>
                {/* WhatsApp Order Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWhatsAppOrder(product);
                    }}
                    className="w-full bg-[#0B2428]/95 backdrop-blur-sm text-[#CD8E63] py-3 font-semibold text-sm uppercase tracking-wider hover:bg-[#0B2428] transition-colors shadow-lg"
                  >
                    Order on WhatsApp
                  </button>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg text-gray-900 mb-1 hover:text-[#CD8E63] cursor-pointer transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">{product.category}</p>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="flex items-center text-[#CD8E63]">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(product.rating) ? "currentColor" : "none"} 
                        className={i < Math.floor(product.rating) ? "text-[#CD8E63]" : "text-gray-300"}
                      />
                    ))}
                    <span className="text-xs text-gray-500 ml-2">({product.rating})</span>
                  </div>
                  <span className="font-sans font-medium text-lg text-[#0B2428]">
                    ₹{product.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="border-b-2 border-[#CD8E63] text-[#0B2428] pb-1 uppercase tracking-widest font-semibold hover:text-[#CD8E63] transition-colors">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
}
