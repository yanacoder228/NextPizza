export const categories = [
  { id: 1, title: "Pizzas" },
  { id: 2, title: "Combos" },
  { id: 3, title: "Snacks" },
  { id: 4, title: "Cocktails" },
  { id: 5, title: "Drinks" },
  { id: 6, title: "Desserts" },
] as const;

export type Category = (typeof categories)[number];
