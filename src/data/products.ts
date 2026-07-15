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
    image: '/prod_lipstick.png'
  },
  {
    id: 'c2',
    name: 'Radiant Face Serum',
    category: 'Cosmetics',
    price: 4500.00,
    rating: 4.9,
    image: '/prod_serum.png'
  },
  {
    id: 'c3',
    name: 'Midnight Bloom Perfume',
    category: 'Cosmetics',
    price: 8500.00,
    rating: 4.7,
    image: '/prod_perfume.png'
  },
  {
    id: 'j1',
    name: '18k Gold Minimalist Necklace',
    category: 'Jewellery',
    price: 45000.00,
    rating: 4.9,
    image: '/prod_necklace.png'
  },
  {
    id: 'j2',
    name: 'Solitaire Diamond Ring',
    category: 'Jewellery',
    price: 125000.00,
    rating: 5.0,
    image: '/prod_ring.png'
  },
  {
    id: 'j3',
    name: 'Sterling Silver Bracelet',
    category: 'Jewellery',
    price: 15000.00,
    rating: 4.6,
    image: '/prod_bracelet.png'
  },
  {
    id: 'cl1',
    name: 'Silk Evening Dress',
    category: 'Clothing',
    price: 12999.00,
    rating: 4.8,
    image: '/prod_dress.png'
  },
  {
    id: 'cl2',
    name: 'Tailored Linen Shirt',
    category: 'Clothing',
    price: 4999.00,
    rating: 4.5,
    image: '/prod_shirt.png'
  },
  {
    id: 'cl3',
    name: 'Premium Cotton Hoodie',
    category: 'Clothing',
    price: 5999.00,
    rating: 4.7,
    image: '/prod_hoodie.png'
  }
];
