// CARGA DEL DOM
document.addEventListener("DOMContentLoaded", () => {
  tweets = JSON.parse(localStorage.getItem("tweets")) || [];
  mostrarTweets();
});

// VARIABLES
const formulario = document.getElementById("formulario");
const listaTweets = document.getElementById("lista-tweets");
let tweets = [];

// EVENTOS
formulario.addEventListener("submit", agregarTweet);

document.querySelector('input[type="reset"]').addEventListener("click", (e) => {
  e.preventDefault();
  resetearTweets();
});

/* FUNCIONES */

// Función para resetear todos los tweets
function resetearTweets() {
  tweets = [];
  actualizarLocalStorage();
  mostrarTweets();
}
// Limpiar la lista de tweets
function limpiarHTML() {
  listaTweets.innerHTML = "";
}

// Borrar un tweet por su id
function borrarTweet(id) {
  tweets = tweets.filter((tweet) => tweet.id !== id);
  actualizarLocalStorage();
  mostrarTweets();
}

// Actualizar el localStorage con los tweets
function actualizarLocalStorage() {
  localStorage.setItem("tweets", JSON.stringify(tweets));
}

// Mostrar mensaje de error
function mostrarError(mensaje) {
  if (!document.querySelector(".error")) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.innerText = mensaje;

    const contenido = document.querySelector("#contenido");
    contenido.appendChild(error);
    setTimeout(() => {
      error.remove();

      console.log("prueba del mensaje de error");
    }, 3000);
  }
}

// Agregar un nuevo tweet
function agregarTweet(e) {
  e.preventDefault();
  const tweet = document.getElementById("tweet").value;
  if (tweet === "") {
    mostrarError("El tweet no puede estar vacío");
    return;
  }

  const tweetItem = {
    id: Date.now(),
    texto: tweet,
  };

  tweets.push(tweetItem);
  actualizarLocalStorage();
  mostrarTweets();
  formulario.reset(); // Limpia el formulario
}

// Mostrar los tweets en la lista y borrar
function mostrarTweets() {
  limpiarHTML();
  tweets.forEach((tweet) => {
    const li = document.createElement("li");
    li.innerText = tweet.texto;

    const btnBorrar = document.createElement("a");
    btnBorrar.classList.add("borrar-tweet");
    btnBorrar.innerText = "X";
    btnBorrar.onclick = () => borrarTweet(tweet.id);

    li.appendChild(btnBorrar);
    listaTweets.appendChild(li);
  });
}
