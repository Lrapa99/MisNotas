//* Este es un objeto, que posee en su interior muchas propiedades con sus respectivos valores, existen propiedades que tienen funciones, arreglos, e incluso un objeto como valor.

const obj = {
  name: "luis",
  lastname: "rapalino",
  edad: 23,
  hobbies: ["run", "eat", "read"],
  soltero: false,
  contact: {
    mail: "luisrap88@gmail.com",
    cel: "300204964554"
  },
  saludar: function (hora) {
      if (hora >= 0) {
        if (hora >= 6 && hora <= 11) {
          console.log("Buenos dias!");
        } else if (hora >= 12 && hora <= 18) {
          console.log("Buenas tardes!");
        } else if (hora >= 19 && hora <= 23) {
          console.log("Buenas noches!");
        } else if (hora >= 0 && hora <= 5) {
          console.log("Dejame dormir");
        }
      } else {
        console.log("No hay datos, primero ingrese la hora.");
    };
  },
  bye: function () {
    return "Bye hasta la proxima!!";
  },
  decirMyName: function () {
    return `Hola me llamo ${this.name} ${this.lastname} y tengo ${
      this.edad
    } años.
        Me puedes contactar por estos medios: 
        ${this.contact.cel}
        ${this.contact.mail}
        ${this.bye()}

            `;
  },
};

/* Creamos una funcion Expresada, asignandola a una variable Let.
Esta funcion se encargara se buscar una propiedad que se pasa por parametro, y decir si existe o no.
*/

let edad = obj.edad;

const suma = (edad) => {
  return edad + 2;
};

const resta = (edad) => {
  return edad - 2;
};

let bus = (valor) => {
  let busquedad = valor
    ? obj.hasOwnProperty(valor)
      ? `La propiedad SI se encuentra dentro del objeto:
    Ejecutamos la operacion: 
    Resultado: ${suma(edad)}`
      : `La propiedad NO se encuentra dentro del objeto 
    
    Ejecutamos la operacion: 
    Resultado: ${resta(edad)}
    
    `
    : "Debe pasar un Parametro";
  return busquedad;
};

/*Ejecutamos la funcion, y le pasamos el parametro requerido, de lo contrario nos enviara un mensaje de  recomendacion
 */



obj.saludar()
obj.saludar(0)
obj.saludar(10)
obj.saludar(15)
obj.saludar(22)
