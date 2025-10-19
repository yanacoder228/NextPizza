import { Input } from "../ui/index";
import { Title } from "./index";

interface FiltersCheckboxGroupProps {
  title: string;
  className?: string;
  limit?: number;
  searchInputPlaceholder?: string;
}

export const FiltersCheckboxGroup = ({
  className,
  title,
  limit,
  searchInputPlaceholder = "Search",
}: FiltersCheckboxGroupProps) => {
  return (
    <>
      <div className={className}>
        <Title size="xs" className="font-bold mb-4" text={title} />
        <div className="mb-4">
          <Input placeholder={searchInputPlaceholder} />
        </div>
      </div>
    </>
  );
};
