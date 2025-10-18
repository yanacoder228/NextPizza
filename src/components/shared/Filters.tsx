import { Title } from "./index";
import { FilterCheckbox } from "./index";

interface FiltersProps {
  className?: string;
}

export const Filters = ({ className }: FiltersProps) => {
  return (
    <div className={className}>
      <Title size="sm" text="Filters" className="font-bold" />

      <div className="flex flex-col gap-4">
        <FilterCheckbox
          text="Can be customized"
          value="customized"
          isChecked={true}
        />
        <FilterCheckbox text="New arrivals" value="new" isChecked={false} />
      </div>
    </div>
  );
};
