import "lightbox.js-react/dist/index.css";
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react";

interface LightboxProps {
  images: string[];
  activeIndex: number;
  closeLightbox: () => void;
}

export default function LightBox({
  images,
  activeIndex,
  closeLightbox,
}: LightboxProps) {
  return (
    <SlideshowLightbox
      className="container grid grid-cols-3 gap-2 mx-auto"
      showThumbnails={true}
      startingSlideIndex={activeIndex}
      onClose={closeLightbox}
    >
      {images.map((imageUrl, index) => (
        <img
          key={index}
          className="w-full rounded cursor-pointer"
          src={require("../../assets/images/game2.avif")}
          alt={`Image ${index + 1}`}
        />
      ))}
    </SlideshowLightbox>
  );
}
