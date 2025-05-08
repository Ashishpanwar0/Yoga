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
            <section className='bg-[#F5EDE0] h-235'>
                <div className='pt-20'>
                    <h1 className='flex border-1 w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] ml-134'><BsStars />recommendedCourses <BsStars /></h1>
                    <h1 className='text-5xl w-120 text-center tracking-[3px] items-center ml-110 text-[#0B2A2B] font-bold mt-5'>Course Offering</h1>
                    <p className='w-140 text-center ml-100 mt-5 tracking-[3px]'>Natoque id quisque, pellentesque nibh conubia suspendisse egestas orci lobortis in himenaeos accumsan aliquet</p>
                </div>
                {/* cards */}
                <div className='flex gap-10 w-full pt-10'>
                    <div className='border-1 px-3 py-3 rounded-2xl ml-10 bg-white shadow-md h-116 overflow-hidden'>
                        <img src={card1} alt="" className=' w-65  h-60 object-cover  rounded-xl hover:scale-105 hover:h-90'/>
                        <h2 className='mt-5 text-xl text-[#233C44] font-bold tracking-[1px]'>
                            Chair Yoga Workshop
                        </h2>
                        <h1 className='text-[#233C44] mt-2 text-2xl font-bold tracking-[3px]'>
                        Blissful Yoga
                        </h1>
                        <div className='flex gap-x-4 mt-5'>
                            <img src={card1} alt="" className='w-10 h-10 object-cover rounded-full'/>
                            <p className='text-xl mt-2'>
                            Zafira
                            </p>
                            <p className='flex mt-3 gap-x-2 ml-8 text-1xl'>
                             <MdOutlineWatchLater className='mt-1'/>1.5 hours
                            </p>
                        </div>
                    </div>

                    <div className='border-1 px-3 py-3 rounded-2xl h-116 bg-[white] overflow-hidden'>
                        <img src={card2} alt="" className=' w-65  h-60 object-cover  rounded-xl hover:scale-105 hover:h-90 hover:object-cover'/>
                        <h2 className='mt-5 text-xl text-[#233C44] font-bold tracking-[1px]'>
                            Chair Yoga Workshop
                        </h2>
                        <h1 className='text-[#233C44] mt-2 text-2xl font-bold tracking-[3px]'>
                        Blissful Yoga
                        </h1>
                        <div className='flex gap-x-4 mt-5'>
                            <img src={card1} alt="" className='w-10 h-10 object-cover rounded-full'/>
                            <p className='text-xl mt-2'>
                            Zafira
                            </p>
                            <p className='flex mt-3 gap-x-2 ml-8 text-1xl'>
                             <MdOutlineWatchLater className='mt-1'/>1.5 hours
                            </p>
                        </div>
                    </div>

                    <div className='border-1 px-3 py-3 rounded-2xl h-116 bg-[white] overflow-hidden'>
                        <img src={card3} alt="" className=' w-65  h-60 object-cover  rounded-xl hover:scale-105 hover:h-90'/>
                        <h2 className='mt-5 text-xl text-[#233C44] font-bold tracking-[1px]'>
                            Chair Yoga Workshop
                        </h2>
                        <h1 className='text-[#233C44] mt-2 text-2xl font-bold tracking-[3px]'>
                        Blissful Yoga
                        </h1>
                        <div className='flex gap-x-4 mt-5'>
                            <img src={card2} alt="" className='w-10 h-10 object-cover rounded-full'/>
                            <p className='text-xl mt-2'>
                            Zafira
                            </p>
                            <p className='flex mt-3 gap-x-2 ml-8 text-1xl'>
                             <MdOutlineWatchLater className='mt-1'/>1.5 hours
                            </p>
                        </div>
                    </div>

                    <div className='border-1 px-3 py-3 rounded-2xl h-116 bg-[white] overflow-hidden'>
                        <img src={card4} alt="" className=' w-65  h-60 object-cover  rounded-xl hover:scale-105 hover:h-90'/>
                        <h2 className='mt-5 text-xl text-[#233C44] font-bold tracking-[1px]'>
                            Chair Yoga Workshop
                        </h2>
                        <h1 className='text-[#233C44] mt-2 text-2xl font-bold tracking-[3px]'>
                        Blissful Yoga
                        </h1>
                        <div className='flex gap-x-4 mt-5'>
                            <img src={card1} alt="" className='w-10 h-10 object-cover rounded-full'/>
                            <p className='text-xl mt-2'>
                            Zafira
                            </p>
                            <p className='flex mt-3 gap-x-2 ml-8 text-1xl'>
                             <MdOutlineWatchLater className='mt-1'/>1.5 hours
                            </p>
                        </div>
                    </div>
                </div>
                <button className='border-1 px-10 py-2 rounded-4xl text-xl bg-[#0B2A2B] text-white mt-14 ml-142'>
                    view All Classes
                </button>
            </section>
        </>
    )
}

export default Cards1