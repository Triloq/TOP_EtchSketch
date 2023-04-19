
// Set grid size and point to #container
let numberDivs = 16*16;
const container = document.querySelector("div");
// initialize grid of squares
createGrid(numberDivs);
// Button prompt to get number of squares
const buttonPrompt = document.querySelector("button.squareInput");
buttonPrompt.addEventListener("click", function(e) {
    btnPrompt();
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

function createGrid(numberDivs){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (i = 0; i < numberDivs; i++){
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
}

function btnPrompt(){
    numberDivs = prompt();
    createGrid(numberDivs);
}

function mouseoverSet (divs){
    divs.forEach(square => {
        square.addEventListener("mouseover", function(e) {
            square.style.backgroundColor = "black";
        })      
    })
}