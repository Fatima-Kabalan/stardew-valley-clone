import Button from "../atoms/Button";
import NintendoSwitch from "../atoms/NintendoSwitch";
import HeartIcon from "../icons/HeartIcon";
import ImageCarousel from "./ImageCarousel";

export default function HeroSection() {
  return (
    <div className="bg-light_blue p-6">
      <div className="flex flex-col gap-6 sm:flex-row bg-white rounded-xl p-12 shadow-lg">
        <div className="sm:w-1/2">
          <ImageCarousel />
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2">
          <NintendoSwitch />
          <h1 className="text-3xl text-dark_gray font-bold">Stardew Valley</h1>
          <div className="flex justify-between items-center">
            <span className="text-3xl text-dark_gray font-bold">$ 14.99 </span>
            <HeartIcon />
          </div>
          <span>Eligible for up to 75 Gold Points</span>
          <Button text={"Direct Download"} />
        </div>
      </div>
    </div>
  );
}
