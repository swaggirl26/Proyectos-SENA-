import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-5 flex flex-col justify-between">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 mt-2">${product.price.toFixed(2)}</p>

      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => onAddToCart(product)}
          className="w-fit mx-auto px-4 py-2 bg-[#E5BC57] text-black font-semibold rounded-xl  brightness-110 transition"
        >
          Añadir al carrito 
        </button>
        <button
          onClick={() => alert(`Gracias por comprar ${product.name}`)}
          className="w-fit mx-auto px-4 py-2  bg-[#E5BC57] text-black font-semibold  rounded-xl brightness-110 transition"
        >
          Comprar 
        </button>
      </div>
    </div>
  );
}
