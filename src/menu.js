export function menu(){
  const itemNames = ["Two Cheese","Cheesy","Dry Lettuce",
    "Century Egg","Burnt Bun","Tomato Bun",];
  
  const menuItems = [];
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
    menuItems.push(axis);
  }

  for(let i = 5; i > -1; i--){
    menu.appendChild(menuItems[i])
  }

  return menu;
};