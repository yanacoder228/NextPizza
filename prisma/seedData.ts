// prisma/seedData.ts

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
    price: 179,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/99f5cb91225b4875bd06a26d2e842106.png",
  },
  {
    title: "Creamy mozzarella",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
  },
  {
    title: "Cheddar & Parmesan",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
  },
  {
    title: "Jalapeño peppers",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
  },
  {
    title: "Tender chicken",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA5B328D35A",
  },
  {
    title: "Mushrooms",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA67259A324",
  },
  {
    title: "Ham",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA61B9A8D61",
  },
  {
    title: "Spicy pepperoni",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA6258199C3",
  },
  {
    title: "Spicy chorizo",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA62D5D6027",
  },
  {
    title: "Pickled cucumbers",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9EA89958D782B",
  },
  {
    title: "Fresh tomatoes",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA7AC1A1D67",
  },
  {
    title: "Red onion",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA60AE6464C",
  },
  {
    title: "Juicy pineapples",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A21DA51A81211E9AFA6795BA2A0",
  },
  {
    title: "Italian herbs",
    price: 39,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/370dac9ed21e4bffaf9bc2618d258734.png",
  },
  {
    title: "Bell pepper",
    price: 59,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA63F774C1B",
  },
  {
    title: "Feta cubes",
    price: 79,
    imgUrl:
      "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A39D824A82E11E9AFA6B0FFC349",
  },
  {
    title: "Meatballs",
    price: 79,
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
	{ title: "Omelet with ham & mushrooms", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7970321044479C1D1085457A36EB.webp", categoryId: 1 },
	{ title: "Omelet with pepperoni", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE94ECF33B0C46BA410DEC1B1DD6F8.webp", categoryId: 1 },
	{ title: "Latte Coffee", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B0C26A3F85D97A78FEEE00AD.webp", categoryId: 1 },
	{ title: "Ham & Cheese Sandwich", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FF0059B799A17F57A9E64C725.webp", categoryId: 2 },
	{ title: "Chicken Nuggets", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D618B5C7EC29350069AE9532C6E.webp", categoryId: 2 },
	{ title: "Oven-baked Potato with Sauce", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EED646A9CD324C962C6BEA78124F19.webp", categoryId: 2 },
	{ title: "Dodster", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F96D11392A2F6DD73599921B9.webp", categoryId: 2 },
	{ title: "Spicy Dodster", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FD3B594068F7A752DF8161D04.webp", categoryId: 2 },
	{ title: "Banana Milkshake", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EEE20B8772A72A9B60CFB20012C185.webp", categoryId: 3 },
	{ title: "Caramel Apple Milkshake", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE79702E2A22E693D96133906FB1B8.webp", categoryId: 3 },
	{ title: "Oreo Milkshake", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE796FA1F50F8F8111A399E4C1A1E3.webp", categoryId: 3 },
	{ title: "Classic Milkshake", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE796F93FB126693F96CB1D3E403FB.webp", categoryId: 3 },
	{ title: "Irish Cappuccino", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61999EBDA59C10E216430A6093.webp", categoryId: 4 },
	{ title: "Caramel Cappuccino", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61AED6B6D4BFDAD4E58D76CF56.webp", categoryId: 4 },
	{ title: "Coconut Latte", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B19FA07090EE88B0ED347F42.webp", categoryId: 4 },
	{ title: "Americano Coffee", imgUrl: "https://media.dodostatic.net/image/r:292x292/11EE7D61B044583596548A59078BBD33.webp", categoryId: 4 }
]