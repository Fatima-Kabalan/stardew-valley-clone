import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../../data/imagesCarousel";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import Dialog from "../atoms/Dialog";
import DialogContent from "./DialogContent";

export default function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleToggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };
  const [isHovered, setIsHovered] = useState(false);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
    setIsOverlayVisible(true);
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
      className="flex flex-col max-w-3xl mx-auto relative rounded-xl gap-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Carousel
        selectedItem={activeIndex}
        onClickItem={handleImageClick}
        showThumbs={true}
        renderArrowPrev={renderCustomPrevButton}
        renderArrowNext={renderCustomNextButton}
        showStatus={false}
        showIndicators={false}
        autoPlay={false}
      >
        {images.map((image, index) => (
          <div key={index} className="rounded-xl cursor-zoom-in ">
            <img
              src={require(`../../assets/images/${image.imageUrl}`)}
              alt={`Image ${index + 1}`}
              className="rounded-xl"
            />
          </div>
        ))}
      </Carousel>
      <Dialog
        showOverlay={isOverlayVisible}
        onClose={handleToggleOverlay}
        children={
          <DialogContent
            activeIndex={activeIndex}
            onClose={handleToggleOverlay}
            handleThumbnailClick={handleThumbnailClick}
          />
        }
      />
    </div>
  );
}
