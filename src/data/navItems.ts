import Cart from "../components/icons/NavIcons/Cart";
import FilledHeart from "../components/icons/NavIcons/FilledHeart";
import Question from "../components/icons/NavIcons/Question";
import User from "../components/icons/NavIcons/User";

export const navItems = [
    { icon: Question(), name: "Support", to: "#Support" },
    { icon: FilledHeart(), name: "Wish List", to: "#Wish List" },
    { icon: Cart(), name: "Cart", to: "#Cart" },
    { icon: User(), name: "Log in/Sign up", to: "#Log in/Sign up" },
  ];