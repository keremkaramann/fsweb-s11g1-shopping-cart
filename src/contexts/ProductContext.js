import { createContext, useContext, useState } from "react";
import { data } from "../data";
import { CartContext } from "./CartContext";

export const ProductContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);

  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    const checkSameItem = cart.find((book) => book.id === item.id);
    if (checkSameItem) return;
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider value={{ addItem, products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
