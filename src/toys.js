export function toys(){
  let rotation = 0;

  const toys = document.createElement("div");
  toys.id = "toys";

  const paras = document.createElement("div");
  paras.classList.add("paras-happy-lunch");

  const para1 = document.createElement("p");
  para1.classList.add("happy-lunch");
  para1.innerText = "Get one of the best toys";
  const para2 = document.createElement("p");
  para2.classList.add("happy-lunch");
  para2.innerText = "with your Happy Lunch!";
  paras.appendChild(para1);
  paras.appendChild(para2);

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const carouselSpin = document.createElement("div");
  carouselSpin.classList.add("carousel-spin");
  
  const toyNames = ["Bar Sinso", "Peabody", "Arachnid Dude", "Sponge Rob",
  "Sorny", "Snitch", "Green Mario", "Flip & Flop", "Bat Person",
  "Yellow Mice"];

  //menu left and right buttons
  for(let i = 0; i < 2; i++){
    const img = document.createElement("img");
    img.src = "./media/images/hands/hand.svg";
    
    const button = document.createElement("div");
    const btnClass = i === 0 ? "btn-carousel-left" : "btn-carousel-right";
    button.classList.add("btn-carousel", btnClass);
    button.addEventListener("click", rotate);

    button.appendChild(img);
    carousel.appendChild(button);
  }

  //function for buttons
  function rotate(){
    const spin = document.querySelector(".carousel-spin");
    this.className.includes("btn-carousel-left")
    ? rotation += 36 : rotation -= 36;
    spin.style.rotate = `${rotation}deg`;
  }

  //create a div for each toy
  for(let i = 0; i < 10; i++){
    const toyDiv = document.createElement("div");
    
    toyDiv.classList.add("toy");
    toyDiv.style.backgroundImage = `url(./media/images/toys/toy-${i}.png)`;
    toyDiv.style.rotate = `${360*i/10}deg`;

    const para = document.createElement("p");
    para.innerText = `${toyNames[i]}`
    
    toyDiv.appendChild(para);
    carouselSpin.appendChild(toyDiv);
  }

  carousel.appendChild(carouselSpin);
  toys.appendChild(paras);
  toys.appendChild(carousel);

  return toys;
}