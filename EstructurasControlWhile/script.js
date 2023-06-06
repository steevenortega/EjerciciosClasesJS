// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

// let numero = parseInt(prompt("ingrese el numero maximo a encontrar multiplos de 5"));
// // let numero = 5
// console.log(`Los números múltiplos de 5 hasta" ${numero}, son:`);

// let i = 1;
// if(i<=numero){
//     while ( i <= numero) {
//         if (i % 5 === 0) {
//           console.log(i);
//           i = i+1;
//         }
// else{
//     i = i+1;   
// }
// }
// }

// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir
//  el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.


// let numero1 = parseInt(prompt("Ingrese el primer número (entre 1 y 50):"));
// let numero2 = parseInt(prompt("Ingrese el segundo número (entre 1 y 50):"));
// // let numero1 = 8;
// // let numero2 = 12;

// console.log("Los números del 1 al 50:");

// let i = 0;
// if (i<=51){
//     while(i <= 50){
//         if (i === numero1 || i === numero2) {
//             console.log(i + " ¡Lotería!");
//             i = i+1;  
//           } else {
//             console.log(i);
//             i = i+1;          
//           }    

//         }    
//     }
//     else
//     {
//         console.log('termino el proceso');  
//     }


// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario 
// debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

// const numeros = [];


// // let numero = 8;
// while (true){
//     let numero = parseInt(prompt("Ingrese numeros, ingrese 0 para terminar"));
// if(numero === 0){
//     break;
// }
// if(!isNaN(numero)){
//     numeros.push(numero);
// }
// }
// console.log(`Este es el arreglo:" ${numeros}`);




// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir 
// valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

// const palabras = [];


// while (true) {
//   let entrada = prompt("Ingrese una letra o palabra (deje vacío para terminar):");


//   if (entrada === "") {
//     break; 
//   }

//     palabras.push(entrada);

// }

// console.log("Palabras capturadas:", palabras);
// var palabrasFinal = palabras.join(" "); // este es el separados de los elementos del array
// console.log("Palabras capturadas:", palabrasFinal);



// 5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado 
// para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo 
// mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.

// while (true) {
//     let dia = prompt("Introduce un día de la semana:");

//     if (dia.toLowerCase() === "domingo") {
//         alert("Ve a descansar");
//         break;
//     }

//     else if (dia.toLowerCase() === "lunes") {
//         alert("¡Iniciando semana con toda!");
//         break;
//     }
//     else if (dia.toLowerCase() === "martes") {
//         alert("¡Martes, pero a que costo!");
//         break;
//     }
//     else if (dia.toLowerCase() === "miercoles") {
//         alert("Mitad de semana, ¡ya casi es viernes!");
//         break;
//     }
//     else if (dia.toLowerCase() === "jueves") {
//         alert("¡Epa, Juernes");
//         break;
//     }
//     else if (dia.toLowerCase() === "viernes") {
//         alert("Como fue hoy");
//         break;
//     }
//     else if (dia.toLowerCase() === "sabado") {
//         alert("Full descanso y familia");
//         break;
//     }
//     else {
//         alert("Día no reconocido. Por favor, introduce un día válido.");
//         break;

//     }

// }
  