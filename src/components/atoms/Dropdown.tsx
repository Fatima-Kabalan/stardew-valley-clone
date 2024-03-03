import { useState } from "react";
import UpArrow from "../icons/UpArrow";
import DownArrow from "../icons/DownArrow";

interface Option {
  value: string;
  label: string;
}

interface DropdownProps {
  options: Option[];
  selectedOption: string;
  setSelectedOption: Function;
  placeholder: string;
}

export default function Dropdown({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onBlur={() => setIsOpen(false)} // Close dropdown when button loses focus
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 text-xl p-2 bg-white cursor-pointer whitespace-nowrap ${
          isOpen ? "text-red" : "text-dark_gray"
        }`}
      >
        <span className="flex items-center justify-center gap-2 hover-red">
          {placeholder}
          {isOpen ? (
            <UpArrow className="text-center text-dark_gray hover:text-red w-8" />
          ) : (
            <DownArrow className="text-center text-dark_gray hover:text-red w-8" />
          )}
        </span>
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white w-full border border-gray-200 shadow-md rounded-md text-black z-50">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="block w-full py-2 px-4 text-left hover:bg-gray-100"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
