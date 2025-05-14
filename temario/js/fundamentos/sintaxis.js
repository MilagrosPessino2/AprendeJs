// ==============================
//  Variables: var, let, const
// ==============================

        console.log("Declaraciones:");
        // Declaración con var
        var nombre = "Carlos";

        // Declaración con let
        let edad = 30;

        // Declaración con const
        const PI = 3.1416;

        console.log(nombre,edad,PI);

        
        //variable sin valor
        console.log("Variable sin valor:");
        let sinDeclarar;
        console.log(sinDeclarar);

        //variable sin declarar
        //console.log(mili);

// ==============================
// Tipos de datos primitivos
// ==============================
        console.log("tipos de datos primitivos:");
        let apellido = "Pessino";           // String
        let anio = 2025;                // Number
        let esEstudiante = true;      // Boolean
        let identificador = Symbol(); // Symbol
        let datoIndefinido;           // undefined
        let valorNulo = null;         // null
        let numeroGrande = 9007199254740992n; // BigInt

        console.log(apellido,anio,esEstudiante,identificador,datoIndefinido,valorNulo,numeroGrande)

// ==============================
// TOperadores
// ==============================

        //operadores Aritmeticos
        console.log("operadores Aritmeticos:");
        let a = 4; let b = 2;

        console.log(a + b); // 6
        console.log(a - b); // 2
        console.log(a * b); // 8
        console.log(a / b); // 2
        console.log(a % b); // 1
        console.log(a ** 2); // 16
        a++;
        b--;
        console.log(a, b); // 5, 1

        //operadores logicos
        console.log("Operadores logicos:");
        let esMayor = true;
        let esAlumno = false;
        console.log(esMayor && esAlumno); // false
        console.log(esMayor || esAlumno); // true
        console.log(!esAlumno);           // true

        //operadores de comparacion
        console.log("Operadores de comparacion:");
        let x = 5;
        let y = "5";
        console.log(x == y);  // true
        console.log(x === y); // false
        console.log(x != y);  // false
        console.log(x !== y); // true
        console.log(x > 3);   // true
        console.log(x <= 5);  // true          
    

    
    