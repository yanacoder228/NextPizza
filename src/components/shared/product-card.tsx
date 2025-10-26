import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  className?: string;
}

export const ProductCard = ({ className }: ProductCardProps) => {
  return (
    <div className={className}>
      <Link href={`/product/`}>
        <Image />
      </Link>
    </div>
  );
};
