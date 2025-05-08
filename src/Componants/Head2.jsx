import React from 'react'
import card2 from '../assets/card2.jpg'
import { Link } from "react-router-dom";

function Head2({title, subtitle}) {
  return (
    <>
        <section style={{backgroundImage: `url(${card2})`}} className='h-75 bg-cover bg-center opacity-120 relative'>
            <div className='absolute inset-0 bg-[#EADBC5] opacity-80 z-0'></div>
          <h1 className='text-5xl z-10 absolute ml-140 tracking-[4px] font-bold text-[#0B2A2B] mt-20'>
            {title}
          </h1>
            <Link to="/" className='absolute ml-142 mt-32 text-2xl text-[#0B2A2B] hover:underline'>{subtitle}</Link>
        </section>
    </>
  )
}

export default Head2