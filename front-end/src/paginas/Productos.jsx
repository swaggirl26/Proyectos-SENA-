import React from 'react';
import ProductCards from '../componentes/ProductCards'; // Asegúrate que este sea el correcto

const products = [
  { id: 1, name: 'Cortina Blackout', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748022828/productos/blackouts.jpg", price: 105.00 },
  { id: 2, name: 'Cortina con prenses', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748052136/productos/WhatsApp_Image_2025-04-15_at_12.jpg", price: 70.00 },
  { id: 3, name: 'Panel japones', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748028790/productos/panel-japones.jpg", price: 120.00 },
  { id: 4, name: 'Sheer elegance', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748019406/productos/WhatsApp_Image_2025-04-02_at_11.jpg", price: 120.00 },
  { id: 5, name: 'Onda serena', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1745674644/productos/onda_serena.png", price: 120.00 },
  { id: 6, name: 'Persianas', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748023120/productos/persianas.jpg", price: 120.00 },
  { id: 7, name: 'Macromaderas', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748052236/productos/imagen12.jpg", price: 120.00 },
  { id: 8, name: 'Toldos', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748042406/productos/TOLDO_VERTICAL_BALCON.jpg", price: 120.00 },
  { id: 9, name: 'Verticales', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748051871/productos/71kCjo5SpsL.jpg", price: 120.00 },
  { id: 10, name: 'Enrollables en screen', imagen_url: "https://res.cloudinary.com/dcx3jprqf/image/upload/v1748021817/productos/Enrollable.jpg", price: 120.00 },
];

export default function Productos({ onAddToCart }) {
  return (
    <section className="p-8 pt-32 bg-[#e5e2df] min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Nuestros Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map(product => (
          <ProductCards key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
}
