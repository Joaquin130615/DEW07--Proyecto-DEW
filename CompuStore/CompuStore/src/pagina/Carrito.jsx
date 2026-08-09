import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import "../App.css";

function Carrito() {

  const {carrito, aumentarCantidad, disminuirCantidad, eliminarProducto, total } = useContext(CarritoContext);

  return (

  <div className="pagina">

      <h1>
        Carrito de Compras
      </h1>

      {carrito.length === 0 ? (

        <h2>
          El carrito está vacío
        </h2>

      ) : (

        <>

          {carrito.map(item => (

            <div
              className="fila-carrito"
              key={item.id}
            >

              <img
                src={item.imagen}
                alt={item.nombre}
              />

              <div>

                <h3>
                  {item.nombre}
                </h3>

                <p>
                  S/ {item.precio.toLocaleString()}
                </p>

              </div>

              <button
                onClick={() =>
                  disminuirCantidad(item.id)
                }
              >
                -
              </button>

              <span>
                {item.cantidad}
              </span>

              <button
                onClick={() =>
                  aumentarCantidad(item.id)
                }
              >
                +
              </button>

              <button
                onClick={() =>
                  eliminarProducto(item.id)
                }
              >
                Eliminar
              </button>

            </div>

          ))}

          <h2>
            Total: S/ {total.toLocaleString()}
          </h2>

        </>
        

      )}

    </div>

  );

}

export default Carrito;