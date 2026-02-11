import React from 'react';

const PortfolioGrid = ({ gridImages }) => {
  return (
    <section className="relative w-full bg-white py-12 px-4 md:px-6 h-[60vh]">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-6">

        {/* Left Image Wrapper */}
        <div className="w-full h-[55vh]">
          <img
            src={gridImages?.leftImg}
            alt="Hiring Dashboard"
            className="w-full h-full rounded-[2.5rem] object-cover border border-gray-100"
          />
        </div>

        {/* Right Image Wrapper */}
        <div className="w-full h-[55vh]">
          <img
            src={gridImages?.rightImg}
            alt="Candidate Profile"
            className="w-full h-full rounded-[2.5rem] object-cover border border-gray-100"
          />
        </div>

      </div>

    </section>
  );
};

export default PortfolioGrid;