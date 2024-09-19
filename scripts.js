const gridInput = document.querySelector('.gridInput');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');

// Apply basic layout styling to body
body.style.cssText = 'display: flex; flex-direction: column; justify-content: flex-start; align-items: center; height: 100vh;';

function gridGenerator() {
    const values = parseInt(gridInput.value); // Convert to number
    
    // Validate the input (must be a positive number)
    if (isNaN(values) || values <= 0) {
        alert('Please enter a valid positive number.');
        return;
    }

    // Optional: clear previous grid if already generated
    const existingGrid = document.querySelector('.gridContainer');
    if (existingGrid) {
        existingGrid.remove();
    }
    
    // Create new grid container
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.cssText = 'display: flex; flex-wrap: wrap; border: 2px solid black; height: 1000px; width: 1000px; background-color: pink;';
    body.appendChild(gridContainer);

    // Calculate grid size minus border width for each cell
    let gridSize = 1000 / values; 

    for (let i = 0; i < values * values; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add(`grid-cell-${i}`);
        gridCell.style.cssText = `height: ${gridSize}px; width: ${gridSize}px; border: 1px solid black; box-sizing: border-box;`; // Use box-sizing
        gridContainer.appendChild(gridCell);
    }
}

// Add event listener to trigger grid generation on button click
submit.addEventListener('click', gridGenerator);
