const opc = (a , b , v) =>{

    switch (v) {
        case "suma": 
        return a + b
        case "resta":
        return a - b
        case "division":
        return a / b
        case "multiplicacion":
        return a * b

        default: return "No existe la opcion"
    }
} 


const msg = () => {
 return "Debe ingresar dos valores y la operacion que desea realizar"
}


const con = () => {return "a && b && v"}


const oper = (a , b , v) => con() ? opc(a, b , v) : msg()




console.log(oper(2,10,"suma"));