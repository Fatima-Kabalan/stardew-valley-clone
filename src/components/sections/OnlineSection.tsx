import { Link } from "react-router-dom";
import OnlineImage from "../svg/OnlineImage";
import Button from "../atoms/Button";

export default function OnlineSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1  bg-gray_F8  md:m-8 rounded-xl">
      <div className="flex flex-col items-center md:items-start gap-4 px-6 py-6 lg:pb-0">
        <div className="w-full md:w-52">
          <OnlineImage />
        </div>
        <h1 className="text-dark_gray font-bold text-base  text-center md:text-2xl md:text-start">
          Play online, access classic NES™ and Super NES™ games, and more with a
          Nintendo Switch Online membership.
        </h1>
        <div className="flex flex-col md:flex-row gap-4 text-center md:text-start">
          <span className="text-dark_gray font-bold text-base md:text-xl">
            This game supports:
          </span>
          <Link
            to={"#online play"}
            className="text-red text-base md:text-xl underline hover:text-rose-800 font-bold"
          >
            Online Play
          </Link>
          <Link
            to={"#save data cloud"}
            className="text-red text-base md:text-xl underline hover:text-rose-800 font-bold"
          >
            Save Data Cloud
          </Link>
        </div>
        <div>
          <Button text={"Learn More"} icon={false} />
        </div>
      </div>

      <div className="hidden md:flex items-center justify-center">
        <img src={require("../../assets/images/hands-controller.avif")} />
      </div>
    </div>
  );
}
