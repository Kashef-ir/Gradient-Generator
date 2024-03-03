// variables
const color1 = document.querySelector("#color1");
const color2 = document.querySelector("#color2");
let currentDirection = "to bottom";
const outputCode = document.querySelector("#code");
const generateBtn = document.querySelector("#submit");
const copyBtn = document.querySelector('#copyBtn')

// functions
function setDirection(value, _this) {
    let directions = document.querySelectorAll(".buttons button");
    for (let i of directions) {
        i.classList.remove("active");
    }
    _this.classList.add("active");
    currentDirection = value;
}

function generateCode() {
    const bodyElem = document.querySelector("body");
    outputCode.value =
        "background-image: linear-gradient(" +
        currentDirection +
        "," +
        color1.value +
        "," +
        color2.value +
        ")";
    bodyElem.style.backgroundImage =
        "linear-gradient(" +
        currentDirection +
        "," +
        color1.value +
        "," +
        color2.value +
        ")";
}

function copyCode() {
    outputCode.select()
    document.execCommand('copy')
} 

generateCode();
// event listeners
generateBtn.addEventListener("click", generateCode);
copyBtn.addEventListener('click', copyCode)
