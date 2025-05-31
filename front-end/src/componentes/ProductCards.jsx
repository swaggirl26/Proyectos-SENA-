import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between">
      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>
      <button
        onClick={() => onAddToCart(product)}
        className="mt-4 px-4 py-2 bg-[#E5BC57] text-white rounded-xl hover:bg-yellow-500 transition"
      >
        Añadir al carrito 🛒
      </button>
    </div>
  );
}
