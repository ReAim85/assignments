

function color(color) {
    let bgColor = document.querySelector("body");
    bgColor.setAttribute("style", `background-color:${color};`)
}

let customButton = document.getElementById("customColor");

customButton.addEventListener("click", function(){
    let userInput = prompt("Please enter a color Hex code");
    if(!isValidHexColor(userInput)){
        alert("not a valid hex code")
    }else{
        color(userInput);
    }
}
)

function isValidHexColor(color) {
    const regex = /^#[0-9a-f]{6}$/i;
    return regex.test(color);
  }