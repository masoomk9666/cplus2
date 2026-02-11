const PortfolioHero = ({heroData}) => {

  return (
    <section className="flex flex-col justify-center w-full bg-white py-12 px-4 md:px-6 lg:px-10 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-20 items-center">

        {/* Left Side Content */}
        <div className="flex flex-col items-start space-y-3">
          {/* Logo */}
          <div className="w-25 h-25 md:w-36 md:h-36 flex items-center rounded-2xl justify-center bg-black p-5">
            <img 
              src={heroData.logo} 
              alt={`${heroData.name} Logo`} 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h1 className="text-[24px] md:text-[48px] font-medium text-gray-900 tracking-tight">
            {heroData.name}
          </h1>

          {/* Subheading */}
          <p className="text-black text-[14px] md:text-[18px] font-regular leading-relaxed max-w-[90%]">
            {heroData.description}
          </p>

          {/* Gray Review Container */}
          <div className="bg-[#F8F8F8] p-4 rounded-2xl w-full max-w-xl space-y-3">
            {/* Stars */}
            <div className="flex space-x-1">
              {[...Array(heroData.review.stars)].map((_, i) => (
                <svg key={i} className="w-9 h-9 text-[#F7D306] fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-black italic text-[10px] md:text-[12px] leading-relaxed">
              {heroData.review.text}
            </p>

            {/* Meta Info */}
            <div className="flex sm:gap-8 text-[10px] md:text-[12px] font-medium text-[#838383]">
              <p>Location : <span className="text-black">{heroData.review.meta.location}</span></p>
              <p>Industry : <span className="text-black">{heroData.review.meta.industry}</span></p>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full h-full">
          <img 
            src={heroData.image} 
            alt="Product Preview" 
            className="w-full h-full bg-cover rounded-[2rem] shadow-xl border border-gray-200"
          />
        </div>

      </div>
    </section>
  );
};

export default PortfolioHero;