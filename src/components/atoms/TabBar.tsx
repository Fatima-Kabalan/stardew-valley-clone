import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMenu } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function TabBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeartClicked, setIsHeartClicked] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigateToHeartPage = () => {
    navigate("/heart");
  };

  const toggleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 py-3 px-4 rounded-full w-96 lg:hidden mx-auto z-50 m-4">
      <div className="flex justify-between items-center">
        <button className="focus:outline-none" onClick={toggleMenu}>
          <IoMenu size={24} />
        </button>

        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
          <div className="rounded-full bg-red text-white p-3">
            <BiSearch size={32} />
          </div>
        </div>
        <button
          className="focus:outline-none text-gray-500"
          onClick={navigateToHeartPage}
        >
          <FiHeart
            size={24}
            fill="gray-500"
            color={isHeartClicked ? "text-red" : "gray"}
            onClick={toggleHeartClick}
          />
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute bottom-full left-0 right-0 bg-white shadow-md py-2 px-4 border border-gray-200 rounded-t-lg">
          Hi
        </div>
      )}
    </div>
  );
}
