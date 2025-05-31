import React, { useState } from 'react';
import ProductCards from '../componentes/ProductCards';

const products = [
  { id: 1, name: 'Cortina Blackout', price: 45.00 },
  { id: 2, name: 'Asesoría Decorativa', price: 70.00 },
  { id: 3, name: 'Instalación Premium', price: 120.00 },
];

export default function ProductSection() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="p-8 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Nuestros Productos</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCards key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      <div className="mt-10 bg-[#E5BC57] p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Carrito de Compras 🛍️ ({cart.length} productos)
        </h3>
        <ul className="list-disc list-inside text-gray-700">
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
        <p className="mt-3 font-bold text-gray-800">Total: ${total.toFixed(2)}</p>
      </div>
    </section>
  );
}
