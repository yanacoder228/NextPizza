import { Input } from "../ui/index";
import { Title } from "./index";
import { FilterCheckbox } from "./index";
import { RangeSlider } from "./range-slider";

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={className}>
      <Title size="sm" text="Filters" className="font-bold" />

      <div className="flex flex-col gap-4 py-7">
        <FilterCheckbox
          text="Can be customized"
          value="customized"
          isChecked={true}
        />
        <FilterCheckbox text="New arrivals" value="new" isChecked={false} />
      </div>

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
    </div>
  );
};
