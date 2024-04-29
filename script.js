// Function to create a grid
function createGrid(numSquares) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    for (let i = 0; i < numSquares * numSquares; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
    const sideLength = 960 / numSquares;
    document.querySelectorAll('.grid-item').forEach(item => {
        item.style.width = sideLength + 'px';
        item.style.height = sideLength + 'px';
    });

    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('mouseover', handleHover);
        item.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Create function for hover effect
function handleHover(event) {
    if (event.target.classList.contains('grid-item')) {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

// Add a function to reset the color after mouse leaves block
function handleMouseLeave(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'lightgray';
    }
}

// Create grid when window opens and page loads
window.onload = function() {
    createGrid(16);
}

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', function() {
    let numSquares = prompt('How many squares would you like?');
    numSquares = parseInt(numSquares);
    if (numSquares && numSquares > 0 && numSquares <= 100) {
        createGrid(numSquares);
    } else {
        alert('Please enter a number between 1 and 100.');
    }
});
