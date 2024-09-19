/* CARGA DOM */
const divDAW = document.querySelector("#cursoDAW");
const divDAM = document.querySelector("#cursoDAM");

/* ZONA DE PRUEBA */
let entradaDatos = prompt("Dime tu nombre");
console.log(`Tu nombre es: ${entradaDatos}`);
console.log("Tu nombre es: " + entradaDatos);

let divContainer = document.querySelector("#container");
console.log(divContainer);

let saludar = "Hola";
const numero_pi = 3.1416;
console.log(numero_pi);


let variable_boolean_true = true;
let variable_boolean_false = false;

/**************************************************** */

/* MANIPULACION DEL DOM */
let docente = "Rocio";
let curso = "2425";
// divDAW.innerHTML = `
// <h2>Profesora: ${docente}</h2>
// <h3>Curso: ${curso}</h3>
// `;

const mensaje = `
<h2>Profesora: ${docente}</h2>
<h3>Curso: ${curso}</h3>
`;

escribirHTMLComponenteDOM(divDAW, mensaje);

let respuestaUsuario = prompt("¿En qué curso estás matriculado?");

if (respuestaUsuario.toLowerCase() === "daw") {
    divDAW.innerHTML += "Un alumno matriculado en DAW";
} else {
    divDAW.innerHTML += "No estás matriculado en ningun curso"
}

escribirHTMLComponenteDOM(divDAM, "<p>Esto es un mensaje</p>");

function escribirHTMLComponenteDOM(componenteDOM, mensajeHTML) {
  componenteDOM.innerHTML = mensajeHTML;
}