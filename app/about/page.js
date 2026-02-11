import React from 'react'
import Hero from '../components/about/Hero'
import Leadership from '../components/about/Leadership'
import Cta from '../components/about/Cta'
import CultureSection from '../components/about/CultureSection'
import Layout from '../components/Layout'
import CompanyGrowth from '../components/about/CompanyGrowth'
import InternationalRepresentation from '../components/about/InternationalRepresentation'

export const metadata = {
  title: "About Cplusoft | AI-Driven Software & Web Development Company",
  description: "Cplusoft builds secure, scalable digital products with AI-driven solutions. 10+ years, 800+ projects, 500+ clients worldwide. Empowering businesses to grow.",
};

const page = () => {
  return (
    <Layout footerType="A" headerType='A'>
      <Hero />
      <CompanyGrowth />
      <Leadership />
      <InternationalRepresentation />
      <Cta />
      <CultureSection />
    </Layout>
  )
}

export default page