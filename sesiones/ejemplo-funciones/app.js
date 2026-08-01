// ============================================================
//  MANEJO DE FUNCIONES  -  Clase 3, Entornos Web
//  Una función es un bloque de código con nombre que podemos
//  reutilizar todas las veces que queramos.
// ============================================================

// Auxiliar: escribe en la página y en la consola
function mostrar(id, texto) {
    document.getElementById(id).textContent = texto;
    console.log(texto);
}

// ---------- 1) FUNCIÓN SIMPLE (sin argumentos) ----------
// Sintaxis:  function nombre() { ...código... }
function saludar() {
    mostrar("out1", "¡Hola! Soy una función sin argumentos.");
}

// ---------- 2) FUNCIÓN CON ARGUMENTOS ----------
// Los argumentos son datos que le pasamos a la función.
// El mismo código sirve para Ana, Luis o quien sea.
function saludarA(nombre) {
    mostrar("out2", "¡Hola, " + nombre + "! Gusto en verte.");
}

// ---------- 3) FUNCIONES CON RETURN ----------
// return DEVUELVE un valor. La función calcula y entrega el resultado;
// quien la llama decide qué hacer con él.
function sumar(a, b) {
    return a + b;            // devuelve el resultado
}

function promedio(n1, n2, n3) {
    let suma = n1 + n2 + n3;
    return suma / 3;         // devuelve el promedio
}

function mostrarSuma() {
    let resultado = sumar(7, 5);       // guardamos lo que devuelve
    mostrar("out3", "sumar(7, 5) devuelve: " + resultado);
}

function mostrarPromedio() {
    let prom = promedio(14, 11, 16);
    // Reutilizamos el valor devuelto para decidir
    let estado = prom >= 13 ? "APROBADO" : "DESAPROBADO";
    mostrar("out3", "Promedio: " + prom.toFixed(2) + "  ->  " + estado);
}

// ---------- 4) setTimeout: ejecutar DESPUÉS de un tiempo ----------
// setTimeout(funcion, milisegundos). 3000 ms = 3 segundos.
function mensajeConRetraso() {
    mostrar("out4", "Esperando 3 segundos...");
    setTimeout(function () {
        mostrar("out4", "¡Listo! Pasaron 3 segundos.");
    }, 3000);
}

// ---------- 5) setInterval: REPETIR cada cierto tiempo ----------
// setInterval devuelve un id que guardamos para poder detenerlo.
let idIntervalo = null;   // aquí guardamos el identificador
let contador = 0;

function iniciarContador() {
    if (idIntervalo !== null) return;   // evita iniciar dos veces
    contador = 0;
    idIntervalo = setInterval(function () {
        //++contador; Suma primero , devolver el valor después
        contador++;   // Incrementa el contador
        mostrar("out5", "Contador: " + contador);
    }, 1000);   // cada 1 segundo
}

function detenerContador() {
    clearInterval(idIntervalo);   // detiene la repetición
    idIntervalo = null;
    mostrar("out5", "Contador detenido en: " + contador);
}

console.log("app.js cargado. Presiona los botones para probar las funciones.");
