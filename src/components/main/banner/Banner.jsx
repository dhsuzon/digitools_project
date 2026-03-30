import React from "react";
import banner from "../../../assets/banner.png";
import play from "../../../assets/play.png";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden">
    
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-10 lg:py-20 px-6 md:px-15 gap-10">
        <div className="flex-1 space-y-6 text-center lg:text-left">
         
          <button className="flex items-center gap-3 bg-[#E1E7FF] px-4 py-1.5 rounded-full mx-auto lg:mx-0">
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg shadow-purple-500/50"></div>
                </div>
              </div>
            </div>

            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm md:text-base font-medium">
              New: AI-Powered Tools Available
            </span>
          </button>

      
          <h1 className="font-extrabold text-4xl md:text-6xl text-[#101727]/90 leading-[1.1] lg:max-w-162.5">
            Supercharge Your Digital Workflow
          </h1>

        
          <p className="font-normal text-base md:text-lg text-[#627382] max-w-xl mx-auto lg:mx-0">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today. <br /> Explore
            Products
          </p>

         
          <div className="flex flex-wrap justify-center lg:justify-start gap-5 pt-2">
            <button className="btn h-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base font-bold px-8 py-3.5 text-white shadow-lg hover:opacity-90 transition-all border-none">
              Explore Products
            </button>

            <button className="flex btn h-auto items-center gap-2 border-2 border-[#4F39F6] rounded-full text-base font-bold px-8 py-3.5 bg-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              <img src={play} alt="play" className="w-5 h-5" />
              Watch Demo
            </button>
          </div>
        </div>

      
        <div className="flex-1 w-full max-w-lg lg:max-w-none flex justify-center lg:justify-end">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
