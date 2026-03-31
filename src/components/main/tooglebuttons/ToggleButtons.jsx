import React, { useState } from "react";

const ToggleButtons = () => {

  const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="w-full bg-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-5">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#101727] tracking-tight">
            Premium Digital Tools
          </h1>
          <p className="text-[#627382] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Choose from our curated collection of premium digital products
            designed <br /> to boost your productivity and creativity.
          </p>
        </div>

        <div className="flex justify-center gap-1 items-center p-1.5 bg-white w-fit mx-auto rounded-full border border-[#E2E8F0] shadow-sm">
          {/* ২. Products Button */}
          <button
            onClick={() => setActiveTab("products")}
            className={`px-10 py-3.5 rounded-full  text-base transition-all cursor-pointer border-none scale-105 ${
              activeTab === "products"
                ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg shadow-indigo-500/30 font-bold"
                : "text-[#25065D] bg-white font-medium"
            }`}
          >
            Products
          </button>

          {/* ৩. Cart Button */}
          <button
            onClick={() => setActiveTab("cart")}
            className={`px-10 py-3.5 rounded-full text-base transition-all cursor-pointer border-none flex items-center gap-2 ${
              activeTab === "cart"
                ? "text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg shadow-indigo-500/30 font-bold"
                : "text-[#25065D] bg-white font-medium"
            }`}
          >
            Cart(0)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ToggleButtons;
