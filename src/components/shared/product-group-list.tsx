import { Product } from "@/types/product";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";

interface ProductGroupListProps {
  products: Product[];
  groupTitle?: string;
  className?: string;
  listClassName?: string;
}

export const ProductGroupList = ({
  className,
  products,
  groupTitle,
  listClassName,
}: ProductGroupListProps) => {
  return (
    <div className={className}>
      {groupTitle && (
        <Title size="lg" text={groupTitle} className="font-extrabold mb-5" />
      )}
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
