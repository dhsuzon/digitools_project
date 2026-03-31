import React, { createContext, useState, useContext } from "react";
import {  FaShoppingCart } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import {  FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

const productPromise = fetch("/ProductData.json").then((res) => res.json());

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const isExist = cart.find((item) => item.id === product.id);
    if(isExist) {
      toast.error("This Product Already Selected", {
        style: {
          color: "#FF0000",
        },
      });
    }
    if (!isExist) {
      setCart([...cart, product]);
      toast.success("This Product Seleted And  Add To The Cart",{
        icon:<FaShoppingCart/>,
        style:{
          color:"#00FF00"
        }
        
      })
    }
  };
  const ClearSetectedCard = () => {
    
    setCart([]);
    toast.error("Clear All Seleted Card", {
      icon: <FaTrashCan />,
      style: {
        color: "#FF0000",
      },
    });
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.error("Delete This Clicked Seleted Cart", {
      icon: <MdDeleteForever />,
      style: {
        color: "#FF0000",
      },
    });

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
