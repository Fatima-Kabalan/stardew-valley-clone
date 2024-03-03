import { useEffect, useState } from "react";
import FlagText from "../../components/atoms/FlagText";
import IconButton from "../../components/atoms/IconButton";
import NintendoLogo from "../../components/atoms/NintendoLogo";
import SearchBar from "../../components/atoms/SearchBar";
import Ad from "../../components/sections/Ad";
import TabsList from "../../components/sections/TabsList";
import Car from "../../components/svg/Car";
import StarCircle2 from "../../components/svg/StarCircle2";
import Download from "../../components/svg/Download";
import { navItems } from "../../data/navItems";

export default function LargeScreenNavbar() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled
      if (window.scrollY > 0) {
        setIsScrolling(true); // If scrolled, set isScrolling to true
      } else {
        setIsScrolling(false); // If not scrolled, set isScrolling to false
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {isScrolling ? (
        <div className="bg-gray_F8 h-20 items-center fixed top-0 w-full z-10 xl:block hidden md:hidden lg:hidden">
          {/* New Navbar Content */}
          <div className="flex justify-between items-center mx-auto px-4 py-2 ">
            <h1 className="text-2xl font-bold  text-dark_gray">
              Stardew Valley
            </h1>

            <button className="flex gap-2 items-center text-white bg-red rounded-full p-2">
              <div className="w-6 h-6">
                <Download />
              </div>
              <span className="text-base "> Download Now </span>
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white fixed top-0 w-full z-10">
          {/* Old Navbar Content */}

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
            <TabsList />
            {/*  Third row */}
            <div className=" flex justify-center gap-6 bg-gray_F8 ">
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
        </div>
      )}
    </>
  );
}
