import { cn } from "@/lib/utils";
// import { useState } from "react";

interface CategoriesProps {
  className?: string;
}

const categories = [
  "Pizzas",
  "Combo",
  "Snacks",
  "Cocktails",
  "Drinks",
  "Desserts",
] as const;

const activeCategory = "Pizzas";

export const Categories = ({ className }: CategoriesProps) => {
  //   const [activeCategory, setActiveCategory] =
  //     useState<(typeof categories)[number]>("Pizzas");

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((category, index) => (
        <button
          key={index}
          className={cn(
            "h-10 flex items-center px-5 cursor-pointer rounded-2xl font-bold",
            activeCategory === category &&
              "text-primary bg-white shadow-md shadow-gray-200"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
