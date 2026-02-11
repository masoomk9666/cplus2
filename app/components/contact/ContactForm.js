// import React from "react";
// import { useState } from "react";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     service: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);

//   const validate = () => {
//     let newErrors = {};
//     if (!formData.name) newErrors.name = "Name is required";
//     if (!formData.email) newErrors.email = "Email is required";
//     if (!formData.service) newErrors.service = "Service is required";
//     if (!formData.message) newErrors.message = "Message is required";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validate()) {
//       setShowModal(true);
//     }
//   };
//   return (
//     <div>
//       <form
//         onSubmit={handleSubmit}
//         className="relative max-w-3xl space-y-6 p-10 rounded-2xl z-10 "
//         style={{
//           backgroundImage: "url(images/contact/bg.png)",
//           backgroundSize: "cover",
//           backgroundPosition: "30% 20%",
//         }}
//       >
//         <div className="absolute inset-0 bg-white/20 pointer-events-none rounded-2xl -z-10 h-full" />

//         {/* Row 1: Name & Email */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="text-[16px]">
//               Your Name
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, name: e.target.value })
//               }
//               required
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm">{errors.name}</p>
//             )}
//           </div>

//           <div>
//             <label className="text-[16px]">
//               Your Email
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="email"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, email: e.target.value })
//               }
//               required
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}
//           </div>
//         </div>

//         {/* Row 2: Company Name & Project Type */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="text-[16px]">
//               Company Name
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, company: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div>
//             <label className="text-[16px]">Project Type</label>
//             <input
//               type="text"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, projectType: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Row 3: Phone & Company URL */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="text-[16px]">
//               Phone Number
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="tel"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, phone: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div>
//             <label className="text-[16px]">Company URL</label>
//             <input
//               type="url"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, website: e.target.value })
//               }
//             />
//           </div>
//         </div>

//         {/* Row 4: Region & Services */}
//         <div className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="text-[16px]">
//               Region
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, region: e.target.value })
//               }
//               required
//             />
//           </div>

//           <div>
//             <label className="text-[16px]">
//               Services you are looking for
//               <span className="text-red-500 ml-1">*</span>
//             </label>
//             <input
//               type="text"
//               className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//               onChange={(e) =>
//                 setFormData({ ...formData, service: e.target.value })
//               }
//               required
//             />
//           </div>
//         </div>

//         {/* Last Row: Project Details (Full Width) */}
//         <div>
//           <label className="text-[16px]">
//             Project Details
//             <span className="text-red-500 ml-1">*</span>
//           </label>
//           <textarea
//             rows="4"
//             className="w-full border border-[2px] rounded-md px-4 py-3 mt-1 bg-white"
//             onChange={(e) =>
//               setFormData({ ...formData, message: e.target.value })
//             }
//             required
//           ></textarea>
//           {errors.message && (
//             <p className="text-red-500 text-sm">{errors.message}</p>
//           )}
//         </div>

//         {/* Button (unchanged) */}
//         <div className="flex justify-end pt-4">
//           <button
//             type="submit"
//             className="group text-[18px] bg-black text-white px-6 py-2 rounded-full font-[400] cursor-pointer relative overflow-hidden"
//           >
//             Send Message
//             <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-20 h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-10"></span>
//           </button>
//         </div>
//       </form>

//       {/* MODAL */}
//       {showModal && (
//         <div
//           className="fixed inset-0 bg-black/50 flex items-center justify-center"
//           onClick={() => setShowModal(false)}
//         >
//           <div
//             className="bg-white rounded-xl p-8 w-full max-w-md relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               className="absolute top-3 right-4 text-xl"
//               onClick={() => setShowModal(false)}
//             >
//               ✕
//             </button>

//             <h3 className="text-2xl font-bold mb-4">Form Data</h3>
//             <p>
//               <strong>Name:</strong> {formData.name}
//             </p>
//             <p>
//               <strong>Email:</strong> {formData.email}
//             </p>
//             <p>
//               <strong>Service:</strong> {formData.service}
//             </p>
//             <p>
//               <strong>Message:</strong> {formData.message}
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ContactForm;




import React from "react";
import { useState } from "react";

const ContactForm = () => {
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
    // <div>
    //   <form
    //     onSubmit={handleSubmit}
    //     className="relative w-full max-w-3xl space-y-4 sm:space-y-5 md:space-y-6 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl z-10"
    //     style={{
    //       backgroundImage: "url(images/contact/bg.png)",
    //       backgroundSize: "cover",
    //       backgroundPosition: "30% 20%",
    //     }}
    //   >
    <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden z-10">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/contact/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Form content */}
      <form
        onSubmit={handleSubmit}
        className="relative w-full space-y-4 sm:space-y-5 md:space-y-6 p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:rounded-xl md:rounded-2xl z-10 "
      >
        <div className="absolute inset-0 bg-white/20 pointer-events-none rounded-lg sm:rounded-xl md:rounded-2xl -z-10 h-full" />

        {/* Row 1: Name & Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="text-[14px] sm:text-[15px] md:text-[16px]">
              Your Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
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
            <label className="text-[14px] sm:text-[15px] md:text-[16px]">
              Your Email
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="email"
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
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

        {/* Row 2: Company Name & Project Type */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="text-[14px] sm:text-[15px] md:text-[16px]">
              Company Name
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
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
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
            />
          </div>
        </div>

        {/* Row 3: Phone & Company URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="text-[14px] sm:text-[15px] md:text-[16px]">
              Phone Number
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="tel"
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
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
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, website: e.target.value })
              }
            />
          </div>
        </div>

        {/* Row 4: Region & Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <div>
            <label className="text-[14px] sm:text-[15px] md:text-[16px]">
              Region
              <span className="text-red-500 ml-1">*</span>
            </label>
            <input
              type="text"
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
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
              className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
              onChange={(e) =>
                setFormData({ ...formData, service: e.target.value })
              }
              required
            />
          </div>
        </div>

        {/* Last Row: Project Details (Full Width) */}
        <div>
          <label className="text-[14px] sm:text-[15px] md:text-[16px]">
            Project Details
            <span className="text-red-500 ml-1">*</span>
          </label>
          <textarea
            rows="3"
            className="w-full border border-[2px] rounded-md px-3 sm:px-4 py-2 sm:py-3 mt-1 bg-white"
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Button (responsive) */}
        <div className="flex justify-end pt-3 sm:pt-4">
          <button
            type="submit"
            className="group text-[14px] sm:text-[16px] md:text-[18px] bg-black text-white px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 rounded-full font-[400] cursor-pointer relative overflow-hidden"
          >
            Send Message
            <span className="absolute -bottom-3 sm:-bottom-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-3 sm:h-4 md:h-6 rounded-full bg-white opacity-0 scale-95 blur-sm pointer-events-none transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100 z-10"></span>
          </button>
        </div>
      </form>

      {/* MODAL - Responsive */}
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
    </div>
  );
};

export default ContactForm;