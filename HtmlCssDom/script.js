// Definir los productos y sus precios
const productos = {
    Aqua: 200,
    Emocion: 180,
    Alegria: 160,
    Frescura: 150
  };
// Crear un objeto para almacenar las ventas de cada vendedor configuracion de get and set
const ventas = {
    Juana: {
      Aqua: 0,
      Emocion: 0,
      Alegria: 0,
      Frescura: 0,
      total: 0
    },
    Pedro: {
      Aqua: 0,
      Emocion: 0,
      Alegria: 0,
      Frescura: 0,
      total: 0
    }
  };
// Registrar las ventas de cada vendedor y cargue de data

// let vendedor = prompt("Ingresa el nombre del vendedor 1. Juana 2. Pedro");
// if (vendedor===Juana){
//      ventas.Juana.Aqua  = prompt("Ingrese cantidad de productos vendidos de Aqua");
//      ventas.Juana.Emocion  = prompt("Ingrese cantidad de productos vendidos de Emocion");
//      ventas.Juana.Alegria  = prompt("Ingrese cantidad de productos vendidos de Alegria");
//      ventas.Juana.Frescura  = prompt("Ingrese cantidad de productos vendidos de Frescura");

function ventasJuana(){
    let Juana = new Object();
     ventas.Juana.Aqua  = 5;
     ventas.Juana.Emocion  = 3;
     ventas.Juana.Alegria  = 7;
     ventas.Juana.Frescura  = 4;         
     return ventas.Juana;
    }

// }else if (vendedor===Pedro){
//      ventas.Pedro.Aqua  = prompt("Ingrese cantidad de productos vendidos de Aqua");
//      ventas.Pedro.Emocion  = prompt("Ingrese cantidad de productos vendidos de Emocion");
//      ventas.Pedro.Alegria  = prompt("Ingrese cantidad de productos vendidos de Alegria");
//      ventas.Pedro.Frescura  = prompt("Ingrese cantidad de productos vendidos de Frescura");


function ventasPedro(){
    let Pedro = new Object();
    ventas.Pedro.Aqua  = 2;
    ventas.Pedro.Emocion  = 2;
    ventas.Pedro.Alegria  = 2;
    ventas.Pedro.Frescura  = 2;  
    
    return ventas.Pedro;
}
    
// }
// else{
//     console.log('Este vendedor no se encuentra en la base de datos');
// }
//Calcular la suma total de dinero recolectado por cada vendedor
// function calculoDineroRecolectado(ventasUsuario){

//     for (let vendedor in ventasUsuario) {
//         let total = 0; // permite terminar la lectura del objeto
//         for (let producto in ventasUsuario[vendedor]) {
//           if (producto !== 'total') {
//             total += ventas[vendedor][producto] * productos[producto];
//           }
//         }
//         // ventas[vendedor].total = total;
//         ventas[vendedor].total = total;
//         return ventas[vendedor].total;
//       }

// }


function calculoDineroRecolectado(ventasUsuario){

   console.log(ventasUsuario);
   const resultado = {Aqua: 0, Emocion: 0, Alegria: 0, Frescura: 0, total: 0};
   for (let producto in productos) {
    resultado[producto] += productos[producto] * ventasUsuario[producto];
    console.log(producto);
    resultado.total += resultado[producto]
    console.log(resultado.total);
   }

   return resultado;
}


let ventasPedro_ = ventasPedro();
let ventasTotalesUsuario1 = calculoDineroRecolectado(ventasPedro_);
console.log(ventasTotalesUsuario1);
let ventasJuana_ = ventasJuana();
let ventasTotalesUsuario2 = calculoDineroRecolectado(ventasJuana_);
console.log(ventasTotalesUsuario2);

// calculoDineroRecolectado(Pedro);



