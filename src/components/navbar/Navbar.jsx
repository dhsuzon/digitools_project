import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm sticky top-0 z-50">
     
      <div className="max-w-7xl mx-auto px-6 md:px-15 py-4 flex justify-between items-center h-20 md:h-24">
       
        <div className="flex items-center gap-2">
         
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </button>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-4 shadow bg-base-100 rounded-box w-52 space-y-3 font-semibold"
            >
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
              </li>
            </ul>
          </div>

       
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-black bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent cursor-pointer">
            DigiTools
          </h1>
        </div>

       
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-8 font-semibold text-[#101727]/90 text-base">
            <li className="hover:text-[#4F39F6] transition-colors">
              <a href="#products">Products</a>
            </li>
            <li className="hover:text-[#4F39F6] transition-colors">
              <a href="#features">Features</a>
            </li>
            <li className="hover:text-[#4F39F6] transition-colors">
              <a href="#pricing">Pricing</a>
            </li>
            <li className="hover:text-[#4F39F6] transition-colors">
              <a href="#testimonials">Testimonials</a>
            </li>
            <li className="hover:text-[#4F39F6] transition-colors">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </div>

        
        <div className="flex items-center gap-3 md:gap-6">
         
          <div className="relative cursor-pointer hover:scale-110 transition-transform mr-2">
            <LuShoppingCart className="text-xl md:text-2xl text-[#101727]" />
            <span className="absolute -top-2 -right-2 bg-[#4F39F6] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>

          <p className="hidden sm:block text-sm md:text-base font-semibold text-[#101727]/90 cursor-pointer hover:text-[#4F39F6]">
            Login
          </p>

          <button className="btn btn-sm md:btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none rounded-full text-white px-4 py-6 md:px-8 font-bold text-xs md:text-base">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
