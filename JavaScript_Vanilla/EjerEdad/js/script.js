/* CARGA DOM */

const inputEdad = document.querySelector('#inputEdad');
const respuesta1 = document.querySelector('#respuesta1');
const respuesta2 = document.querySelector('#respuesta2');
const respuesta3 = document.querySelector('#respuesta3');

/* FUNCIONES */

function calcularEdad() {
  const edad = inputEdad.value;
  if (edad >= 18) {
    respuesta1.textContent = "Si, puedes beber alcohol";
    respuesta2.textContent = "Si, puedes entrar en la fiesta";
    respuesta3.textContent = "No, no tiene entrada gratis"
  }
  else {
    respuesta1.textContent = "No, no puedes beber alcohol";
    respuesta2.textContent = "No, no puedes entrar en la fiesta";
    respuesta3.textContent = "Si, tiene entrada gratis"
  }
}

function esNumero(dato) {
 if (dato.trim().length == 0 || Number.isNaN(+dato)) {
  return false;
 } else {
  return true;
 }
}