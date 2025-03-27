// ------ EJERCICIO 1 ------
console.log("------ EJERCICIO 1 ------");
let array = ["hola1", "hola2", "hola3", "hola4", "hola5", "hola6", "hola7", "hola8", "hola9", "hola10"];
console.log(array); 

// ------ EJERCICIO 2 ------
console.log("------ EJERCICIO 2 ------");
console.log(array[3]); 
console.log(array[6]); 

// ------ EJERCICIO 3 ------
console.log("------ EJERCICIO 3 ------");
console.log(array.length); 

// ------ EJERCICIO 4 ------
console.log("------ EJERCICIO 4 ------");
array.unshift("nuevoInicio"); 
console.log(array); 

// ------ EJERCICIO 5 ------
console.log("------ EJERCICIO 5 ------");
array.push("nuevoFinal"); 
console.log(array); 

// ------ EJERCICIO 6 ------
console.log("------ EJERCICIO 6 ------");
array.splice(5, 2); 
console.log(array); 

// ------ EJERCICIO 7 ------
console.log("------ EJERCICIO 7 ------");
let elemento = "hola4";
console.log(`La posición de "${elemento}" es: ${array.indexOf(elemento)}`);

// ------ EJERCICIO 8 ------
console.log("------ EJERCICIO 8 ------");
array.reverse(); 
console.log(array); 
// ------ EJERCICIO 9 ------
console.log("------ EJERCICIO 9 ------");
let arrayString = array.join(", "); 
console.log(arrayString); 

// ------ EJERCICIO 10 ------
console.log("------ EJERCICIO 10 ------");
let nuevoArray = arrayString.split(", "); 
console.log(nuevoArray); 

// ------ EJERCICIO 11 ------
console.log("------ EJERCICIO 11 ------");
nuevoArray.forEach((valor, indice) => {
    console.log(`Posición ${indice}: ${valor}`);
});

// ------ EJERCICIO 12 ------
console.log("------ EJERCICIO 12 ------");
nuevoArray.forEach((valor, indice) => {
    console.log(`Posición ${indice}: ${valor} - Modificado`);
});

// ------ EJERCICIO 13 ------
console.log("------ EJERCICIO 13 ------");
let buscar = "hola3";
let encontrado = nuevoArray.includes(buscar);
console.log(`¿El valor "${buscar}" está en el array? ${encontrado}`);

// ------ EJERCICIO 14 ------
console.log("------ EJERCICIO 14 ------");
let filtrado = nuevoArray.filter(valor => valor.includes("hola"));
console.log(filtrado); 

// ------ EJERCICIO 15 ------
console.log("------ EJERCICIO 15 ------");
const alumno = ["Timy", "Garcia", "Diseño Web"];
const [nombre, apellido, curso] = alumno; 
console.log(nombre);
console.log(apellido);
console.log(curso);
