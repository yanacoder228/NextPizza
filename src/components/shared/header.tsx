import { cn } from "@/lib/utils";
import { Container } from "./container";
import Image from "next/image";
import Ui from "../ui/index";
import { User, Users } from "lucide-react";

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
          <Ui.Button variant="outline">
            <Users size={16} />
            Log In
          </Ui.Button>
        </div>
      </Container>
    </header>
  );
};
