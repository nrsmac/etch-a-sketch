const container = document.getElementById('container');





function createGrid(size) {
  for (let y=0; y < size; y++){
    for (let x=0; x < size; x++) {
      let div = document.createElement('div');
      div.classList.add('boxItem');
      div.style.gridColumnStart = x
      div.style.gridColumnEnd = x+1;

      container.appendChild(div);

    }
  }
}

createGrid(16);
