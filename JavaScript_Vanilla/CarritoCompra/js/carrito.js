// Variables
const carrito = document.getElementById("carrito");
const listaCursos = document.getElementById("lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
  // Evento para agregar al carrito
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();

  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSeleccionado = e.target.parentElement.parentElement;
    agregarAlCarrito(cursoSeleccionado);
  }
}

// Agregar cursos al carrito
function agregarAlCarrito(curso) {
  const infoCurso = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1, // No hay control de cantidad, se duplicará en lugar de sumar
  };

  articulosCarrito = [...articulosCarrito, infoCurso];

  // Enseñar el carrito updated
  carritoHTML();
}

// Muestro el carro en el HTML
function carritoHTML() {
  limpiarHTML();

  // Itero con un foreach para generar el HTML del carrito
  articulosCarrito.forEach((curso) => {
    const { imagen, titulo, precio, cantidad } = curso;
    const row = document.createElement("tr");
    row.innerHTML = `
            <td><img src="${imagen}" width="100"></td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
        `;
    contenedorCarrito.appendChild(row);
  });
}

function limpiarHTML() {
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
