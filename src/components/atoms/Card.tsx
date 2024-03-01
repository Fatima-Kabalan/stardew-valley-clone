import Game from "../svg/Game";

export default function Card({ shadow }: { shadow: boolean }) {
  return (
    <div
      className={`flex items-center p-6 gap-2 rounded-xl  w-fit ${
        shadow ? "shadow-lg " : ""
      }`}
    >
      <div className="w-12 h-12">
        <Game />
      </div>
      <div className="flex flex-col justify-center divide-y-2 divide-dark_gray text-gray-500">
        <p className="w-96">
          Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling,
          Mild Language, Mild Blood
        </p>
        <span>Users Interact</span>
      </div>
    </div>
  );
}
