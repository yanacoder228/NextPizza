export type Product = {
  id: number;
  title: string;
  img: string;
  variants: {
    size: "small" | "medium" | "large";
    dough: "thin" | "traditional";
    price: number;
  }[];
};
