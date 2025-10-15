import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export const Container = ({ className, children }: ContainerProps) => {
  return (
    <div className={cn("mx-auto max-w-[80rem] px-4", className)}>
      {children}
    </div>
  );
};
