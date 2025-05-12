import React from 'react'
import home1baner from '../assets/home1-banner-image-i1.png';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
import home3 from '../assets/home3.png';
import home4 from '../assets/home4-banner-image-0012.png'
import { GiHeartBeats } from "react-icons/gi";

function Mid() {
  
  return (
    <>
      <section className='bg-[#ddceb7fa] lg:h-170'>
        {/* Second Start */}
        <div className='flex gap-0 pt-12 lg:flex-row'>
          <div className='lg:mt-35'>
            <img src={home1baner} alt="" className='lg:w-110 hover:scale-105 hover:animate__pulse  animate__animated animate__backInLeft hidden sm:block' />
          </div>

          <div>
          <div className='flex lg:gap-10 sm:ml-9 gap-5 md:gap-10 ml-3 lg:ml-18'>
          <span className='text-1xl border-1 px-12 py-1 rounded-[30px] text-[#0b2a2b77]'> Mindfulness</span>
          <span className='text-1xl border-1 px-12 py-1 rounded-[30px] text-[#0b2a2b77]'>Meditation</span>
          </div>
            <div>
              {/* text photo start */}
              <div className='lg:text-[70px] text-[50px] font-bold leading-tight text-[#0b2a2b] relative inline-block w-full tracking-[6px] ml-9 lg:ml-[-1px] text-center mt-10 font-serif '>
                <h1 className='flex gap-1'>
                  Transform <span><img src={home1} alt="" className=' w-20' /></span>
                </h1>
                <h1 className='flex gap-2'>
                  Your <span><img src={home2} alt="" className='w-20' /></span>
                  Body,
                </h1>
                <h1 className='flex gap-2'>
                  <span>
                    <img src={home3} alt="" className='w-20' /></span>Calm Your 
                </h1>
                <h1 className='lg:text-center mr-25'>
                Mind
                </h1>
              </div>
              {/* text photo end */}
              <p className='w-125 text-center text-1xl mt-5'>
                Proin ornare justo sodales senectus vulputate aptent semper sollicitudin accumsan fringilla et imperdiet pellentesque morbi
              </p>
              <button className='border-1 px-13 py-4 rounded-[30px] mt-10 bg-[#0B2A2B] text-white ml-38 hover:bg-[#536765] group-hover:scale-100'>
                Explore More
              </button>
            </div>
          </div>

          <div className='border-10 hidden lg:block border-[#8D9182] rounded-t-[900px]  w-48 h-69 ml-25 bg-[#0B2A2B]'>
          <GiHeartBeats className='size-[40px] ml-[130px] mt-[-60px] rotate-20 text-[#0b2a2b] animate__animated animate__heartBeat animate__infinite'/>
            <img src={home4} alt="" className='h-73 mt-[-17px] transform scale-x-[-1]' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Mid