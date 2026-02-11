
"use client";
import { ArrowUpRight } from "lucide-react";
import SkShadeBtn from "../layout/SkShadeBtn";

export default function Labs() {
  return (
    <section className="w-full bg-white pt-20 md:pt-30 lg:pt-35 pb-12 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-8 lg:px-0">
      <div className="max-w-7xl mx-auto">
        {/* Sub Heading */}
        <p className="text-center text-[12px] sm:text-[14px] md:text-[16px] tracking-widest text-black mb-2 md:mb-3">
          UNLOCKING TOMORROW’S DIGITAL POTENTIAL
        </p>

        {/* Main Heading */}
        <h2 className="text-center text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-medium mb-8 md:mb-10 lg:mb-12 leading-tight md:leading-normal">
          Our AI Driven Development Labs
        </h2>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-cols-[1.5fr_1.3fr_1fr] gap-4 md:gap-6 lg:gap-4">
          {/* ================= COLUMN 1 ================= */}

          <div className="group relative rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[600px] bg-gradient-to-r from-[#AEDBC9] to-[#DDF6E4] overflow-hidden">
            <div
              className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
            />

            {/* Text Content */}
            <div className="relative z-10">
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] uppercase font-medium">Artificial intelligence Lab</h3>

              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black mt-2 sm:mt-3 leading-relaxed">
                We design and deploy AI that delivers real business value. From custom machine learning models and predictive systems to generative solutions and autonomous agents, our AI turns complex data into faster decisions, lower operating costs, and sustained competitive advantage.
              </p>

              {/* Extra text for larger screens */}
              <p className="text-[14px] sm:text-[15px] md:text-[16px] text-black mt-2 leading-relaxed hidden sm:block">
                We focus on practical implementation, not theoretical concepts. Our solutions integrate seamlessly with existing systems, scale with your growth, and adapt to changing business needs. Every AI system we build is designed for reliability, performance, and long-term operational success.
              </p>

              {/* Hover Button */}
              <button className="relative mt-4 sm:mt-6 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-2 sm:p-3 rounded-full">
                {/* Arrow icon with responsive size classes */}
                <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                  <ArrowUpRight className="w-full h-full" />
                </div>
                <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
              </button>
            </div>

            {/* Background Image */}
            <img
              src="/images/newlab/brain.png"
              className="absolute bottom-0 right-0 w-full max-w-[100%] sm:max-w-none group-hover:scale-110 lg:group-hover:scale-120 group-hover:bottom-4 lg:group-hover:bottom-8 z-0 pointer-events-none transition-all duration-600 ease-in-out"
              alt="Brain"
            />
          </div>

          {/* ================= COLUMN 2 ================= */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4">
            {/* Box 1 */}
            <div
              className="group relative rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg1.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] uppercase font-medium">Automation</h3>

              <div className="relative z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition mt-2 sm:mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-2 sm:mb-3">
                  We reduce human effort with smart automation, helping teams work faster, smarter, and focus on growth.
                </p>
                <button className="relative mt-2 sm:mt-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-2 sm:p-3 rounded-full">
                  {/* Arrow icon with responsive size classes */}
                  <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                    <ArrowUpRight className="w-full h-full" />
                  </div>
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
                </button>
              </div>

              <img
                src="/images/newlab/automation.png"
                className="absolute -bottom-10 sm:-bottom-12 md:-bottom-15 -right-5 sm:-right-8 md:-right-10 w-40 sm:w-55 md:w-70 z-0 group-hover:scale-110 lg:group-hover:scale-120 group-hover:-right-4 lg:group-hover:-right-8 group-hover:-bottom-8 lg:group-hover:-bottom-10 transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>

            {/* Box 2 */}
            <div
              className="group relative rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg2.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] uppercase font-medium">
                Custom Software Development LAB
              </h3>

              <div className="relative z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition mt-2 sm:mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-2 sm:mb-3">
                  We turn ideas into production-ready software that reduces costs, removes manual effort, and modernizes systems for scalable growth.
                </p>
                <button className="relative mt-2 sm:mt-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-2 sm:p-3 rounded-full">
                  {/* Arrow icon with responsive size classes */}
                  <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                    <ArrowUpRight className="w-full h-full" />
                  </div>
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
                </button>
              </div>

              <img
                src="/images/newlab/laptop.png"
                className="absolute -bottom-8 sm:-bottom-10 md:-bottom-10 -right-5 sm:-right-8 md:-right-10 w-35 sm:w-45 md:w-55 z-0 group-hover:scale-110 lg:group-hover:scale-120 group-hover:-right-3 lg:group-hover:-right-5 transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>
          </div>

          {/* ================= COLUMN 3 ================= */}
          <div className="flex flex-col gap-4 md:gap-6 lg:gap-4">
            {/* Box 1 */}
            <div
              className="group relative rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: "url('/images/newlab/bg1.png')" }}
            >
              <div
                className="absolute inset-0 bg-white/25 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100 z-[1]"
              />
              <h3 className="text-[16px] sm:text-[18px] md:text-[20px] uppercase font-medium">
                Cyber Security
              </h3>

              <div className="relative z-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition mt-2 sm:mt-3 transition-all duration-900 ease-in-out">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] mb-2 sm:mb-3">
                  We create secure systems that control access, detect threats, and keep your business protected at all times.
                </p>
                <button className="relative mt-2 sm:mt-3 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-900 ease-in-out bg-black text-white p-2 sm:p-3 rounded-full">
                  {/* Arrow icon with responsive size classes */}
                  <div className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                    <ArrowUpRight className="w-full h-full" />
                  </div>
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-4 h-2 sm:w-5 sm:h-3 rounded-full bg-white opacity-100 blur-sm pointer-events-none"></span>
                </button>
              </div>

              <img
                src="/images/newlab/lock.png"
                className="absolute -bottom-10 sm:-bottom-12 md:-bottom-15 -right-6 sm:-right-10 md:-right-12 w-40 sm:w-55 md:w-70 z-0 group-hover:scale-110 lg:group-hover:scale-120 group-hover:-right-4 lg:group-hover:-right-5 transition-all duration-900 ease-in-out"
                alt=""
              />
            </div>

            {/* Box 2 */}
            <div
              className="rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 bg-teal-100 min-h-[250px] sm:min-h-[280px] md:min-h-[320px] flex flex-col justify-between bg-cover bg-center"
              style={{ backgroundImage: "url('/images/newlab/bg4.png')" }}
            >
              <p className="text-[14px] sm:text-[15px] md:text-[16px]">
                Explore how our labs design secure and scalable solutions transforming ideas into real world products automation and systems built for performance-driven-results and long term growth!
              </p>
              <div className="mt-4 sm:mt-6">
                <SkShadeBtn text="Lets Connect" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
