import { Link } from "react-router-dom";

interface LinkItemProps {
  linkTo: string;
  linkName: string;
}

export default function LinkItem({ linkTo, linkName }: LinkItemProps) {
  return (
    <div>
      <Link to={linkTo} className="hover-rose col-span-1">
        <h1 className="text-xl font-bold text-red hover:border-b-4 hover:border-b-rose-800 inline-block">
          {linkName}
        </h1>
      </Link>
    </div>
  );
}
