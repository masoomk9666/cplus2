import React from 'react'
import Contact from '../components/contact/Contact'
import Layout from '../components/Layout'

export const metadata = {
  title: "Contact Us | Cplusoft - Start Your Project Consultation",
  description: "Share your project requirements with Cplusoft. Our team designs tailored AI and digital solutions aligned with your goals. Start your consultation today.",
};

const page = () => {
  return (
    <Layout footerType='B' headerType='B'>
        <Contact />
    </Layout>
  )
}

export default page