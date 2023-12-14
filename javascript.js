
document.addEventListener("DOMContentLoaded", function() {
   createContainer(16);
    console.log('hi');
})

function createContainer(size){
    const container = document.querySelector('.container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let numDivs = size * size;
    for (i = 0 ; i < numDivs; i++){
        const grid = document.createElement('div');
        grid.style.backgroundColor = 'yellow';
        container.appendChild(grid);
    }
}

