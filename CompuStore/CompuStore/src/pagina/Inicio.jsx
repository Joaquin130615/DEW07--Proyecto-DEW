import Hero from "../componentes/Hero";
import ProductoCard from "../componentes/ProductosCard";

function Inicio() {

  return (

    <>

      <Hero />

     
      <section className="productos">

        <h2>Productos Destacados</h2>

        <div className="contenedor-productos">

          <ProductoCard
            nombre="Laptop ASUS S16"
            precio={3599}
            imagen="/img/asus-s16.webp"
          />

          <ProductoCard
            nombre="Lenovo LOQ"
            precio={7599}
            imagen="/img/lenovo-loq.avif"
          />

          <ProductoCard
            nombre="Ryzen 7"
            precio={2399}
            imagen="/img/ryzen7.avif"
          />

          <ProductoCard
            nombre="Teclado Logitech"
            precio={899}
            imagen="/img/logitech.webp"
          />

        </div>

      </section>

    </>

  );

}

export default Inicio;