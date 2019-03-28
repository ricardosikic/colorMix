//accedo a los elementos del DOM
let square = document.getElementById('square');
let colorName = document.getElementById('color-name');

//events
square.addEventListener('click', changeColor);

function changeColor() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);

    square.style.background = 'rgb('+ x + ',' + y + ',' + z +')';
    colorName.innerHTML = 'Tu Color es: ' + 'rgb('+ x + ',' + y + ',' + z +')';

}
