import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import MultiSelect from "react-multi-select-component";
import React from "react";
import Image from "next/image";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// MultiSelect Setup
const MultiSelectComponent = React.forwardRef(({ options, ...rest }, ref) => {
  return (
    <>
      <MultiSelect options={options} ref={ref} {...rest} />
    </>
  );
});

// Helper component to handle image hover effect
const GrayToColorImage = ({ img, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={img}
        layout="fill"
        objectFit="cover"
        className="filter grayscale hover:grayscale-0 transition duration-300"
        alt="icon"
      />
    </div>
  );
};

export { MultiSelectComponent, GrayToColorImage };
