import React from 'react'
import Hero from '../components/services/Hero'
import Layout from '../components/Layout'
import BusinessModel from '../components/home/BusinessModel'
import WorkflowAutomation from '../components/home/WorkflowAutomation'
import SecurityScrollSection from '../components/services/SecurityScrollSection'
import CoreServices from '../components/services/CoreServices'
import DevProcess from '../components/services/DevProcess'


export const metadata = {
  title: "Our Services | AI, Cloud & Software Development Solutions - Cplusoft",
  description: "Cplusoft offers AI development, cloud engineering, software solutions, and enterprise services. We build scalable systems that accelerate digital transformation.",
};
const page = () => {
  return (
    <Layout footerType='A' headerType='A'>
        <Hero />
        <CoreServices />
        <DevProcess />
        <WorkflowAutomation />
        <BusinessModel 
        title="Building Products That Scale & Teams That Win"
        description="We empower companies to turn vision into reality, ship products people love, and grow with confidence. Using scalable tech, streamlined processes, and strategic clarity, we create solutions designed for real results. Across industries and borders, we help you build what matters and achieve lasting success today."
         />
        
        <SecurityScrollSection />
        
    </Layout>
  )
}

export default page