"use client";

import { cn } from "@/lib/utils";
import { categories } from "@/mochdata/categories";
import { useCategoryStore } from "@/stores/categoryStore";

interface CategoriesProps {
  className?: string;
}

export const Categories = ({ className }: CategoriesProps) => {
  const activeCategoryId = useCategoryStore((state) => state.activeId);

  return (
    <div
      className={cn("inline-flex gap-1 rounded-2xl bg-gray-50 p-1", className)}
    >
      {categories.map((category) => (
        <a
          key={category.id}
          className={cn(
            "py-3 flex items-center px-5 cursor-pointer rounded-2xl font-bold",
            activeCategoryId === category.id &&
              "text-primary bg-white shadow-md shadow-gray-200"
          )}
          href={`/#${category.title}`}
        >
          {category.title}
        </a>
      ))}
    </div>
  );
};
