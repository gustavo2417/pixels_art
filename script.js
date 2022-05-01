let origin = document.getElementById("pixel-board") 

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