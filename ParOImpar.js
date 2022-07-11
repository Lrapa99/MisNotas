//* Identificar cual es un numero Par o Impar.


//En este ejemplo exite un objeto que contine la propiedad funciones, la cual tambien posee un objeto como valor, y este a su vez contiene una funcion que realiza tal procedimiento, en este caso es identificar que numero es Par o Impar.

const obj = {
  funciones: {
    ParOImpar: function ParOImpar(valor) {
      let cal = valor % 2;

      let resul = valor
        ? cal === 0
          ? `El numero ${valor} es Par`
          : `El numero ${valor} es Impar`
        : "No hay datos, primero ingrese un numero";

      return resul;
    },
  },
};


console.log(obj.funciones.ParOImpar());     //!Si no le pasamos un valor
console.log(obj.funciones.ParOImpar(2));    //*Si le pasamos un numero Par
console.log(obj.funciones.ParOImpar(15));   //*Si le pasamos un numero Impar
