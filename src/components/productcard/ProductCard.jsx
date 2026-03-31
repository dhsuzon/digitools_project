import React from "react";
import { useProductContext } from "../../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useProductContext();

  return (
    <div className="bg-white p-6 rounded-4xl border border-[#F1F5F9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,57,246,0.1)] transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
      {product.tag && (
        <span className="absolute top-4 right-4 bg-[#FEF9C3] text-[#854D0E] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {product.tag}
        </span>
      )}

      <div>
        <div className="mb-6">
          <div className="w-14 h-14 bg-[#F8FAFC] rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {product.icon}
          </div>
        </div>

        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-extrabold text-[#101727] leading-tight">
            {product.name}
          </h3>
          <span className="text-[#4F39F6] font-black text-xl">
            ${product.price}
          </span>
        </div>

        <p className="text-[#64748B] text-sm leading-relaxed mb-6">
          Professional grade digital assets optimized <br /> for your next big
          project.
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-center gap-2 text-sm text-[#475569] font-medium">
            <span className="text-green-500">✓</span> Unlimited AI generations
          </li>
          <li className="flex items-center gap-2 text-sm text-[#475569] font-medium">
            <span className="text-green-500">✓</span> 50+ writing templates
          </li>
        </ul>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full py-3.5 rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-sm  transition-all cursor-pointer shadow-lg shadow-indigo-200 active:scale-95 border-none"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
