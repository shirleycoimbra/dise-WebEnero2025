// Ejercicio 1
console.log("----ej1----");
function pares(){
    for (let i = 2; i < 100; i = i + 2){
        console.log(i)
    }
}

pares()

// Ejercicio 2
console.log("----ej2-----")
function cuadradoLleno(){
    for (let i = 0; i < 5; i++) {
        let str = "";
        for (let j = 0; j < 5; j++) {
            str += "*";
        }
        console.log(str);
    }
}
cuadradoLleno()

// Ejercicio 3
// || or
// && and
console.log("-----ej3-----")
function cuadradoHueco(){
    for (let i = 0; i < 5; i++) {
        let str = "";
        for (let j = 0; j < 5; j++) {
            if(i == 0 || i == 4 || j == 0 || j == 4){
                str += "*";
            }else{
                str += " ";
            }
        }
        console.log(str);
    }
}
cuadradoHueco()

// Ejercicio 4
console.log("------ej4-------")

function saludar(nombre){
    alert("Hola " + nombre);
}

// function adios(nombre){
//    alert("Adios " + nombre);
//}

function procesarEntradaUsuario(callback){
    var nombre = prompt("Por favor ingresa tu nombre.")
    callback(nombre)
}

procesarEntradaUsuario(saludar)