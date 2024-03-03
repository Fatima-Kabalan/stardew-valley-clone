import { ReactNode, useState } from "react";
import DownArrow from "../icons/DownArrow";
import UpArrow from "../icons/UpArrow";
import MenuCardsList from "../sections/MenuCardsList";
import { Card } from "./MenuCard";

interface DropdownNavProps {
  text: string;
  cards: Card[];
  icon: ReactNode;
}

export default function DropdownNav({ text, cards, icon }: DropdownNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button
        onClick={toggleDropdown}
        className={`w-full p-2.5 outline-none appearance-none flex items-center gap-2  bg-white ${
          isOpen ? "text-red" : ""
        }`}
      >
        <div className="flex items-center gap-2 hover-red">
          <span className="w-6 h-6">{icon}</span>
          <span className="text-xl font-semibold">{text}</span>
          {isOpen ? (
            <div className="w-6 h-6">
              <UpArrow />
            </div>
          ) : (
            <div className="w-6 h-6">
              <DownArrow />
            </div>
          )}
        </div>
      </button>
      {isOpen && (
        <div
          className="absolute top-full left-0 w-full bg-white border rounded-md shadow-lg z-50"
          onClick={closeDropdown}
        >
          <MenuCardsList cards={cards} />
        </div>
      )}
    </div>
  );
}
