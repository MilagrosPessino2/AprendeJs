// ==============================
//  CALLSBACKS Y PROMESAS
// ==============================

document.addEventListener('DOMContentLoaded', function () {
    const botones = document.querySelectorAll('.boton-resultado');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const tipo = boton.dataset.resultado;
            const contenedor = document.getElementById('resultados-' + tipo);

            let resultado = '';
            switch (tipo) {
                case 'calls':
                    let numeros = [1, 2, 3];
                    let dobles = numeros.map(function(numero) {
                    return numero * 2;
                     });
                    resultado = `Dobles: ${dobles}<br>Array: ${JSON.stringify(numeros)}`;
                    console.log(dobles); 
                    console.log(numeros); 
                    break;
                case 'prome':
                   contenedor.innerHTML = "Obteniendo datos..."; // mensaje temporal
        obtenerDatos()
            .then(function(resultado) {
                const edades = [15, 22, 18, 30, 12];
                const mayores = edades.filter(function(edad) { 
                    return edad >= 18;
                });
                contenedor.innerHTML = `${resultado.mensaje}<br>Mayores de edad: ${JSON.stringify(mayores)}`;
                console.log("Éxito:", resultado.mensaje);
                console.log("Mayores:", mayores);
            })
            .catch(function(error) {
                contenedor.innerHTML = `Error: ${error}`;
                console.error("Error:", error);
            })
            .finally(function() {
                console.log("Operación finalizada");
            });
                break;
                default:
                    resultado = 'Resultado no disponible.';
            }

            contenedor.innerHTML = resultado;
        });
    });
});