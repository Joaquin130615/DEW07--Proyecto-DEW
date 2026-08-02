// ============================================================
//  EVENTOS EN JAVASCRIPT  -  Clase 4, Entornos Web
//  Un evento es "algo que ocurre" en la pagina: un clic, una
//  tecla, el mouse moviendose. JavaScript puede REACCIONAR a ellos.
// ============================================================

function mostrar(id, texto) {
    document.getElementById(id).textContent = texto;
    console.log(texto);
}

// ---------- 1) onclick (el manejador va en el HTML) ----------
function saludar() {
    mostrar("out1", "Hiciste clic! (evento onclick)");
}

// ---------- 2) addEventListener (la forma recomendada) ----------
// Sintaxis: elemento.addEventListener("evento", funcion)
let boton = document.getElementById("btnListener");
boton.addEventListener("click", function () {
    mostrar("out2", "Clic con addEventListener! (forma profesional)");
});

// ---------- 3) Evento de TECLADO: keyup ----------
let caja = document.getElementById("caja");
caja.addEventListener("keyup", function () {
    mostrar("out3", "Texto actual: " + caja.value);
});

// ---------- 4) Eventos de MOUSE: mouseover y mouseout ----------
let zona = document.getElementById("zona");
zona.addEventListener("mouseover", function () {
    mostrar("out4", "El mouse ENTRO a la zona");
    zona.style.background = "#2bb3b0";
});
zona.addEventListener("mouseout", function () {
    mostrar("out4", "El mouse SALIO de la zona");
    zona.style.background = "#14151f";
});

// ---------- 5) El objeto EVENT ----------
let caja2 = document.getElementById("caja2");
caja2.addEventListener("keyup", function (e) {
    mostrar("out5", "Presionaste la tecla: '" + e.key + "'  (codigo: " + e.code + ")");
});

console.log("app.js cargado. Interactua con la pagina para disparar eventos.");
