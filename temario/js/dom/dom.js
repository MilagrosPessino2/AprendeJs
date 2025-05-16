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
                case 'getId':
                    const miTitulo = document.getElementById("titulo-principal");
                    resultado = `Traído con getElementById: ${miTitulo.textContent}`;
                    console.log(miTitulo);
                    break;
                case 'classN':
                    const elementosLista = document.getElementsByClassName("item-lista");
                    const primerElemento = elementosLista[0];
                    console.log(elementosLista);
                   const textos = Array.from(elementosLista).map(el => el.textContent);
                    resultado = `HTMLCollection de elementos con la clase "item-lista: ${textos.join(", ")} <br>Primer Elemento: ${primerElemento.textContent}`;
                    break;
                case 'tagName':
                    const todosLosSpan = document.getElementsByTagName("span");
                    console.log(todosLosSpan);
                    const spans = Array.from(todosLosSpan).map(el => el.textContent);
                    resultado = `HTMLCollection de elementos con tagName span: ${spans.join(", ")} <br>Cantidad span: ${todosLosSpan.length}`;
                    console.log(todosLosSpan.length);
                    break;
                case 'selector':
                    const primerItemLista = document.querySelector(".item-lista");
                    resultado = `Traído con querySlector: ${primerItemLista.textContent}`;
                    console.log(primerItemLista);
                    break;
                case 'selectorAll':
                    const todosLosItemsLista = document.querySelectorAll(".item-lista");
                    console.log(todosLosItemsLista);
                    const ele = Array.from(todosLosItemsLista).map(el => el.textContent);
                    resultado = `HTMLCollection de elementos con selectorAll: ${ele.join(", ")}`;
                    break;
                case 'cambiarTexto':
                    const miParrafo = document.querySelector("#mi-parrafo");
                    console.log(miParrafo.textContent);
                    miParrafo.textContent = "Nuevo texto para el párrafo."
                    resultado = `Se cambio el texto`;
                    console.log(miParrafo.textContent);
                    break;
                default:
                    resultado = 'Resultado no disponible.';
            }

            contenedor.innerHTML = resultado;
        });
    });
});

function cambiarEnlace() {
      const enlace = document.getElementById("miEnlace");
      enlace.setAttribute("href", "https://www.google.com/url?sa=E&source=gmail&q=https://www.nuevojemplo.net");
      enlace.setAttribute("textContent", "Ir a Nuevo Ejemplo"); // Cambiamos el texto del enlace
      enlace.innerHTML="Ir a Nuevo Ejemplo";
    }

function mostrarDetallesEnlace() {
      const enlace = document.getElementById("miEnlace");
      const url = enlace.getAttribute("href");
      const destino = enlace.getAttribute("target");
      const texto = enlace.getAttribute("textContent"); 

      console.log("URL del enlace:", url);
      console.log("Destino (target):", destino);
      console.log("Texto del enlace:", texto);
    }

    function eliminarTarget() {
      const enlace = document.getElementById("miEnlace");
      const url =enlace.getAttribute("href");
      enlace.removeAttribute("target");
    }