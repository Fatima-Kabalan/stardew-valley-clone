import { ReactNode } from "react";

interface TextIconCard {
  text: string;
  icon: ReactNode;
}

export default function TestIconCard({ icon, text }: TextIconCard) {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="bg-dark_gray flex items-center rounded-xl p-4 lg:w-32 lg:h-24">
        <div className="w-28 h-20 lg:w-32 lg:h-24">{icon}</div>
      </div>
      <span className="font-bold text-dark_gray text-xl md:text-2xl">
        {text}
      </span>
    </div>
  );
}
