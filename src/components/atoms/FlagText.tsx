import { Link } from "react-router-dom";

interface FlagTextProps {
  withBorder: boolean;
  text?: string;
}

export default function FlagText({ withBorder, text }: FlagTextProps) {
  return (
    <div
      className={`flex items-center gap-2 justify-center ${
        withBorder ? "with-border" : ""
      }`}
    >
      <div
        className={`flex items-center border ${
          withBorder ? "border-white" : "border-transparent"
        } rounded w-8 sm:w-10`}
      >
        <img
          src={require("../../assets/images/png/Flag.png")}
          alt="Flag"
          className="w-full h-auto"
        />
      </div>
      {text && (
        <Link to="#language">
          <h1
            className={`text-white text-xs font-bold hover:text-white hover:border-b-2 hover:border-white cursor-pointer md:text-base ${
              withBorder ? "with-border-text" : ""
            }`}
          >
            {text}
          </h1>
        </Link>
      )}
    </div>
  );
}
