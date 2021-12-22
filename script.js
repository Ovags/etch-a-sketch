const gridContainer = document.querySelector('grid-container');

function createGrid(){
    const rows = createRows(4);
    for(let i=0;i<4;i++){
        gridContainer.appendChild(rows[i]);
    }
}

function createRows(amountOfRows, amountOfCellsPerRow){
    const rows=new Array[amountOfRows];
    for(let i=0;i<amountOfRows;i++){
        row[i]=document.createElement('div');
        row[i].classList.add('row');
        row[i].appendChild(createCells(amountOfCellsPerRow));
    }
    return rows;
}

function createCells(amountOfCells){
    const cells=new Array[amountOfCells];
    for(let i=0;i<amountOfCells;i++){
        cells[i]=document.createElement('div');
        cells[i].classList.add('cell');
    }
    return cells;
}

createGrid();