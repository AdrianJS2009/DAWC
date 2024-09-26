const nombre = localStorage.getItem('nombre');
console.log("nombre: ", nombre);

const producto = JSON.parse(localStorage.getItem('producto'));
console.log("producto nombre: ", producto.nombre);
console.log("producto precio: ", producto.precio);

const meses = JSON.parse(localStorage.getItem('meses'));
console.log("meses 1: ", meses[0]);
console.log("meses 2: ", meses[1]);
