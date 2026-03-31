import React from "react";
import { useProductContext } from "../../context/ProductContext";
import { FaCheck } from "react-icons/fa6";

const ProductCard = ({ product }) => {
  const tagStyles = {
    popular: "bg-[#E1E7FF] text-purple-500",
    "best seller": "text-[#BB4D00]  bg-[#FEF3C6]",
    new: "bg-[#DBFCE7] text-[#0A883E]",
  };
  const { addToCart } = useProductContext();

  return (
    <div className="bg-white p-6 rounded-4xl border border-[#F1F5F9] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(79,57,246,0.1)] transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden group">
      {product.tag && (
        <span
          className={`absolute top-4 right-4 text-[10px] font-extrabold px-3 py-1 rounded-full capitalize tracking-widest border-none 
    ${tagStyles[product.tagType]}`}
        >
          {product.tag}
        </span>
      )}

      <div>
        <div className="mb-6">
          <div className="w-14 h-14 bg-[#F8FAFC] rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {product.icon}
          </div>
        </div>

        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[#101727] leading-tight">
              {product.name}
            </h3>
            <p className="text-[#101727] font-bold mt-2 text-2xl">
              ${product.price}
              <span className="text-base text-[#627382]">
                /{product.period}
              </span>
            </p>
          </div>
        </div>

        <p className="text-[#627382] text-base leading-relaxed mb-6">
          {product.description}
        </p>

        <ul className="space-y-3 mb-8">
          {product.features.map((feature) => (
            <li className="flex items-center gap-2 text-base text-[#627382] font-medium">
              <FaCheck className="text-[#30B868]" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full py-3.5 rounded-full  bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold text-base transition-all cursor-pointer shadow-lg shadow-indigo-200 active:scale-95 border-none"
      >
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
