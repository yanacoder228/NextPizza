import { ReactNode } from "react";
import { Checkbox } from "../ui/index";

export interface FilterCheckboxProps {
  text: string;
  value: string;
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  onCheckedChange?: (isChecked: boolean) => void;
  isChecked: boolean;
}

export const FilterCheckbox = ({
  text,
  value,
  startAdornment,
  endAdornment,
  onCheckedChange,
  isChecked,
}: FilterCheckboxProps) => {
  return (
    <div className="flex items-center gap-2">
      {startAdornment}
      <Checkbox
        checked={isChecked}
        value={value}
        onCheckedChange={onCheckedChange}
        id={`checkbox-${String(value)}`}
        className="cursor-pointer w-6 h-6 rounded-lg"
      />
      <label htmlFor={`checkbox-${String(value)}`} className="cursor-pointer">
        {text}
      </label>
      {endAdornment}
    </div>
  );
};
