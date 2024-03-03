import MenuCard, { Card } from "../atoms/MenuCard";

interface MenuCardsListProps {
  cards: Card[];
}

export default function MenuCardsList({ cards }: MenuCardsListProps) {
  return (
    <div className="flex fex-wrap gap-2 justify-center p-4 ">
      {cards.map((card, i) => (
        <MenuCard key={i} card={card} />
      ))}
    </div>
  );
}
