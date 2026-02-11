import React from 'react';

const TechStack = ({stackData}) => {
  // Data Array for easy management and scalability
 

  return (
    <section className="w-full bg-white py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section: Left Aligned */}
        <div className="mb-12 text-left">
          <h2 className="text-[24px] md:text-[48px] font-medium text-black mb-4 tracking-tight">
            Our Technology Stack
          </h2>
          <p className="text-black text-[14px] md:text-[18px] max-w-3xl leading-relaxed">
            We Use A Modern, Secure Tech Stack Across Languages, Frameworks, Cloud, 
            Databases, And Security To Build High-Performance, Future-Ready Products.
          </p>
        </div>

        {/* Tech Stack Grid: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stackData.map((stack, index) => (
            <div 
              key={index} 
              className="bg-[#FAFAFA] rounded-[16] p-8 md:p-10 flex flex-col items-start "
            >
              {/* Category Heading */}
              <h3 className="text-[20px] md:text-[32px] font-medium text-black mb-10">
                {stack.category}
              </h3>
              {/* Items List */}
              <div className="w-full space-y-8">
                {stack.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {/* Logo Image Container */}
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center p-2">
                      <img 
                        src={item.icon} 
                        alt={item.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    {/* Tech Name */}
                    <span className="text-[14px] md:text-[18px] font-regular text-black">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;