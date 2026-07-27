export interface Product {
  id: string
  name: string
  brand: string
  price: number
  description: string
  sizes?: string[]
  colors?: string[]
  images: string[]
  category: string
  badge?: string
}

export const products: Product[] = [
  {
    id: 'lanvin-gallery-tee',
    name: 'T-Shirt Lanvin & Gallery Dept',
    brand: 'Lanvin × Gallery Dept',
    price: 999,
    description: 'Преміальна футболка від Lanvin у колаборації з Gallery Dept',
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/tshirts/01.jpeg',
      '/images/tshirts/02.jpeg',
      '/images/tshirts/03.jpeg',
      '/images/tshirts/04.jpeg',
    ],
    category: 'tshirts',
  },
  {
    id: 'amiri-tee',
    name: 'Amiri T-shirt',
    brand: 'Amiri',
    price: 899,
    description: 'Доступна у двох кольорах. Повномірні розміри',
    sizes: ['S', 'M'],
    colors: ['Чорний', 'Білий'],
    images: [
      '/images/tshirts-amiri/01.jpeg',
      '/images/tshirts-amiri/02.jpeg',
      '/images/tshirts-amiri/03.jpeg',
      '/images/tshirts-amiri/04.jpeg',
      '/images/tshirts-amiri/05.jpeg',
      '/images/tshirts-amiri/06.jpeg',
      '/images/tshirts-amiri/07.jpeg',
    ],
    category: 'tshirts',
  },
  {
    id: 'gallery-lanvin-tee',
    name: 'T-Shirt Gallery Dept & Lanvin',
    brand: 'Gallery Dept × Lanvin',
    price: 899,
    description: 'Футболка Gallery Dept у колаборації з Lanvin',
    sizes: ['S', 'M'],
    images: [
      '/images/tshirts-gallery2/01.jpeg',
      '/images/tshirts-gallery2/02.jpeg',
      '/images/tshirts-gallery2/03.jpeg',
      '/images/tshirts-gallery2/04.jpeg',
    ],
    category: 'tshirts',
  },
  {
    id: 'gucci-tee',
    name: 'Gucci Tee',
    brand: 'Gucci',
    price: 999,
    description: 'Доступна у трьох кольорах. Всі бірки присутні. Кількість дуже обмежена!',
    sizes: ['M'],
    colors: ['Чорний', 'Білий', 'Сірий'],
    images: [
      '/images/gucci-tee/01.jpeg',
      '/images/gucci-tee/02.jpeg',
      '/images/gucci-tee/03.jpeg',
      '/images/gucci-tee/04.jpeg',
      '/images/gucci-tee/05.jpeg',
    ],
    category: 'tshirts',
    badge: 'Лімітована серія',
  },
  {
    id: 'lacoste-bag',
    name: 'Lacoste Bag',
    brand: 'Lacoste',
    price: 1100,
    description: 'Сумка Lacoste преміальної якості',
    images: [
      '/images/bag/01.jpeg',
      '/images/bag/02.jpeg',
      '/images/bag/03.jpeg',
      '/images/bag/04.jpeg',
      '/images/bag/05.jpeg',
    ],
    category: 'bags',
  },
  {
    id: 'ferragamo-bracelet',
    name: 'Salvatore Ferragamo Bracelet',
    brand: 'Salvatore Ferragamo',
    price: 749,
    description: 'Доступний у двох кольорах',
    colors: ['Золотистий', 'Сріблястий'],
    images: [
      '/images/bracelet/01.jpeg',
      '/images/bracelet/02.jpeg',
      '/images/bracelet/03.jpeg',
      '/images/bracelet/04.jpeg',
      '/images/bracelet/05.jpeg',
    ],
    category: 'bracelets',
  },
  {
    id: 'broken-planet-shorts',
    name: 'Broken Planet Shorts',
    brand: 'Broken Planet',
    price: 999,
    description: 'Шорти Broken Planet преміальної якості',
    sizes: ['S', 'M', 'L'],
    images: [
      '/images/shorts/01.jpeg',
      '/images/shorts/02.jpeg',
      '/images/shorts/03.jpeg',
    ],
    category: 'shorts',
  },
  {
    id: 'maison-margiela-sneakers',
    name: 'Maison Margiela Replica',
    brand: 'Maison Margiela',
    price: 2699,
    description: 'Виконані 1:1 до оригіналу. Присутні всі логотипи/прошивки та повна комплектація',
    sizes: ['42'],
    images: [
      '/images/sneakers-maison/01.jpeg',
      '/images/sneakers-maison/02.jpeg',
      '/images/sneakers-maison/03.jpeg',
      '/images/sneakers-maison/04.jpeg',
    ],
    category: 'sneakers',
    badge: '1:1 до оригіналу',
  },
  {
    id: 'offwhite-sneakers',
    name: 'Off White Be Right Back',
    brand: 'Off-White',
    price: 2599,
    description: 'Виконані 1:1 до оригіналу. Доступні у двох кольорах',
    sizes: ['42', '43'],
    colors: ['Білі (43)', 'Сірі (42)'],
    images: [
      '/images/sneakers-offwhite/01.jpeg',
      '/images/sneakers-offwhite/02.jpeg',
      '/images/sneakers-offwhite/03.jpeg',
      '/images/sneakers-offwhite/04.jpeg',
      '/images/sneakers-offwhite/05.jpeg',
      '/images/sneakers-offwhite/06.jpeg',
      '/images/sneakers-offwhite/07.jpeg',
      '/images/sneakers-offwhite/08.jpeg',
      '/images/sneakers-offwhite/09.jpeg',
      '/images/sneakers-offwhite/10.jpeg',
    ],
    category: 'sneakers',
    badge: '1:1 до оригіналу',
  },
  {
    id: 'golden-goose-sneakers',
    name: 'Golden Goose Superstar',
    brand: 'Golden Goose',
    price: 2899,
    description: '1:1 до оригіналу. Повна комплектація',
    sizes: ['42', '43'],
    images: [
      '/images/sneakers-golden/01.jpeg',
      '/images/sneakers-golden/02.jpeg',
      '/images/sneakers-golden/03.jpeg',
      '/images/sneakers-golden/04.jpeg',
    ],
    category: 'sneakers',
    badge: '1:1 до оригіналу',
  },
]

export const categories = [
  { id: 'tshirts', name: 'Футболки', icon: '👕' },
  { id: 'bags', name: 'Сумки', icon: '👜' },
  { id: 'bracelets', name: 'Браслети', icon: '⌚' },
  { id: 'shorts', name: 'Шорти', icon: '🩳' },
  { id: 'sneakers', name: 'Кросівки', icon: '👟' },
]

export const reviews = [
  { id: 1, image: '/images/reviews/01.jpeg' },
  { id: 2, image: '/images/reviews/02.jpeg' },
  { id: 3, image: '/images/reviews/03.jpeg' },
  { id: 4, image: '/images/reviews/04.jpeg' },
  { id: 5, image: '/images/reviews/05.jpeg' },
  { id: 6, image: '/images/reviews/06.jpeg' },
  { id: 7, image: '/images/reviews/07.jpeg' },
  { id: 8, image: '/images/reviews/08.jpeg' },
  { id: 9, image: '/images/reviews/09.jpeg' },
  { id: 10, image: '/images/reviews/10.jpeg' },
  { id: 11, image: '/images/reviews/11.jpeg' },
  { id: 12, image: '/images/reviews/12.jpeg' },
  { id: 13, image: '/images/reviews/13.jpeg' },
  { id: 14, image: '/images/reviews/14.jpeg' },
]
