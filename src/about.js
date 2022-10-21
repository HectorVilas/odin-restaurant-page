export function about(){
  const about = document.createElement("div");
  about.id = "about";

  const hand = document.createElement("div");
  const handPartsList = ["hand-palm", "hand-little-finger",
    "hand-middle-finger", "hand-index", "hand-thumb"];
  hand.classList.add("hand");
  for(let i = 0; i < 5; i++){
    const handPart = document.createElement("img");
    handPart.classList.add(handPartsList[i]);
    handPart.src = `./media/images/hands/parts/${handPartsList[i]}.svg`;

    hand.appendChild(handPart);
  };

  about.appendChild(hand);

  return about;
};