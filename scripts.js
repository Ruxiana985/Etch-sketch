const gridInput = document.querySelector('.gridInput');
const submit = document.querySelector('.submit');
const body = document.querySelector('body');
const initialBox = document.createElement('div');
body.appendChild(initialBox);


body.style.cssText = 'display: flex; justify-content: flex-start; align-items: center; height: 100vh; gap: 80px;';

function gridGenerator() {
    const values = parseInt(gridInput.value); // Convert to number

    // Validate the input (must be a positive number)
    if (isNaN(values) || values <= 0 ) {
        alert('Please enter a valid positive number.');
        return;
    }

    if(!isNaN(values) && values>100){
        alert('please enter number between 1 and 100');
        return;
    }

    const existingGrid = document.querySelector('.gridContainer');
    if (existingGrid) {
        existingGrid.remove();
    }

    // Create new grid container
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.cssText = 'display: flex; flex-direction: column; flex-wrap: wrap;  height: 600px; width: 600px;background-color: white;';
    body.appendChild(gridContainer);

    // Calculate grid size minus border width for each cell
    let gridSize = 600/ values;

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
        div.addEventListener('mouseenter', colorGenerator); // Initially random color
    });
   
    const color1 = document.querySelector('.colorChanger');
    
    
   
    // Listen for color picker changes
    color1.addEventListener('change', function () {
        const selectedColor = color1.value;
        
        // Remove previous event listener for random colors and apply new listener for single color
        divs.forEach(div => {
            div.removeEventListener('mouseenter', colorGenerator); // Remove random color listener
            div.addEventListener('mouseenter', function (e) {
                singleColor(e, selectedColor); // Apply selected color on click
            });
        });
    });


    
}

// Add event listener to trigger grid generation on button click
submit.addEventListener('click', gridGenerator);

// Function to generate random color
function random(number) {
    return Math.floor(Math.random() * (number + 1));
}

// Function to change color of clicked grid cell to a random color
function colorGenerator(e) {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    e.target.style.backgroundColor = rndCol;  // Apply random background color
}

// Function to change color of clicked grid cell to the selected color
function singleColor(e, selectedColor) {
    e.target.style.backgroundColor = selectedColor; // Apply selected color from color picker
}
