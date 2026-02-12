"use client"
import React, { useState } from 'react';
import portfolioData from "@/data/portfolioData";
import dynamic from "next/dynamic";
import Link from 'next/link';

const IndustryMap = dynamic(() => import("./IndustryMap"), {
  ssr: false,
});

const Industries = () => {
  const categories = [
    "All",
    ...new Set(
      portfolioData
        .map((item) => item.hero?.review?.meta?.industry)
        .filter(Boolean)
    ),
  ];
  const projects = portfolioData.map((item) => ({
    id: item.slug,
    title: item.hero?.name || "",
    category: item.hero?.review?.meta?.industry || "",
    desc: item.hero?.description || "",
    logo: item.hero?.logo || "",

  }));
  const [activeTab, setActiveTab] = useState('All');
  const [showAllTabs, setShowAllTabs] = useState(false);
  // const filteredProjects = activeTab === 'All' ? projects : projects.filter(p => p.category === activeTab);
  const filteredProjects = activeTab === "All"
    ? portfolioData
    : portfolioData.filter(
      (item) => item.hero?.review?.meta?.industry === activeTab
    );
  const visibleTabs = showAllTabs ? categories : categories.slice(0, 4);

  return (
    <div className="bg-white min-h-screen px-4 md:px-6 lg:px-10 py-10">
      {/* 1. Heading */}
      <h2 className="text-[24px] md:text-[48px] font-medium text-center mb-10 text-black">
        Real-time Industry Map
      </h2>

      {/* 2. Tabs Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {visibleTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-[fit-content] px-5 py-3 rounded-[10px] border transition-all duration-300 font-medium  text-[12px] md:text-[16px] uppercase tracking-wider cursor-pointer
                ${activeTab === tab ? 'bg-[#D0F94A] border-[#D0F94A] text-[#131313]' : 'bg-white border-[#DADADA] text-[#131313] hover:border-gray-400'}`}
            >
              {tab}
            </button>
          ))}

          <div className="inline-block rounded-[10px] relative p-[2px] bg-gradient-to-r from-[#D0F94A] via-[#D0F94A] to-[#00879F]">
            <button
              onClick={() => setShowAllTabs(!showAllTabs)}
              className="min-w-[140px] px-6 py-[13px] rounded-[10px] text-[#131313] font-medium text-sm uppercase cursor-pointer tracking-wider flex items-center justify-center gap-2 bg-white hover:bg-gray-50 transition-colors w-full"
            >
              {showAllTabs ? 'SEE LESS -' : 'SEE MORE +'}
            </button>
          </div>
        </div>
      </div>

      {/* 3. Main Content Area - Grid fixed the glitch */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

        {/* Left Side: Projects List */}
        <div
          style={{ scrollbarGutter: "stable" }}
          className="w-full h-[600px] overflow-y-auto pr-4 box-border
          [&::-webkit-scrollbar]:w-2
          [&::-webkit-scrollbar-button]:hidden
          [&::-webkit-scrollbar-track]:bg-[#F6F6F6]
          [&::-webkit-scrollbar-track]:rounded-full
          [&::-webkit-scrollbar-thumb]:bg-[#D0F94A]
          [&::-webkit-scrollbar-thumb]:rounded-full
          [scrollbar-width:thin]
          [scrollbar-color:#D0F94A_#F6F6F6]"
        >
          <div className="flex flex-col gap-4">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((item) => (
                // <Link key={item.slug} href={`industries/${item.slug}`} rel="noopener noreferrer">
                  <div key={item.slug} className="bg-[#FBFBFB] p-6 rounded-[20px] flex items-start justify-between group cursor-pointer border border-transparent  transition-all min-h-[140px] shadow-sm">
                    <div className="flex gap-5 w-full">
                      <div className={`w-35 h-35 bg-black rounded-2xl flex items-center justify-center flex-shrink-0`}>
                        <img
                          src={item.hero.logo}
                        />
                        {/* <span className="text-white text-lg font-black italic tracking-tighter">{item.logo}</span> */}
                      </div>
                      <div className="max-w-[80%]">
                        <h3 className="text-[18px] md:text-[24px] font-medium text-black mb-1">{item.hero.name}</h3>
                        <p className="text-black text-[12px] md:text-[16px] leading-relaxed">{item.hero.description}</p>
                      </div>
                    </div>
                    <Link href={`industries/${item.slug}`} rel="noopener noreferrer">
                      <button className="bg-gradient-to-r from-[#3CDB9D] via-[#D0F94A] p-2.5 rounded-full group-hover:scale-110 transition-transform flex-shrink-0 cursor-pointer">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </button>
                    </Link>
                  </div>
                // </Link>
              ))
            ) : (
              <div className="text-center py-20 text-gray-400">No projects found for this category.</div>
            )}
          </div>
        </div>

        {/* Right Side: Map Section */}
        <div className="w-full h-[600px] bg-black rounded-[24px] relative overflow-hidden">

          <IndustryMap projects={filteredProjects} />
        </div>


      </div>
    </div>
  );
};

export default Industries;