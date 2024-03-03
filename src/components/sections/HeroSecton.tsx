import Button from "../atoms/Button";
import ESRBCard from "../atoms/ESRBCard";
import NintendoSwitch from "../atoms/NintendoSwitch";
import HeartIcon from "../icons/HeartIcon";
import Download from "../svg/Download";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  return (
    <div className="bg-light_blue p-6 w-full ">
      <div className="flex flex-col gap-6 sm:flex-row bg-white rounded-xl p-12 shadow-lg z-1">
        <div className="sm:w-1/2 flex  flex-col gap-6">
          <ImageCarousel />
          <ESRBCard shadow={false} />
        </div>

        <div className="flex flex-col gap-8 sm:w-1/2">
          <NintendoSwitch />
          <h1 className="text-3xl text-dark_gray font-bold">Stardew Valley</h1>
          <div className="flex justify-between items-center">
            <span className="text-3xl text-dark_gray font-bold">$ 14.99 </span>
            <HeartIcon />
          </div>
          <div className="flex items-center gap-2">
            <img
              src={require("../../assets/images/gold-coin.avif")}
              className="w-8 h-8"
            />
            <span>Eligible for up to 75 Gold Points</span>
          </div>

          <Button text={"Direct Download"} icon={<Download />} />
        </div>
      </div>
    </div>
  );
}
