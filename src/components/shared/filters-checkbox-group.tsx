"use client";

import type { Ingredient } from "@/types/ingredient";
import { Input } from "../ui/index";
import { FilterCheckbox, Title } from "./index";
import { ChangeEvent, useState } from "react";

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
  limit = 6,
  searchInputPlaceholder = "Search",
  items,
}: FiltersCheckboxGroupProps) => {
  const [isShowing, setIsShowing] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const list = isShowing
    ? items.filter((item) =>
        item.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : items.slice(0, limit);

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onClickShow = () => {
    setIsShowing(!isShowing);
  };

  return (
    <>
      <div className={className}>
        <Title size="xs" className="font-bold mb-4" text={title} />

        {isShowing && (
          <div className="mb-4">
            <Input
              placeholder={searchInputPlaceholder}
              onChange={onChangeSearchInput}
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          {list.map((item) => (
            <FilterCheckbox
              key={item.id}
              text={item.title}
              value={item.title}
              isChecked={false}
              //   onCheckedChange={onChange}
            />
          ))}
        </div>

        {items.length > limit && (
          <div>
            <button
              onClick={onClickShow}
              className="text-primary my-2 cursor-pointer"
            >
              {isShowing ? "Hide" : "+ Show all"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};
