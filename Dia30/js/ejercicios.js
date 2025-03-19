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
const boxes = document.querySelectorAll(".box");

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function handleRandorizer() {
    boxes.forEach (box => {
        box.textContent = getRndInteger(1, 100);
    });
}

// EJERCICIO 3 //
const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");
const op = document.getElementById("op");
const result = document.getElementById ("result");

function handleCalculator(){
    const value1 = parseFloat(n1.value);
    const value2 = parseFloat(n2.value);
    let r;
    
    switch (op.value) {
        case "+":
            r = value1 + value2;
            break;
        case "-":
            r = value1 - value2;
            break;
        case "*":
            r = value1 * value2;
            break;
        case "/":
            r = value1 /  value2;
            break;
        default:
            r = "error";
            break;
    }
    result.innerHTML = r;
}