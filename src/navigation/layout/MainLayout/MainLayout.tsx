import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import MovingToValley from "../../../components/sections/MovingToValley";
import HeroSection from "../../../components/sections/HeroSecton";
import MoreSection from "../../../components/sections/MoreSection";
import SocialMedia from "../../../components/sections/SocialMedia";
import FooterLinks from "../../../components/sections/FooterLinks";
import OnlineSection from "../../../components/sections/OnlineSection";
import RatingSection from "../../../components/sections/RatingSection";
import ProductDetails from "../../../components/sections/ProductDetails";
import TabBar from "../../../components/atoms/TabBar";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <div className="xl:mt-40 flex flex-col gap-8">
        <HeroSection />
        <MovingToValley />
        <RatingSection />
        <ProductDetails />
        <OnlineSection />
        <MoreSection />
        <div className="text-base text-dark_gray p-4">
          <p>
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software. Nintendo Switch Online membership (sold separately) and
            Nintendo Account required for online play. Not available in all
            countries. Internet access required for online features. Terms
            apply. nintendo.com/switch-online Stardew Valley © ConcernedApe LLC
            2016-2020. All rights reserved.
          </p>
        </div>
        <SocialMedia />
        <FooterLinks />
        <TabBar />
      </div>
      <Footer />
    </>
  );
}
