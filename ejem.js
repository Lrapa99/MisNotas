//*Examples

const user = {
  name: "luis",
  lastname: "rapalino",
  age: 23,
  sexo: "M",
  contact: "elrapa@gmail.com",
  saludar: function (valor) {
    let saludar = valor ? `Bienvenido ${valor}` : "error";
    return saludar;
  },
};

const user2 ={
    name: "sugey",
    lastname: "morales",
    age: 19, 
    sexo: "F",
    contact: "",
}

console.log(user.saludar("sugey"));
