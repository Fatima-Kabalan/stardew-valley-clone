import { cards } from "../../data/cards";
import ProductCard from "../atoms/ProductCard";

export default function CardsList() {
  return (
    <div className="flex gap-2">
      {cards.map((card, i) => (
        <ProductCard
          imageUrl={card.imageUrl}
          title={card.title}
          date={card.date}
          price={card.price}
          hour={card.hour}
          salesPercentage={card.salesPercentage}
          oldPrice={card.oldPrice}
        />
      ))}
    </div>
  );
}
