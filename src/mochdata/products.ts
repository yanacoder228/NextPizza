import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: 1,
    title: "Pepperoni",
    img: "https://media.dodostatic.net/image/r:584x584/0198bf57bc517218ab93c762f4b0193e.avif",
    variants: [
      { size: "small", dough: "thin", price: 8 },
      { size: "medium", dough: "thin", price: 10 },
      { size: "large", dough: "traditional", price: 13 },
    ],
  },
  {
    id: 2,
    title: "Cheese Lovers",
    img: "https://media.dodostatic.net/image/r:584x584/019a109fe01672189d029a725ba99705.avif",
    variants: [
      { size: "small", dough: "thin", price: 7 },
      { size: "medium", dough: "traditional", price: 9 },
      { size: "large", dough: "traditional", price: 12 },
    ],
  },
  {
    id: 3,
    title: "Hawaiian",
    img: "https://media.dodostatic.net/image/r:584x584/0198bf530345746e98039478001d5108.avif",
    variants: [
      { size: "small", dough: "thin", price: 9 },
      { size: "medium", dough: "traditional", price: 11 },
      { size: "large", dough: "traditional", price: 14 },
    ],
  },
  {
    id: 4,
    title: "BBQ Chicken",
    img: "https://media.dodostatic.net/image/r:584x584/0198bf2cc87a79baa946c53b634615f4.avif",
    variants: [
      { size: "small", dough: "thin", price: 10 },
      { size: "medium", dough: "thin", price: 12 },
      { size: "large", dough: "traditional", price: 15 },
    ],
  },
];
