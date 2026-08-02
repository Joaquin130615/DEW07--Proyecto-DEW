// Mensaje básico en consola
console.log("Bienvenido a ByteStore");

// Mensaje simple al cargar la página
document.addEventListener("DOMContentLoaded", function () {
  console.log("Página de inicio cargada correctamente");
});

// Mensaje básico para el formulario de contacto
const formulario = document.getElementById("formularioContacto");

if (formulario) {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Gracias por comunicarte con ByteStore. Te responderemos pronto.");
    formulario.reset();
  });
}

// Función para cambiar el color del título de manera aleatoria

let idColores;
function colores() {
    let r = Math.floor(Math.random()* 151); //Caclulo de 0 a 150
    let g = Math.floor(Math.random()* 151);
    let b = Math.floor(Math.random()* 151);

    document.getElementById("titulo").style.color= "rgb("+ r + "," + g + "," + b +")";
}
idColores = setInterval(colores,1000)

let tarjetas = document.getElementsByClassName("campo-contacto");
for (let i = 0; i < tarjetas.length; i++) {
  tarjetas[i].addEventListener("mouseover", function () {
    this.classList.add("hover");
  });
  tarjetas[i].addEventListener("mouseout", function () {
    this.classList.remove("hover");
  });
}
