import React from 'react'
import Header from '../Componants/Header';
import Head2 from '../Componants/Head2';
import Footer from '../Componants/Footer';
import ContactInfo from '../Componants/ContactInfo';

function ContactUs() {
  return (
   <>
   <Header BgColor="bg-[#FBF5EC]"/>
   <Head2 title="Contact Us" subtitle="Home"/>
   <ContactInfo/>
   <Footer/>
   </>
  )
}

export default ContactUs