import React from 'react';

const PortfolioProcess = ({processData}) => {
  // Data Array: Har step ke liye alag image path add kiya hai


  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-[48px] md:text-[48px] font-medium text-black mb-4 tracking-tight">
            {processData.mainHeading}
          </h2>
          <p className="text-black text-[14px] md:text-[18px]">
            {processData.mainSubheading}
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 items-center">
          {processData.steps.map((step, index) => (
            <div 
              key={index} 
              className="relative aspect-[1/1.1] flex flex-col items-start justify-center p-12 group overflow-hidden"
            >
              {/* Background Hexagon Image for each specific step */}
              <img 
                src={step.stepImg} 
                className="absolute inset-0 w-full h-full object-contain z-0" 
                alt={`${step.title} background`} 
              />

              {/* Content Wrapper */}
              <div className="relative z-10 text-left">
               

                {/* Heading */}
                <h3 className="text-[18px] md:text-[28px] font-medium text-black mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-black text-[12px] md:text-[16px] leading-snug ">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioProcess;