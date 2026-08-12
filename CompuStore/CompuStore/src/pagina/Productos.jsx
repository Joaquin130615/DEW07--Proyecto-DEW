import { useState } from "react";
import productos from "../data/productos"; 
import ProductoCard from "../componentes/ProductosCard"; 

function Productos() {
  return (
    <div className="pagina-productos">
<h1 className="logo">! DESCUBRE LA TECNOLOGÍA 
        QUE IMPULSA TU MUNDO !</h1>
<section className="hero">
  <span className="etiqueta">
                      CONOCE NUESTRA VARIEDAD DE PRODUCTOS QUE CONTAMOS PARA TI </span>
</section>

      <div className="contenedor-productos">
       
        {productos && productos.map((producto) => (
          <ProductoCard
          key={producto.id}
          id={producto.id}
          nombre={producto.nombre}
          precio={producto.precio}
          imagen={producto.imagen}
          />

))
}
      </div>
    </div>
  );
}

export default Productos;
