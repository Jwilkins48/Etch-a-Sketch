let amountDefault = 16;

function createGrid(amount) {
    const container = document.querySelector('#container');

    container.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;

    for (let i = 0; i < amount * amount; i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', changeColor);
        container.appendChild(grid);
    };
};

function changeColor(e) {
    let random1 = Math.floor(Math.random() * 256)
    let random2 = Math.floor(Math.random() * 256)
    let random3 = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
};


createGrid(amountDefault);
