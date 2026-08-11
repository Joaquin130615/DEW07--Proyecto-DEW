import { useNavigate } from "react-router-dom";
function Hero() {

    const navigate = useNavigate(); 

  return (

    <section className="hero">
      <div className="hero-texto">
        <span className="etiqueta">Tecnología de vanguardia</span>

        <h1>Tu aliado en <span>tecnología</span>
          <br />y sistemas inteligentes
        </h1>
        
        <p>
          Tecnología para trabajo y entretenimiento.
          Sistemas empresariales, software,
          videojuegos y componentes para PC.
        </p>

        <div className="botones">
          <button onClick={() => navigate("/productos")} className="btn-productos">
        Ver productos
      </button>
        </div>
      </div>

      <div className="hero-imagen">
        <img src="img/combo.jpg" alt="Banner" />
      </div>

    </section>
  );
}

export default Hero;