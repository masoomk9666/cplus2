"use client";
import { MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

export default function Footer() {
  const locations = [
    {
      icon: "/images/footer/01.png",
      address: "Business Center Sharjah Publishing City, Free Zone",
      phone: "+971 52 780 7088",
    },
    {
      icon: "/images/footer/02.png",
      address: "90 Keppel Road, Eastham, E602BE, London, UK",
      phone: "+44 7722 4041",
    },
    {
      icon: "/images/footer/03.png",
      address: "6454 N Mozart St, Chicago, IL, 60645-5265, United States",
      phone: "+1 312 7808",
    },
    {
      icon: "/images/footer/04.png",
      address: "Street 25, Giga down town DHA 2, Islamabad.PK",
      phone: "+971 777 8877",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.service) newErrors.service = "Service is required";
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setShowModal(true);
    }
  };

  return (
    <footer className="w-full">
      <section className="relative w-full max-w-7xl mx-auto pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6 lg:-mb-40">
        {/* FIRST ROW */}
        <div className="py-4 flex flex-col items-center ">
          <h3 className="text-black text-[12px] sm:text-[14px] md:text-[16px] font-[500] mb-2">CONTACT US</h3>
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-[500] leading-tight mb-2 text-center">
            Do You Have A Challenge For Us?
          </h2>
          <p className="text-center w-full max-w-2xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] px-2 sm:px-0">
            Share your toughest business challenge and let our experts design scalable secure solutions that turn ideas into action, accelerate growth and deliver measurable results today!
          </p>
        </div>

        {/* 2ND ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-6 sm:gap-8 md:gap-10 rounded-xl items-center mt-6 sm:mt-8 md:mt-10 overflow-hidden bg-transparent max-w-7xl mx-auto">
         
         <div className="w-full">
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-full lg:max-w-3xl space-y-4 sm:space-y-5 md:space-y-6 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl z-10"
            style={{
              backgroundImage: "url(images/contact/bg.png)",
              backgroundSize: "cover",
              backgroundPosition: "30% 20%",
            }}
          >
            <div className="absolute inset-0 bg-white/20 pointer-events-none rounded-lg sm:rounded-xl md:rounded-2xl -z-10 h-full" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Your Name
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Your Email
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="email"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Company Name 
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Project Type</label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Phone Number 
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="tel"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Company URL</label>
                <input
                  type="url"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, website: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">Region
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, region: e.target.value })
                  }
                  required
                />
              </div>

              <div>
                <label className="text-[14px] sm:text-[15px] md:text-[16px]">
                  Services you are looking for
                  <span className="text-red-500 ml-1">*</span>
                </label>
                <input
                  type="text"
                  className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  required
                />
              </div>
            </div>

            <div>
              <label className="text-[14px] sm:text-[15px] md:text-[16px]">Project Details
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                rows="3"
                className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 md:py-3 mt-1 bg-white"
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message}</p>
              )}
              
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="group text-[14px] sm:text-[16px] md:text-[18px] bg-black text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2 rounded-full font-[400] cursor-pointer relative overflow-hidden"
              >
                Send Message
                <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-4 md:h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-10"></span>
              </button>
            </div>
          </form>
          </div>
          <div className="relative flex flex-col items-center lg:items-start h-full w-full justify-center mt-6 sm:mt-8 lg:mt-0">
            <img
              src="/images/contact/person.png"
              alt="Contact Us"
              className=" absolute bottom-30 w-full max-w-[400px] lg:max-w-none lg:scale-110 object-cover rounded-lg sm:rounded-xl -z-10"
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-xl p-6 sm:p-8 w-full max-w-md relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-4 text-xl"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>

            <h3 className="text-xl sm:text-2xl font-bold mb-4">Form Data</h3>
            <p className="mb-2">
              <strong>Name:</strong> {formData.name}
            </p>
            <p className="mb-2">
              <strong>Email:</strong> {formData.email}
            </p>
            <p className="mb-2">
              <strong>Service:</strong> {formData.service}
            </p>
            <p className="mb-2">
              <strong>Message:</strong> {formData.message}
            </p>
          </div>
        </div>
      )}
      <section className="w-full bg-[#051C24] text-gray-300 mt-10 sm:mt-12 md:mt-16 lg:pt-25">
        <div className="flex flex-col w-full justify-end items-end pb-5 pt-12 sm:pt-16 md:pt-20 lg:pt-25 px-4 sm:px-6">
          {/* TOP SECTION */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 text-center lg:text-left w-full max-w-7xl mx-auto">
            {locations.map((item, index) => (
              <div key={index} className="space-y-1 sm:space-y-3">
                <div className="flex items-center justify-center lg:justify-start mb-2 sm:mb-3">
                  <img src={item.icon} alt="Location Icon" className="w-auto h-20 sm:w-auto sm:h-30 md:w-auto md:h-40 " />
                </div>
                <div className="flex gap-1 md:gap-2 w-full justify-center lg:justify-start items-start">
                  <MapPin className="w-5 h-5 sm:w-5 sm:h-5 md:w-5 text-[#D0F94A] mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] text-white text-center lg:text-left">{item.address}</p>
                </div>
                <div className="flex gap-1 md:gap-2 w-full justify-center lg:justify-start items-start">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 text-[#D0F94A] mt-0.5 flex-shrink-0" />
                  <p className="text-[13px] sm:text-[14px] md:text-[16px] text-white text-center lg:text-left">{item.phone}</p>
                </div>
              </div>
            ))}
          </div>
          {/* DIVIDER */}
          <div className="w-full max-w-7xl mx-auto border-t border-gray-600 my-4 sm:my-5"></div>

          {/* BOTTOM SECTION */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 w-full max-w-7xl mx-auto">
            {/* SOCIAL ICONS */}
            <div className="flex gap-3 sm:gap-4 text-lg sm:text-xl order-2 md:order-1">
              <span className="cursor-pointer hover:text-[#D0F94A] transition w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                <FaInstagram className="w-full h-full" />
              </span>
              <span className="cursor-pointer hover:text-[#D0F94A] transition w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                <FaFacebook className="w-full h-full" />
              </span>
              <span className="cursor-pointer hover:text-[#D0F94A] transition w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                <FaLinkedin className="w-full h-full" />
              </span>
              <span className="cursor-pointer hover:text-[#D0F94A] transition w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
                <FaXTwitter className="w-full h-full" />
              </span>
            </div>

            {/* COPYRIGHT */}
            <p className="text-center text-[#D0F94A] text-[13px] sm:text-[14px] md:text-[16px] order-1 md:order-2 mb-4 sm:mb-0">
              © 2023 Copyright. All rights reserved.
            </p>

            {/* LINKS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 text-[13px] sm:text-[14px] md:text-[16px] justify-center order-3">
              <a href="#" className="hover:text-white transition">
                Services
              </a>
              <a href="#" className="hover:text-white transition">
                Resources
              </a>
              <a href="#" className="hover:text-white transition">
                Company
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}






