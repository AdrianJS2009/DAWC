/* Carga del Dom */

const primerNumero = document.getElementById("primerNumero");
const segundoNumero = document.getElementById("segundoNumero");
const suma = document.getElementById("suma");
const potencia = document.getElementById("potencia");
const resultado = document.getElementById("resultado");

/* Eventos */

potencia.addEventListener("click", elevar);
suma.addEventListener("click", sumar);

/* Funciones */

function sumar() {
  const resultadoSuma =
    Number(primerNumero.value) + Number(segundoNumero.value);
  resultado.textContent = resultadoSuma;
}

function elevar() {
  const resultadoPotencia = Math.pow(
    Number(primerNumero.value),
    Number(segundoNumero.value)
  );
  resultado.textContent = resultadoPotencia;
}

// function imprimirResultado(resultadoOperacion) {
//   resultado.textContent = mensaje;
// }

// function calcular(event) {
//   console.log(event.target.id);
//   const tipoOperacion = event.target.id;
//   let mensaje;
//   switch (tipoOperacion) {
//     case "suma":
//       console.log('Suma');
//       const resultadoSuma = Number(primerNumero.value) + Number(segundoNumero.value);
//       imprimirResultado(resultadoSuma);
//       break;

//     case "elevar":
//       console.log('Potencia');
//       const resultadoPotencia = Math.pow(Number(primerNumero.value), Number(segundoNumero.value));
//       imprimirResultado(resultadoPotencia);
//       break;
//     default:
//       console.log('No se ha seleccionado ninguna operación');
//       break;
//   }
// }
