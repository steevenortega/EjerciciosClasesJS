let button = document.getElementById("myButton");
// Agregar un evento de clic al botón
button.addEventListener("click", function() {
  // Crear un nuevo elemento de texto
  let newText = document.createTextNode(`${emmpleadoDelMes_F}`);
  // Obtener referencia al cuerpo del documento
  let body = document.body;
  // Agregar el nuevo texto al cuerpo del documento
  body.appendChild(newText);
});


// let button = document.getElementById("myButton");
// // Agregar un evento de clic al botón
// button.addEventListener("click", function() {
//   // Crear un nuevo elemento de texto
//   let span = document.createElement("span");
//   span.textContent = `${emmpleadoDelMes_F}`;
//   span.classList.add("highlight");
//   div.appendChild(span);

// //   let newText = document.createTextNode(`${emmpleadoDelMes_F}`);
// //   // Obtener referencia al cuerpo del documento
// //   let body = document.body;
// //   // Agregar el nuevo texto al cuerpo del documento
// //   body.appendChild(newText);
// });