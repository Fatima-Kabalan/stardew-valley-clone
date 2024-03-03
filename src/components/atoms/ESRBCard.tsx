import { Link } from "react-router-dom";

export default function ESRBCard({ shadow }: { shadow: boolean }) {
  return (
    <>
      <Link to={"#link"}>
        <div
          className={`flex items-center rounded-xl  w-full md:max-w-sm  bg-white cursor-pointer ${
            shadow ? "shadow-lg p-4" : ""
          }`}
        >
          <div className="w-12 h-12">
            <img src={require("../../assets/images/png/E-logo.png")} />
          </div>
          <div className="flex flex-col justify-center  text-gray-500 p-4">
            <p className="w-full md:w-auto border-b border-black md:border-none">
              Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
              Gambling, Mild Language, Mild Blood
            </p>
            <span>Users Interact</span>
          </div>
        </div>
      </Link>
    </>
  );
}
