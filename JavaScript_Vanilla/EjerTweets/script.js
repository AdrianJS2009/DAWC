/* CARGA DEL DOM */


document.addEventListener('DOMContentLoaded', () => {
  tweets = JSON.parse(localStorage.getItem('tweets')) || [];
  mostrarTweets();
});

/* EVENTOS */


const formulario = document.getElementById('formulario');
const listaTweets = document.getElementById('lista-tweets');
let tweets = [];

formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  const tweet = document.getElementById('tweet').value;
  const tweetObj = {
    id: Date.now(),
    texto: tweet
  };
  tweets.push(tweetObj);
  console.log(tweets);
  mostrarTweets();
  localStorage.setItem('tweets', JSON.stringify(tweets));
});

/* LÓGICA */


function mostrarTweets() {
  limpiarHTML();
  tweets.forEach(tweet => {
    const btnBorrar = document.createElement('a');
    btnBorrar.classList.add('borrar-tweet');
    btnBorrar.innerText = 'X';
    btnBorrar.onclick = () => {
      borrarTweet(tweet.id);
    };
    const li = document.createElement('li');
    li.innerText = tweet.texto;
    li.appendChild(btnBorrar);
    listaTweets.appendChild(li);
  });
}

function limpiarHTML() {
  while (listaTweets.firstChild) {
    listaTweets.removeChild(listaTweets.firstChild);
  }
}

function borrarTweet(id) {
  tweets = tweets.filter(tweet => tweet.id !== id);
  mostrarTweets();
  localStorage.setItem('tweets', JSON.stringify(tweets));
}

