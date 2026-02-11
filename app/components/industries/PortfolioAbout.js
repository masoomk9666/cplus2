import React from 'react';

const PortfolioAbout = ({aboutData}) => {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-6">
        <div 
          className="max-w-7xl mx-auto bg-[#FAFAFA] rounded-[32px] p-8 md:p-14"
        >
          {/* Content Wrapper */}
          <div className="flex flex-col items-start text-left gap-4">
            
            {/* Heading */}
            <h2 className="text-[24px] md:text-[48px] font-medium text-black tracking-tight">
              {aboutData && aboutData.heading}
            </h2>

            {/* Subheading / Description */}
            <p className="text-black text-[14px] md:text-[18px] leading-normal font-normal mb-4  md:text-left">
              {aboutData && aboutData.description}
            </p>

            {/* Bottom Logo Section */}
            <div className="flex items-start gap-3">
              {/* Full Logo Image */}
              <div className="w-42 h-10 flex items-start justify-start">
                <img 
                  src={aboutData && aboutData.logoImg} 
                  // alt={item.logoText} 
                  className="h-full w-[fit-content] object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      
    </section>
  );
};

export default PortfolioAbout;