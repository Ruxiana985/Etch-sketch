const gridInput = document.querySelector('.gridInput');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');
const initialBox = document.createElement('div');
body.appendChild(initialBox);

body.style.cssText = 'display: flex;  justify-content: start; align-items: start; height: 100vh; gap: 60px;';

function gridGenerator() {
    const values = parseInt(gridInput.value); // Convert to number

    // Validate the input (must be a positive number)
    if (isNaN(values) || values <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    const existingGrid = document.querySelector('.gridContainer');
    if (existingGrid) {
        existingGrid.remove();
    }

    // Create new grid container
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.cssText = 'display: flex; flex-wrap: wrap; margin-top: 70px; margin-left: 150px; height: 600px; width: 600px; background-color: white; border: 5px ridge pink;';
    body.appendChild(gridContainer);

    // Calculate the size of each cell based on the input value
    let gridSize = 600 / values;

    for (let i = 0; i < values * values; i++) {
        const innerdiv1 = document.createElement('div');
        innerdiv1.classList.add('classin');
        innerdiv1.style.cssText = `flex-basis: ${gridSize}px; height: ${gridSize}px; border: 1px solid black; box-sizing: border-box;`; // Flex-basis defines the width of each cell
        gridContainer.appendChild(innerdiv1);
    }

    // Now that the grid is created, add event listeners to each grid cell
    const divs = document.querySelectorAll('.classin');
    divs.forEach(div => {
        div.addEventListener('mouseenter', colorGeneratorRandom);
    });
}

// Add event listener to trigger grid generation on button click
submit.addEventListener('click', gridGenerator);

// Function to generate random color
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Function to change color of clicked grid cell
function colorGeneratorRandom(e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;  // Apply random background color
}

function singleColor(){

}