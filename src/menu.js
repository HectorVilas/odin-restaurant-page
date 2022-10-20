export function menu(){
  const itemNames = ["Two Cheese","Century Egg","Dry Lettuce",
    "Cheesy","Burnt Bun","Tomato Bun",];
  
  const menu = document.createElement("div");
  menu.id = "menu";
  for(let i = 0; i < 6; i++){
    const axis = document.createElement("div");
    axis.classList.add("menu-axis", `menu-axis-${i}`);

    const item = document.createElement("div");
    item.classList.add("menu-item", `menu-item-${i}`);

    const itemFloat = document.createElement("div");
    itemFloat.classList.add("float-vertical");

    const img = document.createElement("img");
    img.src = `./media/images/menu/menu-${i}.png`;

    const para = document.createElement("p");
    para.classList.add("item-description");
    para.innerText = `${itemNames[i]} Burger`;

    itemFloat.appendChild(img);
    itemFloat.appendChild(para);
    item.appendChild(itemFloat);
    axis.appendChild(item);
    menu.appendChild(axis);
  }

  return menu;
};