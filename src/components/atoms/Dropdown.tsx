import { useState } from "react";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

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
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-xl p-2  bg-white cursor-pointer  whitespace-nowrap"
      >
        <span className="text-dark_gray hover:text-red font-medium">
          {placeholder}
        </span>
        {isOpen ? (
          <IoChevronUp className="ml-2 text-dark_gray hover:text-red" />
        ) : (
          <IoChevronDown className="ml-2 text-dark_gray hover:text-red" />
        )}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 mt-1 bg-white w-full border border-gray-200 shadow-md rounded-md">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
              }}
              className="block w-full py-2 px-4 text-left hover:bg-gray-100 focus:outline-none"
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
