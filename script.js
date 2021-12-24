const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-button');
const changeDensityButton = document.querySelector('#change-density-button');
let amountOfColumns = 4;
let amountOfRows = 4;

function sizeAvailable(){
    if(window.innerHeight<window.innerWidth){
        return window.innerHeight;
    }
    return window.innerWidth;
}

function sizeOfCells(){
    if(sizeAvailable()%amountOfColumns>amountOfColumns/2){
        return (parseInt(sizeAvailable()/amountOfColumns)-1);
    }return parseInt(sizeAvailable()/amountOfColumns);
}

function createGrid(){
    console.log('Creating a grid of '+amountOfRows+'*'+amountOfColumns)+" :";
    const rows = createRows(amountOfRows,amountOfColumns);
    for(let i=0;i<amountOfRows;i++){
        gridContainer.appendChild(rows[i]);
    }
}

function createRows(amountOfRows, amountOfCellsPerRow){
    console.log(' Creating '+amountOfRows+' rows and '+amountOfCellsPerRow+' columns.');
    const rows=new Array;
    for(let i=0;i<amountOfRows;i++){
        rows[i] = document.createElement('div');
        rows[i].classList.add('row');
        gridContainer.appendChild(rows[i]);
        for(let j=0;j<amountOfCellsPerRow;j++){
            console.log('  creating cell '+(j+1)+' in row '+(i+1));
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
        cells[i].setAttribute('style',"width :"+sizeOfCells()+"px; height :"+sizeOfCells()+"px;");
        cells[i].addEventListener('mouseenter',function e(){
            cells[i].style.backgroundColor = randomColor();
        });
    }
    return cells;
}

function createArray(amountOfRows, amountOfColumns){

}

function setButtons(){
    setResetButton();
    setChangeDensityButton();
}

function setResetButton(){
    resetButton.addEventListener('click', function e(){
        cellsToReset=document.getElementsByClassName('wasHovered');
        for(let i=0;i<cellsToReset.length;){
            cellsToReset.item(i).classList.remove('wasHovered');
        }
    });
}

function setChangeDensityButton(){
    changeDensityButton.addEventListener('click', function e(){
        amountOfColumns=prompt('Change the size of grid',amountOfColumns);
        amountOfRows=amountOfColumns;
        removeGrid();
        createGrid();
    })
}

function removeGrid(){
    let rows=document.getElementsByClassName('row');
    for(let i=0;i<rows.length;i++){
        rows[0].parentNode.removeChild(rows[0]);
    }
    let cells=document.getElementsByClassName('cell');
    for(let i=0;i<cells.length;){
        cells[0].parentNode.removeChild(cells[0]);
    }
}

function randomColor(){
    let characters='0123456789abcdef';
    let color='#';
    for(let i=0;i<6;i++){
        color+=characters[Math.floor(Math.random()*16)];
    }
    return color;
}

createGrid();
setButtons();