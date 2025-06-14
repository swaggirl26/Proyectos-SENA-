// paginas/ProductSection.jsx
import React, { useState } from 'react';
import ProductCard from '../componentes/ProductCard';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: 'Cortina Blackout', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748022828/productos/blackouts.jpg", price: 105.00 },
  { id: 2, name: 'Cortina con prenses', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748052136/productos/WhatsApp_Image_2025-04-15_at_12.jpg", price: 70.00 },
  { id: 3, name: 'Panel japones', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748028790/productos/panel-japones.jpg", price: 120.00 },
  { id: 4, name: 'Sheer elegance', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748019406/productos/WhatsApp_Image_2025-04-02_at_11.jpg", price: 120.00 },
  { id: 5, name: 'Onda serena', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1745674644/productos/onda_serena.png", price: 120.00 },
];

export default function ProductSection() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleComprar = () => {
    navigate('/ProductosInfo');
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="relative">

      {/* Botón flotante del carrito */}
      <div className="fixed right-6 z-40 bottom-6">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-yellow-500 px-5 py-4 rounded-full text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300 relative"
        >
          🛒
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
              {cart.length}
            </span>
          )}
        </button>
      </div>

      {/* Carrito flotante */}
      {isCartOpen && (
        <div className="fixed top-20 right-6 w-80 bg-white p-6 rounded-xl shadow-2xl z-50">
          <button
            onClick={() => setIsCartOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-600"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold mb-3">Carrito de Compras</h3>
          <ul className="text-sm max-h-60 overflow-y-auto">
            {cart.map((item, idx) => (
              <li key={idx} className="mb-2">
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold">Total: ${total.toFixed(2)}</p>

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

      {/* Sección de productos */}
      <section className="p-8 pt-32 bg-[#e5e2df] min-h-screen">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
