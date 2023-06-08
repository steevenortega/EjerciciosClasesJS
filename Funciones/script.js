let inicio = prompt("Ingresa la palabra iniciar para ver el semaforo cambiando");
if (inicio === "iniciar") {
  const intervalID = setInterval(semaforoLuz, 3500)//llama a funcion y set el parametro tiempo
}
else {
  alert("Con esta palabra no inicia el semaforo");
}

let COLORES = ['ROJO', 'AMARILLO', 'VERDE']
const semaforoImg = document.querySelector('#semaforo-img')//Esto trae todo elemento html
function semaforoLuz() {
  const color = COLORES.pop()  // elimina el ultimo elemento y lo devuelve
  console.log(color)
  if (!COLORES.length)
  COLORES = ['ROJO', 'AMARILLO', 'VERDE']// aca se rescontruye el array
  semaforoImg.src = "img/" + color + ".png"//imprime la nueva imagen
  return color
}


