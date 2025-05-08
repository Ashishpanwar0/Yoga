import React from 'react'
import Header from '../Componants/Header';
import Head2 from '../Componants/Head2';
import Footer from '../Componants/Footer';
import Video from '../Componants/Video';
import OurTeam from '../Componants/OurTeam';

function Pagess() {
  return (
    <>
    <Header BgColor="bg-[#FBF5EC]"/>
    <Head2 title="About Us" subtitle="Home"/>
    <OurTeam/>
    <Video/>
    <Footer/>
    </>
  )
}

export default Pagess