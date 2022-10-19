import {menu} from "./menu";
// import {test2 as t2} from "./toys";
// import {test3} from "./about";
import "./style.css";

const body = document.querySelector("#content");
const content = document.querySelector("#content");

function navBar(){
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  for(let i = 0; i < 2; i++){
    const goToMenu = document.createElement("div");
    goToMenu.classList.add("go-to-menu", i === 0 ? "menu-left" : "menu-right");
    goToMenu.innerText = i === 0 ? "left" : "right";
    navBar.appendChild(goToMenu);
  };

  return navBar;
};

content.appendChild(menu());

body.appendChild(navBar());