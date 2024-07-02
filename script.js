document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('grid-container');
    const resizeButton = document.getElementById('resize-button');
    const containerSize = 960; // Total size of the grid container

    function createGrid(squaresPerSide) {
        gridContainer.innerHTML = ''; // Clear existing grid
        const squareSize = containerSize / squaresPerSide;

        for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.style.width = `${squareSize}px`;
            gridItem.style.height = `${squareSize}px`;
            gridContainer.appendChild(gridItem);

            gridItem.addEventListener('mouseover', function() {
                gridItem.style.backgroundColor = '#ff5733'; 
            });
        }
    }

    resizeButton.addEventListener('click', function() {
        let squaresPerSide = prompt('Enter the number of squares (max: 100):');
        squaresPerSide = Math.min(Math.max(parseInt(squaresPerSide), 1), 100);

        if (!isNaN(squaresPerSide)) {
            createGrid(squaresPerSide);
        } else {
            alert('Please enter a valid number.');
        }
    });

    // Initialize the grid with a default size
    createGrid(16);
});


