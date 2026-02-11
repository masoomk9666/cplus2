"use client";

const MegaMenuContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 gap-6 md:gap-4">
      <div className="px-4 md:px-6">
        <h4 className="text-[13px] font-[400] mb-4">
          SOFTWARE DEVELOPMENT
        </h4>
        <ul className="text-[16px] font-[600] space-y-2">
          <div>
            <li>Web Applications</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>Mobile Applications</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>Custom Software</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
        </ul>
      </div>
      
      <div className="px-4 md:px-6">
        <h4 className="text-[13px] font-[400] mb-4">GENERATIVE AI</h4>
        <ul className="text-[16px] font-[600] space-y-2">
          <div>
            <li>
              AI Chatbots{" "}
              <span className="bg-[#CDFB26] text-black text-xs px-2 py-0.5 rounded-full">
                NEW
              </span>
            </li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>LLM Solutions</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>AI Automation</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
        </ul>
      </div>
      
      <div className="px-4 md:px-6">
        <h4 className="text-[13px] font-[400] mb-4">
          ENTERPRISE SOLUTIONS
        </h4>
        <ul className="text-[16px] font-[600] space-y-2">
          <div>
            <li>ERP Systems</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>CRM Platforms</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>Business Automation</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
        </ul>
      </div>
      
      <div className="px-4 md:px-6">
        <h4 className="text-[13px] font-[400] mb-4">CLOUD & DEVOPS</h4>
        <ul className="text-[16px] font-[600] space-y-2">
          <div>
            <li>AWS & Azure</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>CI/CD Pipelines</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
          <div>
            <li>Cloud Security</li>
            <p className="text-[14px] font-[400]">
              Edge intelligence for every creator
            </p>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MegaMenuContent;