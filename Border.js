let borderWidth = document.getElementById("border-width");
let borderColor = document.getElementById("border-color");
let backgroundColor = document.getElementById("background-color");
let borderStyle=document.getElementById("border-style");
let result = document.querySelector(".rs");
let element = document.querySelector(".element");

 

// Update border width
borderWidth.addEventListener("input", () => {
    element.style.borderWidth = `${borderWidth.value}px`;
    updateCSS();
});

//Update border style
borderStyle.addEventListener("input",()=>{
    element.style.borderStyle=`${borderStyle.value}`;
    updateCSS();
});

// Update border color
borderColor.addEventListener("input", () => {
    element.style.borderColor = borderColor.value;
    updateCSS();
});

// Update background color
backgroundColor.addEventListener("input", () => {
    element.style.backgroundColor = backgroundColor.value;
    updateCSS();
});



// Function to update the result box
function updateCSS() {
    const cssCode = `
        border: ${borderWidth.value}px ${borderStyle.value} ${borderColor.value};
        background-color: ${backgroundColor.value};
    `;
    result.innerHTML = `<p>${cssCode}</p>`;
}
