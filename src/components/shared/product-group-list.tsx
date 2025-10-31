"use client";

import { Product } from "@/types/product";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { useIntersection } from "@/hooks/useIntersection";
import { useEffect } from "react";
import { useCategoryStore } from "@/stores/categoryStore";

interface ProductGroupListProps {
  products: Product[];
  groupTitle: string;
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList = ({
  className,
  products,
  groupTitle,
  categoryId,
  listClassName,
}: ProductGroupListProps) => {
  const setActiveCategoryId = useCategoryStore((store) => store.setActiveId);

  const { intersectionRef, isVisible } = useIntersection<HTMLDivElement>({
    threshold: 0.4,
  });

  useEffect(() => {
    if (isVisible) {
      setActiveCategoryId(categoryId);
    }
  }, [isVisible]);

  return (
    <div className={className} id={groupTitle} ref={intersectionRef}>
      <Title size="lg" text={groupTitle} className="font-extrabold mb-5" />
      <div
        className={cn(
          "grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
          className
        )}
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
