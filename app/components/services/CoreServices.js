"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Cpu,
  Bot,
  Sparkles,
  MessageSquare,
  Workflow,
  Shield,
  ArrowRight,
} from "lucide-react";

/* =======================
   Tabs & Services Data
======================= */
const tabs = [
  { label: "AI & Intelligent Systems", key: "ai" },
  { label: "Data & Cloud Engineering", key: "cloud" },
  { label: "Software Development", key: "software" },
  { label: "IT & Security", key: "security" },
];

const services = [
  {
    title: "Cloud Solutions",
    description: "We design secure and scalable cloud solutions that modernize infrastructure, improve performance, reduce costs, and support long term business growth.",
    categories: ["Chatbots", "Automation", "Machine Learning", "Neural Networks"],
    icon: Cpu,
    tab: "ai",
  },
  {
    title: "AI Development Services",
    description: "We build custom AI solutions that help businesses automate processes, analyze data smarter, and deliver intelligent outcomes at scale.",
    categories: ["NLP", "Customer Support", "Voice AI", "24/7 Support"],
    icon: Bot,
    tab: "ai",
  },
  {
    title: "Generative AI Development Services",
    description: "We create generative AI solutions that produce content, insights, and creative outputs while improving efficiency and innovation.",
    categories: ["GenAI", "Content AI", "Creative Models", "DALL-E"],
    icon: Sparkles,
    tab: "ai",
  },
  {
    title: "LLM Development Services",
    description: "We develop and fine-tune large language models tailored to business needs for accuracy, performance, and real-world use.",
    categories: ["AWS", "Azure", "GCP", "DevOps"],
    icon: Workflow,
    tab: "ai",
  },
  {
    title: "AI Agent Development Services",
    description: "We build intelligent AI agents that make decisions, execute tasks autonomously, and support complex business workflows.",
    categories: ["React", "Next.js", "Node.js", "Tailwind"],
    icon: MessageSquare,
    tab: "ai",
  },
  {
    title: "Intelligent Automation Services",
    description: "We automate repetitive processes using intelligent systems that improve efficiency, reduce errors, and free teams to focus on growth.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "ai",
  },
  {
    title: "AI Chatbot Development",
    description: "We design AI chatbots that deliver instant support, improve customer experience, and handle conversations across platforms.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "ai",
  },
  {
    title: "Conversational AI Development",
    description: "We design AI chatbots that deliver instant support, improve customer experience, and handle conversations across platforms.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "ai",
  },
  {
    title: "Voice AI Development Services",
    description: "We build voice AI solutions that enable speech recognition, voice assistants, and natural interactions for modern applications.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "ai",
  },
  {
    title: "Data Engineer Services",
    description: "We build reliable data pipelines that collect, process, and transform data to support analytics, AI systems, and scalable business reporting.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "Data Analytics",
    description: "We convert raw data into meaningful insights through dashboards, reporting, and analytics that help teams make faster and smarter decisions.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "Cloud Services",
    description: "We deliver secure and scalable cloud solutions that modernize infrastructure, improve reliability, and support business growth across environments.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "DevOps Services",
    description: "We streamline development and operations using automation, CI CD pipelines, and monitoring to deliver software faster with stability and security.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "Platform Engineering Services",
    description: "We design resilient platforms that enable teams to build, deploy, and scale applications efficiently using modern infrastructure and tooling.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "Computer Vision Development",
    description: "We develop computer vision solutions that analyze images and video to enable automation, quality inspection, and intelligent decision-making.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "cloud",
  },
  {
    title: "Software Development Services",
    description: "We build reliable, scalable software solutions tailored to business needs, helping organizations modernize systems, improve efficiency, and deliver real value.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "Web Application Development",
    description: "We design and develop secure, high-performance web applications that deliver seamless user experiences and support long-term scalability.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "Mobile App Development",
    description: "We create intuitive and scalable mobile applications for iOS and Android that enhance engagement, performance, and business growth.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "SaaS Development Services",
    description: "We build subscription-based SaaS platforms that are secure, scalable, and multi-tenant, designed to grow with users and evolving business demands.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "Product Engineering Services",
    description: "We help businesses design, build, and scale digital products from idea to launch, focusing on performance, reliability, and user impact.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "Software Testing & QA Services",
    description: "We ensure software quality through comprehensive testing that improves stability, reduces risk, and delivers reliable user experiences.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "software",
  },
  {
    title: "Cybersecurity Services",
    description: "We protect your systems, data, and users with proactive security strategies, threat detection, and robust controls designed to safeguard businesses in complex digital environments.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
  {
    title: "Enterprise Solutions",
    description: "We deliver enterprise-grade solutions that modernize operations, integrate systems, and support large-scale digital transformation across departments and organizations.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
  {
    title: "Staff Augmentation",
    description: "We provide skilled technology professionals to strengthen your teams quickly, helping you scale capacity, accelerate delivery, and close critical skill gaps.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
  {
    title: "IT Services & Support",
    description: "We manage IT operations, provide continuous support, and ensure system reliability so your teams can focus on growth without technical disruptions.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
  {
    title: "Risk Management & Compliance",
    description: "We help organizations identify risks, meet regulatory requirements, and maintain compliance through structured assessments and security best practices.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
  {
    title: "NLP Development & AI Language",
    description: "We build language-based AI solutions that process text, understand intent, and power intelligent applications such as chatbots, search, and automation.",
    categories: ["Pentesting", "Encryption", "SOC", "Audit"],
    icon: Shield,
    tab: "security",
  },
];

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState(0);

  const filteredServices = services.filter(
    (service) => service.tab === tabs[activeTab].key
  );

  // Tab click handler
const handleTabClick = (index) => {
  setActiveTab(index);
  
  // ScrollTrigger refresh for DevProcess animation
  setTimeout(() => {
    if (typeof window !== 'undefined') {
      // Method 1: Direct refresh (agar gsap global accessible hai)
      if (window.gsap?.ScrollTrigger) {
        window.gsap.ScrollTrigger.refresh(true);
      }
      
      // Method 2: Custom event dispatch (recommended - yeh DevProcess mein listener hai)
      window.dispatchEvent(new CustomEvent('tabswitch'));
    }
  }, 50); // Thoda sa delay for DOM update
};

  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[24px] md:text-[48px] font-medium mb-4"
          >
            Our Core Services
          </motion.h2>
          <p className="text-black max-w-2xl mx-auto text-[14px] md:text-[18px] md:text-base">
            Smarter solutions that accelerate your digital transformation
          </p>
        </div>

        {/* Tabs - Scrolling enabled for mobile */}
        <div className="flex flex-nowrap md:flex-wrap justify-start md:justify-center gap-3 mb-10 md:mb-14 overflow-x-auto pb-4 md:pb-0 scrollbar-hide px-2">
          {tabs.map((tab, index) => (
            <div
              key={tab.key}
              className={`flex-shrink-0 rounded-full p-[2px] transition-all duration-300 ${activeTab === index ? "bg-gradient-to-b from-[#D0F94A] to-[#00879F]" : "bg-transparent"
                }`}
            >
              <button
                onClick={() => handleTabClick(index)} 
                className={`relative group px-5 py-2 md:px-6 md:py-2.5 rounded-full w-full transition-all duration-300 font-medium text-14px md:text-[18px] overflow-hidden uppercase whitespace-nowrap cursor-pointer ${activeTab === index ? "bg-black text-white" : "bg-[#E3E3E3] text-black"
                  }`}
              >
                {tab.label}
                <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-[70%] h-3 sm:h-4 md:h-5 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out ${activeTab === index ? "opacity-100" : " "
                  }`}></span>
              </button>
            </div>
          ))}
        </div>

        {/* Cards Grid - Professionally Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative rounded-lg p-[2px] overflow-hidden w-full max-w-[416px] min-h-[350px]"
                style={{ background: 'linear-gradient(to bottom right, #E8FAAA, #3FDC9B)' }}
              >
                <div className="relative w-full h-full bg-white rounded-lg p-6 md:p-8 flex flex-col z-10 overflow-hidden">

                  {/* Hover BG Image */}
                  <div
                    className="absolute inset-0 z-0 bg-cover bg-center opacity-0 scale-110 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                    style={{ backgroundImage: "url('/images/servicesPage/cards-bg.png')" }}
                  />

                  <div className="relative z-20 flex flex-col h-full">
                    {/* Icon Box */}
                    {/* <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#D0F94A] to-[#3CDB9D] mb-5 md:mb-6 transition-all duration-800 group-hover:bg-none group-hover:bg-black">
                      <Icon className="w-6 h-6 md:w-7 md:h-7 text-white group-hover:text-white transition-all duration-800" />
                    </div> */}

                    <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-xl mb-5 md:mb-6 overflow-hidden group">

                      {/* Gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#D0F94A] to-[#3CDB9D]" />

                      {/* Hover black overlay */}
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />

                      {/* Icon */}
                      <div className="relative z-10 flex items-center justify-center w-full h-full">
                        <Icon className="w-6 h-6 md:w-7 md:h-7 text-white transition-transform duration-700 ease-out group-hover:scale-110" />
                      </div>

                    </div>


                    <h3 className="text-[16px] md:text-[20px] font-medium mb-2 md:mb-3 text-black group-hover:text-black">{service.title}</h3>
                    <p className="text-black text-[12px] md:text-[16px] leading-relaxed mb-4 flex-grow line-clamp-4">{service.description}</p>

                    {/* Infinite Carousel / Contact Button Toggle */}
                    <div className="relative h-15 mt-auto flex items-center overflow-hidden">

                      {/* 1. SEAMLESS Infinite Carousel */}
                      <div className="flex w-full group-hover:hidden overflow-hidden">
                        <motion.div
                          className="flex gap-2 whitespace-nowrap"
                          animate={{ x: ["0%", "-50%"] }} // This ensures a perfect seamless loop
                          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                        >
                          {/* We double the list to make it look infinite */}
                          {[...service.categories, ...service.categories].map((cat, i) => (
                            <span key={i} className="px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-[16px] rounded-full bg-[#E2F7F5] text-black">
                              {cat}
                            </span>
                          ))}
                        </motion.div>
                      </div>

                      {/* 2. Contact Us Button */}
                      {/* <div className="absolute inset-0 flex items-center opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-800 translate-y-4 group-hover:translate-y-0 z-10">
                        <button className="relative group flex items-center gap-2 bg-black text-white px-5 py-2 md:px-6 md:py-2 rounded-full text-[14px] md:text-[18px] cursor-pointer overflow-hidden">
                          Contact Us <ArrowRight className="w-4 h-4" />
                          <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 h-3 sm:h-4 md:h-5 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 `}></span>
                        </button>
                      </div> */}

                      <div className="absolute inset-0 flex items-center opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 transition-all duration-900 ease-out translate-y-6 group-hover:translate-y-0 z-10">

                        <button className="relative group flex items-center gap-2 bg-black text-white px-5 py-2 md:px-6 md:py-2 rounded-full text-[14px] md:text-[18px] cursor-pointer overflow-hidden transition-transform duration-500 ease-out">

                          Contact Us
                          <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />

                          {/* Glow */}
                          <span className={`absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-20 h-3 sm:h-4 md:h-5 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 `}></span>


                        </button>

                      </div>

                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}