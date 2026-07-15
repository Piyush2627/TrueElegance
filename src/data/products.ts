export interface Product {
  id: string;
  name: string;
  category: 'Cosmetics' | 'Jewellery' | 'Clothing';
  price: number;
  rating: number;
  image: string;
}

export const products: Product[] = [
  {
    id: 'c1',
    name: 'Velvet Matte Lipstick',
    category: 'Cosmetics',
    price: 35.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    name: 'Radiant Face Serum',
    category: 'Cosmetics',
    price: 85.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    name: 'Midnight Bloom Perfume',
    category: 'Cosmetics',
    price: 120.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1594035910387-fea477286d81?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j1',
    name: '18k Gold Minimalist Necklace',
    category: 'Jewellery',
    price: 450.00,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1599643478514-4a4e09b5af70?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j2',
    name: 'Solitaire Diamond Ring',
    category: 'Jewellery',
    price: 1250.00,
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b2548e?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'j3',
    name: 'Sterling Silver Bracelet',
    category: 'Jewellery',
    price: 180.00,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cl1',
    name: 'Silk Evening Dress',
    category: 'Clothing',
    price: 295.00,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cl2',
    name: 'Tailored Linen Shirt',
    category: 'Clothing',
    price: 95.00,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cl3',
    name: 'Premium Cotton Hoodie',
    category: 'Clothing',
    price: 110.00,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800'
  }
];
