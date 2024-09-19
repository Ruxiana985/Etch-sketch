const gridInput = document.querySelector('.gridInput');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');
const initialBox=document.createElement('div');
body.appendChild(initialBox);
initialBox.style.cssText='border: 2px solid black; height: 1000px; width: 1000px;'


body.style.cssText = 'display: flex; flex-direction: column; justify-content: flex-start; align-items: center; height: 100vh;';

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
    gridContainer.style.cssText = 'display: flex; flex-direction: column; flex: 1; height: 1000px; width: 1000px; background-color: pink;';
    body.appendChild(gridContainer);

    // Calculate grid size minus border width for each cell
    let gridSize = 1000 / values;

    for (let i = 0; i < values; i++) {
        const outerdiv = document.createElement('div');
        gridContainer.appendChild(outerdiv);
        outerdiv.classList.add(`container-${i}`);
        outerdiv.style.cssText = 'display: flex; justify-content: center; flex: 1;'; // Flex horizontally

        for (let j = 0; j < values; j++) {
            const innerdiv1 = document.createElement('div');
            innerdiv1.classList.add(`class-${i}-${j}`);
            innerdiv1.style.cssText = `height: ${gridSize}px; width: ${gridSize}px; border: 1px solid black; box-sizing: border-box;`; // box-sizing ensures the border doesn't expand the grid
            outerdiv.appendChild(innerdiv1);
        }
    }
}

// Add event listener to trigger grid generation on button click
submit.addEventListener('click', gridGenerator);
