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
for(let i = 1; i<=16; i++){
    //add a new div for this row
    addElement("div","row-"+i, "row", "canvas");
    for(let j = 1; j<= 16; j++){
        //add 16 elements for the row
        addElement("div",i + "-" + j, "square", "row-"+i);
    }
}