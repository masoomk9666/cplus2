
"use client";

import { useState } from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Leadership() {
  const [expand, setExpand] = useState(false);

  const head = {
    name: "Ubaidullah Amjad",
    designation: "Chief Executive Officer",
    image: "images/about/founder.png",
    description:
      "I started as an engineer with a vision to solve real-world problems through technology. In 2014, I founded Cplusoft with a mission to build scalable AI products that create meaningful impact across industries and borders. Over the years, we've grown from a small team into a trusted partner for businesses seeking innovation and digital transformation. Our work spans regional markets and global enterprises, delivering solutions that are practical, reliable, and designed for long-term success. We focus on turning complex challenges into intelligent systems that drive efficiency, reduce costs, and empower teams. Today, Cplusoft stands as a symbol of innovation rooted in engineering excellence, customer trust, and a commitment to building technology that truly matters.",
    socials: {
      linkedin: "#",
      facebook: "#",
    },
  };

  const team = [
    {
      name: "Hassan Mustafa",
      designation: "Growth Manager",
      image: "images/about/hassan.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Sarmad Ali Chohan",
      designation: "Strategic AI Partnerdare",
      image: "images/about/sarmad-chohan.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Sarmad Javaid",
      designation: "HR Manager",
      image: "images/about/sarmad.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Arham Bilgrami",
      designation: "General Manager",
      image: "images/about/ali.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Yahya Ahmed",
      designation: "Manager Sales ",
      image: "images/about/yahya.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Aisha Riaz",
      designation: "Product Owner & Designer ",
      image: "images/about/aisha.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Tufail Ahmed",
      designation: "AI Specialist",
      image: "images/about/tufail.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    },
    {
      name: "Mughees Ansari",
      designation: "Development Team Lead",
      image: "images/about/mughees.png",
      socials: {
        linkedin: "#",
        facebook: "#",
        twitter: "#",
      }
    }
  ]

  const IconWrapper = ({ href, children }) => (
    <a
      href={href}
      className="w-8 h-8 rounded-full flex items-center justify-center text-white "
      style={{
        // background: "linear-gradient(135deg, #3CDB9D, #D0F94A)",
        background: "black",
      }}
    >
      {children}
    </a>
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <h2 className="text-[24px] md:text-[48px] font-medium text-center mb-12">
        Leadership & Management
      </h2>

      {/* Leadership Row */}


      {/* <div
        className="p-[1px] rounded-xl mb-14"
        style={{
          background: "linear-gradient(135deg, #3CDB9D, #D0F94A)",
        }}
      >
        <div className="bg-white rounded-xl h-auto p-2 flex flex-col md:flex-row gap-10">
          <img
            src={head.image}
            alt={head.name}
            className="w-full h-full md:w-50 md:h-50 lg:w-60 lg:h-70 rounded-lg object-cover bg-gradient-to-b from-[rgba(60,219,157,0.3)] from-[20%] to-[rgba(208,249,74,0.4)] to-[100%]"
          />

          <div className="flex-1 py-3">
            <h3 className="text-[18px] md:text-[28px] font-medium">{head.name}</h3>
            <p className="text-black text-[12px] md:text-[16px] mb-2">{head.designation}</p>

            <div className="flex gap-2 mb-4">
              {head.socials.linkedin && (
                <IconWrapper href={head.socials.linkedin}>
                  <FaLinkedin size={18} />
                </IconWrapper>
              )}
              {head.socials.facebook && (
                <IconWrapper href={head.socials.facebook}>
                  <FaFacebook size={18} />
                </IconWrapper>
              )}
            </div>

            <div className="grid grid-cols-[6fr_0.5fr] items-start">
              <p
                className={`text-black text-[14px] md:text-[18px] transition-all duration-300 ${
                  expand ? "line-clamp-none" : "line-clamp-2"
                }`}
              >
                {head.description}
              </p>

              <button
                onClick={() => setExpand(!expand)}
                className="cursor-pointer flex justify-center pt-1"
              >
                {expand ? (
                  <MdKeyboardArrowUp size={25} />
                ) : (
                  <MdKeyboardArrowDown size={25} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div
        className="p-[1px] rounded-xl mb-14"
        style={{
          background: "linear-gradient(135deg, #3CDB9D, #D0F94A)",
        }}
      >
        <div className="bg-white rounded-xl h-auto p-3 md:p-6 transition-all duration-300">

          {/* ================= COLLAPSED STATE ================= */}
          {!expand && (
            <div className="flex flex-col md:flex-row gap-10">

              {/* IMAGE */}
              <img
                src={head.image}
                alt={head.name}
                className="w-full h-full md:w-50 md:h-50 lg:w-55 lg:h-55 rounded-lg object-contain
          bg-gradient-to-b from-[rgba(60,219,157,0.3)] from-[20%] to-[rgba(208,249,74,0.4)] to-[100%]"
              />

              {/* CONTENT */}
              <div className="flex-1 py-3">

                <h3 className="text-[18px] md:text-[28px] font-medium">
                  {head.name}
                </h3>

                <p className="text-black text-[12px] md:text-[16px] mb-2">
                  {head.designation}
                </p>

                {/* SOCIALS */}
                <div className="flex gap-2 mb-4">
                  {head.socials.linkedin && (
                    <IconWrapper href={head.socials.linkedin}>
                      <FaLinkedin size={18} />
                    </IconWrapper>
                  )}

                  {head.socials.facebook && (
                    <IconWrapper href={head.socials.facebook}>
                      <FaFacebook size={18} />
                    </IconWrapper>
                  )}
                </div>

                {/* DESC + BTN */}
                <div className="grid grid-cols-[6fr_0.5fr] items-start">

                  <p className="text-black text-[14px] md:text-[18px] line-clamp-2">
                    {head.description}
                  </p>

                  <button
                    onClick={() => setExpand(true)}
                    className="cursor-pointer flex justify-center pt-1"
                  >
                    <MdKeyboardArrowDown size={25} />
                  </button>

                </div>

              </div>
            </div>
          )}

          {/* ================= EXPANDED STATE ================= */}
          {expand && (
            <div className="flex flex-col gap-6">

              {/* TOP ROW */}
              <div className="flex items-center gap-6">

                {/* IMAGE */}
                <img
                  src={head.image}
                  alt={head.name}
                  className="w-24 h-24 md:w-40 md:h-40 rounded-full object-contain
            bg-gradient-to-b from-[rgba(60,219,157,0.3)] from-[20%] to-[rgba(208,249,74,0.4)] to-[100%]"
                />

                {/* INFO */}
                <div className="flex-1">

                  <h3 className="text-[18px] md:text-[28px] font-medium">
                    {head.name}
                  </h3>

                  <p className="text-black text-[12px] md:text-[16px]">
                    {head.designation}
                  </p>

                  {/* SOCIALS */}
                  <div className="flex gap-2 mt-2">
                    {head.socials.linkedin && (
                      <IconWrapper href={head.socials.linkedin}>
                        <FaLinkedin size={18} />
                      </IconWrapper>
                    )}

                    {head.socials.facebook && (
                      <IconWrapper href={head.socials.facebook}>
                        <FaFacebook size={18} />
                      </IconWrapper>
                    )}
                  </div>

                </div>

                {/* CLOSE BTN */}
                <button
                  onClick={() => setExpand(false)}
                  className="cursor-pointer"
                >
                  <MdKeyboardArrowUp size={28} />
                </button>

              </div>

              {/* FULL DESCRIPTION */}
              <p className="text-black text-[14px] md:text-[18px]">
                {head.description}
              </p>

            </div>
          )}

        </div>
      </div>


      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-15 p-15">
        {team.map((member, index) => (
          <div
            key={index}
            className=" text-center w-full  h-auto"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-100 h-60  rounded-xl mx-auto mb-4 object-contain bg-gradient-to-b from-[rgba(208,249,74,0.3)] from-[10%] to-[rgba(60,219,157,0.4)] to-[50%]"
            />

            <h4 className="text-[18px] md:text-[24px] font-medium">{member.name}</h4>
            <p className="text-black text-[12px] md:text-[16px] mb-3">{member.designation}</p>

            <div className="flex justify-center gap-2">
              {member.socials.linkedin && (
                <IconWrapper href={member.socials.linkedin}>
                  <FaLinkedin size={18} />
                </IconWrapper>
              )}
              {member.socials.facebook && (
                <IconWrapper href={member.socials.facebook}>
                  <FaFacebook size={18} />
                </IconWrapper>
              )}
              {member.socials.twitter && (
                <IconWrapper href={member.socials.twitter}>
                  <FaXTwitter size={18} />
                </IconWrapper>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
