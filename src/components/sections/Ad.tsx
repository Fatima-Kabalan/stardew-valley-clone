import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface AdProps {
  type: string;
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
}

export default function Ad({ icon, title, description, link, type }: AdProps) {
  return type === "Ad1" ? (
    <div className="flex flex-col md:flex-row items-center justify-center gap-2 h-auto p-2">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 text-red">{icon}</div>

        <h1 className="text-lighter_gray text-xl">
          <span className=" font-bold text-xl">{title}</span> {description}
        </h1>
      </div>
      <Link
        to="#link"
        className="underline text-xl text-lighter_gray text-center mt-2 md:mt-0"
      >
        {link}
      </Link>
    </div>
  ) : (
    <div className="flex flex-col md:flex-row items-center gap-2 p-2">
      <div className="w-6 h-6 text-red">{icon}</div>
      <div className="flex flex-col md:flex-row items-center gap-2 text-lighter_gray text-xl">
        <h1>{title}</h1>
        <Link to={"#link"}>
          <span className=" font-bold text-xl underline">{link}</span>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}
