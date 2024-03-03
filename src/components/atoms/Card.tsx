import ESRBCard from "./ESRBCard";

export default function Card() {
  return (
    <div className="bg-gray_F8 flex  flex-col items-center justify-center p-8 gap-2  rounded-xl lg:w-1/2">
      <h1 className="font-bold text-xl text-dark_gray">ESRB Rating</h1>
      <ESRBCard shadow={true} />
    </div>
  );
}
