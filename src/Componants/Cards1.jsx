import React from 'react'
import { BsStars } from "react-icons/bs";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import { MdOutlineWatchLater } from "react-icons/md";



function Cards1() {
    return (
        <>
            <section className='bg-[#F5EDE0] h-auto md:h-auto lg:h-235 px-4 md:px-6 lg:px-0'>
    <div className='pt-8 md:pt-12 lg:pt-20 flex flex-col items-center lg:items-start'>
        <h1 className='flex border-1 w-auto px-4 justify-center gap-2 items-center rounded-2xl py-2 leading-tight tracking-[2px] mx-auto lg:ml-134'>
            <BsStars />recommendedCourses <BsStars />
        </h1>
        <h1 className='text-3xl md:text-4xl lg:text-5xl w-full md:w-auto lg:w-120 text-center tracking-[2px] md:tracking-[3px] mx-auto lg:ml-110 text-[#0B2A2B] font-bold mt-3 md:mt-4 lg:mt-5'>
            Course Offering
        </h1>
        <p className='w-full md:w-3/4 lg:w-140 text-center mx-auto lg:ml-100 mt-3 md:mt-4 lg:mt-5 tracking-[1px] md:tracking-[2px] lg:tracking-[3px]'>
            Natoque id quisque, pellentesque nibh conubia suspendisse egestas orci lobortis in himenaeos accumsan aliquet
        </p>
    </div>
    
    {/* cards */}
    <div className='grid grid-cols-2 md:grid md:grid-cols-2 lg:flex lg:flex-row gap-3 sm:gap-4 md:gap-8 lg:gap-10 w-full pt-6 md:pt-8 lg:pt-10 px-2 sm:px-4 md:px-6 lg:px-10 pb-8 md:pb-10 lg:pb-0'>
        <div className='border-1 px-2 sm:px-3 py-2 sm:py-3 rounded-xl sm:rounded-2xl mx-auto md:mx-0 lg:ml-0 w-full bg-white shadow-md h-auto lg:h-116 overflow-hidden'>
            <img src={card4} alt="" className='w-full lg:w-65 h-32 sm:h-40 md:h-52 lg:h-60 object-cover rounded-lg sm:rounded-xl hover:scale-105 hover:h-40 sm:hover:h-52 md:hover:h-72 lg:hover:h-90 transition-all duration-300'/>
            <h2 className='mt-3 md:mt-4 lg:mt-5 w-50 lg:text-lg md:text-xl text-[#233C44] font-bold tracking-[1px]'>
                Chair Yoga Workshop
            </h2>
            <h1 className='text-[#233C44] mt-1 md:mt-2 text-xl md:text-2xl font-bold tracking-[2px] lg:tracking-[3px]'>
                Blissful Yoga
            </h1>
            <div className='flex gap-x-1 md:gap-x-4 mt-3 md:mt-4 lg:mt-5 pb-2'>
                <img src={card1} alt="" className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full'/>
                <p className='text-lg md:text-xl mt-1 md:mt-2'>
                    Zafira
                </p>
                <p className='flex mt-2 md:mt-3 gap-x-1 md:gap-x-2 ml-4 md:ml-8 text-sm md:text-base lg:text-1xl'>
                    <MdOutlineWatchLater className='mt-1'/>1.5 hours
                </p>
            </div>
        </div>

        <div className='border-1 px-2 sm:px-3 py-2 sm:py-3 rounded-xl sm:rounded-2xl mx-auto md:mx-0 w-full h-auto lg:h-116 bg-white shadow-md overflow-hidden'>
            <img src={card2} alt="" className='w-full lg:w-65 h-32 sm:h-40 md:h-52 lg:h-60 object-cover rounded-lg sm:rounded-xl hover:scale-105 hover:h-40 sm:hover:h-52 md:hover:h-72 lg:hover:h-90 transition-all duration-300'/>
            <h2 className='mt-3 md:mt-4 lg:mt-5  w-50 lg:text-lg md:text-xl text-[#233C44] font-bold tracking-[1px]'>
                Chair Yoga Workshop
            </h2>
            <h1 className='text-[#233C44] mt-1 md:mt-2 text-xl md:text-2xl font-bold tracking-[2px] lg:tracking-[3px]'>
                Blissful Yoga
            </h1>
            <div className='flex gap-x-1 md:gap-x-4 mt-3 md:mt-4 lg:mt-5 pb-2'>
                <img src={card1} alt="" className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full'/>
                <p className='text-lg md:text-xl mt-1 md:mt-2'>
                    Zafira
                </p>
                <p className='flex mt-2 md:mt-3 gap-x-1 md:gap-x-2 ml-4 md:ml-8 text-sm md:text-base lg:text-1xl'>
                    <MdOutlineWatchLater className='mt-1'/>1.5 hours
                </p>
            </div>
        </div>

        <div className='border-1 px-3 py-3 rounded-2xl mx-auto md:mx-0 w-full max-w-xs h-auto lg:h-116 bg-white shadow-md overflow-hidden'>
            <img src={card3} alt="" className='w-full lg:w-65 h-32 sm:h-40 md:h-52 lg:h-60 object-cover rounded-lg sm:rounded-xl hover:scale-105 hover:h-40 sm:hover:h-52 md:hover:h-72 lg:hover:h-90 transition-all duration-300'/>
            <h2 className='mt-3 md:mt-4 lg:mt-5 w-50 lg:text-lg md:text-xl text-[#233C44] font-bold tracking-[1px]'>
                Chair Yoga Workshop
            </h2>
            <h1 className='text-[#233C44] mt-1 md:mt-2 text-xl md:text-2xl font-bold tracking-[2px] lg:tracking-[3px]'>
                Blissful Yoga
            </h1>
            <div className='flex gap-x-1 md:gap-x-4 mt-3 md:mt-4 lg:mt-5 pb-2'>
                <img src={card1} alt="" className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full'/>
                <p className='text-lg md:text-xl mt-1 md:mt-2'>
                    Zafira
                </p>
                <p className='flex mt-2 md:mt-3 gap-x-0 md:gap-x-2 ml-4 md:ml-8 text-sm md:text-base lg:text-1xl'>
                    <MdOutlineWatchLater className='mt-1'/>1.5 hours
                </p>
            </div>
        </div>

        <div className='border-1 px-3 py-3 rounded-2xl mx-auto md:mx-0 w-full max-w-xs h-auto lg:h-116 bg-white shadow-md overflow-hidden'>
            <img src={card4} alt="" className='w-full lg:w-65 h-32 sm:h-40 md:h-52 lg:h-60 object-cover rounded-lg sm:rounded-xl hover:scale-105 hover:h-40 sm:hover:h-52 md:hover:h-72 lg:hover:h-90 transition-all duration-300'/>
            <h2 className='mt-3 md:mt-4 lg:mt-5 w-50 lg:text-lg md:text-xl text-[#233C44] font-bold tracking-[1px]'>
                Chair Yoga Workshop
            </h2>
            <h1 className='text-[#233C44] mt-1 md:mt-2 text-xl md:text-2xl font-bold tracking-[2px] lg:tracking-[3px]'>
                Blissful Yoga
            </h1>
            <div className='flex gap-x-1 md:gap-x-4 mt-3 md:mt-4 lg:mt-5 pb-2'>
                <img src={card1} alt="" className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full'/>
                <p className='text-lg md:text-xl mt-1 md:mt-2'>
                    Zafira
                </p>
                <p className='flex mt-2 md:mt-3 gap-x-0 md:gap-x-2 ml-4 md:ml-8 text-sm md:text-base lg:text-1xl'>
                    <MdOutlineWatchLater className='mt-1'/>1.5 hours
                </p>
            </div>
        </div>
    </div>
    
    <div className="flex justify-center lg:justify-start pb-10 md:pb-12 lg:pb-0">
        <button className='border-1 px-8 md:px-10 py-2 rounded-full md:rounded-4xl text-lg md:text-xl bg-[#0B2A2B] text-white mt-4 md:mt-8 lg:mt-14 mx-auto lg:mx-0 lg:ml-142'>
            view All Classes
        </button>
    </div>
</section>
        </>
    )
}

export default Cards1