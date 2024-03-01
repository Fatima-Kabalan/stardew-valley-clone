import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../data/imagesCarousel";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Lightbox from "./LightBox";

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setShowLightbox(true);
  };

  const closeLightbox = () => {
    setShowLightbox(false);
  };

  const renderCustomPrevButton = (onClickHandler: () => void) => (
    <button
      className={`w-12 h-12 left-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClickHandler}
    >
      <LeftArrow />
    </button>
  );

  const renderCustomNextButton = (onClickHandler: () => void) => (
    <button
      className={`w-12 h-12 right-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300 ${
        isHovered ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClickHandler}
    >
      <RightArrow />
    </button>
  );

  return (
    <div
      className="flex flex-col max-w-3xl mx-auto relative rounded-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        selectedItem={activeIndex}
        showThumbs={false}
        renderArrowPrev={renderCustomPrevButton}
        renderArrowNext={renderCustomNextButton}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl cursor-zoom-in"
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={require(`../../assets/images/${image.imageUrl}`)}
              alt={`Image ${index + 1}`}
              className="rounded-xl"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex items-start mt-4 w-36 h-20 ">
        {images.map((image, index) => (
          <img
            key={index}
            src={require(`../../assets/images/${image.imageUrl}`)}
            alt={`Thumbnail ${index + 1}`}
            className={`cursor-pointer mx-2 rounded-xl ${
              index === activeIndex ? "border-b-4 border-red" : ""
            }`}
            onClick={() => handleThumbnailClick(index)}
            style={{ opacity: activeIndex === index ? 1 : 0.65 }}
          />
        ))}
      </div>
      {showLightbox && (
        <Lightbox
          images={images.map(
            (image) => `../../assets/images/${image.imageUrl}`
          )}
          activeIndex={activeIndex}
          closeLightbox={closeLightbox}
        />
      )}
    </div>
  );
}
