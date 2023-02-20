const grid = document.getElementById("grid-container");
const buttonHolder = document.getElementById('button-holder');

const randomColorButton = document.getElementById('random-color');

const chosenColor = 'purple'



function makeDiv(numDivs) { 
    for (let i=0; i<numDivs; i++) {
        const cells = document.createElement('div');
        cells.className = 'cells';
       grid.appendChild(cells);
       cells.addEventListener('mousedown', function(event){
        event.target.style.backgroundColor = chosenColor;
    })
        }
}

makeDiv(256);




