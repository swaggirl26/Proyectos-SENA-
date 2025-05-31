import React, { useState } from 'react';
import ProductCards from '../componentes/ProductCards';

const products = [
  { id: 1, name: 'Cortina Blackout', price: 45.00 },
  { id: 2, name: 'Asesoría Decorativa', price: 70.00 },
  { id: 3, name: 'Instalación Premium', price: 120.00 },
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
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setIsCartOpen(!isCartOpen)}
          className="bg-white shadow-md px-4 py-2 rounded-full flex items-center gap-2 text-gray-800 hover:bg-gray-100"
        >
          🛒 {cart.length}
        </button>
      </div>

      {/* Carrito flotante */}
      {isCartOpen && (
        <div className="fixed top-20 right-6 w-80 bg-white p-6 rounded-xl shadow-2xl z-40">
          <h3 className="text-lg font-bold mb-3 text-gray-800">Carrito de Compras 🛍️</h3>
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
