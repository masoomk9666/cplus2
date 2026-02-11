import React from 'react'
import Hero from '../components/careers/Hero'
import Process from '../components/careers/Process'
import Careers from '../components/careers/Careers'
import Layout from '../components/Layout'



const page = () => {
  return (
    <Layout footerType="B" headerType='A'>
      <Hero />
      <Process />
      <Careers />
    </Layout>
  )
}

export default page