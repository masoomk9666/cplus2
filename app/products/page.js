import React from "react";
import Hero from "../components/products/Hero";
import Layout from "../components/Layout";
import ProductTabs from "../components/products/ProductTabs";
import PrebuiltModelsSection from "../components/home/PrebuiltModelsSection";
import WorkflowAutomation from "../components/home/WorkflowAutomation";
import Cta from "../components/products/Cta";
import LabProcess from "../components/products/LabProcess";


export const metadata = {
  title: "Our Products | AI, SaaS & Automation Solutions - Cplusoft",
  description: "Built in-house by Cplusoft: Faasil for KSA compliance, Healix for clinics, Nurexa chatbot, Logis AI for logistics, Alif OCR for Arabic documents.",
};

const page = () => {
  return (
    <Layout footerType="A" headerType="A">
      <Hero />
      <ProductTabs />
      <LabProcess />
      <PrebuiltModelsSection />
      <WorkflowAutomation />
      <Cta />
    </Layout>
  );
};

export default page;
