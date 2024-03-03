import "animate.css";

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export default function Button({ text, onClick, icon }: ButtonProps) {
  return (
    <button
      className="bg-red hover:bg-rose-700 text-white  text-xl font-semibold py-4 px-6 rounded-lg shadow-lg  button-hover-animation"
      onClick={onClick}
    >
      <div className="flex items-center justify-center gap-6">
        {icon ? <div className="w-8 h-8 text-white">{icon}</div> : ""}

        <span> {text}</span>
      </div>
    </button>
  );
}
