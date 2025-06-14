// src/context/CartContext.jsx
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <CartContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen, total }}>
      {children}
    </CartContext.Provider>
  );
}
