
"use client";
import { useEffect, useRef } from "react";

const timelineData = [
  {
    year: "2014",
    yearTitle: "Foundation",
    title: "Engineering-first from day one",
    description:
      "Cplus Soft is a top custom web application development company dedicated to reliable delivery. Focusing on clean architecture, maintainable code, and high-performance solutions, we help businesses scale efficiently. Our expertise and client-focused approach have earned long-term partnerships with global organizations.",
    image: "images/about/timelineImg.png",
  },
  {
    year: "2017",
    yearTitle: "Scale Across Platforms",
    title: "Expanding delivery capability",
    description:
      "As our clients grew, Cplus Soft expanded into full-scale web and mobile application development. We deliver user-centric platforms across industries, strengthening our capability to manage larger projects, bigger teams, and complex systems efficiently.",
    image: "images/about/timelineImg.png",
  },
  {
    year: "2018",
    yearTitle: "Product Development",
    title: "From delivery partner to product builder",
    description:
      "In 2018, Cplus Soft entered a new phase, focusing on building products and platforms with long-term impact. With dedicated AI and ML teams, data-driven development, and intelligent systems, we shifted from delivering features to driving measurable business outcomes.",
    image: "images/about/timelineImg.png",
  },
  {
    year: "2019",
    yearTitle: "AI at the Core",
    title: "Enterprise AI solutions at scale",
    description:
      "By 2019, AI became central to Cplus Soft’s expertise. We developed enterprise AI systems for intelligent automation, conversational AI, analytics, and decision support, delivering over 250 AI-powered solutions across diverse industries.",
    image: "images/about/timelineImg.png",
  },
  {
    year: "2025",
    yearTitle: "Product-First AI Engineering",
    title: "Built to enable transformation",
    description:
      "Today, Cplus Soft is a product-first AI engineering company with 250+ engineers, delivering digital and AI solutions worldwide. We act as a full-scale technology partner, helping organizations modernize systems, scale delivery, and build transformation-ready platforms.",
    image: "images/about/timelineImg.png",
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const progressRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const progress = progressRef.current;
      if (!progress) return;

      const windowHeight = window.innerHeight;
      const cards = cardRefs.current;
      if (!cards.length) return;

      const firstCardTop =
        cards[0].getBoundingClientRect().top + window.scrollY;
      const lastCard = cards[cards.length - 1];
      const lastCardBottom =
        lastCard.getBoundingClientRect().bottom + window.scrollY;

      const scrollY = window.scrollY + windowHeight / 1.5;

      let fillHeight = 0;

      // Fill line exactly up to circle
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= cardTop) {
          fillHeight = cardTop - firstCardTop + 12; // half of circle height
        }
      });

      const maxHeight = lastCardBottom - firstCardTop;
      if (fillHeight > maxHeight) fillHeight = maxHeight;

      progress.style.height = `${fillHeight}px`;
      progress.style.opacity = scrollY >= lastCardBottom ? 0 : 1;
    };

    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <p className="text-center uppercase text-[12px] md:text-[16px] text-black">
          Our Journey
        </p>

        <h2 className="text-center text-[24px] md:text-[48px] font-medium mt-3 mb-3 leading-tight">
          We started with one belief: great products are built with engineering discipline.
        </h2>
        <p className="max-w-5xl mx-auto text-center text-[14px] md:text-[18px] text-black mb-20">
          Over the last decade, Cplus Soft has evolved from a software development partner into a full-scale AI engineering company. We build systems that help organizations run more smoothly, make smarter decisions, and scale digital transformation with confidence.
        </p>

        {/* Timeline */}
        <div ref={sectionRef} className="relative">
          {/* Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-[#3CDB9D]">
            <div
              ref={progressRef}
              className="absolute top-0 left-0 w-full bg-black transition-all duration-700 ease-out"
              style={{ height: "0px", opacity: 1 }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                className={`relative flex flex-col md:flex-row items-center mb-10 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Card */}
                <div
                  className={`md:w-1/2 px-6 flex flex-col ${
                    isEven ? "items-end text-right" : "items-start text-left"
                  }`}
                >
                  <div className={`flex gap-5 ${
                    isEven ? "" : "flex-row-reverse"
                  }`}>
                    <p className="text-[18px] text-[#3CDB9D] mt-[2px]">{item.yearTitle}</p>
                    <span className="inline-block mb-4 px-4 py-1 text-[16px] rounded-full text-black bg-gradient-to-r from-[#3CDB9D] to-[#D0F94A]">
                    {item.year}
                  </span>
                  </div>
                  

                  <h3 className="text-[32px] font-medium mb-3">{item.title}</h3>

                  <p className="text-[18px] text-black ">
                    {item.description}
                  </p>

                  <img
                    src={item.image}
                    alt="Avatar"
                    className="mt-6 w-20 h-20 rounded-full object-cover "
                  />
                </div>

                {/* Circle */}
                {/* Circle */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 z-10 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{
                    top: cardRefs.current[index]
                      ? `${cardRefs.current[index].offsetTop}px`
                      : "0px",
                  }}
                >
                  {/* Gradient border */}
                  <div
                    className="w-full h-full rounded-full flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, #D0F94A, #3CDB9D)",
                      padding: "2px", // border thickness
                      boxSizing: "border-box",
                    }}
                  >
                    {/* Inner black circle */}
                    <div className="w-full h-full rounded-full bg-black"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

