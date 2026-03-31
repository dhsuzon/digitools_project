import React from "react";
import { useProductContext } from "../../context/ProductContext";

const SelectedCart = () => {
  const { cart, removeFromCart, ClearSetectedCard } = useProductContext();


  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-gray-300">Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">

      <h2 className="text-3xl font-bold text-gray-900 mb-10">Your Cart</h2>


      <div className="space-y-8 mb-16">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between group"
          >
         
            <div className="flex items-center gap-6">
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h4 className="text-xl font-bold text-gray-800">{item.name}</h4>
                <p className="text-gray-500 font-semibold mt-1">
                  ${item.price}
                </p>
              </div>
            </div>

           
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-500 font-bold hover:underline cursor-pointer border-none bg-transparent transition-all"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

  
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center px-2">
          <span className="text-gray-400 font-bold text-lg uppercase">
            Total:
          </span>
          <span className="text-4xl font-black text-gray-900">
            ${totalPrice}
          </span>
        </div>

 
        <button
          onClick={ClearSetectedCard}
          className="w-full py-5 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-xl hover:bg-[#3D2AD1] shadow-xl shadow-indigo-100 transition-all cursor-pointer border-none active:scale-95"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedCart;
