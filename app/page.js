import Hero from "./components/home/Hero";
import Industry from "./components/home/Industry";
import ServicesLabs from "./components/home/ServicesLabs";
import Testimonials from "./components/home/Testimonials";
import Labs from "./components/home/Labs";
import BusinessModel from "./components/home/BusinessModel";
import StartupSection from "./components/home/StartupSection";
import PrebuiltModelsSection from "./components/home/PrebuiltModelsSection";
import WorkflowAutomation from "./components/home/WorkflowAutomation";
import Layout from "./components/Layout";

export const metadata = {
  title: "AI Development Company | Enterprise AI Solutions – Cplusoft",
  description: "Cplusoft is a global AI development company building enterprise AI solutions, machine learning systems, automation, and custom intelligent software.",
};

export default function Home() {
  return (
    <Layout footerType="A">
      <div className="flex flex-col w-full min-h-screen items-center justify-center ">
        <Hero />
        <Labs />
        <Industry />
        <WorkflowAutomation />
        <ServicesLabs />
        <BusinessModel
          title="Work Faster with Smarter Systems"
          description="We build live ready software designed for real operating settings, not demos. Our systems reduce manual effort, speed workflows, improve uptime, and scale smoothly as demand grows, delivering steady output, security, and long term value for modern businesses global across teams, industries, and platforms!"
        />
        <PrebuiltModelsSection />
        <StartupSection />
        <Testimonials />
      </div>
    </Layout>
  );
}
