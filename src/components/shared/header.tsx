import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/index";
import { ArrowRight, ShoppingCart, Users } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("border-b border-border", className)}>
      <Container className="flex justify-between items-center py-5">
        {/*Left side */}
        <div>
          <Image src="/logo.png" alt="logo" width={32} height={32} />
        </div>
        {/*Right side */}
        <div className="flex gap-3 items-center">
          <Button variant="outline">
            <Users size={16} />
            Log In
          </Button>
          <div>
            <Button className="group relative">
              <b>22 &euro;</b>
              <span className="h-full w-[1px] bg-white/30"></span>
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart size={16} strokeWidth={2} />
                <b>3</b>
              </div>
              <ArrowRight
                size={20}
                className="absolute right-5 opacity-0 transform -translate-x-2 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
