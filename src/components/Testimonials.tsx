import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Fashion Editor',
    content: 'The attention to detail in their jewellery collection is simply unmatched. True Elegance has redefined what accessible luxury means to me.',
    avatar: '/avatar_1.png',
    rating: 5,
  },
  {
    id: 2,
    name: 'Marcus Sterling',
    role: 'Entrepreneur',
    content: 'I purchased a tailored suit and a timepiece. The quality exceeded my expectations. A seamless shopping experience from start to finish.',
    avatar: '/avatar_2.png',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    role: 'Beauty Influencer',
    content: 'Their cosmetics line is a revelation. The serum feels incredibly luxurious on the skin. I highly recommend True Elegance to all my followers.',
    avatar: '/avatar_1.png',
    rating: 4,
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#CD8E63] uppercase tracking-[0.2em] text-sm font-semibold mb-2">Testimonials</h2>
          <h3 className="font-serif text-4xl text-[#0B2428] font-bold mb-4">What Our Clients Say</h3>
          <div className="w-16 h-1 bg-[#CD8E63] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 relative border border-gray-100">
              <div className="absolute top-0 right-0 -mt-4 mr-8 text-[#CD8E63] opacity-20 font-serif text-8xl leading-none">"</div>
              
              <div className="flex items-center mb-4 text-[#CD8E63]">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    fill={i < review.rating ? "currentColor" : "none"} 
                    className={i < review.rating ? "text-[#CD8E63]" : "text-gray-300"}
                  />
                ))}
              </div>
              
              <p className="text-gray-600 italic mb-6 relative z-10 font-sans">
                "{review.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-serif font-semibold text-[#0B2428]">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
