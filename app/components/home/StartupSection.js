

"use client";
import LottiePlayer from "../layout/LottiePlayer";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function StartupSection() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 sm:py-16 md:py-20 lg:py-25 px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-5 md:mb-5">
        <h1 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[48px] font-[500] text-black max-w-3xl md:max-w-lg lg:max-w-5xl leading-tight md:leading-normal">
          We Help Startups Turn Ideas into Real Products with it  Market & Growth 
        </h1>

        <div className="mt-4 sm:mt-0">
          <SkShadeBtn text="Let's Connect" />
        </div>
      </div>
      <div>
        <p className="max-w-4xl text-[14px] md:text-[18px]">We help businesses transform ideas into strong foundations launch market ready products, and achieve sustainable long term growth through scalable technology, processes, clear strategy, and reliable execution designed for real world adoption and measurable business impact across teams industries ecosystems worldwide now yes AI x</p>
      </div>
      
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-10">
        {/* <img 
          src="images/startup/01.gif" 
          alt="Startup Discovery" 
          className="w-full h-auto object-cover rounded-xl sm:rounded-lg md:rounded-2xl" 
        /> */}
        <LottiePlayer 
        name="startupAnimation"
        loop={true}
        className="w-full h-auto object-cover rounded-xl sm:rounded-lg md:rounded-2xl" 
        speed={2}
        /> 
      </div>
    </section>
  );
}