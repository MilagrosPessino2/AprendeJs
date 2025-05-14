// ==============================
//  FUNCIONES
// ==============================

//THIS

 console.log("THIS:");
    const persona = {
        nombre: "Ana",
        saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
            }
        };
    persona.saludar(); // 'this' dentro de 'saludar' se refiere a 'persona'

//LLAMADA EXPLICITA

 console.log("LLAMADA EXPLICITA:");

function presentarse(profesion) {
    console.log(`Mi nombre es ${this.nombre} y soy ${profesion}`);}
    const otraPersona = { nombre: "Pedro" };
    presentarse.call(otraPersona, "ingeniero");   // this es otraPersona
    presentarse.apply(otraPersona, ["músico"]);  // this es otraPersona
    const saludarPedro = presentarse.bind(otraPersona, "artista"); // Crea una nueva función con 'this' atado
    saludarPedro();


 //AMBITO DE LA VARIABLE
 console.log("Ambito de variable:");
//global 
    let variableGlobal ="Soy una variable global";

    function mostrarVariable(){
    let variableLocal="Soy una variable local";
     return variableLocal;
    }

console.log(mostrarVariable(),
    variableGlobal);

//CLOSURES
 console.log("CLOSURES:");
 function crearContador() {
    let contador = 0;
    return {
    incrementar: function() {
    contador++;
    },
     obtenerValor: function() {
    return contador;
    }
        };
        }

    const miContador = crearContador();
    miContador.incrementar();
    miContador.incrementar();
    console.log(miContador.obtenerValor());

//SCOPE Y HOISTING
 console.log("SCOPE Y HOISTING:");
 console.log(x); // undefined (la declaración de 'x' se eleva, pero no su inicialización)
        var x = 10;

        miFuncionElevada(); // "Hola!" (la declaración de la función se eleva)

        function miFuncionElevada() {
        console.log("Hola!");
        }

        // miFuncionExpresion(); // Esto generaría un error (la inicialización no se eleva)
        var miFuncionExpresion = function() {
        console.log("Adiós!");
        };

        // Con let y const, también hay hoisting, pero no se inicializan.
        // Intentar acceder a ellas antes de su declaración resulta en un error (Temporal Dead Zone).
        // console.log(y); // Error: Cannot access 'y' before initialization
        let y = 20;
        // console.log(z); // Error: Cannot access 'z' before initialization
        const z = 30;
    