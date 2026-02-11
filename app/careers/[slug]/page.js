

// app/careers/[slug]/page.jsx
import React from "react";
import Layout from "../../components/Layout";
import Hero from "@/app/components/careers/SlugHero";
import { allJobs } from "@/data/jobs";
import JobDetails from "@/app/components/careers/JobDetails";

// 1️⃣ Page function must be async
const Page = async ({ params }) => {
  // 2️⃣ Unwrap the params object itself
  const resolvedParams = await params; // 🟢 This gives normal object
  const slug = resolvedParams.slug;

  // 3️⃣ Find the job
  const job = allJobs.find((j) => j.slug === slug);

  if (!job) return <div>Job Not Found</div>;

  return (
    <Layout footerType="B" headerType="A">
      <Hero />
      <JobDetails job={job} />
    </Layout>
  );
};

export default Page;


