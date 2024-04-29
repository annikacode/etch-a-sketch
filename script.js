// Function to create a grid

function createGrid(numSqaures) {
    const container = document.querySelector('.grid-container');
    container.innerHTML = '';

    for (let i = 0; i < 16 * 16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
const sideLength = 960 / numSqaures;
document.querySelectorAll('.grid-item').forEach(item => {
    item.style.width = sideLength + 'px';
    item.style.height = sideLength + 'px';
});

const gridItems = document.querySelectorAll('.grid-item');
gridItems.forEach(item => {
    item.addEventListener('mouseover', handleHover);
    item.addEventListener('mouseleave', handleMouseLeave);
})

}

// Create function for hover effect
function handleHover(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'black'
    }
}

// Add a function to reset the color after mouse leaves block
function handleMouseLeave(event) {
    if (event.target.classList.contains('grid-item')) {
        event.target.style.backgroundColor = 'lightgray';
    }
}


//Create grid when window opens and page loads
window.onload = function() {
    createGrid();
    const gridItems = document.querySelectorAll('.grid-item');

    // Event listeners for the hover effect
    gridItems.forEach(item => {
        item.addEventListener('mouseover', handleHover);
        item.addEventListener('mouseleave', handleMouseLeave)
    });
}

// Event listener for the reset button
document.getElementById('reset-button').addEventListener('click', function() {
    let numSqaures = prompt('How many sqaures would you like?');
    numSqaures = parseInt(numSqaures);
    if (numSqaures && numSqaures > 0 && numSqaures <= 100) {
        createGrid(numSqaures);
    } else {
        alert('PLease enter a number between 1 and 100');
    }

})