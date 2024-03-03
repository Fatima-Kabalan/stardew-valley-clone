import NintendoLogo from "../atoms/NintendoLogo";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";

export default function SocialMedia() {
  return (
    <div className="bg-red p-8 flex justify-between h-28">
      <div className="w-48">
        <NintendoLogo />
      </div>

      <div className="flex gap-12 text-white cursor-pointer">
        <a href="#facebook">
          <div className="w-10">
            <Facebook />
          </div>
        </a>
        <a href="#facebook">
          <div className="w-10">
            <Instagram />
          </div>
        </a>
      </div>
    </div>
  );
}
