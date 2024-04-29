// Function to create a grid

function creatGrid() {
    const container = document.querySelector('.grid-container');

    for (let i = 0; i < 16 *16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}

// Create function for hover effect
function handleHover(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'black'
    }
}

// Add a function to reset the color after mouse leaves block
function mouseLeave(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'lightgray';
    }
}


//Create grid when window opens and page loads
window.onload = function() {
    createGrid();
    const gridItems = document.querySelectorAll('.grid-item');
}

// Event listeners for the hover effect
gridItems.forEach(item => {
    item.addEventListener('mouseover', handleHover);
    item.addEventListener('mouseleave', mouseLeave)
});