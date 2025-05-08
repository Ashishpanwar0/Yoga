import React from 'react'
import Header from '../Componants/Header'
import Mid from '../Componants/Mid'
import Lessons from '../Componants/Lessons'
import Cards1 from '../Componants/Cards1'
import Calendar from '../Componants/Calendar'
import YogaExpart from '../Componants/YogaExpart'
import Video from '../Componants/Video'
import  Card2 from '../Componants/Card2'
import Testimonial from '../Componants/Testimonial'
import Testimonial2 from '../Componants/Testimonial2'
import Footer from '../Componants/Footer'

function Home() {
  return (
    <>
    <Header BgColor="bg-[#ddceb7fa]"/>
    <Mid/>
    <Lessons/>
    <Cards1/>
    <Calendar/>
    <YogaExpart/>
    <Video/>
    <Card2/>
    <Testimonial/>
    <Testimonial2/>
    <Footer/>
    </>
  )
}

export default Home