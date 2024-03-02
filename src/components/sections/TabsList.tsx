import { gamesMenuCards } from "../../data/gamesMenuCards";
import DropdownNav from "../atoms/DropdownNav";
import Game from "../svg/Game";

export default function TabsList() {
  return (
    <div className="flex items-center justify-center gap-2 relative border-b-2 p-2">
      <DropdownNav text={"Games"} cards={gamesMenuCards} icon={<Game />} />
      <DropdownNav text={"Games"} cards={gamesMenuCards} icon={<Game />} />
      <DropdownNav text={"Games"} cards={gamesMenuCards} icon={<Game />} />
    </div>
  );
}
