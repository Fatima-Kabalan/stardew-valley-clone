
import Calender from "../components/svg/Calender";
import Game from "../components/svg/Game";

export const products = [
    { text: "Release Date",  icon: Calender(), description: "October 5, 2017"},
    { text: "No. of players",  icon: Game(), description: "October 5, 2017" , links:[
        { title:"Single System (1)", to:"#link1"},
        { title:"Local wireless (1)", to:"#link2"},
        { title:"Online (1-4)", to:"#link3"},
    ]  },
    { text: "Release Date",  icon: Calender(), description: "October 5, 2017"},
    { text: "Release Date",  icon: Calender(), description: "October 5, 2017"},
  
]