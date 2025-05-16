// ==============================
//  ARRAYS - Ejemplos y Resultados
// ==============================

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.boton-resultado');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const tipo = boton.dataset.resultado;
            const contenedor = document.getElementById('resultados-' + tipo);

            let resultado = '';
            switch (tipo) {
                case 'push':
                    let frutas1 = ["manzana", "banana"];
                    let nuevaLongitud1 = frutas1.push("naranja");
                    resultado = `Array: ${JSON.stringify(frutas1)}<br>Nueva longitud: ${nuevaLongitud1}`;
                    break;
                case 'pop':
                    let frutas2 = ["manzana", "banana", "naranja"];
                    let eliminado2 = frutas2.pop();
                    resultado = `Array: ${JSON.stringify(frutas2)}<br>Elemento eliminado: ${eliminado2}`;
                    break;
                case 'shift':
                    let frutas3 = ["manzana", "banana", "naranja"];
                    let eliminado3 = frutas3.shift();
                    resultado = `Array: ${JSON.stringify(frutas3)}<br>Elemento eliminado: ${eliminado3}`;
                    break;
                case 'unshift':
                    let frutas4 = ["banana", "naranja"];
                    let nuevaLongitud4 = frutas4.unshift("manzana", "kiwi");
                    resultado = `Array: ${JSON.stringify(frutas4)}<br>Nueva longitud: ${nuevaLongitud4}`;
                    break;
                case 'map':
                    let numeros1 = [1, 2, 3];
                    let dobles = numeros1.map(n => n * 2);
                    resultado = `Array original: ${JSON.stringify(numeros1)}<br>Dobles: ${JSON.stringify(dobles)}`;
                    break;
                case 'filter':
                    let numeros2 = [1, 2, 3, 4, 5];
                    let pares = numeros2.filter(n => n % 2 === 0);
                    resultado = `Original: ${JSON.stringify(numeros2)}<br>Pares: ${JSON.stringify(pares)}`;
                    break;
                case 'reduce':
                    let numeros3 = [1, 2, 3, 4];
                    let suma = numeros3.reduce((acc, n) => acc + n, 0);
                    let mult = numeros3.reduce((acc, n) => acc * n, 1);
                    resultado = `Suma: ${suma}<br>Multiplicación: ${mult}`;
                    break;
                case 'acceso':
                    let colores1 = ["rojo", "verde", "azul"];
                    resultado = `Elemento 0: ${colores1[0]}<br>Elemento 2: ${colores1[2]}<br>Elemento 3: ${colores1[3]}`;
                    break;
                case 'modificacion':
                    let colores2 = ["rojo", "verde", "azul"];
                    colores2[1] = "amarillo";
                    resultado = `Colores modificados: ${JSON.stringify(colores2)}`;
                    break;
                case 'for-loop':
                    let numeros4 = [10, 20, 30];
                    resultado = numeros4.map((n, i) => `Índice ${i}: ${n}`).join('<br>');
                    break;
                case 'map-iteracion':
                    let nombres = ["Ana", "Pedro", "Luisa"];
                    resultado = nombres.map(nombre => `Hola, ${nombre}!`).join('<br>');
                    break;
                case 'forEach':
                    let colores = ["rojo", "verde", "azul"];
                    colores.forEach((color, indice) => {
                        resultado += `El color en la posición ${indice} es: ${color} <br>`;
                    });
                    break;
                case 'filter-iteracion':
                    let edades  = [15, 22, 18, 30, 12];
                    let mayoresDeEdad = edades.filter(edad => edad >= 18);
                    resultado = `Original: ${JSON.stringify(edades)}<br>Mayores de edad: ${JSON.stringify(mayoresDeEdad)}`;
                    break;
                default:
                    resultado = 'Resultado no disponible.';
            }

            contenedor.innerHTML = resultado;
        });
    });
});