let a = 3;
let result = 'mayor a 0'

if (a > 0) {
    result = 'mayor a 0'
}

console.log(result)

// EJERCICIO 2
const mayorEdad =18;
if(mayorEdad >= 18) {
    console.log('Mayor de edad')
}

// EJERCICIO 3
let x =51;

if (x > 50) {
    console.log("es mayor a 50");
} else if (x < 5) {
    console.log("es menor a 5");
} else {
    console.log("esta entre 5 y 50");
}

// EJERCICIO 4
const mascota = "perro";

switch (mascota) {
    case "perro":
        console.log("tengo un perro");
        break;
    case "gato":
        console.log("tengo un gato");
        break;
    case "raton":
        console.log("tengo un raton");
        break;
}

// EJERCICIO 5
let str = '';

for (let i = 0; i < 9; i++) {
    str = str + i;
}

console.log(str);

// EJERCICIO 6
let n = 1;

while (n > 0) {
    n++;
}

// EJERCICIO 7
let resultado = '';
let i = 0;

do {
    i = i + 1;
    resultado = resultado + i;
} while (i < 10);

console.log(resultado);

// EJERCICIO 8
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));