const grid = document.getElementById("grid-container");
const buttonHolder = document.getElementById('button-holder');
let chosenColor = 'purple';
const numSquareBtn = document.getElementById('number-of-squares');

cellsAcross = 16;
  grid.style.gridTemplateColumns = `repeat(16, auto)`;
  grid.style.gridTemplateRows = `repeat(16, auto)`;
  makeDiv(256);


numSquareBtn.addEventListener('click', function(event){
  let squares = grid.querySelectorAll('div');
  squares.forEach(squares => squares.remove());
  cellsAcross = prompt('How Many Squares Across?', 'number');
  var totalDivs = (cellsAcross*cellsAcross);
  grid.style.gridTemplateColumns = `repeat(${cellsAcross}, auto)`;
  grid.style.gridTemplateRows = `repeat(${cellsAcross}, auto)`;
  makeDiv(totalDivs);
});

function makeDiv(numDivs) { 
    for (let i=0; i<numDivs; i++) {
        const cells = document.createElement('div');
        cells.className = 'cells';
        grid.appendChild(cells);
        cells.addEventListener('mouseover', function(event){
            event.target.style.backgroundColor = chosenColor;
            })
    }
};






