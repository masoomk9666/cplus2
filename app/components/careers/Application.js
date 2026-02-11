// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Plus, Upload, X, HelpCircle } from "lucide-react";
// import { AiOutlineDelete } from "react-icons/ai";
// import SkShadeBtn from "../layout/SkShadeBtn";
// import { FaAngleDown } from "react-icons/fa6";

// const fadeUp = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 1) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay: i * 0.08, duration: 0.5 },
//   }),
// };

// export default function Application() {
//   const [personalInfo, setPersonalInfo] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     headline: "",
//     phone: "",
//     country: "",
//   });

//   const [education, setEducation] = useState([]);
//   const [experience, setExperience] = useState([]);

//   const clearPersonalInfo = () =>
//     setPersonalInfo({
//       firstName: "",
//       lastName: "",
//       email: "",
//       headline: "",
//       phone: "",
//       country: "",
//     });

//   return (
//     <motion.div
//       initial="hidden"
//       animate="visible"
//       className="w-full max-w-7xl bg-white rounded-xl space-y-6 sm:space-y-8 md:space-y-10 mt-6 sm:mt-8 md:mt-10 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8"
//     >
//       {/* Autofill */}
//       <motion.div
//         variants={fadeUp}
//         className="border border-[#B8B8B8] border-dashed rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-[#FCFCFC]"
//       >
//         <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-medium mb-2">Autofill application</p>

//         <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black mb-4 sm:mb-5 md:mb-6 max-w-lg mx-auto">
//           Save time by importing your resume in one of the following formats:
//           .pdf, .doc, .docx, .odt, or .rtf.
//         </p>

//         {/* File Upload */}
//         <label className="inline-flex flex-col items-center justify-center cursor-pointer">
//           <span className="flex gap-2 sm:gap-3 justify-center items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-medium">
//             Import resume
//             {/* Icon wrapper for responsive sizing */}
//             <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5">
//               <FaAngleDown className="w-full h-full text-white" />
//             </span>
//           </span>

//           <input
//             type="file"
//             accept=".pdf,.doc,.docx,.odt,.rtf"
//             className="hidden"
//             onChange={(e) => {
//               const file = e.target.files[0];
//               if (file) {
//                 console.log("Uploaded file:", file);
//               }
//             }}
//           />
//         </label>
//       </motion.div>

//       {/* PERSONAL INFORMATION */}
//       <SectionHeader title="Personal information" onClear={clearPersonalInfo} />

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
//         <Input
//           label="First name*"
//           value={personalInfo.firstName}
//           onChange={(e) =>
//             setPersonalInfo({ ...personalInfo, firstName: e.target.value })
//           }
//         />
//         <Input
//           label="Last name*"
//           value={personalInfo.lastName}
//           onChange={(e) =>
//             setPersonalInfo({ ...personalInfo, lastName: e.target.value })
//           }
//         />
//       </div>

//       <Input
//         label="Email address*"
//         value={personalInfo.email}
//         onChange={(e) =>
//           setPersonalInfo({ ...personalInfo, email: e.target.value })
//         }
//       />
//       <Input
//         label="Headline (Optional)"
//         value={personalInfo.headline}
//         onChange={(e) =>
//           setPersonalInfo({ ...personalInfo, headline: e.target.value })
//         }
//       />

//       <div>
//         <Input
//           label="Country phone No*"
//           value={personalInfo.phone}
//           onChange={(e) =>
//             setPersonalInfo({ ...personalInfo, phone: e.target.value })
//           }
//         />
//         <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 mt-1">
//           The hiring team may use this number to contact you about this job.
//         </p>
//       </div>

//       <div>
//         <label className="flex items-center gap-1 text-[14px] sm:text-[15px] md:text-[16px] font-medium">
//           Country name*
//           <span className="relative group">
//             {/* HelpCircle icon with wrapper */}
//             <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5">
//               <HelpCircle className="w-full h-full text-white bg-black rounded-full" />
//             </span>
//             <span className="absolute hidden group-hover:block bg-black text-white text-[12px] sm:text-[14px] md:text-[16px] p-3 sm:p-4 rounded w-60 sm:w-70 md:w-80 top-5 left-0 z-10">
//               Enter your location information clearly.
//             </span>
//           </span>
//         </label>
//         <input className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
//           value={personalInfo.country}
//           onChange={(e) =>
//             setPersonalInfo({ ...personalInfo, country: e.target.value })
//           }

//         />
//         <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 mt-1">
//           Include your city, region, and country, so that employers can easily
//           manage your application.
//         </p>
//       </div>

//       {/* PROFILE */}
//       <SectionHeader title="Profile" onClear={clearPersonalInfo} />

//       <AddBlock
//         title="Education (Optional)"
//         onAdd={() => setEducation([...education, {}])}
//       />
//       {education.map((_, i) => (
//         <SubForm key={i} title="Education Details" />
//       ))}

//       <AddBlock
//         title="Experience (Optional)"
//         onAdd={() => setExperience([...experience, {}])}
//       />
//       {experience.map((_, i) => (
//         <SubForm key={i} title="Experience Details" />
//       ))}

//       <Textarea label="Summary" />

//       {/* RESUME */}
//       <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">Resume</label>
//       <motion.div
//         variants={fadeUp}
//         className="flex flex-col justify-center gap-2 sm:gap-3 items-center border border-[#E3E3E3] border-dashed rounded-lg p-6 sm:p-8 md:p-12 lg:p-20 text-center mt-1 sm:mt-2 bg-[#FCFCFC]"
//       >
//         <div className="bg-black p-1.5 sm:p-2 w-fit rounded-sm">
//           {/* Upload icon with wrapper */}
//           <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
//             <Upload className="w-full h-full text-white" />
//           </span>
//         </div>
//         <p className="text-[14px] sm:text-[15px] md:text-[16px]">
//           Choose file <span className="text-gray-400">or drag and drop here</span>
//         </p>
//       </motion.div>

//       {/* DETAILS */}
//       <SectionHeader title="Details" onClear={clearPersonalInfo} />
//       <Textarea label="Cover letter (Optional)" />

//       <div className="flex justify-end mt-6 sm:mt-8">
//         <SkShadeBtn text="Submit Application" shadeWidth="30" />
//       </div>
//     </motion.div>
//   );
// }

// /* ================== Reusable Components ================== */

// function SectionHeader({ title, onClear }) {
//   return (
//     <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
//       <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-medium">{title}</h2>
//       {onClear && (
//         <button
//           onClick={onClear}
//           className="flex justify-center items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] border border-[#B8B8B8] text-black rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer w-full sm:w-auto"
//         >
//           {/* Delete icon with wrapper */}
//           <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
//             <AiOutlineDelete className="w-full h-full" />
//           </span>
//           Clear all
//         </button>
//       )}
//     </motion.div>
//   );
// }

// function Input({ label, value, onChange }) {
//   return (
//     <motion.div variants={fadeUp}>
//       <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{label}</label>
//       <input
//         value={value}
//         onChange={onChange}
//         className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
//       />
//     </motion.div>
//   );
// }

// function Textarea({ label }) {
//   return (
//     <motion.div variants={fadeUp}>
//       <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{label}</label>
//       <textarea className="w-full mt-1 px-3 py-2 text-sm h-32 sm:h-36 md:h-40 lg:h-45 resize-none border rounded focus:outline-none focus:ring-2 focus:ring-black" />
//     </motion.div>
//   );
// }

// function AddBlock({ title, onAdd }) {
//   return (
//     <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
//       <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{title}</span>
//       <button
//         onClick={onAdd}
//         className="flex justify-center items-center gap-1 sm:gap-2 text-[14px] sm:text-[15px] md:text-[16px] text-white bg-black rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer w-full sm:w-auto"
//       >
//         Add
//         {/* Plus icon with wrapper */}
//         <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4">
//           <Plus className="w-full h-full" />
//         </span>
//       </button>
//     </motion.div>
//   );
// }

// function SubForm({ title }) {
//   return (
//     <motion.div variants={fadeUp} className="border rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
//       <div className="flex justify-between">
//         <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px]">{title}</p>
//         {/* X icon with wrapper */}
//         <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 cursor-pointer">
//           <X className="w-full h-full" />
//         </span>
//       </div>
//       <input
//         className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
//         placeholder="Title"
//       />
//       <input
//         className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
//         placeholder="Organization"
//       />
//       <input
//         className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
//         placeholder="Year"
//       />
//     </motion.div>
//   );
// }



"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Upload, X, HelpCircle } from "lucide-react";
import { AiOutlineDelete } from "react-icons/ai";
import SkShadeBtn from "../layout/SkShadeBtn";
import { FaAngleDown } from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Application() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    headline: "",
    phone: "",
    country: "",
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const clearPersonalInfo = () =>
    setPersonalInfo({
      firstName: "",
      lastName: "",
      email: "",
      headline: "",
      phone: "",
      country: "",
    });

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full max-w-7xl bg-white rounded-xl space-y-6 sm:space-y-8 md:space-y-10 mt-6 sm:mt-8 md:mt-10 py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8"
    >
      {/* Autofill */}
      <motion.div
        variants={fadeUp}
        className="border border-[#B8B8B8] border-dashed rounded-lg p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-[#FCFCFC]"
      >
        <p className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-medium mb-2">Autofill application</p>

        <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-black mb-4 sm:mb-5 md:mb-6 max-w-lg mx-auto">
          Save time by importing your resume in one of the following formats:
          .pdf, .doc, .docx, .odt, or .rtf.
        </p>

        {/* File Upload */}
        <label className="inline-flex flex-col items-center justify-center cursor-pointer">
          <span className="flex gap-2 sm:gap-3 justify-center items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-black text-white rounded-full text-[14px] sm:text-[15px] md:text-[16px] font-medium">
            Import resume
            {/* Icon wrapper for responsive sizing */}
            <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5">
              <FaAngleDown className="w-full h-full text-white" />
            </span>
          </span>

          <input
            type="file"
            accept=".pdf,.doc,.docx,.odt,.rtf"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                console.log("Uploaded file:", file);
              }
            }}
          />
        </label>
      </motion.div>

      {/* PERSONAL INFORMATION */}
      <SectionHeader title="Personal information" onClear={clearPersonalInfo} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
        <Input
          label="First name*"
          value={personalInfo.firstName}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, firstName: e.target.value })
          }
        />
        <Input
          label="Last name*"
          value={personalInfo.lastName}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, lastName: e.target.value })
          }
        />
      </div>

      <Input
        label="Email address*"
        value={personalInfo.email}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, email: e.target.value })
        }
      />
      <Input
        label="Headline (Optional)"
        value={personalInfo.headline}
        onChange={(e) =>
          setPersonalInfo({ ...personalInfo, headline: e.target.value })
        }
      />

      <div>
        <Input
          label="Country phone No*"
          value={personalInfo.phone}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, phone: e.target.value })
          }
        />
        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 mt-1">
          The hiring team may use this number to contact you about this job.
        </p>
      </div>

      <div>
        <label className="flex items-center gap-1 text-[14px] sm:text-[15px] md:text-[16px] font-medium">
          Country name*
          <span className="relative group">
            {/* HelpCircle icon with wrapper */}
            <span className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5">
              <HelpCircle className="w-full h-full text-white bg-black rounded-full" />
            </span>
            <span className="absolute hidden group-hover:block bg-black text-white text-[12px] sm:text-[14px] md:text-[16px] p-3 sm:p-4 rounded w-60 sm:w-70 md:w-80 top-5 left-0 z-10">
              Enter your location information clearly.
            </span>
          </span>
        </label>
        <input className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
          value={personalInfo.country}
          onChange={(e) =>
            setPersonalInfo({ ...personalInfo, country: e.target.value })
          }

        />
        <p className="text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-gray-500 mt-1">
          Include your city, region, and country, so that employers can easily
          manage your application.
        </p>
      </div>

      {/* PROFILE */}
      <SectionHeader title="Profile" onClear={clearPersonalInfo} />

      <AddBlock
        title="Education (Optional)"
        onAdd={() => setEducation([...education, {}])}
      />
      {education.map((_, i) => (
        <SubForm key={i} title="Education Details" />
      ))}

      <AddBlock
        title="Experience (Optional)"
        onAdd={() => setExperience([...experience, {}])}
      />
      {experience.map((_, i) => (
        <SubForm key={i} title="Experience Details" />
      ))}

      <Textarea label="Summary" />

      {/* RESUME */}
      <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">Resume</label>
      <motion.div
        variants={fadeUp}
        className="flex flex-col justify-center gap-2 sm:gap-3 items-center border border-[#E3E3E3] border-dashed rounded-lg p-6 sm:p-8 md:p-12 lg:p-20 text-center mt-1 sm:mt-2 bg-[#FCFCFC]"
      >
        <div className="bg-black p-1.5 sm:p-2 w-fit rounded-sm">
          {/* Upload icon with wrapper */}
          <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
            <Upload className="w-full h-full text-white" />
          </span>
        </div>
        <p className="text-[14px] sm:text-[15px] md:text-[16px]">
          Choose file <span className="text-gray-400">or drag and drop here</span>
        </p>
      </motion.div>

      {/* DETAILS */}
      <SectionHeader title="Details" onClear={clearPersonalInfo} />
      <Textarea label="Cover letter (Optional)" />

      <div className="flex justify-end mt-6 sm:mt-8">
        <SkShadeBtn text="Submit Application" shadeWidth="30" />
      </div>
    </motion.div>
  );
}

/* ================== Reusable Components ================== */

function SectionHeader({ title, onClear }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
      <h2 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px] font-medium">{title}</h2>
      {onClear && (
        <button
          onClick={onClear}
          className="flex justify-center items-center gap-2 sm:gap-3 text-[14px] sm:text-[15px] md:text-[16px] border border-[#B8B8B8] text-black rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer w-full sm:w-auto"
        >
          {/* Delete icon with wrapper */}
          <span className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6">
            <AiOutlineDelete className="w-full h-full" />
          </span>
          Clear all
        </button>
      )}
    </motion.div>
  );
}

function Input({ label, value, onChange }) {
  return (
    <motion.div variants={fadeUp}>
      <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{label}</label>
      <input
        value={value}
        onChange={onChange}
        className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
      />
    </motion.div>
  );
}

function Textarea({ label }) {
  return (
    <motion.div variants={fadeUp}>
      <label className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{label}</label>
      <textarea className="w-full mt-1 px-3 py-2 text-sm h-32 sm:h-36 md:h-40 lg:h-45 resize-none border rounded focus:outline-none focus:ring-2 focus:ring-black" />
    </motion.div>
  );
}

function AddBlock({ title, onAdd }) {
  return (
    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4">
      <span className="text-[14px] sm:text-[15px] md:text-[16px] font-medium">{title}</span>
      <button
        onClick={onAdd}
        className="flex justify-center items-center gap-1 sm:gap-2 text-[14px] sm:text-[15px] md:text-[16px] text-white bg-black rounded-full px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 cursor-pointer w-full sm:w-auto"
      >
        Add
        {/* Plus icon with wrapper */}
        <span className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4">
          <Plus className="w-full h-full" />
        </span>
      </button>
    </motion.div>
  );
}

function SubForm({ title }) {
  return (
    <motion.div variants={fadeUp} className="border rounded-lg p-3 sm:p-4 space-y-2 sm:space-y-3">
      <div className="flex justify-between">
        <p className="font-medium text-[14px] sm:text-[15px] md:text-[16px]">{title}</p>
        {/* X icon with wrapper */}
        <span className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-4.5 md:h-4.5 cursor-pointer">
          <X className="w-full h-full" />
        </span>
      </div>
      <div>
        <input
          className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Title"
        />
      </div>
      <div>
        <input
          className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Organization"
        />
      </div>
      <div>
        <input
          className="w-full mt-1 px-3 py-2 text-sm border rounded focus:outline-none focus:ring-2 focus:ring-black"
          placeholder="Year"
        />
      </div>
    </motion.div>
  );
}

