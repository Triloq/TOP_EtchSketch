
// Set initial grid and point to #container
let numberDivs = 16;
const container = document.querySelector("div");
// initialize grid of squares
createGrid(numberDivs);
// Button prompt to get number of squares
const buttonPrompt = document.querySelector("button.squareInput");
buttonPrompt.addEventListener("click", function(e) {
    numberOfSquares = btnPrompt();
    // point to all the divs in the grid
    let divs = document.querySelectorAll('div.square');
    // reestablish mouseover listener
    mouseoverSet(divs);
})

// point to all the divs in the grid
let divs = document.querySelectorAll('div.square');

divs.forEach(square => {
    square.addEventListener("mouseover", function(e) {
        square.style.backgroundColor = "black";
    })
    
})

// Create the grid based on the number input by the user
function createGrid(numberDivs){

    let squareTotal = numberDivs**2;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (i = 0; i < squareTotal; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        //changing the dimensions based on number of divs
        div.style.flex = (1/numberDivs*100)+"%";
        //appending the grid
        container.appendChild(div);
    }
}

// Button prompts the user for number of squares to create
function btnPrompt(){
    numberDivs = prompt();
    createGrid(numberDivs);
    return numberDivs;
}

function mouseoverSet (divs){
    divs.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            square.style.backgroundColor = "black";
        })      
    })
}
