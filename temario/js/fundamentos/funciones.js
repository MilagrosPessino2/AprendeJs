// ==============================
//  FUNCIONES
// ==============================


//FUNCIONES TRADICIONALES

 console.log("FUNCIONES TRADICIONALES:");
    // Función con nombre
     function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
        }

     saludar("Carlos"); // Llama a la función

    // Función anónima (asignada a una variable)
    const multiplicar = function(a, b) {
     return a * b;
        };

    let resultado = multiplicar(5, 4);
     console.log(resultado); // Imprime 20


//ARROW FUNCTIONS
   
 console.log("ARROW FUNCTIONS:");
    // Sintaxis básica
    const sumar = (a, b) => {
    return a + b;
      };

     // Si solo hay un parámetro, los paréntesis son opcionales
    const cuadrado = numero => {
    return numero * numero;
        };

    // Si la función solo retorna un valor, las llaves y la palabra clave 'return' son opcionales
    const cubo = numero => numero ** 3;
    console.log(sumar(2, 3));    // Imprime 5
    console.log(cuadrado(5)); // Imprime 25
    console.log(cubo(3));     // Imprime 27

//FUNCIONES CALLBACK
   
 console.log("FUNCIONES CALLBACK:");
    function procesar(valor, callback) {
    console.log("Procesando valor: " + valor);
    callback(valor * 2); // Llama a la función callback con el valor procesado
        }

    function mostrarResultado(resultado) {
    console.log("El resultado es: " + resultado);
        }

    procesar(5, mostrarResultado); // 'mostrarResultado' es el callback

//FUNCIONES RECURSIVAS
   
 console.log("FUNCIONES RECURSIVAS:");
    function factorial(n) {
    if (n === 0) { // Caso base
        return 1;
    } else {
        return n * factorial(n - 1); // Llamada recursiva
        }
     }

console.log(factorial(5)); // Imprime 120 (5 * 4 * 3 * 2 * 1)


//FUNCIONES AUTOAJUSTABLES
   
console.log("FUNCIONES AUTOAJUSTABLES:");

    // Sintaxis común usando paréntesis alrededor de la definición de la función
    (function() {
    let mensajeInterno = "Hola desde la IIFE!";
    console.log(mensajeInterno);
    })();

    // Otra sintaxis común
    (() => {
  const otroMensaje = "Otra IIFE con arrow function.";
  console.log(otroMensaje);
    })();
            