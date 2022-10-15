const grid = document.querySelector('.grid');
let btn = document.querySelector('#btn');
let resetButton = document.querySelector('#reset');
let valueDisplay = document.querySelector('.value');
let columns = document.querySelectorAll('.column');
let gridSize = 16;
creatGride(gridSize);
sketch()




// slider to select the size of the grid
btn.addEventListener('click', getSize);
function getSize() {
    reset()
    gridSize = document.getElementById('slider').value;
    creatGride(gridSize);
    sketch();
}

// Creation of the Grid  (row x column)
function creatGride(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++) {
            const column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
    }
    //Display gridSize
    valueDisplay.textContent = `${gridSize}x${gridSize}`;
}

// for each element of the nodlist we will listen to a event 
function sketch(){
    let columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        column.addEventListener('mouseover', (e) => {
            if (e.target.matches('.column')) {  // implimented event delegation to target specific div
                e.target.classList.add('color'); // added a new class to the div when the mouse hover over 
            }
        });
    });
}


// when the reset button is clicked it will remove all child elements of grid and reset it to the default value of gridSize
resetButton.addEventListener('click', reset);
function reset() {
    while (grid.hasChildNodes()) {
        grid.removeChild(grid.firstChild);
    }
    creatGride(gridSize);
    sketch();
}




