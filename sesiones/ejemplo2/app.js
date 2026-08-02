// ============================================================
//  EL DOM EN ACCIÓN  -  Clase 2, Entornos Web
//  El navegador convierte el HTML en un árbol de objetos (el DOM).
//  Con JavaScript accedemos a esos objetos y los modificamos.
// ============================================================

// ---------- 1) getElementById + textContent ----------
// Busca UN elemento por su id y cambia su texto.
function cambiarTitulo() {
    let titulo = document.getElementById("titulo");   // accede al nodo
    console.log("Antes:", titulo.textContent); // lee su valor actual
    titulo.textContent = "¡Título cambiado con el DOM!"; // cambia su contenido
    console.log("Después:", titulo.textContent); // lee su nuevo valor  
}

// ---------- 2) style: cambiar estilos ----------
// La propiedad .style permite modificar el CSS del elemento.
function cambiarColor() {
    let subtitulo = document.getElementById("subtitulo");
    subtitulo.style.color = "#2bb3b0";
    subtitulo.style.fontSize = "22px";
    subtitulo.textContent = "Estilo modificado desde JavaScript";
}

// ---------- 3) getElementsByClassName + bucle ----------
// Devuelve TODOS los elementos con esa clase (una colección).
// La recorremos con un for para resaltar cada producto.
function resaltarProductos() {
    let items = document.getElementsByClassName("producto");
    for (let i = 0; i < items.length; i++) {
        items[i].classList.add("resaltado");   // agrega una clase CSS
    }
}

// ---------- 4) setAttribute: cambiar un atributo ----------
// Cambiamos el atributo "src" de la imagen.
function cambiarImagen() {
    let foto = document.getElementById("foto");
    console.log("src anterior:", foto.getAttribute("src")); // leer atributo
    foto.setAttribute("src", "https://picsum.photos/id/48/320/160"); // escribir
}

// ---------- 5) querySelectorAll: contar elementos ----------
// querySelectorAll usa selectores CSS (.producto = clase producto).
function contarProductos() {
    let productos = document.querySelectorAll(".producto");
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Hay " + productos.length + " productos en la lista.";
}

function saludar() {
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Hola! Hiciste click en el botón.";
}

// Mensaje de bienvenida en la consola al cargar
console.log("DOM listo. Presiona los botones para verlo en acción.");
