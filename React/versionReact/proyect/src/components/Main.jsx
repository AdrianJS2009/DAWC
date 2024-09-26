import { useState } from "react";

function Main() {
  const [edad, setEdad] = useState('');
  const [respuesta1, setRespuesta1] = useState('');
  const [respuesta2, setRespuesta2] = useState('');
  const [respuesta3, setRespuesta3] = useState('');


  function generarRespuesta() {
    
    if (edad >= 18) {
      setRespuesta1("Sí, puede beber alcohol");
    } else {
      setRespuesta1("No, no puede beber alcohol");
    }

    if (edad >= 18) {
      setRespuesta2("Sí, puede entrar a la fiesta");
    } else {
      setRespuesta2("No, no puede entrar a la fiesta");
    }

    if (edad < 18) {
      setRespuesta3("Sí, tiene entrada gratis");
    } else {
      setRespuesta3("No, no tiene entrada gratis");
    }
  }
  
  return (
    <main>
      <div>
        <p>Ingrese su edad</p>
        <input 
          type="number"
          value={edad}
          id="inputEdad"
          onChange={(event) => setEdad(event.target.value)}
        />
        <button id="btnEnviar" onClick={generarRespuesta}>Enviar</button>
        <h3>Puede beber alcohol</h3>
        <p id="respuesta1">{respuesta1}</p>
        <h3>Puede  entrar a la fiesta</h3>
        <p id="respuesta2">{respuesta2}</p>
        <h3>Tiene entrada gratis</h3>
        <p id="respuesta3">{respuesta3}</p>
      </div>
    </main>
  )
}

export default Main;