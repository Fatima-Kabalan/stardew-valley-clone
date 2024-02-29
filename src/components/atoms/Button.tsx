interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export default function Button({ text, onClick }: ButtonProps) {
  return (
    <button
      className="bg-red hover:bg-rose-700 text-white  text-xl font-semibold py-4 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
