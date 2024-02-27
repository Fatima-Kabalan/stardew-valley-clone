import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IconButtonProps {
  icon: ReactNode;
  name: string;
  to: string;
}

export default function IconButton({ icon, name, to }: IconButtonProps) {
  return (
    <Link to={to}>
      <div className="flex items-center gap-2 hover:text-red cursor-pointer">
        <span className="w-6">{icon}</span>
        <span className="text-xl text-dark_gray font-medium hover:text-red">
          {name}
        </span>
      </div>
    </Link>
  );
}
