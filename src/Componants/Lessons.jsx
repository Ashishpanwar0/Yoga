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
      <section className='bg-[#F9F3EA] h-auto'>
        <div className='pt-15'>
          <h1 className='flex border-1 w-70 justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] ml-134'><BsStars />Tools and Props <BsStars /></h1>
          <h1 className='text-5xl w-120 text-center tracking-[3px] items-center ml-110 text-[#0B2A2B] font-bold mt-5'>Lessons Learned on the Mat</h1>
          <p className='w-140 text-center ml-100 mt-5 tracking-[3px]'>Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. sem sed erat pos se quam dignissim mauris feugiat.</p>
        </div>

        {/* seconed start */}
        <section className='flex gap-0 h-190'>
          <div>
            {/* first div start */}
            <div className='w-80 text-center ml-32'>
              <GiStoneStack className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Healing Stones
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
                Cubilia curae tortor amet ridiculus egestas sagittis tempor nam
              </p>
            </div>
            {/* first div end */}
            {/* second div start */}
            <div className='w-80 text-center mt-12 ml-10'>
              <BsAlexa className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Sound Theraphy
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
                Quam turpis habitant dictumst augue urna massa faucibus gravida
              </p>
            </div>
            {/* second div end */}
            {/* third start */}
            <div className='w-80 text-center mt-12 ml-30'>
              <TbYoga className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Improves Postures
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
                Fringilla congue dui cursus laoreet enim sem porta sed inceptos euismod
              </p>
            </div>
            {/* third end */}
          </div>


          <div>
            <img src={yogamid} alt="" className='w-150 mt-38' />
          </div>

          <div>
            <div className='w-80 text-center mr-30'>
              <FaOdnoklassniki className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Traditional Yoga
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
                Cubilia curae tortor amet ridiculus egestas sagittis tempor nam
              </p>
            </div>
            {/* first div end */}
            {/* second div start */}
            <div className='w-80 text-center mt-12 ml-16'>
              <RiMentalHealthFill className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Mental Benefits
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
                Quam turpis habitant dictumst augue urna massa faucibus gravida
              </p>
            </div>
            {/* second div end */}
            {/* third start */}
            <div className='w-80 text-center mt-12 mr-30'>
              <RiMetaLine className='size-28 ml-25 text-[#00000050]' />
              <h1 className='tracking-[3px] text-2xl text-[#0B2A2B] mt-3'>
                Yoga Requirements
              </h1>
              <p className='text-[#0b2a2bc2] mt-3 '>
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