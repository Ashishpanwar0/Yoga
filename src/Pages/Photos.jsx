import React from 'react'
import Header from '../Componants/Header';
import Head2 from '../Componants/Head2';
import Gallary from '../Componants/Gallary';
import Footer from '../Componants/Footer';

function Photos() {
  return (
    <>
    <Header BgColor="bg-[#FBF5EC]"/>
    <Head2 title="Gallary" subtitle="Home"/>
    <Gallary/>
    <Footer/>
    </>
  )
}

export default Photos