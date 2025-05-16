import { Link } from 'react-router-dom';
import logo from '../src/assets/img/LOGO VECTOR COLOR.png'
export default function Navegacion() {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-30 w-auto" />
      </div>

      {/* Menú */}
      <div className="flex gap-25 text-sm font-semibold">
        
      <Link to="/" className="text-white hover:text-[#E5BC57] transition-colors">INICIO</Link>
      <Link to="/productos" className="text-white hover:text-[#E5BC57] transition-colors">PRODUCTOS</Link>
      <Link to="/servicios" className="text-white hover:text-[#E5BC57] transition-colors">SERVICIOS</Link>
      <Link to="/sobrenosotros" className="text-white hover:text-[#E5BC57] transition-colors">SOBRE NOSOTROS</Link>
      <Link to="/contactanos" className="text-white hover:text-[#E5BC57] transition-colors">CONTÁCTANOS</Link>

      </div> 
      

      {/* Botones derechos */}
      <div className="flex items-center gap-3">
        {/* Carrito */}
        <button className="bg-gray-300 rounded-full p-3 hover:bg-[#E5BC57] transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5H19" />
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
          </svg>
        </button>


        {/* Login y Register */}
        
        <Link to="/Login"><button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57] transition">
          Iniciar
          </button></Link> 
        <Link to="/Register"><button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57]">
         Registrarse
        </button></Link>

      </div>
    </nav>
   );
}


