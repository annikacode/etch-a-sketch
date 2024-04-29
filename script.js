// Function to create a grid

function creatGrid() {
    const container = document.querySelector('.grid-container');

    for (let i = 0; i < 16 *16; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
}