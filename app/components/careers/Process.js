"use client"
import React from "react"
import LottiePlayer from "../layout/LottiePlayer"

const Process = () => {
  return (
    <section className="w-full bg-white py-10 md:pt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
        
        {/* Badge */}
        <span className="mb-2 inline-block text-black text-[12px] md:text-[16px]">
          RECRUITING PROCESS
        </span>

        {/* Heading */}
       <h2 className="text-[24px] md:text-[48px] font-medium text-[#051C24] leading-tight mb-10">
  Your Path to Joining Cplusoft
</h2>


        {/* Image */}
        <div className="relative w-full flex flex-col lg:flex-row justify-center">
          {/* <img
            src="/images/careers/01.gif"
            alt="Recruiting Process"
            className="max-w-4xl w-full object-contain"
          /> */}
          <LottiePlayer 
          name="careerAnimation"
          speed={2}
          />
          <p className="hidden lg:block absolute bottom-0 left-15 text-[14px] md:text-[18px]">YOUR APPLICATION</p>
          <p className="hidden lg:block absolute bottom-0 left-80 text-[14px] md:text-[18px]">EXPERT EVALUATION</p>
          <p className="hidden lg:block absolute bottom-0 left-145 text-[14px] md:text-[18px]">PERSONAL INTERVIEW</p>
          <p className="hidden lg:block absolute bottom-0 left-210 text-[14px] md:text-[18px]">SEAMLESS ONBOARDING</p>
          <p className="black lg:hidden text-[10px] md:text-[18px] text-center mt-5">OUR SEAMLESS APPLICATION PROCESS & ONBOARDING </p>

        </div>

      </div>
    </section>
  )
}

export default Process
