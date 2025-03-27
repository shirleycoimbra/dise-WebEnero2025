
//EJERCICIO 1
const p1 = document.querySelector("#p1");
const bt1 = document.querySelector("#bt1");

function handleEjercicio1(e){
    if(p1.style.backgroundColor == "black"){
        p1.style.backgroundColor = "white";
        p1.style.color = "black";
    }else{
        p1.style.backgroundColor = "black";
        p1.style.color = "white";
    }
    console.log("fondo:", p1.style.backgroundColor);
    console.log("color:", p1.style.color);


}


bt1.addEventListener("click", handleEjercicio1);


//EJERCICIO 2
const box2 = document.querySelector("#box2");
const bt2 = document.querySelector("#bt2");

function handleEjercicio1(e){
    if(p1.style.backgroundColor == "black"){
        p1.style.backgroundColor = "white";
        p1.style.color = "black";
    }else{
        p1.style.backgroundColor = "black";
        p1.style.color = "white";
    }
    console.log("fondo:", p1.style.backgroundColor);
    console.log("color:", p1.style.color);


}


bt2.addEventListener("click", handleEjercicio1);
