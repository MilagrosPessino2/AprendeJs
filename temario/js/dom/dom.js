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

    //CSS

    function cambiarEstilo() {
      const miBoton = document.getElementById("btnEstilo");
            miBoton.style.backgroundColor = "green";
            miBoton.style.color = "white";
            miBoton.style.padding = "10px 20px";
    }


    //EVENTOS MOUSE

    document.getElementById("click").addEventListener("click", function () {
      this.style.backgroundColor = "#a2d5f2";
      this.textContent = "¡Hiciste click!";
    });

    document.getElementById("mouseover").addEventListener("mouseover", function () {
      this.style.backgroundColor = "#c3f584";
      this.textContent = "¡Mouse sobre!";
    });

    document.getElementById("mouseout").addEventListener("mouseout", function () {
      this.style.backgroundColor = "#f9c6c9";
      this.textContent = "¡Saliste del área!";
    });

    document.getElementById("mousedown").addEventListener("mousedown", function () {
      this.style.backgroundColor = "#f6d186";
      this.textContent = "¡Presionaste!";
    });

    document.getElementById("mouseup").addEventListener("mouseup", function () {
      this.style.backgroundColor = "#d5a6bd";
      this.textContent = "¡Soltaste el botón!";
    });

    document.getElementById("mousemove").addEventListener("mousemove", function () {
      this.style.backgroundColor = "#bde0fe";
      this.textContent = "¡Moviendo el mouse!";
    });

    //EVENTOS TECLADO 

    const input = document.getElementById("teclado");
    const log = document.getElementById("log");

    input.addEventListener("keydown", (e) => {
      log.textContent = `keydown: tecla presionada → ${e.key}`;
    });

    input.addEventListener("keypress", (e) => {
      log.textContent = `keypress: se ingresó carácter → ${e.key}`;
    });

    input.addEventListener("keyup", (e) => {
      log.textContent = `keyup: tecla soltada → ${e.key}`;
    });

    //EVENTOS FORMULARIO 
    const form = document.getElementById("miFormulario");
    const nombre = document.getElementById("nombre");
    const color = document.getElementById("color");
    const log2 = document.getElementById("log2");

    form.addEventListener("submit", (e) => {
      e.preventDefault(); 
      log2.textContent = "Evento submit: ¡Formulario enviado!";
    });

    nombre.addEventListener("focus", () => {
      log2.textContent = "Evento focus: campo nombre enfocado.";
    });

    nombre.addEventListener("blur", () => {
      log2.textContent = "Evento blur: campo nombre perdió el foco.";
    });

    color.addEventListener("change", () => {
      log2.textContent = `Evento change: color seleccionado → ${color.value}`;
    });

    //EVENTOS VENTANA

    const info = document.getElementById("info");

    window.addEventListener("load", () => {
      console.log("Evento load");
      info.textContent = "Evento load: página y recursos completamente cargados.";
    });

    document.addEventListener("DOMContentLoaded", () => {
      console.log("Evento DOMContentLoaded");
      info.textContent = "Evento DOMContentLoaded: HTML completamente parseado.";
    });

    window.addEventListener("resize", () => {
      info.textContent = `Evento resize: nueva dimensión → ${window.innerWidth}px x ${window.innerHeight}px`;
    });

    window.addEventListener("scroll", () => {
      info.textContent = `Evento scroll: posición vertical → ${window.scrollY}px`;
    });

    //MANIPULACION DINAMICA 

    let nuevoElemento; 

    function crearElementos() {
      const contenedor = document.getElementById("contenedor");

  
      nuevoElemento = document.createElement("div");
      nuevoElemento.style.border = "1px solid #555";
      nuevoElemento.style.padding = "10px";
      nuevoElemento.style.marginTop = "10px";

     
      const texto = document.createTextNode("Soy un nuevo nodo de texto dentro del div.");
      nuevoElemento.appendChild(texto);

     
      const comentario = document.createComment("Este es un comentario en el DOM");
      contenedor.appendChild(comentario); 

      
      contenedor.appendChild(nuevoElemento);
    }

    function insertarAntes() {
      const contenedor = document.getElementById("contenedor");
      const referencia = document.getElementById("referencia");

      if (!nuevoElemento) {
        alert("Primero tenés que crear el elemento.");
        return;
      }

      contenedor.insertBefore(nuevoElemento, referencia);
    }

    function eliminarConRemoveChild() {
      const contenedor = document.getElementById("contenedor");
      if (nuevoElemento && contenedor.contains(nuevoElemento)) {
        contenedor.removeChild(nuevoElemento);
        console.log("Eliminado con removeChild");
      }
    }

    function eliminarConRemove() {
      if (nuevoElemento && nuevoElemento.parentNode) {
        nuevoElemento.remove();
        console.log("Eliminado con .remove()");
      }
    }