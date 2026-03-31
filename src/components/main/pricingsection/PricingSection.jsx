import React from "react";
import { HiCheck } from "react-icons/hi";
import { pricingData } from "../../../staticdata/PricingData.js";

const PricingSection = () => {
  return (
    <div className="bg-[#F9FAFC] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#101727] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 items-end">
          {pricingData.map((plan) => (
            <div
              key={plan.id}
              className={`relative p-8 rounded-3xl border transition-all duration-300 ${
                plan.isPopular
                  ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-2xl shadow-purple-500/30 lg:scale-105 z-10 py-12"
                  : "bg-white border-white shadow-sm"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-xs md:text-sm font-medium px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md whitespace-nowrap">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.planName}</h3>
                <p
                  className={`${plan.isPopular ? "text-white/80" : "text-[#627382]"} text-sm`}
                >
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">${plan.planPrice}</span>
                <span
                  className={`${plan.isPopular ? "text-white" : "text-[#627382]"} text-lg ml-1`}
                >
                  /Month
                </span>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-base">
                    <HiCheck
                      className={
                        plan.isPopular ? "text-white" : "text-[#30B868]"
                      }
                    />
                    <span
                      className={
                        plan.isPopular ? "text-white" : "text-[#627382]"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 btn h-auto rounded-full font-bold text-base transition-all border-none ${
                  plan.isPopular
                    ? "bg-white hover:bg-gray-100"
                    : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                }`}
              >
                <span
                  className={
                    plan.isPopular
                      ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text"
                      : ""
                  }
                >
                  {plan.buttonText}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
