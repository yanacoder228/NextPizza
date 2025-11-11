"use client";

import { Search } from "lucide-react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { useState, useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => setIsFocused(false));
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
          className="pl-10 bg-gray-100"
        />
        <div
          className={cn(
            "absolute bg-white w-full rounded-md top-15 z-15 py-2 px-3 opacity-0 shadow-md transition-all duration-200",
            isFocused && "opacity-100 top-12"
          )}
        >
          fejierjip
        </div>
      </div>
    </>
  );
};
