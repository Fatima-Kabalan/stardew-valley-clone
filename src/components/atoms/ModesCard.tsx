import Handheld from "../icons/Handheld";
import TV from "../icons/TV";
import Tabletop from "../icons/Tabletop";
import TextIconCard from "./TextIconCard";

export default function ModesCard() {
  return (
    <div className="bg-gray_F8 flex flex-col items-center justify-center p-8 gap-4 rounded-xl lg:w-1/2">
      <h1 className="font-bold text-xl text-dark_gray">Supported Play Modes</h1>
      <div className="flex flex-col gap-8 md:flex-row">
        <TextIconCard text={"TV"} icon={<TV />} />
        <TextIconCard text={"Tabletop"} icon={<Tabletop />} />
        <TextIconCard text={"Handheld"} icon={<Handheld />} />
      </div>
    </div>
  );
}
