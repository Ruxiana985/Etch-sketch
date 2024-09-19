const gridInput = document.querySelector('.gridInput');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');
const initialBox = document.createElement('div');
body.appendChild(initialBox);
initialBox.style.cssText = 'border: 2px ridge black; height: 700px; width: 700px;';

body.style.cssText = 'display: flex; justify-content: flex-start; align-items: center; gap: 200px; height: 100vh; background-color: beige;';

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

    if(initialBox){
        initialBox.remove();
    }

    // Create new grid container
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.cssText = 'display: flex; flex-direction: column; flex: 1; height: 700px; width: 700px; ';
    body.appendChild(gridContainer);

    // Calculate grid size minus border width for each cell
    let gridSize = 700 / values;

    for (let i = 0; i < values; i++) {
        const outerdiv = document.createElement('div');
        gridContainer.appendChild(outerdiv);
        outerdiv.classList.add(`container-${i}`);
        outerdiv.style.cssText = 'display: flex; justify-content: center; flex: 1;'; // Flex horizontally

        for (let j = 0; j < values; j++) {
            const innerdiv1 = document.createElement('div');
            innerdiv1.classList.add('classin');
            innerdiv1.style.cssText = `height: ${gridSize}px; width: ${gridSize}px; border: 1px solid black; box-sizing: border-box;`; // box-sizing ensures the border doesn't expand the grid
            outerdiv.appendChild(innerdiv1);
        }
    }

    // Now that the grid is created, add event listeners to each grid cell
    const divs = document.querySelectorAll('.classin');
    divs.forEach(div => {
        div.addEventListener('mouseenter', colorGenerator);
    });
}

// Add event listener to trigger grid generation on button click
submit.addEventListener('click', gridGenerator);

// Function to generate random color
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Function to change color of clicked grid cell
function colorGenerator(e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;  // Apply random background color
}
