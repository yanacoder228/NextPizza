import { UserRole } from "@prisma/client";

export const users = [
  {
    fullName: "User test 2",
    email: "test@gmail.com",
    password: "111111",
    role: UserRole.USER,
  },
  {
    fullName: "Admin 2",
    email: "testadmin@gmail.com",
    password: "111111",
    role: UserRole.ADMIN,
  },
];

export const ingredients = [
  {
    title: "Cheese crust",
    price: 4.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    title: "Creamy mozzarella",
    price: 1.9,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    title: "Cheddar & Parmesan",
    price: 1.9,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    title: "Special tomato sauce",
    price: null,
    imgUrl: null,
  },
  {
    title: "Signature Alfredo sauce",
    price: null,
    imgUrl: null,
  },
  {
    title: "Bacon",
    price: 2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199ae744508792995ccae4ff71e233e.png",
  },
  {
    title: "Jalapeño peppers",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    title: "Tender chicken",
    price: 2.1,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    title: "Mushrooms",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    title: "Ham",
    price: 2.1,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    title: "BBQ sauce",
    price: null,
    imgUrl: null,
  },
  {
    title: "Spicy pepperoni",
    price: 2.1,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    title: "Spicy chorizo",
    price: 2.1,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    title: "Blue cheese",
    price: 1.9,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199153050ea707cbed48b92097e095f.png",
  },
  {
    title: "Cheddar & Parmesan",
    price: 1.9,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/0199152f32e47035aefbe8c971c54502.png",
  },
  {
    title: "Pickled cucumbers",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    title: "Fresh tomatoes",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    title: "Red onion",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    title: "Juicy pineapples",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    title: "Italian herbs",
    price: 0.89,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    title: "Bell pepper",
    price: 1.2,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    title: "Feta cubes",
    price: 1.9,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    title: "Meatballs",
    price: 2.1,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/b2f3a5d5afe44516a93cfc0d2ee60088.png",
  },
];

export const categories = [
  { title: "Pizzas" },
  { title: "Combos" },
  { title: "Snacks" },
  { title: "Cocktails" },
  { title: "Drinks" },
  { title: "Desserts" },
];

export const products = [
  {
    title: "Pepperoni Fresh",
    imgUrl: "/peperoni-pizza.avif",
    categoryId: 1,
    variations: [
      {
        price: 580,
        size: 30,
        pizzaType: 1,
        ingredientTitles: [
          "Spicy pepperoni",
          "Creamy mozzarella",
          "Fresh tomatoes",
          "Cheese crust",
        ],
      },
    ],
  },
  {
    title: "Omelet with ham & mushrooms",
    imgUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp",
    categoryId: 1,
  },
  {
    title: "Latte Coffee",
    imgUrl:
      "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp",
    categoryId: 4,
  },
];
