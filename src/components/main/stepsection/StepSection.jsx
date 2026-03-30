import { StepData } from "../../../staticdata/StepData.js";

const StepSection = () => {
  return (
    <div className="bg-[#F9FAFC] w-full py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-15">
        <div className="text-center">
          <h2 className="text-5xl font-extrabold text-[#101727] mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="font-normal text-base text-[#627382] mb-16">
            Start using premium digital tools in minutes, not hours.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {StepData.map((step) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center w-full max-w-95 bg-white shadow-sm rounded-3xl py-12 px-6 border border-gray-50 hover:shadow-md transition-shadow duration-300"
              >
                <div className="absolute top-5 right-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold w-10 h-10 rounded-full flex justify-center items-center shadow-md">
                  {step.stepCardNum}
                </div>

                <div className="mb-8">
                  <div className="w-24 h-24 rounded-full bg-[#4F39F6]/10 flex items-center justify-center">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-[#101727] mb-3">
                  {step.title}
                </h3>

                <p className="text-[#627382] font-normal text-base leading-relaxed max-w-65 mx-auto">
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
