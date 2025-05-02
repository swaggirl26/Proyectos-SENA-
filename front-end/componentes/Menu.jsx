
// src/componentes/Menu.jsx
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <header className="menu-header">
      <div className="d-flex align-items-center">
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-item">Inicio</Link>
        <Link to="/productos" className="nav-item">Productos</Link>
        <Link to="/servicios" className="nav-item">Servicios</Link>
        <Link to="/sobrenosotros" className="nav-item">Sobre Nosotros</Link>
        <Link to="/contactanos" className="nav-item">Contáctanos</Link>
      </nav>

      <div className="menu-buttons">
        <button className="btn btn-outline-light">'bg red-500'
          <i className="bi bi-cart"></i>
          <h1>classname='bg-red-500'Carrito/</h1>
        </button>
        <span className="phone">
          <i className="bi bi-telephone-fill"></i> 3137442462
        </span>
        <button className="btn btn-light">Login</button>
        <button className="btn btn-primary">Register</button>
      </div>
    </header>
  );
}

export default Menu;

