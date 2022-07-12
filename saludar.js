//*Saludar con condiciones segun la hora.
/*
   Buenos dias = 6am - 11am 
   Buenas tardes = 12pm - 18pm
   Buenas noches = 19pm - 23pm
   Dejame dormir = 0pm - 5am
   */

const msg = (hora) => {
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
  }
};

msg(); //!Si no se ingresa ningun valor
msg(10); //*10am
msg(15); //*15pm
msg(22); //*22pm
msg(2); //*2am
