import { ReactNode, useState } from "react";

import IconButton from "./IconButton";
import UpArrow from "../icons/UpArrow";
import CloseIcon from "../icons/CloseIcon";
import DownArrow from "../icons/DownArrow";
import MenuCardsList from "../sections/MenuCardsList";

interface DropdownCardsProps {
  icon: ReactNode;
  name: string;
  onClose: () => void;
  to: string;
}

export default function DropdownCards({
  icon,
  name,
  to,
  onClose,
}: DropdownCardsProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex items-center gap-2 hover:text-red">
        <IconButton icon={icon} name={name} to={to} />
        {isOpen ? (
          <div className="text-center w-8">
            <UpArrow />
          </div>
        ) : (
          <div className="text-center w-8">
            <DownArrow />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed top-10 left-0 right-0 bottom-0  rounded-md   bg-black opacity-80">
          <button
            className="absolute top-2 right-2  w-10 text-gray-400 hover:text-dark_gray"
            onClick={onClose}
          >
            <CloseIcon />
          </button>
          <div className=" bg-white  h-36 border border-light_gray">
            <MenuCardsList />
          </div>
        </div>
      )}
    </div>
  );
}
