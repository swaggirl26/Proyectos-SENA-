import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import Productos from "./paginas/Productos";
import Servicios from "./paginas/Servicios";
import SobreNosotros from "./paginas/SobreNosotros";
import Contactanos from "./paginas/Contactanos";
import Login from "./paginas/Login";
import Register from "./paginas/Register";
import Navegacion from "./Navegacion";
import Footer from "./componentes/Footer";
import ProductosInfo from "./componentes/ProductosInfo";


function App() {  
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
      <Navegacion
        cart={cart}
        setCart={setCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
      />
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Productos" element={<Productos onAddToCart={(product) => setCart(prev => [...prev, product])} />} />
        <Route path="/Servicios" element={<Servicios />} />
        <Route path="/SobreNosotros" element={<SobreNosotros />} />
        <Route path="/Contactanos" element={<Contactanos />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ProductosInfo" element={<ProductosInfo />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
