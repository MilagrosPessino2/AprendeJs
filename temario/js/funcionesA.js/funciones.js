// ==============================
//  FUNCIONES DE ORDEN SUPERIOR 
// ==============================

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.boton-resultado');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const tipo = boton.dataset.resultado;
            const contenedor = document.getElementById('resultados-' + tipo);

            let resultado = '';
            switch (tipo) {
                case 'map2':
                let nombre = "Mili"
                resultado = `Duplicar 5: ${nombre}<br>Triplicar 5: )}`;
               // console.log(duplicar(2));   
                //console.log(triplicar(3))
                break;

                case 'map':
                    let numeros = [1, 2, 3];
                    let dobles = numeros.map(function(numero) {
                    return numero * 2;
                     });
                    resultado = `Dobles: ${dobles}<br>Array: ${JSON.stringify(numeros)}`;
                    console.log(dobles); 
                    console.log(numeros); 
                    break;

                case 'filter':
                    const edades = [15, 22, 18, 30, 12];
                    const mayores = edades.filter(function(edad) { 
                    return edad >= 18;
                    });
                    resultado = `Mayores: ${JSON.stringify(mayores)}`; 
                    console.log(mayores);
                    break;

                case 'filter-c':
                    const edades2 = [15, 22, 18, 30, 12];
                    const mayores2 = edades2.filter(function(edad) { 
                    return edad >= 18;
                    });
                    resultado = `Mayores: ${JSON.stringify(mayores2)}`; 
                    console.log(mayores2);
                    break;

                case 'reduce':
                    const precios = [10, 20, 5];
                    const total = precios.reduce(function(acumulador, precio) { 
                    return acumulador + precio;
                    }, 0);
                    resultado = `Toral: ${JSON.stringify(total)}`; 
                    console.log(total);
                    break;
                    
                default:
                    resultado = 'Resultado no disponible.';
            }

            contenedor.innerHTML = resultado;
        });
    });
});