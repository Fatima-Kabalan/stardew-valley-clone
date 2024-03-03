import { Carousel } from "react-responsive-carousel";
import LeftArrow from "../icons/LeftArrow";
import RightArrow from "../icons/RightArrow";
import { images } from "../../data/imagesCarousel";
import CloseIcon from "../icons/CloseIcon";

interface DialogContentProps {
  activeIndex: number;
  onClose: () => void;
  handleThumbnailClick: (index: number) => void;
}

export default function DialogContent({
  activeIndex,
  onClose,
  handleThumbnailClick,
}: DialogContentProps) {
  const renderCustomPrevButton = (onClickHandler: () => void) => (
    <button
      className="w-12 h-12 left-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300"
      onClick={onClickHandler}
    >
      <LeftArrow />
    </button>
  );

  const renderCustomNextButton = (onClickHandler: () => void) => (
    <button
      className="w-12 h-12 right-0 top-1/2 transform -translate-y-1/2 absolute z-10 bg-gray-900 bg-opacity-50 text-white rounded-full p-2 transition-opacity duration-300"
      onClick={onClickHandler}
    >
      <RightArrow />
    </button>
  );

  return (
    <div className="flex flex-col gap-4 justify-center items-center relative ">
      <Carousel
        selectedItem={activeIndex}
        showThumbs={true}
        showArrows={false}
        renderArrowPrev={renderCustomPrevButton}
        renderArrowNext={renderCustomNextButton}
        showStatus={false}
        showIndicators={true}
        width={"400px"}
        autoPlay={false}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-xl cursor-pointer overflow-hidden relative w-96 flex justify-center"
          >
            <img
              src={require(`../../assets/images/${image.imageUrl}`)}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-xl"
            />
            <button
              className="absolute top-0 right-0 m-2 text-xl font-bold text-gray-600 p-4 z-20"
              onClick={(e) => {
                e.stopPropagation(); // Prevents carousel click event
                onClose();
              }}
            >
              <div className="w-12 h-12 text-white hover:text-black">
                <CloseIcon />
              </div>
            </button>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
