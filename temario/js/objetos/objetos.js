// ==============================
//  OBJETOS
// ==============================

//CREACION DE OBJETOS

 console.log("CREACION DE OBJETOS:");
 const miObjetoPerro = {
            //propiedades
            nombre: "Afra", 
            peso: 21.99,
            disponible: true,
            ladrar: function(){
                console.log(this.nombre +" dice guau");
            },
            mostrarObjeto: function(){
                console.log("nombre:"+this.nombre+","+"peso:"+this.peso+","+"disponible:"+this.disponible);
            }
        }
   console.log("este es mi objeto:"+ miObjetoPerro); //muestra objet
   
   
   //metodos
   console.log("Mostrando metodos: ");
   miObjetoPerro.mostrarObjeto();
   miObjetoPerro.ladrar()

//Acceso a propiedades

//notacion .
console.log("Mostrando acceso a propiedades con . : ");
console.log(miObjetoPerro.nombre);

//notacion []
console.log("Mostrando acceso a propiedades con [] : ");
console.log(miObjetoPerro["disponible"]);

   
