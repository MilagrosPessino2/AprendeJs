// ==============================
//  CONDICIONALES
// ==============================


//IF
 console.log("IF:");
    let edad = 18;
            if (edad >= 18) {
            console.log("Eres mayor de edad.");
            }
//ELSE
console.log("ELSE:");
    let temperatura = 20;
            if (edad > 18) {
            console.log("Hace calor");
            } else {
                console.log("Hace frio");
            }
//ELSE IF
console.log("ELSE IF:");
    let nota = 4;
            if (nota > 7) {
            console.log("Promocionado");
            } else if (nota >= 4){
                console.log("Aprobado");
            } else{
                console.log("Reprobado");
            }

//SWITCH
console.log("SWITCH:");
    let dia = "Viernes";
            switch(dia){
                case "Lunes":console.log("Es inicio de semana");
                break;
                case "Miercoles":console.log("Es mitad de semana");
                break;
                case "Viernes":console.log("Es el ultimo dia de la semana");
                break;
                case "Sabado":
                case "Domingo":
                    console.log("Es fin de semana.");
                    break;
                default: console.log("Es entre de semana.");
            }

// ==============================
//  BUCLES
// ==============================

//for
console.log("FOR:");
for (let i = 0; i < 5; i++) {
            console.log("El valor de i es: " + i);
            }

//WHILE
console.log("WHILE:");
let contador = 0;
            while (contador < 3) {
            console.log("Contador: " + contador);
            contador++;
            }
//DO WHILE
console.log("DO WHILE:");
let numero = 0;
            do {
            console.log("Número: " + numero);
            numero++;
            } while (numero < 2);
//FOR EACH
console.log("FOR EACH:");
let colores = ["rojo", "verde", "azul"];

     colores.forEach(function(color) {
        console.log("Color: " + color);});
        
//función de flecha (arrow function)
colores.forEach(color => console.log("Color (arrow): " + color));
            


    