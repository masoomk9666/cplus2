"use client"
import React from 'react';
import { motion } from "framer-motion";
import SkShadeBtn from '../layout/SkShadeBtn';
import { useEffect, useState } from "react";

const Hero = () => {
    const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


    const logos = [
        "/images/testimonials/marquee/01.png",
        "/images/testimonials/marquee/02.png",
        "/images/testimonials/marquee/03.png",
        "/images/testimonials/marquee/04.png",
        "/images/testimonials/marquee/05.png",
        "/images/testimonials/marquee/06.png",
        "/images/testimonials/marquee/01.png",
        "/images/testimonials/marquee/02.png",
        "/images/testimonials/marquee/03.png",
        "/images/testimonials/marquee/04.png",
        "/images/testimonials/marquee/05.png",
        "/images/testimonials/marquee/06.png",
    ];

    return (
        <section className="h-auto md:h-[70vh] flex flex-col justify-end bg-[#021520] text-white pb-10 pt-30 px-6 ">
            <div className="max-w-7xl lg:mx-auto text-center space-y-20">
                <div className='text-center space-y-5'>
                    {/* Heading */}
                    <h2 className="text-[24px] md:text-[48px] font-medium tracking-tight">
                        Industries We Serve
                    </h2>

                    {/* Description */}
                    <p className="text-white text-[14px] md:text-[18px] max-w-4xl mx-auto leading-relaxed mb-8">
                        At Cplus Soft, We Partner With Businesses Across Diverse Industries To Build AI-Powered,
                        Scalable, And Future-Ready Digital Solutions. Our Industry-Focused Approach Ensures
                        Every Product Is Secure, Compliant, And Tailored To Real-World Business Challenges.
                    </p>

                    {/* Button */}
                    <div className='mb-10'>
                        <SkShadeBtn
                            text="let's Connect"
                            textColor='black'
                            bgColor='white'
                            shadeColor='[#D0F94A]'
                        />
                    </div>
                </div>
                {/* Logo Carousel Container */}

                <div className="relative overflow-hidden w-full max-w-7xl mx-auto before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-12 sm:before:w-16 md:before:w-20 before:bg-gradient-to-r before:from-[#021520] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-12 sm:after:w-16 md:after:w-20 after:bg-gradient-to-l after:from-[#021520]"
                >
                    <motion.div
                        className="flex gap-6 sm:gap-8 md:gap-10 w-max"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 20,
                                ease: "linear",
                            },
                        }}
                    >
                        {logos.concat(logos).map((logo, idx) => (
                            <div
                                key={idx}
                                className="flex-shrink-0 
                           w-15 sm:w-24 md:w-28 lg:w-32
                           flex items-center justify-center"
                            >
                                <img
                                    src={logo}
                                    alt={`logo-${idx}`}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>


            </div>
        </section>
    );
};

export default Hero;