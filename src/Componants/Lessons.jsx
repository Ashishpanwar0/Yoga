import React from 'react'
import { BsStars } from "react-icons/bs";
import yogamid from '../assets/yogamid-support-section-img.png'
import { CgEditUnmask } from "react-icons/cg";
import { GiStoneStack } from "react-icons/gi";
import { BsAlexa } from "react-icons/bs";
import { TbYoga } from "react-icons/tb";
import { FaOdnoklassniki } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { RiMetaLine } from "react-icons/ri";

function Lessons() {
  return (
    <>
      <section className='bg-[#F9F3EA] lg:h-270 h-490'>
         <div className='pt-10 sm:pt-16'>
              <h1 className='flex border-1 w-60 justify-center gap-5 items-center rounded-2xl py-2 lg:w-80 tracking-[2px] mx-auto text-base sm:text-lg'>
                <BsStars />Tools and Props <BsStars />
              </h1>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl w-full text-center tracking-[3px] text-[#0B2A2B] font-bold mt-5'>
               Lessons Learned on the Mat
              </h1>
              <p className='text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto mt-5 tracking-[1.5px] text-center'>
               Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. sem sed erat pos se quam dignissim mauris feugiat.
              </p>
            </div>

        {/* seconed start */}
        <section className='flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:gap-0 lg:h-190'>
          <div className="flex flex-col items-center space-y-8 mb-8 lg:mb-0 lg:space-y-0 mt-10">
            {/* first div start */}
            <div className='w-80 text-center lg:ml-28'>
              <GiStoneStack className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Healing Stones
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Cubilia curae tortor amet ridiculus egestas sagittis tempor nam
              </p>
            </div>
            {/* first div end */}
            {/* second div start */}
            <div className='w-80 text-center lg:mt-12 lg:ml-1'>
              <BsAlexa className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Sound Theraphy
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Quam turpis habitant dictumst augue urna massa faucibus gravida
              </p>
            </div>
            {/* second div end */}
            {/* third start */}
            <div className='w-80 text-center lg:mt-12 lg:ml-30'>
              <TbYoga className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Improves Postures
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Fringilla congue dui cursus laoreet enim sem porta sed inceptos euismod
              </p>
            </div>
            {/* third end */}
          </div>

          <div className="flex justify-center mb-8 lg:mb-0">
            <img src={yogamid} alt="" className='w-3/4 md:w-1/2 lg:w-160 lg:mt-46' />
          </div>

          <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:mt-10">
            <div className='w-80 text-center lg:mr-30'>
              <FaOdnoklassniki className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Traditional Yoga
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Cubilia curae tortor amet ridiculus egestas sagittis tempor nam
              </p>
            </div>
            {/* first div end */}
            {/* second div start */}
            <div className='w-80 text-center lg:mt-12 lg:ml-1'>
              <RiMentalHealthFill className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Mental Benefits
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Quam turpis habitant dictumst augue urna massa faucibus gravida
              </p>
            </div>
            {/* second div end */}
            {/* third start */}
            <div className='w-80 text-center lg:mt-12 lg:mr-30'>
              <RiMetaLine className='size-16 md:size-20 mx-auto lg:size-28 lg:ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-xl md:text-2xl text-[#0B2A2B] mt-2 lg:mt-3'>
                Yoga Requirements
              </h1>
              <p className='text-[#0b2a2bc2] mt-2 lg:mt-3 px-4 md:px-8 lg:px-0'>
                Fringilla congue dui cursus laoreet enim sem porta sed inceptos euismod
              </p>
            </div>
            {/* third end */}
          </div>
        </section>
        {/* secconed end */}
      </section>
    </>
  )
}

export default Lessons