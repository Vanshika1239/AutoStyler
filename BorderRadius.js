let allCornersRadius = document.getElementById("All-corners-radius");
let topLeftRadius = document.getElementById("topLeftRadius");
let topRightRadius = document.getElementById("topRightRadius");
let bottomRightRadius = document.getElementById("BottomRightRadius");
let bottomLeftRadius = document.getElementById("BottomLeftRadius");
let borderWidth = document.getElementById("BorderWidth");
let borderColor = document.getElementById("BorderColor");
let borderStyle = document.getElementById("BorderStyle");
let backgroundColor = document.getElementById("BackgroundColor");
let element = document.querySelector(".element");
let inputs = document.querySelectorAll("input, select");
let result = document.querySelector(".rs");

console.log(element);
console.log(allCornersRadius.value);

allCornersRadius.addEventListener("input", () => {
  let rad = allCornersRadius.value;
  element.style.borderRadius = rad + "px";
  result.innerHTML = `<p>Border Radius: ${element.style.borderRadius}</p>`;
});

topLeftRadius.addEventListener("input", () => {
  let rad = topLeftRadius.value;
  element.style.borderTopLeftRadius = rad + "px";
  result.innerHTML = `<p>Top Left: ${element.style.borderTopLeftRadius}</p>`;
});

topRightRadius.addEventListener("input", () => {
  let rad = topRightRadius.value;
  element.style.borderTopRightRadius = rad + "px";
  result.innerHTML = `<p>Top Right: ${element.style.borderTopRightRadius}</p>`;
});

bottomRightRadius.addEventListener("input", () => {
  let rad = bottomRightRadius.value;
  element.style.borderBottomRightRadius = rad + "px";
  result.innerHTML = `<p>Bottom Right: ${element.style.borderBottomRightRadius}</p>`;
});

bottomLeftRadius.addEventListener("input", () => {
  let rad = bottomLeftRadius.value;
  element.style.borderBottomLeftRadius = rad + "px";
  result.innerHTML = `<p>Bottom Left: ${element.style.borderBottomLeftRadius}</p>`;
});

borderWidth.addEventListener("input", () => {
  let width = borderWidth.value;
  element.style.borderWidth = width + "px";
  result.innerHTML = `<p>Border Width: ${element.style.borderWidth}</p>`;
});

borderColor.addEventListener("input", () => {
  let color = borderColor.value;
  element.style.borderColor = color;
  result.innerHTML = `<p>Border Color: ${element.style.borderColor}</p>`;
});

borderStyle.addEventListener("change", () => {
  let style = borderStyle.value;
  element.style.borderStyle = style;
  result.innerHTML = `<p>Border Style: ${element.style.borderStyle}</p>`;
});

backgroundColor.addEventListener("input", () => {
  let bg = backgroundColor.value;
  element.style.backgroundColor = bg;
  result.innerHTML = `<p>Background Color: ${element.style.backgroundColor}</p>`;
});
