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
    const hand = document.createElement("img");
    hand.src = "./media/images/hands/hand.svg" ;
    
    const goToMenu = document.createElement("div");
    goToMenu.classList.add("go-to-menu", i === 0 ? "menu-left" : "menu-right");
    goToMenu.addEventListener("click", menuSwap);

    sign.appendChild(para);
    sign.appendChild(hand);
    goToMenu.appendChild(sign);
    goToMenu.appendChild(post);
    navBar.appendChild(goToMenu);
  };

  function menuSwap(){
    this.className.includes("menu-left") ? menuIdx-- : menuIdx++ ;
    //cycle left fix
    if(menuIdx < 0) menuIdx = menuList.length - 1;
    const i = menuIdx % menuList.length;
    
    content.replaceChildren(menuList[i]);
    
    const navParas = document.querySelectorAll(".go-to-menu p");
    navParas[0].innerText = i == 0 ? "About" : i == 1 ? "Menu" : "Toys";
    navParas[1].innerText = i == 0 ? "Toys" : i == 1 ? "About" : "Menu";
  };

  return navBar;
};

function rings(){
  const tunnel = document.createElement("div");
  tunnel.id = "tunnel";

  for(let i = 0; i < 10; i++){
    const ring = document.createElement("div");
    ring.classList.add("ring");
  
    tunnel.appendChild(ring)
  };

  return tunnel;
}

function starfield(){
  const starfield = document.createElement("div");
  starfield.id = "starfield";

  const starCount = 90;
  const animMax = 20;
  const animMin = 5;

  for(let i = 0; i < starCount; i++){
    const angle = document.createElement("div");
    angle.classList.add("star-angle");
    angle.style.rotate = `${i*(360/starCount)}deg`;

    const star = document.createElement("div");
    const rand = Math.random() * (animMax - animMin ) + animMin;
    star.classList.add("star");
    console.log(rand);
    star.style.animationDuration = `${rand}s`;

    angle.appendChild(star);
    starfield.appendChild(angle);
  }

  return starfield;
}


content.appendChild(menuList[0]);
body.appendChild(starfield());
body.appendChild(rings());
body.appendChild(navBar());