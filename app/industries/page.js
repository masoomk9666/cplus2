import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/industries/Hero'
import Industries from '../components/industries/Industries'
import WhyChooseUs from '../components/industries/WhyChooseUs'
import Industry from '../components/home/Industry'
import ClientReviews from '../components/industries/ClientReviews'

const page = () => {
  return (
    <Layout footerType='A' headerType='A'>
    <Hero />
    <Industries />
    <Industry />
    <WhyChooseUs />
    <ClientReviews />
    </Layout>
  )
}

export default page