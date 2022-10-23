(()=>{"use strict";const e=[function(){const e=["Two Cheese","Cheesy","Dry Lettuce","Century Egg","Burnt Bun","Tomato Bun"],t=[],n=document.createElement("div");n.id="menu";for(let n=0;n<6;n++){const d=document.createElement("div");d.classList.add("menu-axis",`menu-axis-${n}`);const a=document.createElement("div");a.classList.add("menu-item",`menu-item-${n}`);const s=document.createElement("div");s.classList.add("float-vertical");const c=document.createElement("img");c.src=`./media/images/menu/menu-${n}.png`;const i=document.createElement("p");i.classList.add("item-description"),i.innerText=`${e[n]} Burger`,s.appendChild(c),s.appendChild(i),a.appendChild(s),d.appendChild(a),t.push(d)}for(let e=5;e>-1;e--)n.appendChild(t[e]);return n}(),function(){const e=document.createElement("div");return e.id="toys",e.innerText="toys",e}(),function(){const e=document.createElement("div");e.id="about";const t=document.createElement("div"),n=["hand-palm","hand-little-finger","hand-middle-finger","hand-index","hand-thumb"];t.classList.add("hand");for(let e=0;e<5;e++){const d=document.createElement("img");d.classList.add(n[e]),d.src=`./media/images/hands/parts/${n[e]}.svg`,d.classList.add(n[e]),t.appendChild(d)}return e.appendChild(t),e}()];let t=0;const n=document.querySelector("body"),d=document.querySelector("#content");d.appendChild(e[0]),n.appendChild(function(){const e=document.createElement("div");e.id="starfield";for(let t=0;t<90;t++){const n=document.createElement("div");n.classList.add("star-angle"),n.style.rotate=4*t+"deg";const d=document.createElement("div"),a=15*Math.random()+5;d.classList.add("star"),d.style.animationDuration=`${a}s`,n.appendChild(d),e.appendChild(n)}return e}()),n.appendChild(function(){const e=document.createElement("div");e.id="tunnel";for(let t=0;t<10;t++){const t=document.createElement("div");t.classList.add("ring"),e.appendChild(t)}return e}()),n.appendChild(function(){const n=document.createElement("div");n.classList.add("nav-bar");for(let e=0;e<2;e++){const t=document.createElement("div");t.classList.add("sign");const d=document.createElement("div");d.classList.add("post");const s=document.createElement("p");s.innerText=0===e?"About":"Toys";const c=document.createElement("img");c.src="./media/images/hands/hand.svg";const i=document.createElement("div");i.classList.add("go-to-menu",0===e?"menu-left":"menu-right"),i.addEventListener("click",a),i.addEventListener("animationend",(function(){this.classList.remove("animate")})),t.appendChild(s),t.appendChild(c),i.appendChild(t),i.appendChild(d),n.appendChild(i)}function a(){if(this.className.includes("animate"))return;this.className.includes("menu-left")?t--:t++,t<0&&(t=e.length-1);const n=t%e.length;d.replaceChildren(e[n]),setTimeout((()=>{const e=document.querySelectorAll(".go-to-menu p");e[0].innerText=0==n?"About":1==n?"Menu":"Toys",e[1].innerText=0==n?"Toys":1==n?"About":"Menu"}),100),document.querySelectorAll(".go-to-menu").forEach((e=>e.classList.add("animate")))}return n}())})();