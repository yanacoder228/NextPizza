import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";

interface SortPopupProps {
  className?: string;
}

export const SortPopup = ({ className }: SortPopupProps) => {
  return (
    <div
      className={cn(
        "bg-gray-50 inline-flex gap-1 px-4 py-4 items-center rounded-2xl cursor-pointer",
        className
      )}
    >
      <ArrowUpDown className="w-5 h-5" />
      <b>Sort:</b>
      <b className="text-primary">Popular</b>
    </div>
  );
};
