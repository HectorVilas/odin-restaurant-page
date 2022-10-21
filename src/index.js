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
    const sign = document.createElement("div");
    sign.classList.add("sign");
    const post = document.createElement("div");
    post.classList.add("post");
    const para = document.createElement("p");
    para.innerText = i === 0 ? "About" : "Toys";
    
    const goToMenu = document.createElement("div");
    goToMenu.classList.add("go-to-menu", i === 0 ? "menu-left" : "menu-right");
    goToMenu.addEventListener("click", menuSwap);

    sign.appendChild(para);
    goToMenu.appendChild(sign);
    goToMenu.appendChild(post);
    navBar.appendChild(goToMenu);
  };

  function menuSwap(){
    this.className.includes("menu-left") ? menuIdx-- : menuIdx++ ;
    const i = Math.abs(menuIdx % menuList.length);
    content.replaceChildren(menuList[i]);
    
    const navParas = document.querySelectorAll(".go-to-menu p");
    navParas[0].innerText = i == 0 ? "About" : i == 1 ? "Menu" : "Toys";
    navParas[1].innerText = i == 0 ? "Toys" : i == 1 ? "About" : "Menu";
  };

  return navBar;
};



content.appendChild(menuList[0]);

body.appendChild(navBar());