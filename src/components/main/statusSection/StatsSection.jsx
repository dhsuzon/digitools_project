import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 items-center justify-between text-white">
          <div className="flex flex-col items-center border-white/20 md:border-r last:border-none">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-2">50K+</h2>
            <p className="text-[#FFFFFF]/80 text-sm md:text-2xl font-medium">
              Active Users
            </p>
          </div>

          <div className="flex flex-col items-center border-white/20 md:border-r last:border-none">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-2">200+</h2>
            <p className="text-[#FFFFFF]/80 text-sm md:text-2xl font-medium">
              Premium Tools
            </p>
          </div>

          <div className="flex flex-col items-center border-white/20 md:border-r last:border-none">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-2">4.9</h2>
            <p className="text-[#FFFFFF]/80 text-sm md:text-2xl font-medium">
              Rating
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
