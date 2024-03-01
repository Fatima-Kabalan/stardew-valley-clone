import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import MovingToValley from "../../../components/sections/MovingToValley";
import HeroSection from "../../../components/sections/HeroSecton";
import MoreSection from "../../../components/sections/MoreSection";
import SocialMedia from "../../../components/sections/SocialMedia";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <div>
        <HeroSection />
        <MovingToValley />
        <MoreSection />
        <SocialMedia />
      </div>
      <Footer />
    </>
  );
}
