const grid = document.getElementById("grid-container");
const buttonHolder = document.getElementById('button-holder');
let chosenColor = 'purple';
var cellsAcross = 100;
let totalDivs = (cellsAcross*cellsAcross);
grid.style.gridTemplateColumns = `repeat(${cellsAcross}, auto)`;
grid.style.gridTemplateRows = `repeat(${cellsAcross}, auto)`;
const numSquareBtn = document.getElementById('number-of-squares');

 //var cellsAcross = numSquareBtn.addEventListener('click', function(event){
    //var userInput = prompt('How Many Squares Across?', 'number')
    //if (userInput != null) {return `${userInput}`};
   // else {return '16'};
//});

function makeDiv(numDivs) { 
    for (let i=0; i<numDivs; i++) {
        const cells = document.createElement('div');
        cells.className = 'cells';
        grid.appendChild(cells);
        cells.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = chosenColor;
            })
    }
}

makeDiv(totalDivs);





