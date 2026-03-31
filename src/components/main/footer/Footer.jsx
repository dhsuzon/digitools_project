import React from "react";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0F172A] text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h2 className="text-3xl font-black text-white">DigiTools</h2>
            <p className="text-base text-white/80 leading-relaxed max-w-sm">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6 leading-tight text-white">
              Product
            </h4>
            <ul className="space-y-4 text-base text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Templates
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Integrations
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6 leading-tight text-white">
              Company
            </h4>
            <ul className="space-y-4 text-base text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">
                About
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Blog
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Careers
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Press
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h4 className="font-bold text-lg mb-6 leading-tight text-white">
              Resources
            </h4>
            <ul className="space-y-4 text-base text-white/80">
              <li className="hover:text-white cursor-pointer transition-colors">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Help Center
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Community
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-bold text-lg mb-6 leading-tight text-nowrap text-white">
              Social Links
            </h4>
            <div className="flex justify-center md:justify-start gap-4">
              <div className="w-10 p-2.5 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4F39F6] transition-all cursor-pointer">
                <FaSquareFacebook size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4F39F6] transition-all cursor-pointer">
                <FaInstagram size={20} />
              </div>
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#4F39F6] transition-all cursor-pointer">
                <FaXTwitter size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-[#FAFAFA]/50 text-sm capitalize tracking-widest text-center md:text-left gap-4">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer transition-colors">
              Cookies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
