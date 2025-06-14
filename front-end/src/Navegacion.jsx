import { Link, useNavigate } from "react-router-dom";
import logonav from "../src/assets/img/logonav.png";

export default function Navegacion({ cart, setCart, isCartOpen, setIsCartOpen }) {
  const navigate = useNavigate();
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleComprar = () => {
    setIsCartOpen(false);
    navigate('/ProductosInfo');
  };

  return (
    <nav className="bg-black text-white flex fixed top-0 z-10 w-full items-center justify-between px-6 py-1 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logonav} alt="logo" className="h-20 w-auto" />
      </div>

      {/* Menú */}
      <div className="flex gap-8 text-sm mx-10 font-semibold">
        <Link to="/" className="hover:text-[#E5BC57] transition">INICIO</Link>
        <Link to="/productos" className="hover:text-[#E5BC57] transition">PRODUCTOS</Link>
        <Link to="/servicios" className="hover:text-[#E5BC57] transition">SERVICIOS</Link>
        <Link to="/sobrenosotros" className="hover:text-[#E5BC57] transition">NOSOTROS</Link>
        <Link to="/contactanos" className="hover:text-[#E5BC57] transition">CONTACTO</Link>
      </div>

      {/* Botón del carrito */}
      <div className="flex items-center gap-5 relative">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg px-4 py-3 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cart.length}
            </span>
          )}
        </button>

        <Link to="/Login">
          <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57] transition">Iniciar</button>
        </Link>
        <Link to="/Register">
          <button className="bg-gray-300 text-black px-5 py-1 rounded-full hover:bg-[#E5BC57] transition">Registrarse</button>
        </Link>

        {/* Carrito desplegable */}
        {isCartOpen && (
          <div className="absolute top-20 right-0 w-80 bg-white p-6 rounded-xl shadow-2xl z-50">
            <button
              onClick={() => setIsCartOpen(false)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600"
            >
              ✕
            </button>
            <h3 className="text-lg font-bold mb-3 text-gray-800">Carrito de Compras</h3>
            <ul className="text-sm max-h-60 overflow-y-auto text-gray-700">
              {cart.map((item, idx) => (
                <li key={idx}>{item.name} - ${item.price.toFixed(2)}</li>
              ))}
            </ul>
            <p className="mt-4 font-bold text-gray-800">Total: ${total.toFixed(2)}</p>

            <button
              onClick={() => setCart([])}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-xl w-full hover:brightness-110"
            >
              Vaciar carrito
            </button>

            <button
              onClick={handleComprar}
              className="mt-2 bg-green-500 text-white px-4 py-2 rounded-xl w-full hover:brightness-110"
            >
              Comprar producto
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
