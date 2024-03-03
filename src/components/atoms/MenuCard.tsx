import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface Card {
  icon: ReactNode;
  text: string;
  to: string;
}

interface MenuCardProps {
  card: Card;
}

export default function MenuCard({ card }: MenuCardProps) {
  return (
    <Link to={card.to}>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center border border-solid border-gray-300 rounded-2xl gap-2 w-36 p-2 transition duration-300 ease-in-out hover:bg-red hover:text-white">
          <span className="flex justify-center w-16">{card.icon}</span>
        </div>
        <h1 className="text-center text-sm text-gray-500 hover:text-red  md:text-lg">
          {card.text}
        </h1>
      </div>
    </Link>
  );
}
