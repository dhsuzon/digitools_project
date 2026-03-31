import React, { createContext, useState, useContext } from "react";


const productPromise = fetch("/ProductData.json").then((res) => res.json());

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if (!isExist) {
      setCart([...cart, product]);
    }
  };
  const ClearSetectedCard =()=>{
    setCart([])
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        productPromise,
        cart,
        addToCart,
        removeFromCart,
        ClearSetectedCard,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = () => useContext(ProductContext);
