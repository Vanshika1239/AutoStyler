let hOffset = document.getElementById("h-shadow");
let vOffset = document.getElementById("v-shadow");
let blur = document.getElementById("blur-shadow");
let shadowColor = document.getElementById("shadow-color");
let text = document.querySelector(".text");

let inputs = document.querySelectorAll("input");
 
console.log(text);


// Updating shadow when horizontal shadow changes
hOffset.addEventListener("input", () => {
  text.style.textShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${shadowColor.value}`;
});

// Updating shadow when vertical shadow changes
vOffset.addEventListener("input", () => {
  text.style.textShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${shadowColor.value}`;
});

// Updating shadow when blur radius changes
blur.addEventListener("input", () => {
  text.style.textShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${shadowColor.value}`;
});

// Updating shadow when shadow color changes
shadowColor.addEventListener("input", () => {
  text.style.textShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${shadowColor.value}`;
});