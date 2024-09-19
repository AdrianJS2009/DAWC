function holaMundo(){
  alert("hola mundo");
}

function despedida(){
  alert("hasta luego");
}

function saludoEntrada(){
  const nombre = prompt("Dime tu nombre");
  document.querySelector(".contenido").innerHTML = `Bienvenido ${nombre}`;
}