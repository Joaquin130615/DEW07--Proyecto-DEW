import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Reloj } from './Reloj'; // Importas el reloj



function Menu() {
    const { cantidad } = useContext(CarritoContext);


  return (
    <header className="menu">

      <h2 className="logo">COMPU-STORE</h2>

      <nav>
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/productos">Productos</NavLink>
        <NavLink to="/contacto">Contacto</NavLink>
        <NavLink to="/carrito" className="icono-carrito">
        <img src="img/shop.png" alt="Carrito" />
         <span>{cantidad}</span>
        </NavLink>
       
        <Reloj />
      </nav>


    </header>
  );
}

export default Menu;