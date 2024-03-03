import { products } from "../../data/products";
import DescriptionCard from "../atoms/DescriptionCard";
import Calender from "../svg/Calender";

export default function ProductDetails() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-1 p-2">
        {products.map((product, index) => (
          <DescriptionCard
            key={index}
            text={product.text}
            icon={product.icon}
            description={product.description}
            links={product.links}
          />
        ))}
      </div>
    </div>
  );
}
