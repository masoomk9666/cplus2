"use client";
import React, { useState } from "react";
import {
  ShieldCheck,
  Activity,
  FlaskConical,
  Check,
  Globe,
  Link,
  Monitor,
  Mic,
  Map,
} from "lucide-react";
import SkShadeBtn from "../layout/SkShadeBtn";

const ProductTabs = () => {
  const services = [
    {
      id: 1,
      tabLabel: "AI LAB",
      icon: <FlaskConical size={20} />,
      isSpecial: true,
      title: "ARTIFICIAL INTELLIGENCE LAB", // Title for AI Lab
    },
    {
      id: 2,
      tabLabel: "FASIL",
      icon: <ShieldCheck size={20} />,
      title: "Smart KSA Excise Compliance",
      bullets: [
        "Faasil is an AI-powered assistant designed to simplify Saudi Arabia's excise law compliance.",
        "It translates complex regulations into clear, easy-to-understand guidance without legal jargon.",
        "Businesses save hours of manual research and costly consultant fees. Faasil keeps manufacturers, importers, distributors, and retailers audit-ready.",
        "Compliance becomes fast, affordable, and stress-free with real-time answers.",
      ],
      tags: [
        { label: "KSA", icon: <Globe size={20} /> },
        { label: "KSA", icon: <Globe size={20} /> },
        { label: "Live Link", icon: <Link size={20} /> },
        { label: "Web App", icon: <Monitor size={20} /> },
      ],
      image: "/images/products/fasil.png",
    },
    {
      id: 3,
      tabLabel: "HEALIX",
      icon: <Activity size={20} />,
      title: "Intelligent Healthcare Practice Management",
      bullets: [
        "Healix is an intelligent clinic management solution designed to help healthcare providers run daily operations smoothly. It manages appointments, patient messages, reminders, and administrative tasks in one platform, reducing manual workload and stress for doctors and clinic staff.",
        "By streamlining workflows, Healix lets medical professionals focus more on patient care and service quality. The result is improved efficiency, better communication, organized operations, and a patient-friendly clinic experience.",
      ],
      tags: [
        { label: "Health", icon: <Activity size={20} /> },
        { label: "KSA", icon: <Globe size={20} /> },
        { label: "Live Link", icon: <Link size={20} /> },
      ],
      image: "/images/products/healix.png",
    },
    {
      id: 4,
      tabLabel: "NUREXA",
      icon: <Mic size={20} />,
      title: "Automated Customer Interaction System",
      bullets: [
        "Nurexa is an intelligent AI chatbot designed to engage customers like a real human, anytime and anywhere. Available 24/7, it answers questions, books appointments, and manages calls and messages across multiple channels, ensuring businesses never miss inquiries.",
        "By handling routine conversations automatically, Nurexa improves response times and enhances customer experience. It allows teams to focus on higher-value tasks while managing everyday interactions seamlessly, even outside working hours.",
      ],
      tags: [
        { label: "Music", icon: <Mic size={20} /> },
        { label: "KSA", icon: <Globe size={20} /> },
      ],
      image: "/images/products/nurexa.png",
    },
    {
      id: 5,
      tabLabel: "LOGIS AI",
      icon: <Map size={20} />,
      title: "Intelligent Shipping & Logistics Platform",
      bullets: [
        "Logis AI helps companies calculate transportation costs quickly and accurately. It provides instant price quotes, shipment tracking, and real-time visibility across operations.",
        "By automating cost estimation and tracking, Logis AI reduces manual effort, minimizes delays, and improves decision-making for route planning and shipment management effectively.",
        "The result is smoother operations, better cost control, improved delivery performance, and faster response to supply chain changes.",
      ],
      tags: [{ label: "Health", icon: <Globe size={20} /> }],
      image: "/images/products/logis.png",
    },
    {
      id: 6,
      tabLabel: "ALIF-OCR",
      icon: <Activity size={20} />,
      title: "Intelligent Arabic Document Scanner",
      bullets: [
        "Alif OCR is an intelligent Arabic optical character recognition solution that converts handwritten Arabic notes into accurate digital text. It reads writing from paper documents, notebooks, and forms, transforming them into clean, editable text.",
        "By eliminating manual typing and paperwork, Alif OCR helps students, offices, and organizations save time, reduce errors, and go paperless. It improves document accessibility, supports digital archiving, and makes handwritten content easier to store, search, and reuse.",
      ],
      tags: [{ label: "Health", icon: <Globe size={20} /> }],
      image: "/images/products/ocr.png",
    },

  ];

  const [activeTab, setActiveTab] = useState(services[0]);

  return (
    <section className="max-w-7xl mx-auto flex flex-col justify-center px-4 py-30 bg-white ">
      {/* Top Header */}
      <div className="text-center mb-10 space-y-6">
        <p className="text-black uppercase tracking-widest text-xs font-normal">
          Developed In-House. Designed to Grow
        </p>
        <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
          Our Smart Platforms Powered by AI Intelligence
        </h2>
      </div>

      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {services?.map((service, index) => (
          <div
            key={service.id}
            className={`${activeTab.id === service.id ? "p-[2px] bg-gradient-to-r from-[#D0F94A] to-[#00687B]" : "p-0"}  rounded-full`}
          >
            <button
              key={service.id}
              onClick={() => setActiveTab(service)}
              className={`
              relative flex gap-2 items-center px-4 sm:px-5 md:px-7 py-3 rounded-full  text-[12px] sm:text-[14px] md:text-[16px] uppercase cursor-pointer transition overflow-hidden
              ${service.isSpecial
                  ? "bg-gradient-to-r from-[#D0F94A] via-[#229178] to-[#074752]  text-white"
                  : activeTab.id === service.id
                    ? "bg-black text-white  border-gray-200"
                    : "bg-white text-black border border-gray-200"
                }
            `}
            >
              <span className={`${service.isSpecial ? "text-white" : activeTab.id === service.id ? "text-[#D0F94A]" : "text-black"}`}>{service.icon}</span>
              {service.tabLabel}
            </button>
          </div>
        ))}
      </div>

      {/* Logic to Switch Layout */}
      {activeTab.id === 1 ? (
        /* --- AI LAB GRID LAYOUT --- */
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Main Content Card */}
          <div
            className="md:col-span-2 p-3 md:p-6 rounded-2xl flex flex-col gap-4 justify-center items-start border border-[#3DDB9C]"
            style={{
              backgroundImage: " url('/images/products/ai-lab-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-[18px] md:text-[26px] font-medium  text-black tracking-tight">
              ARTIFICIAL INTELLIGENCE LAB
            </h3>

            <p className="text-black leading-relaxed text:[12px] md:text-[16px] mb-2">
              AI Lab is a dedicated innovation space where new artificial intelligence ideas are researched, built, and tested with precision. It explores emerging technologies, experiments with advanced models, and continuously improves solutions through real-world validation and feedback. The goal of AI Lab is to transform promising concepts into practical, scalable products that solve everyday business challenges effectively. By bridging research and application, AI Lab helps organizations adopt AI confidently and turn innovation into reliable tools that support daily work, improve efficiency, and enable smarter decision-making. It creates technology designed for real impact, not just experimentation alone.
            </p>
            <SkShadeBtn text="Start Your Project" />
          </div>

          {/* Agentic AI Card */}
          <div className="rounded-2xl overflow-hidden bg-black relative min-h-[320px] group">
            <video
              src="/videos/products/agentic.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            >
            </video>
            <div className="absolute top-8 left-8 text-white font-medium  text-[20px] md:text-[26px] tracking-tight">
              Agentic AI
            </div>
          </div>

          {/* Small Grid Cards */}
          <div className="rounded-2xl overflow-hidden bg-black relative min-h-[320px] group">
            {/* <img
              src="/images/products/speech.png"
              alt="Speech AI"
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            /> */}
            <video
              src="/videos/products/speech.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            >
            </video>
            <div className="absolute top-8 left-8 text-white font-medium  text-[20px] md:text-[26px] tracking-tight">
              Speech & <br /> Conversational AI
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-black relative min-h-[320px] group">
            <video
              src="/videos/products/vision.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            >
            </video>
            <div className="absolute top-8 left-8 text-white font-medium  text-[20px] md:text-[26px] tracking-tight">
              Vision & <br /> Computer Vision AI
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden bg-black relative min-h-[320px] group">
            <video
              src="/videos/products/automation.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-700"
            >
            </video>
            <div className="absolute top-8 left-8 text-white font-medium  text-[20px] md:text-[26px] tracking-tight">
              AI for Automation <br /> & Workflows
            </div>
          </div>
        </div>
      ) : (
        /* --- ORIGINAL LAYOUT FOR OTHER TABS --- */
        /* --- ORIGINAL LAYOUT FOR OTHER TABS --- */
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in duration-500">
          {/* Left Side: Image Content with Floating Icons */}
          <div className="relative group transition-all duration-500 ease-in-out transform flex justify-center items-center min-h-[55vh]">
            {/* Floating Icon Left */}
            <div className="absolute -left-4 md:-left-3 top-1/1 z-10 animate-[bounce_4s_infinite] opacity-80 hidden md:block">
              <img
                src="/images/products/float1.png" // Replace with your icon image
                alt="float-icon"
                className="w-12 h-12 md:w-28 md:h-28 object-contain"
              />
            </div>

            {/* Main Image */}
            <img
              src={activeTab.image}
              alt={activeTab.title}
              className="w-full object-cover rounded-[2rem] z-0"
            />

            {/* Floating Icon Right */}
            <div className="absolute -right-4 md:-right-10 bottom-1/3 z-10 animate-[bounce_5s_infinite] opacity-80 hidden md:block">
              <img
                src="/images/products/float2.png" // Replace with your icon image
                alt="float-icon"
                className="w-12 h-12 md:w-28 md:h-28 object-contain"
              />
            </div>
          </div>

          {/* Right Side: Text Info (Remains Same) */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-[20px] md:text-[40px] font-normal text-black leading-tight font-medium">
              {activeTab.title}
            </h3>

            <div className="space-y-4">
              {activeTab.bullets.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500 flex-shrink-0">
                    <Check className="text-white" size={14} strokeWidth={3} />
                  </span>
                  <p className="text-[#000000] text-[12px] md:text-[16px]">{point}</p>
                </div>
              ))}
            </div>

            {/* Categories / Tags */}
            <div className="flex flex-wrap gap-6 py-4">
              {activeTab.tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-black font-normal text-[12px] md:text-[16px]"
                >
                  <span className="text-[#139D49] ">{tag.icon}</span>
                  {tag.label}
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <SkShadeBtn text="Download case study" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductTabs;
