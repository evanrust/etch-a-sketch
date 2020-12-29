//get dimensions
const dim = 16;

//container selector
const cont = document.querySelector(".container");

//function to add element
function addElement(elementTag, elementId, elementClass, parentId){
    let p = document.getElementById(parentId);
    let newElement = document.createElement(elementTag);
    newElement.setAttribute("id",elementId);
    newElement.setAttribute("class",elementClass);
    p.appendChild(newElement);
}

//make a 16x16 grid of squares
for(let i = 1; i<=dim; i++){
    //add a new div for this col
    addElement("div","col-"+i, "col", "canvas");
    for(let j = 1; j<= dim; j++){
        //add 16 elements for the col
        addElement("div",i + "-" + j, "square", "col-"+i);
    }
}

//add a hover trail
const squares = document.querySelectorAll(".square");
squares.forEach(s => s.addEventListener("mouseover",function(s){
    this.classList.add("hovered");
}))