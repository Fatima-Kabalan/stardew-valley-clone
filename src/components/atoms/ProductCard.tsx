import { useState } from "react";
import Heart from "../svg/Heart";

interface CardProps {
  imageUrl: string;
  title: string;
  date: string;
  price: string;
  hour?: string;
  salesPercentage?: string;
  oldPrice?: string;
}

export default function ProductCard({
  imageUrl,
  title,
  date,
  price,
  hour,
  salesPercentage,
  oldPrice,
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="max-w-sm overflow-hidden border border-gray_DA rounded-3xl cursor-pointer relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ transition: "transform 0.2s ease" }}
    >
      <img
        className="w-full rounded-t-xl"
        src={require(`../../assets/images${imageUrl}`)}
        alt="Sunset in the mountains"
        style={{ transform: isHovered ? "translateY(-12px)" : "translateY(0)" }}
      />
      <div className="flex flex-col gap-10 px-6 py-4">
        <div className="flex flex-col">
          <h1
            className={`text-xl font-bold ${
              isHovered ? "text-red hover:text-red" : "text-dark_gray"
            }`}
          >
            {title}
          </h1>
          <p className="text-base text-lighter_gray">{date}</p>
        </div>
        <div className="flex flex-col gap-2">
          {salesPercentage ? (
            <div className="bg-red text-white text-sm font-bold rounded-full w-32 p-1 text-center">
              <p>Sales ends: {`${hour}hr.`}</p>
            </div>
          ) : (
            ""
          )}
          <div className="flex items-center gap-2">
            <h1 className="text-dark_gray text-xl font-bold">{`$${price}`}</h1>
            {oldPrice ? (
              <p className="text-base text-lighter_gray line-through">{`$${oldPrice}`}</p>
            ) : (
              ""
            )}
          </div>

          <div className="flex justify-between items-center border-l-red border-l-4 p-2 h-8">
            <p className="text-xl text-lighter_gray">Nintendo Switch</p>
            <Heart />
          </div>
        </div>
      </div>
    </div>
  );
}
