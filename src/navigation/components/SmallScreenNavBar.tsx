import NintendoLogo from "../../components/atoms/NintendoLogo";
import FlagText from "../../components/atoms/FlagText";
import MyNintendoStoreLogo from "../../components/svg/MyNintendoStoreLogo";
import StarCircle from "../../components/svg/StarCircle";
import Ad from "../../components/sections/Ad";

export default function SmallScreenNavbar() {
  return (
    <div className=" xl:hidden  block">
      <div className="bg-red flex justify-between p-4">
        <div className="w-20">
          <NintendoLogo />
        </div>

        <div className="flex items-center gap-4">
          <div className="w-32 h-auto text-white">
            <MyNintendoStoreLogo />
          </div>
          <FlagText withBorder={true} />
        </div>
      </div>
      <div className="bg-light_black">
        <Ad
          icon={<StarCircle />}
          title={"Free shipping"}
          description={"on orders $50 or more."}
          link={"Restrictions apply"}
          type="Ad1"
        />
      </div>
    </div>
  );
}
