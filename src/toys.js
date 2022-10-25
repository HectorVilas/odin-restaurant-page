export function toys(){
  let rotation = 0;

  const toys = document.createElement("div");
  toys.id = "toys";

  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  for(let i = 0; i < 2; i++){
    const button = document.createElement("div");
    const btnClass = i === 0 ? "btn-carousel-left" : "btn-carousel-right";
    button.classList.add("btn-carousel", btnClass);
    button.innerText = i === 0 ? "<" : ">";
    button.addEventListener("click", rotate);

    carousel.appendChild(button);
  }

  function rotate(){
    const spin = document.querySelector(".carousel-spin");
    this.className.includes("btn-carousel-left")
    ? rotation += 36 : rotation -= 36;
    spin.style.rotate = `${rotation}deg`;
  }

  const carouselSpin = document.createElement("div");
  carouselSpin.classList.add("carousel-spin");
  
  const toyNames = ["Bar Sinso", "Peabody", "Aracnid Dude", "Sponge Rob",
  "Sorny", "Snitch", "Green Mario", "Flip & Flop", "Bat Person",
  "Yellow Mice"];

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
  toys.appendChild(carousel);

  return toys;
}