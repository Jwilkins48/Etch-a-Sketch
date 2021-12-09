// Variables
const btn = document.getElementById('restartBtn');
let slider = document.getElementById('sliderRange');
let sliderValue = document.getElementById('sliderRange').value;
let sliderContainer = document.getElementById('sliderContainer');
let amountDefault = 25;


function createGrid(amount) {
    const container = document.querySelector('#container');
    //Creating rows and columns
    container.style.gridTemplateRows = `repeat(${amount}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${amount}, 1fr)`;

    for (let i = 0; i < amount * amount; i++) {
        let grid = document.createElement('div');
        grid.addEventListener('mouseover', changeColor);
        container.appendChild(grid);
    };
};
// Change into random colors
function changeColor(e) {
    let random1 = Math.floor(Math.random() * 256)
    let random2 = Math.floor(Math.random() * 256)
    let random3 = Math.floor(Math.random() * 256)
    e.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
};
//Changing the sliders value
function sliderChange(val) {
    sliderValue = val;
    createGrid(sliderValue);
}

slider.addEventListener('mouseup', sliderChange);
btn.addEventListener('click', () => location.reload());

createGrid(amountDefault);