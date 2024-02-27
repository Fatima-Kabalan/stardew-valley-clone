import { ReactNode } from "react";
import Plus from "../components/svg/Plus";

interface MenuCardData {
    text: string;
    to: string;
    icon: ReactNode;
  }
  
export const gamesMenuCards: MenuCardData[] = [
    {
      text: "Nintendo Switch games",
      to: "#Nintendo Switch games",
      icon: Plus(),
    },
    {
      text: "Nintendo Switch games",
      to: "#Nintendo Switch games",
      icon: Plus(),
    },
    {
      text: "Nintendo Switch games",
      to: "#Nintendo Switch games",
      icon: Plus(),
    },
   
  ];