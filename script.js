document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById('grid-container');

    for (let i = 0; i < 16 * 16; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);

        //Add event listener for the grid to change color on hover
        gridItem.addEventListener('mouseover', function() {
            gridItem.style.backgroundColor = '#ff5733'
        })
    }
});


