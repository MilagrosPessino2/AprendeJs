// ==============================
//  OBJETOS
// ==============================

//CREACION DE OBJETOS

 console.log("CREACION DE OBJETOS:");
   const miObjeto = {
            nombre: "Producto A",
            precio: 25.99,
            disponible: true,
            mostrarDetalles: function() { 
                console.log(`Nombre: ${this.nombre}, Precio: $${this.precio}, Disponible: ${this.disponible}`);
                return { nombre: this.nombre, precio: this.precio, disponible: this.disponible }},
            decirNombre: function (){
                console.log(this.nombre);
                return this.nombre;
            }
            };
            console.log(miObjeto);

//metodos

function obtenerNombre (){
    return miObjeto.decirNombre();
}

function obtenerPrecio(){
    return miObjeto.precio;
}

function obtenerPrecio2(){
    const propiedad = miObjeto.precio
    return [propiedad];
};


function ObtenerDisponibilidad (){
    return miObjeto.disponible;
}

function obtenerDetalles (){
    return miObjeto.mostrarDetalles();
}

function mostrarPropiedadesObjeto(objeto, elementoDestino) {
    for (const propiedad in objeto) {
        if (objeto.hasOwnProperty(propiedad)) {
            const nuevoParrafo = document.createElement("p");
            nuevoParrafo.textContent = `${propiedad}: ${objeto[propiedad]}`;
            elementoDestino.appendChild(nuevoParrafo);
        }
    }
}




//Acceso a propiedades

//notacion .
console.log("Mostrando acceso a propiedades con . : ");
console.log(miObjeto.nombre);
console.log(miObjeto.precio);

//notacion []
console.log("Mostrando acceso a propiedades con [] : ");
console.log(miObjeto["disponible"]);
const propiedad = "precio";
console.log(miObjeto[propiedad]);

//this
const otroObjeto = {
                       marca: "Samsung",
                       modelo: "Galaxy S21",

                       descripcion: function() {
                       return `Este es un ${this.marca} ${this.modelo}.`;}
                    };
 console.log(otroObjeto.descripcion());

 function mostrarObjeto(){
    return otroObjeto.descripcion();
 }
