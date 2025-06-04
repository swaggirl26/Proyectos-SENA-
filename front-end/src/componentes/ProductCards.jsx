import React from 'react';

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white mx-10 my-10 shadow-lg rounded-2xl p-5 flex flex-col justify-between hover:shadow-xl transition">
      <img
        src={product.image}
        alt={product.name}
        className="bg-[#e5e2df] w-full h-40 object-cover rounded-xl mb-4"
      />
      <h3 className="text-xl text-center font-bold text-gray-800">{product.name}</h3>
      <p className="text-gray-600 text-center mt-2">${product.price.toFixed(2)}</p>

      <div className=" flex mt-10 mb-5 ">
        <button
          onClick={() => onAddToCart(product)}
          className="w-fit mx-10  px-4 py-2 bg-[#E5BC57] text-black font-semibold rounded-xl  brightness-110 transition"
        >
          Añadir al carrito 
        </button>
        <button
          onClick={() => alert(`Gracias por comprar ${product.name}`)}
          className="w-fit  px-4 py-2  bg-[#E5BC57] text-black font-semibold  rounded-xl brightness-110 transition"
        >
          Comprar 
        </button>
      </div>
    </div>
  );
}
