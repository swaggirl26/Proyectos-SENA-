import { Link } from 'react-router-dom';
import logo from '../src/assets/img/LOGO VECTOR COLOR.png'
export default function Navegacion() {
  return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-30 w-auto" />
        <span className="ml-2 font-serif italic text-sm">Cortinas y Servicios</span>
      </div>

      {/* Menú */}
      <div className="flex gap-10 text-sm font-semibold">
        
      <Link to="/" className="text-white hover:text-yellow-400 transition-colors">INICIO</Link>
      <Link to="/productos" className="text-white hover:text-yellow-400 transition-colors">PRODUCTOS</Link>
      <Link to="/servicios" className="text-white hover:text-yellow-400 transition-colors">SERVICIOS</Link>
      <Link to="/sobrenosotros" className="text-white hover:text-yellow-400 transition-colors">SOBRE NOSOTROS</Link>
      <Link to="/contactanos" className="text-white hover:text-yellow-400 transition-colors">CONTACTANOS</Link>

      </div> 
      

      {/* Botones derechos */}
      <div className="flex items-center gap-3">
        {/* Carrito */}
        <button className="bg-gray-300 rounded-full p-3 hover:bg-gray-400 transition">
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

        {/* Teléfono */}
        <div className="flex items-center gap-2 bg-gray-300 rounded-full px-3 py-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h1a2 2 0 012 2v3a2 2 0 01-2 2H5v4h1a2 2 0 012 2v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
          </svg>
          <span className="text-black text-sm">3137442462</span>
        </div>

        {/* Login y Register */}
        
         <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-gray-400 transition">
          Login
          </button>
          <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-gray-400 transition">
         Register
        </button>

      </div>
    </nav>
   );
}


