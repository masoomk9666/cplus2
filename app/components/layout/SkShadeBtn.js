
import React from "react";

const SkShadeBtn = ({ 
  text = "Learn More", 
  shadeWidth = "20", 
  shadeColor = "white", 
  textColor = "white", 
  bgColor = "black"
}) => {
  
  // Map shadeWidth to actual Tailwind classes
  const getShadeWidthClass = (width) => {
    const widthMap = {
      "10": "w-10",
      "15": "w-15",
      "20": "w-20",
      "25": "w-25",
      "30": "w-30",
      "40": "w-40",
      "50": "w-50",
    };
    return widthMap[width] || "w-20";
  };

  // Map colors to actual Tailwind classes
  const getColorClass = (color, type) => {
    const colorMap = {
      "white": type === "bg" ? "bg-white" : "text-white",
      "black": type === "bg" ? "bg-black" : "text-black",
      "green": type === "bg" ? "bg-green-500" : "text-green-500",
      "blue": type === "bg" ? "bg-blue-500" : "text-blue-500",
      "yellow": type === "bg" ? "bg-yellow-500" : "text-yellow-500",
      "red": type === "bg" ? "bg-red-500" : "text-red-500",
      "[#D0F94A]": type === "bg" ? "bg-[#D0F94A]" : "text-[#D0F94A]",
    };
    return colorMap[color] || (type === "bg" ? "bg-black" : "text-white");
  };

  const shadeWidthClass = getShadeWidthClass(shadeWidth);
  const bgColorClass = getColorClass(bgColor, "bg");
  const textColorClass = getColorClass(textColor, "text");
  const shadeColorClass = getColorClass(shadeColor, "bg");

  return (
    <button className={`group relative text-[14px] md:text-[18px] ${bgColorClass} ${textColorClass} px-4 sm:px-5 py-1.5 sm:py-2 rounded-full w-fit overflow-hidden cursor-pointer transition-all duration-300 `}>
      {text}
      {/* Inner glow - Responsive */}
      <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-4 md:h-5 rounded-full ${shadeColorClass} opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100`}></span>
    </button>
  );
};

export default SkShadeBtn;