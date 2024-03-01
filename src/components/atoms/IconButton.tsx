import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon: ReactNode;
  name: string;
  to: string;
}

export default function IconButton({ icon, name, to }: IconButtonProps) {
  return (
    <Link to={to} className="hover:text-red">
      <div className="flex cursor-pointer hover:text-red">
        <span className="w-6 mr-2 flex justify-center items-center">
          {icon}
        </span>
        <span className="text-xl text-dark_gray font-medium hover:text-red">
          {name}
        </span>
      </div>
    </Link>
  );
}
