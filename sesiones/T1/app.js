// ============================================================
//  EVENTOS EN JAVASCRIPT  -  Clase 4, Entornos Web
//  Un evento es "algo que ocurre" en la pagina: un clic, una
//  tecla, el mouse moviendose. JavaScript puede REACCIONAR a ellos.
// ============================================================

        // Función que calcula el total
        function calcularTotal(cantidad, precio) {
            let total = cantidad * precio;

            // Aplicar 10% de descuento
            if (cantidad >= 10) {
                total = total - total * 0.10;
            }
            return total;}
         // Acceso al botón mediante el DOM
        let boton = document.getElementById("btncalcular");

        // Evento con addEventListener
        boton.addEventListener("click", function () {
            let cantidad = Number(document.getElementById("cantidad").value);

               // Validación
            if (cantidad <= 0 || isNaN(cantidad)) {
                document.getElementById("total").textContent =
                "Ingrese una cantidad válida.";
                return;}
               // Precio unitario = S/15
            let total = calcularTotal(cantidad, 15);

         // Mostrar el resultado usando el DOM
            document.getElementById("total").textContent = "Total: S/ " + total.toFixed(2);
        // Mostrar el aviso
        let aviso = document.getElementById("aviso");
        aviso.textContent = "Compra calculada correctamente";

        // Ocultar el aviso después de 3 segundos
        setTimeout(function () {
            aviso.textContent = "";
        }, 3000);
    });





