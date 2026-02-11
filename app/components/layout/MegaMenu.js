// "use client";

// const MegaMenu = ({ isScrolled, children, onMouseEnter, onMouseLeave, menuRef }) => {
//   return (
//     <div
//       ref={menuRef}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className={`hidden lg:block fixed top-[80px] left-1/2 -translate-x-1/2 w-[85%] rounded-xl shadow-2xl z-50 transition-all duration-500 ${
//         isScrolled
//           ? "bg-white text-black"
//           : "bg-white/10 text-white backdrop-blur-xl"
//       }`}
//     >
//       <div className="w-full mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
//         {children}
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;



"use client";

const MegaMenu = ({ isScrolled, children, onMouseEnter, onMouseLeave, menuRef, isBlackText = false }) => {
  return (
    <div
      ref={menuRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`hidden lg:block fixed top-[80px] left-1/2 -translate-x-1/2 w-[85%] rounded-xl shadow-2xl z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white text-black"
          : isBlackText 
            ? "bg-white text-black" // Black text for HeaderB
            : "bg-white/10 text-white backdrop-blur-xl" // White text for original Header
      }`}
    >
      <div className="w-full mx-auto px-8 md:px-12 lg:px-16 py-8 md:py-10 lg:py-12">
        {children}
      </div>
    </div>
  );
};

export default MegaMenu;