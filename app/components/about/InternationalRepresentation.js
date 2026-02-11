// "use client"
// import { useState, useEffect, useRef } from "react";

// const InternationalRepresentation = () => {
//     const slides = [
//         {
//             images: [
//                 "/images/testimonials/01.png",
//                 "/images/testimonials/02.png",
//                 "/images/testimonials/03.png",
//                 "/images/testimonials/04.png",
//             ],
//             heading: "International Representation",
//             description:
//                 "Cplus Soft Partners With Businesses Across The Globe, Delivering Scalable And Future-Ready Digital Solutions To Diverse Industries. Our Experience Working With International Clients Enables Us To Understand Global Business Standards While Adapting Solutions To Meet Local And Regional Needs. Through Strong Collaboration, Modern Technologies, And A Client-First Approach, We Support Organizations Worldwide In Building, Scaling, And Optimizing Digital Products That Drive Long-Term Success.",
//         },
//         {
//             images: [
//                 "/images/testimonials/04.png",
//                 "/images/testimonials/03.png",
//                 "/images/testimonials/02.png",
//                 "/images/testimonials/01.png",
//             ],
//             heading: "Global Partnerships",
//             description:
//                 "We work with international clients to create scalable solutions that meet local and global standards. Our team ensures seamless collaboration and adapts to different regional needs.",
//         },
//         // Add more slides here
//     ];


//    const [current, setCurrent] = useState(0);
//   const timeoutRef = useRef(null);

//   const resetTimeout = () => {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   };

//   useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(() => {
//       setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     }, 5000);

//     return () => resetTimeout();
//   }, [current]);

//   const handlePrev = () => {
//     setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const handleNext = () => {
//     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   const images = slides[current].images;

//     return (
//     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 p-5 md:p-0 items-center justify-center  gap-10 md:gap-20 h-auto  lg:h-screen">
//       {/* Left Column: Images in 3 columns */}
//       <div className="flex gap-4 ">
//         {/* Column 1 */}
//         <div className="flex flex-col justify-center">
//           <img
//             src={images[0]}
//             alt="column1-img"
//             className="rounded-lg shadow-lg w-48 md:w-64 object-cover"
//           />
//         </div>

//         {/* Column 2 */}
//         <div className="flex flex-col gap-4">
//           <img
//             src={images[1]}
//             alt="column2-img1"
//             className="rounded-lg shadow-lg w-48 md:w-64 object-cover"
//           />
//           <img
//             src={images[2]}
//             alt="column2-img2"
//             className="rounded-lg shadow-lg w-48 md:w-64 object-cover"
//           />
//         </div>

//         {/* Column 3 */}
//         <div className="flex flex-col justify-center mt-7"> {/* mt-7 ≈ 28px */}
//           <img
//             src={images[3]}
//             alt="column3-img"
//             className="rounded-lg shadow-lg w-48 md:w-64 object-cover"
//           />
//         </div>
//       </div>

//       {/* Right Column: Text */}
//       <div className="flex-1 relative max-w-xl ">
//         <h2 className="text-2xl md:text-[48px] font-medium mb-4">
//           {slides[current].heading}
//         </h2>
//         <p className="text-[18px] text-black mb-6">{slides[current].description}</p>

//         {/* Navigation Buttons */}
//         <div className="absolute bottom-0 right-0 flex gap-2">
//           <button
//                   onClick={handlePrev}
//                   aria-label="Previous Slide"
//                   className="w-10 h-10 rounded-full bg-white text-black border border-gray-500 text-[20px]  flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
//                 >
//                   ‹
//                 </button>

//                 <button
//                   onClick={handleNext}
//                   aria-label="Next Slide"
//                   className="w-10 h-10 rounded-full bg-linear-to-b from-[#3CDB9D] to-[#D0F94A] text-black text-[20px] flex items-center justify-center hover:bg-emerald-400 transition cursor-pointer"
//                 >
//                   ›
//                 </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default InternationalRepresentation


"use client";
import { useState, useEffect, useRef } from "react";

const InternationalRepresentation = () => {
  const slides = [
    {
      images: [
        "/images/testimonials/01.png",
        "/images/testimonials/02.png",
        "/images/testimonials/03.png",
      ],
      heading: "Cplusoft At Web Summit Qatar 2025",
      description:
        "Cplusoft connects with global innovators at Web Summit Qatar, showcasing scalable AI and digital capabilities. Our presence reflects hands-on experience with international markets while sharing practical solutions designed to meet regional business needs and real-world challenges.",
    },
    {
      images: [
        "/images/testimonials/04.png",
        "/images/testimonials/03.png",
        "/images/testimonials/02.png",
      ],
      heading: "Global Partnerships",
      description:
        "We work with international clients to create scalable solutions that meet local and global standards. Our team ensures seamless collaboration and adapts to different regional needs.",
    },
  ];

  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => resetTimeout();
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const { images, heading, description } = slides[current];

  return (
    <div className="relative max-w-7xl mx-auto px-5 md:px-0 py-16 lg:h-screen">
      <div className="relative grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-3 md:gap-3 lg:gap-10 items-center p-0 md:p-6 lg:p-0 lg:min-h-[70vh] items-end">         {/* LEFT COLUMN – MAIN IMAGE */}
        <div className="block md:hidden lg:block rounded-2xl overflow-hidden h-70 lg:h-full order-2 lg:order-1">
          <img
            src={images[0]}
            alt="Main"
            className="w-full h-full object-cover rounded-2xl bg-linear-to-b from-black to-gray"
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="relative w-full flex flex-col justify-center  order-1 lg:order-2">
          <div>
            <h2 className="text-[24px] md:text-[48px] font-medium mb-4  md:leading-12 lg:leading-auto">
              {heading}
            </h2>

            <p className="text-[14px] md:text-[18px] text-gray-700 mb-4 md:mb-8">
              {description}
            </p>
          </div>


          {/* SMALL IMAGES */}
          <div className="hidden md:flex  gap-2  w-full h-100 overflow-hidden items-end justify-between">
            <img
              src={images[1]}
              alt="Small 1"
              className="w-[49%] h-full object-cover rounded-xl bg-linear-to-b from-black to-gray p-0"
            />
            <img
              src={images[2]}
              alt="Small 2"
              className="w-[49%] h-full object-cover rounded-xl bg-linear-to-b from-black to-gray"
            />
          </div>


        </div>
        {/* BUTTONS */}
      <div className="absolute -bottom-20 right-5 md:right-6 lg:rigth-0 flex gap-2">
        <button
          onClick={handlePrev}
          aria-label="Previous Slide"
          className="w-10 h-10 rounded-full bg-white border border-gray-400 text-xl flex items-center justify-center hover:bg-gray-100 transition cursor-pointer"
        >
          ‹
        </button>

        <button
          onClick={handleNext}
          aria-label="Next Slide"
          className="w-10 h-10 rounded-full bg-gradient-to-b from-[#3CDB9D] to-[#D0F94A] text-xl flex items-center justify-center hover:opacity-90 transition cursor-pointer"
        >
          ›
        </button>
      </div>
      </div>
      
    </div>
  );
};

export default InternationalRepresentation;



