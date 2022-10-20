import {menu} from "./menu";
import {toys} from "./toys";
import {about} from "./about";

const menuList = [menu(), toys(), about()];
let menuIdx = 0;

const body = document.querySelector("body");
const content = document.querySelector("#content");

function navBar(){
  const navBar = document.createElement("div");
  navBar.classList.add("nav-bar");

  for(let i = 0; i < 2; i++){
    const goToMenu = document.createElement("div");
    goToMenu.classList.add("go-to-menu", i === 0 ? "menu-left" : "menu-right");
    goToMenu.innerText = i === 0 ? "left" : "right";
    goToMenu.addEventListener("click", menuSwap);
    navBar.appendChild(goToMenu);
  };

  function menuSwap(){
    this.className.includes("menu-left") ? menuIdx-- : menuIdx++ ;
    const i = Math.abs(menuIdx % menuList.length);
    content.replaceChildren(menuList[i]);
  };

  return navBar;
};



content.appendChild(menuList[0]);

body.appendChild(navBar());