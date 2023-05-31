// Contenido de script.js
//console.log("¡Hola desde script.js!");

//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.
// let userInput = prompt("¿Eres bellisimo/a?");
// if (userInput === `sí`) {
//     console.log("Ciertamente.");
// }
// else if (userInput === `no`) {
//     console.log("No te creo.");
// }
// else {
//     console.log("Eso que escribiste no lo eniendo")
// }
// 2. Solicitar al usuario un número, y determinar si es divisible entre dos o no Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2"

// let numero = prompt("Ingresa un número:");
// numero = parseInt(numero);
// if (numero % 2 === 0) {
//   console.log(`${numero} es divisible entre 2`);
// } else {
//   console.log(`${numero} No es divisible entre 2`);
// }

// 3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert.

// let numero = prompt("Ingresa un número:");
// numero = parseInt(numero);
// if(isNaN(numero)){
//     alert("El numero es 0");
// }
// else if(numero % 2 === 0) {
//   alert(`${numero} el númer es par`);
// } 
// else
// {
//   alert(`${numero} el número es impar`);
// }

// 4. Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
// "Ganaste un premio", en caso contrario mostrar el número y el mensaje
// “Lo sentimos, sigue participando”.

// let numero = prompt("Ingresa un número de cliente:");
// numero = parseInt(numero);
// if(numero === 1000){
//     console.log(`ganaste un premio`)
// }
// else {
//     console.log(`${numero} Lo sentimos, sigue participando`)
// }




// 5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es
// menor. No considerar el caso en que ambos números son iguales.

// let numero_uno = prompt("Ingresa el primer número:");
// numero_uno = parseInt(numero_uno);
// let numero_dos = prompt("Ingresa el segundo número");
// numero_dos = parseInt(numero_dos);

// if(numero_uno>numero_dos){
//     console.log(`${numero_dos} Este es el numero menor`)
// }
// else{
//     console.log(`${numero_uno} Este es el numero menor`)
// }

// 6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es
// el número mayor. Considerar el caso en que 2 números sean iguales.
// let numero_uno = prompt("Ingresa el primer número:");
// numero_uno = parseInt(numero_uno);
// let numero_dos = prompt("Ingresa el segundo número");
// numero_dos = parseInt(numero_dos);
// let numero_tres = prompt("Ingresa el tercer número");
// numero_tres = parseInt(numero_tres);

// if(numero_uno>numero_dos)
// {
//     if(numero_uno>numero_tres){
//         console.log(`${numero_uno} Este es el numero mayor`)
//     }
//     else{
//         console.log(`${numero_tres} Este es el numero mayor`)
//     }
// }
// else if (numero_dos>numero_tres){
//     console.log(`${numero_dos} Este es el numero mayor`)
// }
// else{
//     console.log(`${numero_tres} Este es el numero mayor`)
// }




// 7. Requerir al usuario que ingrese un día de la semana e imprimir un
// mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje
// diferente si es sábado o domingo. Si el día ingresado no es ninguno de
// esos, imprimir otro mensaje.

// let dia = prompt("Ingrese el dia de la semana a evaluar");

// if (dia === "lunes"){
//     console.log('efectivamente hoy es lunes')
// }
// else if (dia === "viernes"){
//     console.log("Si hoy es viernes de cervezas")
// }
// else if (dia === "sábado"||dia ==="domingo"){
//     console.log("Fin de semana activo")
// }
// else{
//     console.log("este dia no esta configurado")
// }

// 8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe
// comprobar que el número efectivamente esté en ese rango, si no lo está
// imprima un mensaje de error. Si lo está, imprima “reprobado” si la
// calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por
// último, “excelente” si es 10.

// let calificacion = prompt("Ingrese la nota a evaluar");
// calificacion = parseInt(calificacion);

// if (calificacion < 1 || calificacion>10){
//     console.log("ERROR - El rango de la calificacion no es permitido");
// }
// else if (calificacion>1&&calificacion<=5){
//     console.log("reprobado");
// }
// else if(calificacion>=6&&calificacion<=8){
//     console.log("regular");
// }
// else if(calificacion===9){
//     console.log("bien");
// }else if(calificacion===10){
//     console.log("excelente");
// }


// 9. Escribe un programa que responda a un usuario que quiere comprar un
// helado en una conocida marca de comida rápida cuánto le costará en
// función del topping que elija.
// ● El helado sin topping cuesta 50 MXN.
// ● El topping de oreo cuesta 10 MXN.
// ● El topping de KitKat cuesta 15 MXN.
// ● El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa
// le indicará “no tenemos este topping, lo sentimos.” y a continuación le
// informará el precio del helado sin ningún topping.

// let topping = prompt("¿ Como quiere ordenar su helado?");
// let helado_base = 50


// if(topping === "sin topping"){
//     console.log(`El valor del helado es de ${helado_base}`);
// }
// else if(topping === "topping de oreo"){
//     helado_base = helado_base + 10;
//     console.log(`El valor del helado es de ${helado_base}`);
// }else if(topping === "topping de KitKat"){
//     helado_base = helado_base + 15
//     console.log(`El valor del helado es de ${helado_base}`);
// }else if(topping === "topping de brownie"){
//     helado_base = helado_base + 20
//     console.log(`El valor del helado es de ${helado_base}`);
// }
// else{
//     console.log(`no tenemos este topping, lo sentimos, favor pagar ${helado_base}`);
// }


// 10. Un conocido portal de educación en tecnología está ofreciendo
// programas para aprender a desarrollar aplicaciones. Escribe un programa
// que le indique a la persona interesada cuánto deberá pagar
// mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su
// costo mensual:
// ● Course: $4999 MXN
// ● Carrera $3999 MXN
// ● Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el
// descuento correspondiente al precio final.
// ● Beca Facebook: 20% de descuento.
// ● Beca Google: 15% de descuento.
// ● Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario
// cuánto gastaría en total por el curso elegido, tomando en cuenta las
// siguientes duraciones:
// ● Course: 2 meses
// ● Carrera 6 meses
// ● Master: 12 meses

let opcionCurso = prompt("Elija una opción de curso:\n1. Course\n2. Carrera\n3. Master");
let beca = prompt("¿Cuenta con alguna beca?\n1. Beca Facebook\n2. Beca Google\n3. Beca Jesua\n4. No cuenta con beca");

let precio_mensual = ""
let precio_total = ""

let precios = {
    "Course": 4999,
    "Carrera": 3999,
    "Master": 2999
  };

let duraciones = {
    "Course": 2,
    "Carrera": 6,
    "Master": 12
  };
  let becas = {
    "Facebook": 0.2,
    "Google": 0.15,
    "Jesua": 0.5
  };

//   console.log(`control opcion ${opcionCurso}`);
//   console.log(`control beca ${beca}`);
if(opcionCurso === "Course"){
  if(beca ==="Facebook"){
    precio_mensual = precios.Course - (precios.Course*becas.Facebook);
    // console.log(`control precio mensual ${precio_mensual}`);
    precio_total = precio_mensual * duraciones.Course    
    console.log(`precio mensual con descuento ${precio_mensual}`);
    console.log(`precio total del curso ${precio_total}`);
  }else if(beca ==="Google"){
    precio_mensual = precios.Course - (precios.Course*becas.Google);
    // console.log(`control precio mensual ${precio_mensual}`);
    precio_total = precio_mensual * duraciones.Course    
    console.log(`precio mensual con descuento ${precio_mensual}`);
    console.log(`precio total del curso ${precio_total}`);
  }else if(beca ==="Jesua"){
    precio_mensual = precios.Course - (precios.Course*becas.Jesua);
    // console.log(`control precio mensual ${precio_mensual}`);
    precio_total = precio_mensual * duraciones.Course    
    console.log(`precio mensual con descuento ${precio_mensual}`);
    console.log(`precio total del curso ${precio_total}`);
  } else if(beca ==="No Beca"){
    precio_mensual =precios.Course;
    precio_total = precio_mensual * duraciones.Course    
    console.log(`precio mensual con descuento ${precio_mensual}`);
    console.log(`precio total del curso ${precio_total}`);
}    else  
  {
    precio_mensual =precios.Course;
    precio_total = precio_mensual * duraciones.Course    
    console.log(`precio mensual con descuento ${precio_mensual}`);
    console.log(`precio total del curso ${precio_total}`);
  }
}
else if(opcionCurso === "Carrera" ){
    if(beca==="Facebook"){
        precio_mensual = precios.Carrera - (precios.Carrera*becas.Facebook);
        // console.log(`control precio mensual ${precio_mensual}`);
        precio_total = precio_mensual * duraciones.Carrera    
        console.log(`precio mensual con descuento ${precio_mensual}`);
        console.log(`precio total del curso ${precio_total}`);
      }else if(beca ==="Google"){
        precio_mensual = precios.Carrera - (precios.Carrera*becas.Google);
        // console.log(`control precio mensual ${precio_mensual}`);
        precio_total = precio_mensual * duraciones.Carrera    
        console.log(`precio mensual con descuento ${precio_mensual}`);
        console.log(`precio total del curso ${precio_total}`);
      }else if(beca ==="Jesua"){
        precio_mensual = precios.Carrera - (precios.Carrera*becas.Jesua);
        // console.log(`control precio mensual ${precio_mensual}`);
        precio_total = precio_mensual * duraciones.Carrera    
        console.log(`precio mensual con descuento ${precio_mensual}`);
        console.log(`precio total del curso ${precio_total}`);
      } else if(beca ==="No Beca"){
        precio_mensual =precios.Carrera;
        precio_total = precio_mensual * duraciones.Carrera    
        console.log(`precio mensual con descuento ${precio_mensual}`);
        console.log(`precio total del curso ${precio_total}`);
    }    else  
      {
        precio_mensual =precios.Carrera;
        precio_total = precio_mensual * duraciones.Carrera    
        console.log(`precio mensual con descuento ${precio_mensual}`);
        console.log(`precio total del curso ${precio_total}`);
      }
    }
    else if(opcionCurso === "Master" ){
        if(beca ==="Facebook"){
            precio_mensual = precios.Master - (precios.Master*becas.Facebook);
            // console.log(`control precio mensual ${precio_mensual}`);
            precio_total = precio_mensual * duraciones.Master    
            console.log(`precio mensual con descuento ${precio_mensual}`);
            console.log(`precio total del curso ${precio_total}`);
          }else if(beca ==="Google"){
            precio_mensual = precios.Master - (precios.Master*becas.Google);
            // console.log(`control precio mensual ${precio_mensual}`);
            precio_total = precio_mensual * duraciones.Master    
            console.log(`precio mensual con descuento ${precio_mensual}`);
            console.log(`precio total del curso ${precio_total}`);
          }else if(beca ==="Jesua"){
            precio_mensual = precios.Master - (precios.Master*becas.Jesua);
            // console.log(`control precio mensual ${precio_mensual}`);
            precio_total = precio_mensual * duraciones.Master    
            console.log(`precio mensual con descuento ${precio_mensual}`);
            console.log(`precio total del curso ${precio_total}`);
          } else if(beca ==="No Beca"){
            precio_mensual =precios.Master;
            precio_total = precio_mensual * duraciones.Master    
            console.log(`precio mensual con descuento ${precio_mensual}`);
            console.log(`precio total del curso ${precio_total}`);
        }    else  
          {
            precio_mensual =precios.Master;
            precio_total = precio_mensual * duraciones.Master    
            console.log(`precio mensual con descuento ${precio_mensual}`);
            console.log(`precio total del curso ${precio_total}`);
          }
        }
        else{
            console.log(`Opción no valida`);
        }


//   console.log(`${precios} y ${duraciones} `)

// 11.Realizar un programa que ayude a calcular el total a pagar de acuerdo a la
// distancia recorrida por un vehículo con cargo extra por los litros
// consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto”
// ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo
// total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al
// total. Considere qué:
// total a pagar = (precio kilometro x kms recorridos) + extra por litros
// consumidos

