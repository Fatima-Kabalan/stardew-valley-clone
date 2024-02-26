import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import SearchMenu from "../sections/SearchMenu";
import { mockMenuItems } from "../../data/mockMenuItems";
import Dropdown from "./Dropdown";
import { options } from "../../data/options";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!menuOpen) return; // Prevent input change if menu is closed
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = () => {
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative w-96 ">
      <div
        className={`flex   border-b border-dark_gray cursor-pointer hover:border-b-red hover:text-red ${
          menuOpen ? "border-b-red" : ""
        }`}
        onClick={handleSearchClick}
      >
        <BiSearch size={30} className={menuOpen ? "text-red" : ""} />
        <input
          type="text"
          placeholder={menuOpen ? "Search Games, Hardware, etc..." : "Search"}
          value={searchTerm}
          onChange={handleInputChange}
          readOnly={!menuOpen}
          className="text-lg outline-none border-none cursor-pointer w-full hover:placeholder-red"
          onClick={handleSearchClick}
        />
      </div>
      {menuOpen && (
        <SearchMenu onClose={handleMenuClose} menuItems={mockMenuItems} />
      )}
      <Dropdown options={options} onSelect={() => console.log("selected")} />
    </div>
  );
}
