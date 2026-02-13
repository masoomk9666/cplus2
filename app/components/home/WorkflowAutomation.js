import Lightning from "../layout/Lightning";
import LottiePlayer from "../layout/LottiePlayer";

export default function WorkflowAutomation() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6">
      <div className="relative max-w-7xl mx-auto overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl bg-black">
        <div className="absolute -bottom-12 -right-105 w-full h-full hidden lg:block md:z-50">
          <video
            src="/videos/servicesPage/thunder.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="object-contain opacity-90 h-full w-full "
          />

        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6 sm:gap-8 lg:gap-10 items-center px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* Left Content */}
          <div className="text-white space-y-4 sm:space-y-5 md:space-y-6 z-10">
            {/* Sub Heading */}
            <p className="text-[12px] sm:text-[14px] md:text-[16px] uppercase tracking-widest text-white">
              Reduce Manual Work with No-Code Automation
            </p>

            {/* Title */}
            <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[48px] font-normal leading-tight sm:leading-snug lg:leading-tight">
              Smart Workflow Automation for Modern Teams
            </h2>

            {/* Workflow Image Container */}
            <div className="relative w-full pt-4 sm:pt-6 -mt-6 sm:-mt-8 lg:-mt-10 h-[200px] sm:h-[250px] md:h-[300px] lg:h-90 overflow-hidden">
              <LottiePlayer
                name="workflowAnimation"
                loop={true}
                className="absolute bottom-5 left-35 -translate-x-1/2 md:left-1/2 md:-bottom-5 lg:left-[-55px] lg:bottom-[-50px] lg:-translate-x-0 w-full max-w-none md:max-w-[600px] lg:max-w-none lg:w-full scale-150 -z-10"
                speed={1.5}
              />

              {/* Labels - Desktop Only (using your exact positioning) */}
              <p className="hidden lg:block absolute top-50 left-0 text-[12px] text-white w-25 text-center">
                On create user from submission
              </p>
              <p className="hidden lg:block absolute top-50 left-32 text-[12px] text-white w-30 text-center">
                Create user in google workspace
              </p>
              <p className="hidden lg:block absolute top-34 left-81 text-[12px] text-white w-25 text-center">
                In Manager ?
              </p>
              <p className="hidden lg:block absolute top-80 left-81 text-[12px] text-white w-30 text-center">
                Create Slack user
              </p>
              <p className="hidden lg:block absolute top-22 left-142 text-[12px] text-white w-30 text-center">
                Create jira admin
              </p>
              <p className="hidden lg:block absolute top-51 left-142 text-[12px] text-white w-30 text-center">
                Create jira member
              </p>
              <p className="hidden lg:block absolute top-78 left-142 text-[12px] text-white w-30 text-center">
                Update slack profile
              </p>

              {/* Mobile/Tablet Simplified Labels */}
              <div className="lg:hidden absolute bottom-0 left-4 right-5">
                <p className="text-[10px] sm:text-[12px] text-white text-center bg-black/60 px-3 py-1.5 rounded-lg">
                  Workflow Automation Diagram - Interactive Process Flow
                </p>
              </div>
            </div>
          </div>

          {/* Empty column to balance background image - Desktop Only */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  );
}
