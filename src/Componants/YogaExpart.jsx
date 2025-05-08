import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdAddCall } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

function YogaExpart() {
  return (
    <>
    <section className='bg-[#FBF5EC] h-134'>
    <div className='flex border-white-1 grid-cols-3 bg-[#0B2A2B] py-12 w-[90%] gap-8 rounded-2xl ml-18 h-110'>
    <div className='w-[35%] ml-10 mt-8'>
                <h1 className='text-6xl text-white font-bold w-100 tracking-[1px]'>
                Speak With A Yoga Expert
                </h1>
                <p className='text-white mt-5'>
                Natoque felis efficitur non adipiscing et nisl vehicula ex praesent vitae taciti vitae est sapien mattis litora varius
                </p>
                <button className='border-white-1 px-8 py-2 rounded-4xl bg-white mt-5'>
                    Book Classes
                </button>
        </div>

        <div className='w-[30%] border-white-1 bg-white rounded-2xl px-5 h-70 mt-10'>
                <h1 className='text-5xl font-bold text-[#0B2A2B] mb-5 mt-8 ml-1'>
                Talk to us
                </h1>
                <p className='flex mb-5 items-center gap-2 text-[#0b2a2bbe]'>
                <CiLocationOn className='size-10'/>
                No: 58 A, East Madison Baltimore, MD, USA 4508
                </p>
                <p className='flex mb-5 items-center gap-2 text-[#0b2a2bbe]'>
                <MdAddCall className='size-8'/>
                000 - 123 - 456789
                </p>
                <p className='flex items-center gap-2 text-[#0b2a2bbe]'>
                <IoMailOutline className='size-8'/>
                support@example.com
                </p>
        </div>

        <div className="w-[30%]">
      <div className="relative pb-[110%] h-0 mt-10">
        <iframe
          className=" top-0 border-0 h-70 rounded-2xl" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=rishikesh&output=embed"
          title="Rishikesh Map"></iframe>
      </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default YogaExpart