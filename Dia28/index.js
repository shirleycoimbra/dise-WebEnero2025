// ------ EJERCICIO 1 ------
console.log("------ EJERCICIO 1 ------");
let alumno = {
    nombre: "Shirley",
    apellido: "Coimbra",
    edad: 23,
    curso: "Diseño Web"
};

console.log(`Nombre: ${alumno.nombre}`);
console.log(`Apellido: ${alumno.apellido}`);
console.log(`Edad: ${alumno.edad}`);
console.log(`Curso: ${alumno.curso}`);

// ------ EJERCICIO 2 ------
console.log("------ EJERCICIO 2 ------");
let { nombre, apellido, edad, curso } = alumno; 

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(curso);

// ------ EJERCICIO 3 ------
console.log("------ EJERCICIO 3 ------");
alumno.mostrarNombreCompleto = function () {
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
};

alumno.mostrarNombreCompleto();
