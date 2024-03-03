interface CarouselImageProps {
  imageUrl: string;
  index: number;
  onClick: (index: number) => void;
}
export default function CarouselImage({
  imageUrl,
  index,
  onClick,
}: CarouselImageProps) {
  return (
    <div
      key={index}
      className="rounded-xl cursor-zoom-in"
      onClick={() => onClick(index)}
    >
      <img
        src={require(`../../assets/images/${imageUrl}`)}
        alt={`Image ${index + 1}`}
        className="rounded-xl"
      />
    </div>
  );
}
