function drawGrid(cell) {
    let grid = document.getElementById('grid');
    for (let i = 0; i < cell; i++) {
        let cells = document.createElement('div');
        cells.setAttribute('class', 'cell');
        grid.appendChild(cells);
        }
    }

function drawPallete() {
    let colors = ['#9b4b40', '#de6b5c', '#e18279', '#d4a05b',
                  '#ecb267', '#f1c88e', '#e4da66', '#fdf273',
                  '#fef6a2', '#7fbf5c', '#9fef74', '#bdf3a7',
                  '#3651aa', '#4d76f3', '#95a9f7', '#5849ab',
                  '#7c69f4', '#af9ff6', '#6b4493', '#b274f5',
                  '#cea3f8', '#000000', '#323232', '#666666',
                  '#999999', '#cccccc', '#ffffff', '#34241c',
                  '#493227', '#6a4839', '#866b5f', '#a49087',
    ];
    let palette = document.getElementById('palette');
    for (let i = 0; i <= colors.length; i++) {
        let color = document.createElement('div');
        color.setAttribute('class', 'color');
        color.style.backgroundColor = colors[i]
        palette.appendChild(color);
        }
}

window.addEventListener('DOMContentLoaded', function() {
    drawGrid(2242)
    drawPallete();
});
