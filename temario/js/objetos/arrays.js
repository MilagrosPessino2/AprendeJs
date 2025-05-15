// ==============================
//  ARRAYS
// ==============================

//METODOS

console.log("Metodos arrays: ");

//push
console.log("push");
let frutas = ["manzana", "banana"];
            let nuevaLongitud = frutas.push("naranja");
            console.log(frutas); // Output: ["manzana", "banana", "naranja"]
            console.log(nuevaLongitud); // Output: 3

function resultadoPush(){
    return frutas.length;
}

function obtenerArrayFrutas(){
    return frutas;
}

function mostrarArray(Array) {
   return Array.join(", ");
}

//pop
console.log("pop");
let frutas2 = ["manzana", "banana", "naranja"];
            let ultimoElemento = frutas2.pop();
            console.log(frutas2); // Output: ["manzana", "banana"]
            console.log(ultimoElemento); // Output: "naranja"

function obtenerArrayFrutas2(){
    return frutas2;
}
function devolverUltimoElemento(){
    return ultimoElemento;
}
//shift
console.log("shift");
let frutas3 = ["manzana", "banana", "naranja"];
            let primerElemento = frutas3.shift();
            console.log(frutas3); // Output: ["banana", "naranja"]
            console.log(primerElemento); // Output: "manzana"

function obtenerArrayFrutas3(){
    return frutas3;
}
function devolverPrimerElemento(){
    return primerElemento;
}
//unshift
console.log("unshift");
let frutas4 = ["banana", "naranja"];
            let nuevaLongitud2 = frutas4.unshift("manzana", "kiwi");
            console.log(frutas4); 
            console.log(nuevaLongitud2);

function obtenerArrayFrutas4(){
    return frutas4;
}

function longitudFrutas4(){
    return frutas4.length;
}

//map
console.log("map");
let numeros = [1, 2, 3];
            let dobles = numeros.map(function(numero) {
            return numero * 2;
            });
            console.log(dobles);
            console.log(numeros); 
//ufilter
console.log("ufilter");
let numeros2 = [1, 2, 3, 4, 5];
            let pares = numeros2.filter(function(numero) {
            return numero % 2 === 0;
            });
            console.log(pares); 
            console.log(numeros2); 

//reduce
console.log("reduce");
let numeros3 = [1, 2, 3, 4];
            let suma = numeros3.reduce(function(acumulador, numero) {
            return acumulador + numero;
            }, 0);
            console.log(suma); 

            let multiplicacion = numeros3.reduce((acumulador, numero) => acumulador * numero, 1);
            console.log(multiplicacion); 

//Acceso
console.log("Acceso: ");
let colores = ["rojo", "verde", "azul"];
            console.log(colores[0]); // Output: "rojo"
            console.log(colores[2]); // Output: "azul"
            console.log(colores[3]); // Output: undefined (índice fuera de rango)

//Modificacion
console.log("Modificacion: ");
 let colores2 = ["rojo", "verde", "azul"];
            colores2[1] = "amarillo";
            console.log(colores2); // Output: ["rojo", "amarillo", "azul"]

//ITERACION DE ARRAYS
console.log("Iteracion de arrays:");

//for
console.log("For:");
 let numeros4 = [10, 20, 30];
            for (let i = 0; i < numeros4.length; i++) {
            console.log(`El elemento en el índice ${i} es: ${numeros4[i]}`);
            }

//map
console.log("Map:");
let nombres = ["Ana", "Pedro", "Luisa"];
            nombres.map(function(nombre) {
            console.log(`Hola, ${nombre}!`);
            });

//forEach
console.log("For each:");
let colores3 = ["rojo", "verde", "azul"];
            colores3.forEach(function(color, indice) {
            console.log(`El color en la posición ${indice} es: ${color}`);
            });

//filter
console.log("Filter:");
let edades = [15, 22, 18, 30, 12];
            let mayoresDeEdad = edades.filter(function(edad) {
            return edad >= 18;
            });
            console.log(mayoresDeEdad); 
