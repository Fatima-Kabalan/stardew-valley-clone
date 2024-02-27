import { gamesMenuCards as cards } from "../../data/gamesMenuCards";
import MenuCard from "../atoms/MenuCard";

export default function MenuCardsList() {
  return (
    <div className="flex fex-wrap gap-2 justify-center p-4">
      {cards.map((card, i) => (
        <MenuCard key={i} text={card.text} icon={card.icon} to={card.to} />
      ))}
    </div>
  );
}
