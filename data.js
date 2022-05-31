import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'pasidhu',
      email: 'pasidhu878@gmail.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'naveen',
      email: 'naveen@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'samahan',
      slug: 'nike-slim-shirt',
      category: 'med1',
      image: '/images/p1.jpg', // 679px × 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'panadol',
      slug: 'adidas-fit-shirt',
      category: 'med2',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 10,
      description: 'high quality product',
    },
    {
      //  _id: '3',
      name: 'parasitamol',
      slug: 'nike-slim-pant',
      category: 'med3',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality product',
    },
    {
      //  _id: '4',
      name: 'iodex',
      slug: 'adidas-fit-pant',
      category: 'med4',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality product',
    },
  ],
};
export default data;
