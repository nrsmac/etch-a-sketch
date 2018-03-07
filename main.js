const container = document.getElementById('container');





function createGrid(size) {
  let boxSize = size/600;
  for (let y=0; y < size; y++){
    for (let x=0; x < size; x++) {
      let div = document.createElement('div');
      div.classList.add('boxItem');
      div.style.gridColumnStart = x;
      div.style.gridColumnEnd = x+1;

      container.appendChild(div);
      div.addEventListener('mouseover', changeColor);
    }
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = 'black';
}



// function addRandomBackgroundColor(e) {
//   e.target.style.backgroundColor = randomColor();
// }

function clearGrid(){
  const clearButton = document.getElementById('clear');
  clearButton.addEventListener('click', function(e) {
    let size = prompt("Size:","16");
    // if size > 64 {
    //   alert("error! too big!");
    //   break;
    // }
    deleteGrid();
    createGrid(size);
  })

}


function deleteGrid() {
  let container = document.querySelector('#container');
  Element.prototype.removeAll = function () {
    while (this.firstChild) {
      this.removeChild(this.firstChild);
    }
    return this;
  }
  container.removeAll();
}



createGrid(16);
clearGrid();
