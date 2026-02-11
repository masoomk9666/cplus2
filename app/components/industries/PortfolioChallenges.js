import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

const PortfolioChallenges = ({challengeData}) => {
  // Data Object for easy management


  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[24px] md:text-[48px] font-medium text-black mb-6  tracking-tight">
            {challengeData.title}
          </h2>
          <p className=" text-black text-[14px] md:text-[18px] max-w-xl mx-auto leading-relaxed ">
            {challengeData.description}
          </p>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Problems Card (Gray) */}
          <div className="bg-[#FAFAFA] rounded-[20] px-4 md:px-5 py-4 md:py-10">
            <h3 className="text-[20px] md:text-[32px] font-medium mb-5 text-black">Problems</h3>
            <div className="space-y-8 p-2">
              {challengeData.problems.map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Black Circle with White Cross */}
                  <div className='bg-black text-white p-1 rounded-full'>
                    <RxCross2 size={12} />
                  </div>
                  <p className="text-black text-[14px] md:text-[18px] font-regular -tracking-[0.2px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Card (Linear Gradient) */}
          <div
            className="rounded-[20] px-4 md:px-5 py-4 md:py-10"
            style={{
              background: `linear-gradient(180deg, #E9FFA3 0%, #3CDB9D7A 48%)`
            }}
          >
            <h3 className="text-[20px] md:text-[32px] font-medium mb-5 text-black">Solutions by Cplusoft</h3>
            <div className="space-y-8 p-2">
              {challengeData.solutions.map((text, index) => (
                <div key={index} className="flex items-center gap-2">
                  {/* Black Circle with White Cross */}
                  <div className='bg-white text-[#57E183] p-1 rounded-full'>
                    <FaCheck size={12} />
                  </div>
                  <p className="text-black text-[14px] md:text-[18px] font-regular -tracking-[0.2px]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PortfolioChallenges;