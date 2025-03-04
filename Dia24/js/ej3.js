const elem = document.getElementById("para");
elem.innerHTML="hola JS";
elem.style.color="red";

function changeColor(newColor){
    elem.style.color = newColor;
}

function changeSize(newSize){
    elem.style.fontSize = newSize;
}