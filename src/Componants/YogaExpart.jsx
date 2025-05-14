import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

function YogaExpart() {
  return (
    <>
      <section className='bg-[#FBF5EC] lg:h-125 h-[10%] pt-15 w-full'>
        <div className='lg:flex border-white-1 lg:grid-cols-3 bg-[#0B2A2B] py-12 lg:w-[90%] lg:gap-8 rounded-2xl lg:ml-16 lg:h-98 h-230'>
          <div className='w-[35%] lg:ml-10 ml-8 mt-3'>
            <h1 className='lg:text-6xl text-5xl text-white font-bold lg:w-100 tracking-[1px] w-100'>
              Speak With A Yoga Expert
            </h1>
            <p className='text-white mt-5 w-90'>
              Natoque felis efficitur non adipiscing et nisl vehicula ex praesent vitae taciti vitae est sapien mattis litora varius
            </p>
            <button className='border-white-1 lg:px-8 px-2 lg:w-40 w-[100%] py-2 lg:rounded-4xl rounded-xl bg-white mt-5'>
              Book Classes
            </button>
          </div>

          <div className='lg:w-[30%] max-auto border-white-1 bg-white rounded-2xl px-5 lg:h-70  w-[90%] ml-5 mt-4'>
            <h1 className='text-5xl font-bold text-[#0B2A2B] mb-5 mt-8 ml-1'>
              Talk to us
            </h1>
            <p className='flex mb-5 items-center gap-2 text-[#0b2a2bbe]'>
              <CiLocationOn className='size-10' />
              No: 58 A, East Madison Baltimore, MD, USA 4508
            </p>
            <p className='flex mb-5 items-center gap-2 text-[#0b2a2bbe]'>
              <MdAddCall className='size-8' />
              000 - 123 - 456789
            </p>
            <p className='flex items-center gap-2 text-[#0b2a2bbe]'>
              <IoMailOutline className='size-8' />
              support@example.com
            </p>
          </div>

          <div className="lg:w-[30%]">
            <div className="relative pb-[110%] h-0 mt-4">
              <iframe
                className=" top-0 w-[90%] lg:ml-1 ml-5  lg:w-76 h-70 border-0 lg:h-70 rounded-2xl" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=rishikesh&output=embed"
                title="Rishikesh Map"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default YogaExpart