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
<div className="fixed  right-6 z-40 absolute bottom-155 right-65">
  <button
    onClick={() => setIsCartOpen(!isCartOpen)}
    className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 shadow-lg px-4 py-3 rounded-full flex items-center justify-center text-white hover:scale-105 transition-transform duration-200"
  >
    <span className="text-2xl"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
</span>
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
          {/* Botón de cerrar */}
        <button 
         onClick={() => setIsCartOpen(false)}
        className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors duration-200 text-gray-500 hover:text-gray-700"
        >
       <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
       </button>
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
            
            className=" mt-4 mx-10 w-45 bg-[#E5BC57] text-black flex items-center py-2 px-5 rounded-xl brightness-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
</svg>
            
            Vaciar carrito 
          </button>
          
          <button
            onClick={() => setCart([])}
            className="  mt-4 mx-10 w-45 bg-[#E5BC57] text-black flex items-center py-2 px-3 rounded-xl brightness-110 "
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
</svg>

            Comprar producto 
          </button>
        </div>
      )}

      {/* Lista de productos */}
      <section className="p-8 bg-[#e5e2df] min-h-screen pt-32">

        <h2 className="text-3xl mt-20 font-bold mb-6 text-gray-800">Nuestros Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCards key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </div>
  );
}
