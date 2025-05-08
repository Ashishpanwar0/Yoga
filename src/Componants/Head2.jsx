import React from 'react'
import card2 from '../assets/card2.jpg'
import { Link } from "react-router-dom";

function Head2({title, subtitle}) {
  return (
    <>
        <section
        style={{ backgroundImage: `url(${card2})` }}
        className="lg:h-75 h-64 sm:h-72 md:h-80 bg-cover bg-center opacity-120 relative w-full"
      >
        <div className="absolute inset-0 bg-[#EADBC5] opacity-80 z-0"></div>
        
        <h1 className="text-2xl sm:text-4xl md:text-5xl z-10 absolute ml-45 sm:ml-20 md:ml-40 lg:ml-140 tracking-[2px] sm:tracking-[3px] md:tracking-[4px] font-bold text-[#0B2A2B] mt-22 sm:mt-16 lg:mt-20">
          {title}
        </h1>

        <Link
          to="/"
          className="absolute ml-45 sm:ml-20 md:ml-40 lg:ml-142 mt-30 sm:mt-28 lg:mt-32 text-xl sm:text-xl md:text-2xl text-[#0B2A2B] hover:underline"
        >
          {subtitle}
        </Link>
      </section>
    </>
  )
}

export default Head2