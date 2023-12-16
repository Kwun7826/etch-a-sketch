document.addEventListener("DOMContentLoaded", function() {
   createContainer(16);
   const size = document.querySelector('.size');
   size.addEventListener('click', function(){
    const theSize = getSize();
    createContainer(theSize);
   })
})

function createContainer(size){
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for (i = 0 ; i < numDivs; i++){
        const grid = document.createElement('div');
        // grid.style.backgroundColor = 'red';
        grid.addEventListener('mouseover', colorGrid);
        
        container.appendChild(grid);
    }
}

function getSize(){
    let input = prompt('Choose your desire size');
    const message = document.querySelector('#message');
    if ( input == ''){
        message.innerHTML = 'Please type in a number';
    }else if (input < 0 || input > 100){
        message.innerHTML = 'The size must be between 0 and 100';
    }else {
        message.innerHTML = 'Now play!'
    }
    return input;
}

let color = 'black';

function colorGrid(){
    if (color == 'random'){
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    }else {
        this.style.backgroundColor = 'black';
    }
}
function setColor(colorChoice){
   color = colorChoice;
}

function resetBoard(){
  let blank = document.querySelectorAll('div');
  blank.forEach((div) => div.style.backgroundColor = 'white'
  )}