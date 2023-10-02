import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function itemsToLocalStorage(state) {
    localStorage.setItem("s10g4", JSON.stringify(state));
  }

  function removeItem(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    itemsToLocalStorage(updatedCart);
  }
  return (
    <CartContext.Provider value={{ cart, setCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
