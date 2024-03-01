import ScrollCardCarousel from "./CardCarousel";
import { cards } from "../../data/cards";

export default function MoreSection() {
  return (
    <div className="flex flex-col gap-4 p-4 justify-center ">
      <h1 className="text-dark_gray text-2xl font-bold ml-6">More Like This</h1>
      <ScrollCardCarousel cards={cards} cardsPerPage={5} />
    </div>
  );
}
