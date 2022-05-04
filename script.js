let origin = document.getElementById("pixel-board");
let clicks = document.getElementsByClassName("color")



function blocks() {
  for (let index = 0;index < 5;index += 1){
    let coluna = document.createElement("div")
    coluna.className = "line-ll"

    for (let ind = 0;ind < 5;ind += 1) {
      let PixelsLenght = document.createElement("div")
      PixelsLenght.className = "pixel"
      coluna.appendChild(PixelsLenght)
     }
    origin.appendChild(coluna)
  }
}
blocks()

function selector () {
  for(let i = 0; i < clicks.length; i += 1) {
    clicks[i].addEventListener("click",newSelector)
  }
}
selector()

function newSelector(click) {
  for(let a = 0; a < clicks.length; a += 1) {
    clicks[a].classList.remove("selected") 
  } 
  click.target = (click.target).classList.add("selected")
} 

function paint () {
  let square = document.querySelectorAll(".pixel")
  for(let b = 0; b < square.length; b += 1) {
    square[b].addEventListener("click", attach)
  }
}
paint ()

function attach (whichColor) {
  let selecionar = document.querySelector(".selected")
  let newcolor = window.getComputedStyle(selecionar).backgroundColor
  let before = (whichColor.target).style.backgroundColor = newcolor
  before = newcolor
}

