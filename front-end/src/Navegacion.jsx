import {Link} from "react-router-dom";
function Navegacion(){
    return (
    <nav className="bg-black text-white flex items-center justify-between px-6 py-3 shadow-md">
         <div className="flex items-center gap-2">
        <img src="/imagenes/logonegro.png" alt="Logo" className="w-20.5 h-20.5 object-contain" />
        <div className="text-sm">
        </div>
      </div>
        <Link to="/" className="hover:text-yellow-400 cursor-pointer">Inicio</Link>
        <Link to="/Productos" className="hover:text-yellow-400 cursor-pointer">Productos</Link>
        <Link to="/Servicios" className="hover:text-yellow-400 cursor-pointer">Servicios</Link>
        <Link to="/SobreNosotros" className="hover:text-yellow-400 cursor-pointer">Sobre Nosotros</Link>
        <Link to="/Contactanos" className="hover:text-yellow-400 cursor-pointer">Contáctanos</Link>
        <Link to="/Login" className="hover:text-yellow-400 cursor-pointer">Login</Link>
        <Link to="/Register" className="hover:text-yellow-400 cursor-pointer">Register</Link>
    </nav>
    );
}
export default Navegacion;
