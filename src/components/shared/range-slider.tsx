"use client";

import { forwardRef, useEffect, useState, Fragment } from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

type RangeSliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  formatLabel?: (value: number) => string;
  value?: number[];
  onValueChange?: (values: number[]) => void;
};

export const RangeSlider = forwardRef<HTMLDivElement, RangeSliderProps>(
  (
    { className, min, max, step, formatLabel, value, onValueChange, ...props },
    ref
  ) => {
    const [localValues, setLocalValues] = useState<number[]>(
      value ?? [min, max]
    );

    // Sync local state if external value changes
    useEffect(() => {
      if (value) setLocalValues(value);
    }, [value, min, max]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      onValueChange?.(newValues);
    };

    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative mb-6 flex w-full select-none touch-none items-center",
          className
        )}
        {...props}
      >
        <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>

        {localValues.map((value, i) => (
          <Fragment key={i}>
            <div
              className="absolute text-center"
              style={{
                left: `calc(${((value - min) / (max - min)) * 100}% - 8px)`,
                top: "10px",
              }}
            >
              <span className="text-sm">
                {formatLabel ? formatLabel(value) : value}
              </span>
            </div>
            <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border border-primary/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  }
);

RangeSlider.displayName = "RangeSlider";
