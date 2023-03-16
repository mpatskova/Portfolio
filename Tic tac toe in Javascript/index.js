const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "","","","","","","","","",
]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((cell, index) => {
        const cellElement = document.createElement("div")
        cellElement.classList.add("square")
        cellElement.id = index
        cellElement.addEventListener("click", addGo)
        gameBoard.append(cellElement)
    })
}

createBoard()


function addGo(event) {
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    event.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle" 
    infoDisplay.textContent = "it is now " + go + "'s go."
    event.target.removeEventListener("click", addGo)
}