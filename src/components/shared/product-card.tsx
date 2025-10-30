import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { Title } from "./title";
import { Button } from "../ui";
import { Plus } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className }: ProductCardProps) => {
  return (
    <div className={className}>
      <Link href={`/product/1`}>
        <div className="relative flex justify-center p-4 bg-secondary rounded-lg h-55 mb-4">
          <Image
            width={220}
            height={220}
            className="object-contain"
            src={product.img}
            alt={product.title}
          />
        </div>

        <Title size="sm" text={product.title} className="mb-2 font-bold" />
        <p className="text-sm text-gray-400 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
          doloribus tempore autem magnam, nobis temporibus eius id ex quod quam
          dolores nisi distinctio ad molestias perferendis numquam blanditiis
          quasi accusantium.
        </p>
        <div className="flex justify-between items-center">
          <b className="text-lg">{product.price} &euro;</b>
          <Button className="font-bold">
            <Plus width={5} height={5} />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};
