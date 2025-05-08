import React, { useState } from 'react'
import { BsStars } from "react-icons/bs";
import testimonial1 from '../assets/test-1.jpg'
import testimonial2 from '../assets/test-2.jpg'
import testimonial3 from '../assets/testimonal-3image.jpg'
import Newsletter from '../assets/Newsletter-bg-image-01.jpg'


function Testimonial2() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <>
            <section className=' bg-[#F4ECDF] h-310 pt-1'>

                {/* contant */}
                <div>
                    <div className='pt-20'>
                        <h1 className='flex border-1 w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] ml-134'><BsStars />Engage, Learn, Inspire                        <BsStars /></h1>
                        <h1 className='text-5xl w-120 text-center tracking-[3px] items-center ml-110 text-[#0B2A2B] font-bold mt-5'>Dive into our blog</h1>
                        <p className='w-140 text-center ml-100 mt-5 tracking-[3px]'>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
                    </div>
                </div>
                {/* contant */}
                <div className='flex gap-8 mt-10'>
                    <div className='relative group h-135 w-[30%] ml-8 rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
                        style={{ backgroundImage: `url(${testimonial1})` }}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}>

                        <h1 className={`border-1 bg-[#1B2E35] text-white px-3 w-38 py-1 rounded-sm ml-6 mt-4 transition-opacity duration-300 ${isHovered1 ? 'opacity-0' : 'opacity-100'}`}>
                            Novemer 11 2024
                        </h1>

                        <div className={`border-white-3 z-50 w-90 h-43 tracking-[3px] bg-[white] rounded-xl ml-5 mt-70 transition-opacity duration-300 ${isHovered1 ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className='text-2xl w-80 font-bold text-[#1B2E35] text-center ml-4 mt-6 mb- pt-5 mb-5'>
                                Yoga For Better Sleep And Health
                            </h1>
                            <p className='text-sm w-80 text-[#1B2E35] text-center ml-4'>
                                Nullam Diam magna, author ut risus eget, scelerisque alquem
                            </p>
                        </div>
                        <div className={`absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center transition-all duration-300 ${isHovered1 ? 'opacity-80' : 'opacity-0'}`}>
                            <span className="bg-[#1B2E35] text-white px-6 py-2 rounded-full">
                                Read More
                            </span>
                        </div>
                    </div>

                    {/* second */}
                    <div className='relative group h-135 w-[30%] rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
                        style={{ backgroundImage: `url(${testimonial2})` }}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}>

                        <h1 className={`border-1 bg-[#1B2E35] text-white px-3 w-38 py-1 rounded-sm ml-6 mt-4 transition-opacity duration-300 ${isHovered2 ? 'opacity-0' : 'opacity-100'}`}>
                            Novemer 11 2024
                        </h1>

                        <div className={`border-white-3 z-50 w-90 h-43 tracking-[3px] bg-[white] rounded-xl ml-5 mt-70 transition-opacity duration-300 ${isHovered2 ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className='text-2xl w-80 font-bold text-[#1B2E35] text-center ml-4 mt-6 pt-5 mb-5'>
                                Yoga For Better Sleep And Health
                            </h1>
                            <p className='text-sm w-80 text-[#1B2E35] text-center ml-4'>
                                Nullam Diam magna, author ut risus eget, scelerisque alquem
                            </p>
                        </div>
                        <div className={`absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center transition-all duration-300 ${isHovered2 ? 'opacity-80' : 'opacity-0'}`}>
                            <span className="bg-[#1B2E35] text-white px-6 py-2 rounded-full">
                                Read More
                            </span>
                        </div>
                    </div>
                    {/* second */}

                    {/* third */}
                    <div className='relative group h-135 w-[30%] rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
                        style={{ backgroundImage: `url(${testimonial3})` }}
                        onMouseEnter={() => setIsHovered3(true)}
                        onMouseLeave={() => setIsHovered3(false)}>

                        <h1 className={`border-1 bg-[#1B2E35] text-white px-3 w-38 py-1 rounded-sm ml-6 mt-4 transition-opacity duration-300 ${isHovered3 ? 'opacity-0' : 'opacity-100'}`}>
                            Novemer 11 2024
                        </h1>

                        <div className={`border-white-3 z-50 w-90 h-43 tracking-[3px] bg-[white] rounded-xl ml-5 mt-70 transition-opacity duration-300 ${isHovered3 ? 'opacity-0' : 'opacity-100'}`}>
                            <h1 className='text-2xl w-80 font-bold text-[#1B2E35] text-center ml-4 mt-6 pt-5 mb-5'>
                                Yoga For Better Sleep And Health
                            </h1>
                            <p className='text-sm w-80 text-[#1B2E35] text-center ml-4'>
                                Nullam Diam magna, author ut risus eget, scelerisque alquem
                            </p>
                        </div>
                        <div className={`absolute inset-0 bg-white bg-opacity-30 flex items-center justify-center transition-all duration-300 ${isHovered3 ? 'opacity-80' : 'opacity-0'}`}>
                            <span className="bg-[#1B2E35] text-white px-6 py-2 rounded-full">
                                Read More
                            </span>
                        </div>
                    </div>
                </div>
                {/* thrid */}

                {/* Our newsletter */}
            <section style={{backgroundImage: `url(${Newsletter})`}} className='relative bg-cover bg-center h-60 mt-20 w-[90%] ml-16 rounded-2xl flex overflow-hidden"'>
            <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
                <div className='mt-12 ml-10 z-10'>
                <h1 className='flex items-center gap-2 border-1 w-60 rounded-xl py-1 mb-5 text-[#00000093] font-bold'><BsStars className='ml-2'/>Engage, Learn, Inspire<BsStars /></h1>
                <h1 className='text-4xl w-150 tracking-[3px] font-bold'>
                Signup And Elevate Your Insights, Tips & Community.
                </h1>
                </div>

                <div className='z-1'>
                   <input type="text" placeholder='Enter Your Mail' className='border-1 border-[#000000a9] px-2 py-3 w-110 rounded-2xl ml-20 mt-18' />
                    <button className='border-white-1 bg-[#1C2F36] text-white px-14 rounded-2xl py-3  ml-[-162px] absolute mt-18'>
                        Submit
                    </button>
                    <h1 className='mt-5 text-1xl ml-22 w-100 border-[#00000050]'>
                    Yes, I would like to recive emails with exclusive specials and offers.
                    </h1>
                </div>
            </section>
                {/* Our newsletter */}

            </section>
        </>
    )
}

export default Testimonial2