import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41oYp387k8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    name: "Do Epic Shit",
    author: "Ankur Warikoo",
    price: 219,
    originalPrice: 399,
    isBestSeller: true,
    category: "Self Help",
    rating: 4.6,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41RVqoveEpL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    name: "Believe In Yourself",
    author: "Joseph",
    price: 250,
    originalPrice: 1200,
    isBestSeller: false,
    category: "Self Help",
    rating: 4,
    quantity: 1
  },

  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/51cQRFTq2IL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Zero To One",
    author: "Peter Thiel",
    price: 50,
    originalPrice: 500,
    isBestSeller: false,
    category: "Self Help",
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Atomic Habits",
    author: "James Clear",
    price: 390,
    originalPrice: 790,
    isBestSeller: true,
    category: "Self Help",
    rating: 4.8,
    quantity: 1
  },

  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/814L+vq01mL._AC_UY327_FMwebp_QL65_.jpg",
    name: "IKIGAI",
    author: "Hector Garcia",
    price: 600,
    originalPrice: 1500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81BE7eeKzAL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Rich Dad Poor Dad",
    author: "Robert Kiyoski",
    price: 350,
    originalPrice: 500,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 2,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61Iz2yy2CKL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Monk Who Sold His Ferrari",
    author: "Robin Sharma",
    price: 119,
    originalPrice: 249,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/81wyziLQ+DL._AC_UY327_FMwebp_QL65_.jpg",
    name: "One Indian Girl",
    author: "Chetan Bhagat",
    price: 157,
    originalPrice: 195,
    isBestSeller: false,
    category: "Fiction",
    rating: 3,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/61xPDmYV7SL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Learning How To Fly",
    author: "A.P.J Abdul Kalam",
    price: 163,
    originalPrice: 205,
    isBestSeller: false,
    category: "Fiction",
    rating: 2.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/71Kezi+HZeL._AC_UY327_FMwebp_QL65_.jpg",
    name: "400 Days",
    author: "Chetan Bhagat",
    price: 699,
    originalPrice: 999,
    isBestSeller: false,
    category: "Fiction",
    rating: 4,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg",
    name: "Attitude Is Everything",
    author: "Keller Jeff",
    price: 399,
    originalPrice: 699,
    isBestSeller: false,
    category: "Self Help",
    rating: 3.5,
    quantity: 1
  },
  {
    _id: uuid(),
    img: "https://m.media-amazon.com/images/I/41ZgK6u73qL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
    name: "Man's Search For Meaning",
    author: "Franky Viktor",
    price: 243,
    originalPrice: 349,
    isBestSeller: false,
    category: "Non Fiction",
    rating: 1,
    quantity: 1
  },
];