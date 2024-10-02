const url = "https://jsonplaceholder.typicode.com/posts";

//Primera forma de hacer promesas - fetch

fetch(URL)
  .then((informacionServer) => informacionServer.json())
  .then((peticionResuelta) => mostrarJSON(peticionResuelta));

function mostrarJSON(datos) {
  console.log("fetch", datos);
}

//Segunda forma de hacer promesas - async await

async function enviarPeticion() {
  const datos = await fetch(URL);
  const datosJSON = datos.json();
  mostrarJSON2(datosJSON);
}

function mostrarJSON2(datos) {
  console.log("async await", datos);
}

enviarPeticion();
