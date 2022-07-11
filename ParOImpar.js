//* Identificar cual es un numero Par o Impar.

function ParOImpar(valor){

    let cal = valor % 2

    let resul = valor ? cal == 0 ? `El numero ${valor} es Par`:`El numero ${valor} es Impar` : "No hay datos, primero ingrese un numero"

    return resul
}

console.log(ParOImpar()); 
console.log(ParOImpar(2)); 
console.log(ParOImpar(3)); 




