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
    price: 1999.00,
    rating: 4.8,
    image: 'https://picsum.photos/seed/lipstick/800/800'
  },
  {
    id: 'c2',
    name: 'Radiant Face Serum',
    category: 'Cosmetics',
    price: 4500.00,
    rating: 4.9,
    image: 'https://picsum.photos/seed/faceserum/800/800'
  },
  {
    id: 'c3',
    name: 'Midnight Bloom Perfume',
    category: 'Cosmetics',
    price: 8500.00,
    rating: 4.7,
    image: 'https://picsum.photos/seed/perfume/800/800'
  },
  {
    id: 'j1',
    name: '18k Gold Minimalist Necklace',
    category: 'Jewellery',
    price: 45000.00,
    rating: 4.9,
    image: 'https://picsum.photos/seed/goldnecklace/800/800'
  },
  {
    id: 'j2',
    name: 'Solitaire Diamond Ring',
    category: 'Jewellery',
    price: 125000.00,
    rating: 5.0,
    image: 'https://picsum.photos/seed/diamondring/800/800'
  },
  {
    id: 'j3',
    name: 'Sterling Silver Bracelet',
    category: 'Jewellery',
    price: 15000.00,
    rating: 4.6,
    image: 'https://picsum.photos/seed/silverbracelet/800/800'
  },
  {
    id: 'cl1',
    name: 'Silk Evening Dress',
    category: 'Clothing',
    price: 12999.00,
    rating: 4.8,
    image: 'https://picsum.photos/seed/silkdress/800/800'
  },
  {
    id: 'cl2',
    name: 'Tailored Linen Shirt',
    category: 'Clothing',
    price: 4999.00,
    rating: 4.5,
    image: 'https://picsum.photos/seed/linenshirt/800/800'
  },
  {
    id: 'cl3',
    name: 'Premium Cotton Hoodie',
    category: 'Clothing',
    price: 5999.00,
    rating: 4.7,
    image: 'https://picsum.photos/seed/hoodie/800/800'
  }
];
