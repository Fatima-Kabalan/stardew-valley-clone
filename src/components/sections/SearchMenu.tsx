import CloseIcon from "../icons/CloseIcon";

export interface MenuItem {
  text: string;
  href: string;
}

interface MenuComponentProps {
  onClose: () => void;
  menuItems: MenuItem[];
}

export default function SearchMenu({ onClose, menuItems }: MenuComponentProps) {
  return (
    <div className="fixed top-10 left-0 right-0 bottom-0  z-50 bg-white shadow-md mt-1 rounded-md p-2">
      <button
        className="absolute top-2 right-2 text-gray w-10"
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <div className="p-4">
        <h1 className="block mb-2 text-dark_gray text-xl font-bold">
          Trending topics
        </h1>
        {menuItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="block mb-2 text-xl text-red hover:text-rose-800 font-bold"
          >
            {item.text}
          </a>
        ))}
      </div>
    </div>
  );
}
