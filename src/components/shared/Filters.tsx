import type { Ingredient } from "@/types/ingredient";
import { Input } from "../ui/index";
import { FiltersCheckboxGroup, Title } from "./index";
import { FilterCheckbox } from "./index";
import { RangeSlider } from "./range-slider";

interface FiltersProps {
  className?: string;
}

const ingredients: Ingredient[] = [
  { id: 1, title: "Cheese Sauce" },
  { id: 2, title: "Mozzarella" },
  { id: 3, title: "Garlic" },
  { id: 4, title: "Pickles" },
  { id: 5, title: "Red Onion" },
  { id: 6, title: "Tomatoes" },
  { id: 7, title: "Basil" },
  { id: 8, title: "Chili Pepper" },
];

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={className}>
      <Title size="sm" text="Filters" className="font-bold" />

      {/*Top Checkboxes*/}
      <div className="flex flex-col gap-4 py-7">
        <FilterCheckbox
          text="Can be customized"
          value="customized"
          isChecked={true}
        />
        <FilterCheckbox text="New arrivals" value="new" isChecked={false} />
      </div>

      {/*Prices filter*/}
      <div className="py-7 border-y border-y-neutral-100">
        <Title size="xs" text="Prices from and to" className="font-bold mb-4" />
        <div className="flex gap-4 mb-4">
          <Input
            placeholder="0"
            type="number"
            min={0}
            max={1000}
            defaultValue={0}
          />
          <Input placeholder="1000" type="number" min={5} max={1000} />
        </div>

        <RangeSlider min={0} max={1000} step={5} value={[0, 1000]} />
      </div>

      <FiltersCheckboxGroup
        title={"Ingredients"}
        className="py-7"
        items={ingredients}
      />
    </div>
  );
};
