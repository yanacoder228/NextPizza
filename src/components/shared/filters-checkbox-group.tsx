import type { Ingredient } from "@/types/ingredient";
import { Input } from "../ui/index";
import { FilterCheckbox, Title } from "./index";

interface FiltersCheckboxGroupProps {
  title: string;
  className?: string;
  items: Ingredient[];
  limit?: number;
  searchInputPlaceholder?: string;
}

export const FiltersCheckboxGroup = ({
  className,
  title,
  limit,
  searchInputPlaceholder = "Search",
  items,
}: FiltersCheckboxGroupProps) => {
  return (
    <>
      <div className={className}>
        <Title size="xs" className="font-bold mb-4" text={title} />
        <div className="mb-4">
          <Input placeholder={searchInputPlaceholder} />
        </div>
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <FilterCheckbox
              key={item.id}
              text={item.title}
              value={item.title}
              isChecked={false}
            />
          ))}
        </div>
      </div>
    </>
  );
};
