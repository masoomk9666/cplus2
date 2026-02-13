"use client";

import React, { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import Link from "next/link";
import { allJobs } from "@/data/jobs";

const locations = ["Pakistan", "USA", "UK", "UAE"];

const Careers = () => {
  const [activeTab, setActiveTab] = useState("Pakistan");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter jobs by country + search
  const filteredJobs = allJobs.filter((job) => {
    const matchesCountry = job.country === activeTab;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCountry && matchesSearch;
  });

  return (
    <section className="w-full bg-white py-10 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-2">
          <span className="text-[12px] md:text-[16px]  px-4 py-1 md:py-2 ">
            CAREERS
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-[24px] md:text-[48px] font-medium mb-3">
          Open Positions
        </h2>

        {/* Subheading */}
        <p className="text-center text-black text-[14px] md:text-[18px] max-w-3xl mx-auto mb-10">
          Your Future, Engineered at Indium AI may power our systems — but
          people power Indium. Join us, and let’s engineer infinite
          possibilities together.
        </p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 md:gap-3 mb-8 flex-wrap">
          {locations.map((loc) => (
            <button
              key={loc}
              onClick={() => setActiveTab(loc)}
              className={`px-5 md:px-6 py-2 rounded-full text-[12px] md:text-[18px] font-medium transition cursor-pointer
                ${
                  activeTab === loc
                    ? "bg-black text-white"
                    : "bg-[#E3E3E3] text-black"
                }`}
            >
              {loc}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative mb-10">
          <input
            type="text"
            placeholder="SEARCH"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg py-3 pl-10 pr-12 text-sm outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black w-4 h-4" />
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-black w-5 h-5" />
        </div>

        {/* Jobs List */}
        <div className="divide-y">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <Link
              key={index}
                href={`/careers/${job.slug}`}
                className="block py-6 hover:bg-gray-50 transition px-5 rounded-2xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-4 items-center ">
                  <div className=" md:col-span-2 lg:col-span-1">
                    <h3 className="text-[#3CDB9D] font-medium text-[14px] md:text-[18px]">
                      {job.title}
                    </h3>
                    <p className="text-black text-xs">{job.posted}</p>
                  </div>
                  <div className="md:col-span-4  lg:col-span-3 w-full flex items-center justify-between gap-2">
                    <div className="text-black text-[10px] md:text-[16px]">
                      {job.type}
                    </div>

                    <span className="block md:hidden h-4 w-px bg-gray-300"></span>

                    <div className="text-black text-[10px] md:text-[16px]">
                      {job.location}
                    </div>

                    <span className="block md:hidden h-4 w-px bg-gray-300"></span>

                    <div className="text-black text-[10px] md:text-[16px]">
                      {job.department}
                    </div>

                    <span className="block md:hidden h-4 w-px bg-gray-300"></span>

                    <div className="text-black text-[10px] md:text-[16px]">
                      {job.time}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-black py-10">No jobs found.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Careers;
