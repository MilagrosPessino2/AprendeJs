// ==============================
//  ARRAYS - Ejemplos y Resultados
// ==============================

document.addEventListener('DOMContentLoaded', () => {
    const resultadoContenedor = {};
    document.querySelectorAll('.contenedor-resultados').forEach(div => {
        resultadoContenedor[div.id.split('-')[1]] = div;
    });

    const ejemplos = {
        push: () => {
            const frutas = ["manzana", "banana"];
            const nuevaLongitud = frutas.push("naranja");
            return [`Longitud del array: ${nuevaLongitud}`, `Contenido del array: ${frutas.join(", ")}`];
        },
        pop: () => {
            const frutas = ["manzana", "banana", "naranja"];
            const ultimoElemento = frutas.pop();
            return [`Contenido del array: ${frutas.join(", ")}`, `Elemento eliminado: ${ultimoElemento}`];
        },
        shift: () => {
            const frutas = ["manzana", "banana", "naranja"];
            const primerElemento = frutas.shift();
            return [`Contenido del array: ${frutas.join(", ")}`, `Elemento eliminado: ${primerElemento}`];
        },
        unshift: () => {
            const frutas = ["banana", "naranja"];
            const nuevaLongitud = frutas.unshift("manzana", "kiwi");
            return [`Longitud del array: ${nuevaLongitud}`, `Contenido del array: ${frutas.join(", ")}`];
        },
        map: () => {
            const numeros = [1, 2, 3];
            const dobles = numeros.map(numero => numero * 2);
            return [`Array original: ${numeros.join(", ")}`, `Resultado del map: ${dobles.join(", ")}`];
        },
        filter: () => {
            const numeros = [1, 2, 3, 4, 5];
            const pares = numeros.filter(numero => numero % 2 === 0);
            return [`Array original: ${numeros.join(", ")}`, `Resultado del filter: ${pares.join(", ")}`];
        },
        reduce: () => {
            const numeros = [1, 2, 3, 4];
            const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
            const multiplicacion = numeros.reduce((acumulador, numero) => acumulador * numero, 1);
            return [`Array original: ${numeros.join(", ")}`, `Suma: ${suma}`, `Multiplicación: ${multiplicacion}`];
        },
        acceso: () => {
            const colores = ["rojo", "verde", "azul"];
            return [`Color en el índice 0: ${colores[0]}`, `Color en el índice 2: ${colores[2]}`, `Color en el índice 3: ${colores[3]}`];
        },
        modificacion: () => {
            const colores = ["rojo", "verde", "azul"];
            colores[1] = "amarillo";
            return [`Array modificado: ${colores.join(", ")}`];
        },
        'for-loop': () => {
            const numeros = [10, 20, 30];
            const mensajes = numeros.map((numero, indice) => `El elemento en el índice ${indice} es: ${numero}`);
            return mensajes;
        },
        'map-iteracion': () => {
            const nombres = ["Ana", "Pedro", "Luisa"];
            const mensajes = nombres.map(nombre => `Hola, ${nombre}!`);
            return mensajes;
        },
        'for-each': () => {
            const colores = ["rojo", "verde", "azul"];
            const mensajes = [];
            colores.forEach((color, indice) => mensajes.push(`El color en la posición ${indice} es: ${color}`));
            return mensajes;
        },
        'filter-iteracion': () => {
            const edades = [15, 22, 18, 30, 12];
            const mayoresDeEdad = edades.filter(edad => edad >= 18);
            return [`Edades originales: ${edades.join(", ")}`, `Mayores de edad: ${mayoresDeEdad.join(", ")}`];
        },
    };

    document.querySelectorAll('.boton-resultado').forEach(boton => {
        boton.addEventListener('click', function() {
            const resultadoId = this.dataset.resultado;
            const contenedor = resultadoContenedor[resultadoId];
            if (contenedor && ejemplos[resultadoId]) {
                contenedor.innerHTML = ''; // Limpiar resultados anteriores
                const resultados = ejemplos[resultadoId]();
                resultados.forEach(resultado => {
                    const p = document.createElement('p');
                    p.textContent = resultado;
                    contenedor.appendChild(p);
                });
            }
        });
    });
});