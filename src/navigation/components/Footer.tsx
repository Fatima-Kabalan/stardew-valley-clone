import { Link } from "react-router-dom";
import FlagText from "../../components/atoms/FlagText";

export default function Footer() {
  return (
    <div className="flex flex-col gap-6 xl:flex-row items-center  sticky bottom-0 left-0 right-0 w-full h-65 p-8 bg-charcoal_gray xl:h-28">
      <p className="text-white text-center max-w-96 xl:text-left xl:max-w-3xl xl:mx-auto">
        © Nintendo. Games are property of their respective owners. Nintendo of
        America Inc. Headquarters are in Redmond, Washington, USA
      </p>
      <div className="flex flex-col xl:flex-row gap-6">
        <div className="flex gap-8 items-center text-center text-xs text-white font-bold lg:text-base">
          <Link
            to="#contact"
            className="hover:text-white hover:border-b-2 hover:border-red"
          >
            Contact Us
          </Link>
          <Link
            to="#feedback"
            className="hover:text-white hover:border-b-2 hover:border-red"
          >
            Website Feedback
          </Link>
          <Link
            to="#terms"
            className="hover:text-white hover:border-b-2 hover:border-red"
          >
            Terms of Use
          </Link>
          <Link
            to="#documents"
            className="hover:text-white hover:border-b-2 hover:border-red"
          >
            Documents & Policies
          </Link>
        </div>

        <FlagText withBorder={true} text="English (United States)" />
      </div>
    </div>
  );
}
