"use client";

const MobileMegaMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="ml-4 mt-2 space-y-4 animate-fadeIn">
      <div className="space-y-3">
        <h4 className="text-[#D0F94A] text-sm font-medium">
          SOFTWARE DEVELOPMENT
        </h4>
        <ul className="space-y-2">
          <li className="text-white">Web Applications</li>
          <li className="text-white">Mobile Applications</li>
          <li className="text-white">Custom Software</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="text-[#D0F94A] text-sm font-medium">
          GENERATIVE AI
        </h4>
        <ul className="space-y-2">
          <li className="text-white">
            AI Chatbots{" "}
            <span className="bg-[#CDFB26] text-black text-xs px-2 py-0.5 rounded-full">
              NEW
            </span>
          </li>
          <li className="text-white">LLM Solutions</li>
          <li className="text-white">AI Automation</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="text-[#D0F94A] text-sm font-medium">
          ENTERPRISE SOLUTIONS
        </h4>
        <ul className="space-y-2">
          <li className="text-white">ERP Systems</li>
          <li className="text-white">CRM Platforms</li>
          <li className="text-white">Business Automation</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h4 className="text-[#D0F94A] text-sm font-medium">
          CLOUD & DEVOPS
        </h4>
        <ul className="space-y-2">
          <li className="text-white">AWS & Azure</li>
          <li className="text-white">CI/CD Pipelines</li>
          <li className="text-white">Cloud Security</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMegaMenu;