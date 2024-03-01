import React, { useState, useEffect } from "react";
import ProductCard from "../atoms/ProductCard";
import RightArrow from "../icons/RightArrow";
import LeftArrow from "../icons/LeftArrow";

type CardCarouselProps = {
  cards: any[]; // An array of cards
  cardsPerPage: number; // Number of cards to display per page
};

const CardCarousel = ({ cards, cardsPerPage }: CardCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hideScrollbar, setHideScrollbar] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setScrollPosition(0); // Reset scroll position on resize
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNextClick = () => {
    setScrollPosition(scrollPosition + 1);
  };

  const handlePrevClick = () => {
    setScrollPosition(scrollPosition - 1);
  };

  const startIndex = scrollPosition * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const visibleCards = cards.slice(startIndex, endIndex);

  return (
    <div
      className="relative overflow-hidden"
      style={{ overflowX: hideScrollbar ? "hidden" : "auto" }}
    >
      <div
        className="flex gap-2 p-4 overflow-x-auto"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {visibleCards.map((card, index) => (
          <div key={index} className={`flex-none w-${100 / cardsPerPage}%`}>
            <ProductCard {...card} />
          </div>
        ))}
      </div>
      {scrollPosition > 0 && (
        <button
          className="absolute inset-y-0 left-0 flex items-center justify-center w-10 bg-gray-500 bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
          onClick={handlePrevClick}
        >
          <LeftArrow />
        </button>
      )}
      {scrollPosition < Math.ceil(cards.length / cardsPerPage) - 1 && (
        <button
          className="absolute inset-y-0 right-0 flex items-center justify-center w-10 bg-gray-500 bg-opacity-50 hover:bg-opacity-75 focus:outline-none"
          onClick={handleNextClick}
        >
          <RightArrow />
        </button>
      )}
    </div>
  );
};

export default CardCarousel;
