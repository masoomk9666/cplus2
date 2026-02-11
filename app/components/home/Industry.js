import CardCarousel from "../layout/CardCarousel";

export default function Industry() {
  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-30 xl:px-40 xxl:px-50" >
      <div className="max-w-8xl mx-auto text-center">
        {/* Sub Heading */}
        <p className="text-[12px] sm:text-[14px] md:text-[16px] tracking-widest text-black uppercase">
          Areas of Focus – What We Are Building
        </p>

        {/* Main Heading */}
        <h2 className="text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] mt-2 sm:mt-3 leading-tight md:leading-normal">
          Tailored to Your Industry Requirements
        </h2>

        {/* Description */}
        <p className="text-black max-w-5xl mx-auto mt-3 sm:mt-4 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed px-2 sm:px-0">
          We create secure, intelligent, and scalable digital Products and solutions shaped by the real challenges your industry faces. By pairing hands-on domain expertise with modern engineering and applied AI, we help businesses simplify complexity, move faster, and build technology that delivers long term results in an ever changing digital world.
        </p>

        {/* Buttons */}
        <div className="w-full flex flex-row md:flex-row  justify-center items-center gap-3 sm:gap-4 mt-6 sm:mt-8">
          <button className="group relative text-[14px] sm:text-[16px] md:text-[18px] px-5 py-1.5 sm:py-2 rounded-full bg-[#E5E5E5] text-black w-50 sm:w-auto overflow-hidden cursor-pointer">
            Explore Our Solutions
            <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-4 md:h-6 rounded-full bg-[#D0F94A] opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100`}></span>
          </button>
          <button className="group relative text-[14px] sm:text-[16px] md:text-[18px] px-5 py-1.5 sm:py-2 rounded-full bg-black text-white w-50 sm:w-auto cursor-pointer">
            Let’s Start a Conversation
            <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-4 md:h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100`}></span>
          </button>
        </div>

        {/* Cards */}
        <div className="mt-10 sm:mt-12 md:mt-14 lg:mt-10">
          <CardCarousel />
        </div>
      </div>
    </section>
  );
}




