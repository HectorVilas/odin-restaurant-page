export function menu(){
  const menu = document.createElement("div");
  menu.id = "menu";
  for(let i = 0; i < 6; i++){
    const axis = document.createElement("div");
    axis.classList.add("menu-axis", `menu-axis-${i}`);

    const item = document.createElement("div");
    item.classList.add("menu-item", `menu-item-${i}`);

    axis.appendChild(item);
    menu.appendChild(axis);
  }

  return menu;
};