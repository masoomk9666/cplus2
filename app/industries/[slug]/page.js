import React from "react";
import Layout from "../../components/Layout";
import PortfolioHero from "@/app/components/industries/PortfolioHero";
import PortfolioAbout from "@/app/components/industries/PortfolioAbout";
import PortfolioGrid from "@/app/components/industries/PortfolioGrid";
import PortfolioChallenges from "@/app/components/industries/PortfolioChallenges";
import PortfolioProcess from "@/app/components/industries/PortfolioProcess";
import TechStack from "@/app/components/industries/TechStack";
import ClientReviews from "@/app/components/industries/ClientReviews";
import { portfolioData } from "@/data/portfolioData";



export async function generateMetadata({ params }) {
  const resolvedParams = await params; // 🟢 This gives normal object
  const slug = resolvedParams.slug;

  const portfolio = portfolioData.find((item) => item.slug === slug);

  if (!portfolio) {
    return {
      title: "Portfolio Not Found",
      description: "The requested portfolio page does not exist.",
    };
  }

  return {
    title: portfolio.meta?.title || portfolio.hero?.title,
    description: portfolio.meta?.description || portfolio.about?.description,
    keywords: portfolio.meta?.keywords || [],
    openGraph: {
      title: portfolio.meta?.title,
      description: portfolio.meta?.description,
      images: [
        {
          url: portfolio.meta?.image || portfolio.hero?.image,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}


const Page = async ({ params }) => {
  // 2️⃣ Unwrap the params object itself
  const resolvedParams = await params; // 🟢 This gives normal object
  const slug = resolvedParams.slug;
  // 3️⃣ Find the job
  const portfolio = portfolioData.find((j) => j.slug === slug);

  if (!portfolio) return <div>No Page Found</div>;

  return (
    <Layout footerType="A" headerType="B">
      <PortfolioHero heroData={portfolio.hero} />
      <PortfolioAbout aboutData={portfolio.about} />
      <PortfolioGrid  gridImages={portfolio.gridImages} />
      <PortfolioChallenges challengeData={portfolio.challenges}/>
      <PortfolioProcess processData={portfolio.process}/>
      <TechStack stackData={portfolio.techStack}/>
      <ClientReviews />
    </Layout>
  );
};

export default Page;


