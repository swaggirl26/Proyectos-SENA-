import { Link } from 'react-router-dom';
import logonav from '../src/assets/img/logonav.png';
export default function Navegacion() {
  return (
    <nav className="bg-black text-white flex absolute top-0 z-10 w-full items-center justify-between px-6 py-1">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logonav} alt="logo" className="h-30 w-auto" />
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
      
           <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7a1 1 0 00.9 1.5H19" />
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
          {/* Carrito */}
       


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


