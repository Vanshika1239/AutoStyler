let hOffset = document.getElementById("h-shadow");
let vOffset = document.getElementById("v-shadow");
let blur = document.getElementById("blur-shadow");
let spread = document.getElementById("spread-rediud");
let shadowColor = document.getElementById("Shadow-color");
let shadowInsert = document.getElementById("Shadow-insert");
let element = document.querySelector(".element");
let text = document.querySelector(".text");
let result=document.querySelector(".rs");

// let inputs = document.querySelectorAll("input");
// for (let input of inputs) {
//   input.addEventListener("input", () => {
//     let boxShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;
//     element.style.boxShadow = boxShadow;
//   });
// }
console.log(element);

// Updating shadow when horizontal shadow changes
hOffset.addEventListener("input", () => {
  resultBox();

});

// Updating shadow when vertical shadow changes
vOffset.addEventListener("input", () => {
  resultBox();
});

// Updating shadow when blur radius changes
blur.addEventListener("input", () => {
  resultBox();
});

//updating Shadow when spread radius changes
spread.addEventListener("input",()=>{
  resultBox();
})
// Updating shadow when shadow color changes
shadowColor.addEventListener("input", () => {
   resultBox();
});

function  resultBox(){
  element.style.boxShadow = `${hOffset.value}px ${vOffset.value}px ${blur.value}px ${spread.value}px ${shadowColor.value}`;
  result.innerHTML = `<p>boxShadow: ${element.style.boxShadow}</p>`;
}