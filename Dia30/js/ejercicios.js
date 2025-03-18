let newin;

function handleOpen(){
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=0,height=0,left=-1000,top=-1000`;
    newin = open("", "test", params);
    newin.document.write("hola!");
}
function handleClose(){
    newin.close()
}
function handleLocation(){
    newin.location = "https://alumnos.cei.es/calendario-academico-de-estudios-entre-semana/";
}

function handleMove(){
    newin.moveTo(500, 500);
}
function handleResize(){
    newin.resizeTo(500, 500);
}

// EJERCICIO 2
const boxs = document.querySelectorAll(".box");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

