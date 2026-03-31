import React from "react";

const WorkFlowSection = () => {
  return (
    <section className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center text-white space-y-8">
        <h2 className="text-4xl font-extrabold leading-tight">
          Ready To Transform Your Workflow?
        </h2>

        <p className="text-white/90 text-base max-w-2xl mx-auto">
          Join thousands of professionals who are already using DigiTools to
          work smarter. <br className="hidden md:block" /> Start your free trial
          today.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-5 pt-4">
          <button className="w-full sm:w-auto px-10 py-4 bg-white rounded-full font-semibold text-base shadow-xl hover:scale-105 transition-transform cursor-pointer">
            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text">
              Explore Products
            </span>
          </button>

          <button className="w-full sm:w-auto px-10 py-4 border border-white text-white text-base rounded-full hover:bg-white/10 transition-colors cursor-pointer">
            View Pricing
          </button>
        </div>

        <p className="text-base text-white/80">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlowSection;
