import React from "react";
import banner from "../../../assets/banner.png";
import play from "../../../assets/play.png";

const Banner = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center py-12 lg:py-24 px-6 md:px-15 gap-12 lg:gap-10">
        <div className="flex-1 space-y-8 text-center lg:text-left order-2 lg:order-1">
          <button className="flex items-center gap-3 bg-[#E1E7FF] px-4 py-2 rounded-full mx-auto lg:mx-0 transition-transform hover:scale-105">
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-purple-300 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-lg shadow-purple-500/50"></div>
                </div>
              </div>
            </div>
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm md:text-base font-semibold">
              New: AI-Powered Tools Available
            </span>
          </button>

          <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-[#101727] leading-[1.15] lg:max-w-[650px]">
            Supercharge Your Digital Workflow
          </h1>

          <p className="font-normal text-base md:text-lg text-[#627382] max-w-xl mx-auto lg:mx-0 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6 pt-4">
            <button className="btn h-auto bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-base font-bold px-8 py-4 text-white shadow-xl hover:shadow-purple-500/30 transition-all border-none whitespace-nowrap">
              Explore Products
            </button>

            <button className="btn h-auto flex items-center gap-2 border-2 border-[#4F39F6] rounded-full text-base font-bold px-8 py-4 bg-transparent hover:bg-purple-50 transition-colors whitespace-nowrap">
              <img src={play} alt="play" className="w-5 h-5 shrink-0" />
              <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                Watch Demo
              </span>
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-md md:max-w-xl lg:max-w-none flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-auto object-contain animate-float"
            style={{
              filter: "drop-shadow(0 20px 30px rgba(79, 57, 246, 0.15))",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
