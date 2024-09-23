
/* CARGA DOM */

const inputEdad = document.querySelector('#inputEdad');
const respuesta1 = document.querySelector('#respuesta1');
const respuesta2 = document.querySelector('#respuesta2');
const respuesta3 = document.querySelector('#respuesta3');
const botonEnviar = document.querySelector('#botonEnviar');




/* EVENTOS */

botonEnviar.addEventListener('click', calcularEdad);



/* FUNCIONES */

function esNumero(dato) {
  if (dato.trim().length == 0 || Number.isNaN(+dato)) {
   return false;
  } else {
   return true;
  }
 }

 function imprimirDom (elementoDOM, mensaje) {
  elementoDOM.textContent = mensaje;
 }


 function resetDom() {
  respuesta1.textContent = "";
  respuesta2.textContent = "";
  respuesta3.textContent = "";
 }

function calcularEdad() {
  const edad = inputEdad.value;
  if (!esNumero(edad)) {
    alert("No has introducido un número")
    resetDom();
  } else {
  if (edad >= 18) {
    imprimirDom(respuesta1, "Si, puedes beber alcohol");
    imprimirDom(respuesta2, "Si, puedes entrar en la fiesta");
    imprimirDom(respuesta3, "Si, tiene entrada gratis");
  } else {
    imprimirDom(respuesta1, "No, no puedes beber alcohol");
    imprimirDom(respuesta2, "No, no puedes entrar en la fiesta");
    imprimirDom(respuesta3, "No, no tiene entrada gratis");
  }
 }

 function imprimirDom (elementoDOM, mensaje) {
  elementoDOM.textContent = mensaje;
 }
}
