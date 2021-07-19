function drawGrid(cell) {
    let grid = document.getElementById('grid');
    for (let i = 0; i < cell; i++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        grid.appendChild(cells);
        }
    }

function drawPallete(colors) {
    let palette = document.getElementById('palette');
    for (let i = 0; i < colors; i++) {
        let color = document.createElement('div');
        color.setAttribute('class', 'color');
        palette.appendChild(color);
        }
}

window.addEventListener('DOMContentLoaded', function() {
    drawGrid(2241)
    drawPallete(20);
});
