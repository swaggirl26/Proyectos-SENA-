import { Link } from 'react-router-dom';
import logonav from '../src/assets/img/logonav.png';

export default function Navegacion() {
  return (
       <nav className="bg-black text-white flex fixed top-0 z-10 w-full items-center justify-between px-6 py-1 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logonav} alt="logo" className="h-20 w-auto" />
      </div>

      {/* Menú */}
      <div className="flex gap-8 text-sm  mx-10 font-semibold">
        <Link to="/" className="text-white hover:text-[#E5BC57] transition-colors">INICIO</Link>
        <Link to="/productos" className="text-white hover:text-[#E5BC57] transition-colors">PRODUCTOS</Link>
        <Link to="/servicios" className="text-white hover:text-[#E5BC57] transition-colors">SERVICIOS</Link>
        <Link to="/sobrenosotros" className="text-white hover:text-[#E5BC57] transition-colors">SOBRE NOSOTROS</Link>
        <Link to="/contactanos" className="text-white hover:text-[#E5BC57] transition-colors">CONTÁCTANOS</Link>
      </div>

      {/* Botones derechos */}
      <div className="flex items-center gap-5">
        
        {/* Login y Register */}
        <Link to="/Login">
          <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57] transition">
            Iniciar
          </button>
        </Link>
        <Link to="/Register">
          <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57] transition">
            Registrarse
          </button>
        </Link>
      </div>
    </nav>
  );
}



