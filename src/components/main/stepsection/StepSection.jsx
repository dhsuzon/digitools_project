import React from "react";
import { StepData } from "../../../staticdata/StepData.js";

const StepSection = () => {
  return (
    <div className="bg-[#F9FAFC] w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#101727] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="font-normal text-base md:text-lg text-[#627382] mb-12 md:mb-16 max-w-2xl mx-auto">
            Start using premium digital tools in minutes, not hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 justify-items-center">
            {StepData.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center w-full bg-white shadow-sm rounded-3xl py-12 px-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="absolute top-6 right-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold w-10 h-10 rounded-full flex justify-center items-center shadow-lg group-hover:scale-110 transition-transform">
                  {step.stepCardNum}
                </div>

                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full bg-[#4F39F6]/5 flex items-center justify-center group-hover:bg-[#4F39F6]/10 transition-colors">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#101727] mb-4">
                  {step.title}
                </h3>

                <p className="text-[#627382] font-normal text-base leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepSection;
