"use client";

import { Search } from "lucide-react";
import { Input } from "../ui";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface SearchBarProps {
  className?: string;
}

export const SearchBar = ({ className }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      {isFocused && (
        <div className="fixed top-0 left-0 right-0  bottom-0 bg-black/30 z-15" />
      )}
      <div className={cn(`relative z-15`, className)}>
        <Search
          width={20}
          className="absolute top-1/2 left-3 translate-y-[-50%] text-gray-400"
        />
        <Input
          placeholder="Find..."
          type="text"
          onFocus={() => setIsFocused(true)}
          className="pl-10 bg-gray-100 focus-visible:ring-0 focus-visible:border-transparent"
        />
      </div>
    </>
  );
};
