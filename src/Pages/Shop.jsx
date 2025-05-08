import React from 'react'
import Header from '../Componants/Header'
import Head2 from '../Componants/Head2'
import Footer from '../Componants/Footer'
import Availability from '../Componants/Availability'
import ShopingCard from '../Componants/ShopingCard'

function Shop() {
  return (
    <>
    <Header BgColor="bg-[#FBF5EC]"/>
    <Head2 title="Shop Now" subtitle="Home"/>
    <div className='flex'>
    <Availability/>
    <ShopingCard/>
    </div>
    <Footer/>
    </>
  )
}

export default Shop