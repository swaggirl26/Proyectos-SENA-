import React, { useState } from 'react';
import ProductCards from '../componentes/ProductCards';

const products = [
  { id: 1, name: 'Cortina Blackout', price: 105.00 },
  { id: 2, name: 'Cortina con prenses', price: 70.00 },
  { id: 3, name: 'Cortina motorizadas', price: 120.00 },
  { id: 4, name: 'Panel japones', price: 120.00 },
  { id: 5, name: 'Sheer elegance', price: 120.00 },
  { id: 6, name: 'Onda serena', price: 120.00 },
  { id: 7, name: 'Persianas', price: 120.00 },
  { id: 8, name: 'Macromaderas', price: 120.00 },
  { id: 9, name: 'Toldos', price: 120.00 },
  { id: 10, name: 'Verticales', price: 120.00 },
  { id: 10, name: 'Enrollables en screen', price: 120.00 },
];

export default function ProductSection() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="relative">
      {/* Botón del carrito */}
{/* Botón abajo-derecha */}
<div className="fixed bottom-6 right-6 z-40">
  <button
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg px-4 py-3 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
  >
    <span className="text-2xl">🛒</span>
    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
        {cart.length}
      </span>
    )}
  </button>
   </div>

      {/* Carrito flotante */}
      {isCartOpen && (
        <div className="fixed top-20 right-6 w-80 bg-white p-6 rounded-xl shadow-2xl z-40">
          <h3 className="text-lg font-bold mb-3 text-gray-800">Carrito de Compras </h3>
          <ul className="list-disc list-inside text-gray-700 max-h-60 overflow-y-auto">
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-gray-800">Total: ${total.toFixed(2)}</p>
          <button
            onClick={() => setCart([])}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
          >
            Vaciar carrito 🗑️
          </button>
          <button
            onClick={() => setCart([])}
            className="mt-4 w-full bg-red-500 text-white py-2 rounded-xl hover:bg-red-600"
          >
            Editar producto 🗑️
          </button>
        </div>
      )}

      {/* Lista de productos */}
      <section className="p-8 bg-gray-100 min-h-screen pt-32">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCards key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
