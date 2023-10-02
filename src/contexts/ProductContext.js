import { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";

export const ProductContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const { cart, setCart } = useContext(CartContext);

  function itemsToLocalStorage(state) {
    localStorage.setItem("s10g4", JSON.stringify(state));
  }
  function readFavsFromLocalStorage() {
    return JSON.parse(localStorage.getItem("s10g4"));
  }
  const addItem = (item) => {
    const checkSameItem = cart.find((book) => book.id === item.id);
    if (checkSameItem) return;
    const updatedCart = [...cart, item];

    setCart(updatedCart);

    itemsToLocalStorage(updatedCart);
  };

  useEffect(() => {
    const savedData = readFavsFromLocalStorage();
    if (savedData) setCart(savedData);
  }, []);

  return (
    <ProductContext.Provider value={{ addItem, products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
