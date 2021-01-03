//functions

//function to add element
function addSquare(elementTag, elementClass){
    // let p = document.getElementById(parentId);
    // let newElement = document.createElement(elementTag);
    // newElement.setAttribute("id",elementId);
    // newElement.setAttribute("class",elementClass);
    // p.appendChild(newElement);
    let p = document.getElementById("canvas");
    let newElement = document.createElement(elementTag);
    newElement.setAttribute("class",elementClass);
    p.appendChild(newElement);
}

//function to define grid
function generateGrid(gridDim){
    cont.style.gridTemplateColumns = "repeat(" + gridDim + ", 1fr)";
    cont.style.gridTemplateRows = "repeat(" + gridDim + ", 1fr)";
    //make a grid of squares
    for(let i = 1; i<=dim*dim; i++){
        addSquare("div", "square");
}
    //add a hover trail
    const squares = document.querySelectorAll(".square");
    squares.forEach(s => s.addEventListener("mouseover",function(s){
        this.classList.add("hovered");
    }));

}

//function to clear grid
function clearGrid(){
    //clear current grid
    document.querySelectorAll(".square").forEach(s => s.classList.remove("hovered"))
    
    //prompt user for size
    dim = prompt("Enter new grid resolution.  Current resolution is " + dim);

    if (dim > 100){
        clearGrid();
    }

    generateGrid(dim);
}

//main code

//define grid
let dim = 16;

//container selector
const cont = document.querySelector(".container");

//define the grid
generateGrid(dim);