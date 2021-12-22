const gridContainer = document.querySelector('#grid-container');

function createGrid(){
    const rows = createRows(4,4);
    for(let i=0;i<4;i++){
        gridContainer.appendChild(rows[i]);
    }
}

function createRows(amountOfRows, amountOfCellsPerRow){
    const rows=new Array;
    for(let i=0;i<amountOfRows;i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        gridContainer.appendChild(rows[i]);
        for(let j=0;j<amountOfCellsPerRow;j++){
            rows[i].appendChild(createCells(amountOfCellsPerRow)[j]);
        }
    }
    return rows;
}

function createCells(amountOfCells){
    const cells=new Array;
    for(let i=0;i<amountOfCells;i++){
        cells[i]=document.createElement('div');
        cells[i].classList.add('cell');
        cells[i].addEventListener('mouseenter',function e(){/*doesn't work*/
            cells[i].classList.add('wasHovered');
        });
    }
    return cells;
}

createGrid();