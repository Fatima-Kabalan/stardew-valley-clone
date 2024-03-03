import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon: ReactNode;
  name: string;
  to: string;
}

export default function IconButton({ icon, name, to }: IconButtonProps) {
  return (
    <Link to={to} className="hover-red">
      <div className="flex cursor-pointer">
        <span className="w-6 mr-2 flex justify-center items-center">
          {icon}
        </span>
        <span className="text-xl text-dark_gray font-medium">{name}</span>
      </div>
    </Link>
  );
}
