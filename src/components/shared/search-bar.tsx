"use client";

import { Search } from "lucide-react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDebounce } from "@/hooks/useDebounce";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsFocused(false));

  const onClickItem = () => {
    setIsFocused(false);
    setSearchQuery("");
  };

  const { debouncedValue } = useDebounce(searchQuery, 300);

  useEffect(() => {
    if (debouncedValue) {
      Api.products.search(debouncedValue).then((items) => {
        setProducts(items);
      });
    } else {
      setProducts([]);
    }
  }, [debouncedValue]);

  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 right-0  bottom-0 bg-black/30 z-15" />
      )}

      <div ref={ref} className={cn(`relative z-15`, className)}>
        <Search
          width={20}
          className="absolute top-1/2 left-3 translate-y-[-50%] text-gray-400"
        />
        <Input
          placeholder="Find..."
          type="text"
          onFocus={() => setIsFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-gray-100"
        />
        <div
          className={cn(
            "absolute bg-white w-full rounded-md top-15 z-15 py-2 px-3 opacity-0 shadow-md transition-all duration-200",
            isFocused && "opacity-100 top-12"
          )}
        >
          {products.length === 0 ? (
            <p className="text-sm text-gray-400">No products found</p>
          ) : (
            <div className="flex flex-col gap-2">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  onClick={onClickItem}
                  className="flex items-center p-1 rounded-xl gap-3 hover:bg-primary/10"
                >
                  <Image
                    src={`${product.imgUrl}`}
                    alt={product.title}
                    width={50}
                    height={50}
                  />
                  <span className="font-medium">{product.title}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
