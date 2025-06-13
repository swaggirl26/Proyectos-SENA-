import React from 'react';

export default function ProductCard ({ product, onAddToCart }) {
 
  return (
    <div
      className="bg-white mx-10 my-10 shadow-lg rounded-2xl p-5 flex flex-col justify-between 
      hover:shadow-xl hover:scale-105 active:scale-95 transition-transform duration-300 ease-in-out cursor-pointer"
    >
      <img
        src={product.imagen_url}
        alt={product.name}
        className="bg-[#e5e2df] w-full h-70 object-cover rounded-xl mb-4 transition duration-300 ease-in-out"
      />
      <h3 className="text-xl text-center font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-center mt-2">${product.price.toFixed(2)}</p>

      <div className="flex mt-10 mb-2 justify-center gap-4">
        <button
          onClick={() => onAddToCart(product)}
          className="px-4 py-3 bg-[#E5BC57] text-black font-semibold rounded-xl transition 
          hover:brightness-110 hover:scale-105 active:scale-95"
        >
          Añadir al carrito 
        </button>
        <button
          className="px-4 py-3 bg-[#E5BC57] text-black font-semibold rounded-xl transition 
          hover:brightness-110 hover:scale-105 active:scale-95"
        >
          Ver detalle
        </button>
          
       
       
      </div>
    </div>
  );
}
