import FlagText from "../../components/atoms/FlagText";
import IconButton from "../../components/atoms/IconButton";
import NintendoLogo from "../../components/atoms/NintendoLogo";
import SearchBar from "../../components/atoms/SearchBar";
import Cart from "../../components/icons/NavIcons/Cart";
import FilledHeart from "../../components/icons/NavIcons/FilledHeart";
import Question from "../../components/icons/NavIcons/Question";
import User from "../../components/icons/NavIcons/User";
import Ad from "../../components/sections/Ad";
import Car from "../../components/svg/Car";
import Game from "../../components/svg/Game";
import StarCircle2 from "../../components/svg/StarCircle2";

export default function LargeScreenNavbar() {
  return (
    <div className="xl:block hidden md:hidden lg:hidden">
      <div className="flex  items-center justify-between pr-8 border-b-2">
        {/*  Left side of Navbar */}
        <div className="flex gap-2">
          <div className="flex items-center justify-center bg-red w-28 h-16 p-2">
            <NintendoLogo />
          </div>
          <div className="flex items-center justify-center">
            <SearchBar />
          </div>
        </div>
        {/*  Right side of Navbar */}
        <div className="flex justify-center gap-10">
          {navItems.map((item, i) => (
            <IconButton
              key={i}
              icon={item.icon}
              name={item.name}
              to={item.to}
            />
          ))}
          <FlagText withBorder={false} />
        </div>
      </div>
      {/* Second row */}

      {/*  Third row */}
      <div className=" flex justify-center gap-6 bg-light_black ">
        <Ad
          icon={<Car />}
          title={"Free shipping"}
          description={"on orders $50 or more."}
          link={"Restrictions apply"}
          type="Ad1"
        />
        <div className="border-l border-gray-400 my-4"></div>
        <Ad
          icon={<StarCircle2 />}
          title={"Earn"}
          description={"on digital games"}
          link={"My Nintendo Points"}
          type="Ad2"
        />
      </div>
    </div>
  );
}

const navItems = [
  { icon: <Question />, name: "Support", to: "#Support" },
  { icon: <FilledHeart />, name: "Wish List", to: "#Wish List" },
  { icon: <Cart />, name: "Cart", to: "#Cart" },
  { icon: <User />, name: "Log in/Sign up", to: "#Log in/Sign up" },
];

const tabs = [
  { name: "Tab 1", icon: <Game />, to: "#link" },
  { name: "Tab 2", icon: <Game />, to: "#link" },
  { name: "Tab 3", icon: <Game />, to: "#link" },
  { name: "Tab 4", icon: <Game />, to: "#link" },
  { name: "Tab 5", icon: <Game />, to: "#link" },
];
