export function about(){
  const about = document.createElement("div");
  about.id = "about";

  const hand = document.createElement("div");
  hand.classList.add("hand");
  const handPartsList = ["hand-palm", "hand-little-finger",
    "hand-middle-finger", "hand-index", "hand-thumb"];
  for(let i = 0; i < 5; i++){
    const handPart = document.createElement("img");
    handPart.classList.add(handPartsList[i]);
    handPart.src = `./media/images/hands/parts/${handPartsList[i]}.svg`;
    handPart.classList.add(handPartsList[i]);

    hand.appendChild(handPart);
  };

  const map = document.createElement("iframe");
  map.id = "map";
  map.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28415464.09250589!2d-44.471831963802494!3d29.612854166871163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xadd28c30ec90d79%3A0x44652457c0696504!2sNorth%20Atlantic%20Ocean!5e0!3m2!1sen!2sar!4v1666637834255!5m2!1sen!2sar";
  map.style.border = 0;
  map.allowFullscreen = true;
  map.loading = "lazy";
  map.referrerpolicy = "no-referrer-when-downgrade";
  
  
  const para1 = document.createElement("p");
  para1.innerText = "Find us in the middle of the ocean!";
  const para2 = document.createElement("p");
  para2.innerText = "Bring your own life jacket!";
  const textDiv = document.createElement("div");
  textDiv.classList.add("find-us");
  textDiv.append(para1);
  textDiv.append(para2);

  about.appendChild(map);
  about.appendChild(hand);
  about.appendChild(textDiv);

  return about;
};