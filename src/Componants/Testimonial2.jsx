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
            <section className=' bg-[#F4ECDF] lg:h-310  h-570 pt-1'>

                {/* contant */}
                <div>
                     <div className='pt-10 sm:pt-16'>
                          <h1 className='flex border-1 w-70 justify-center gap-5 items-center rounded-2xl py-2 lg:w-80 tracking-[2px] mx-auto text-base sm:text-lg'>
                            <BsStars />Engage, Learn, Inspire <BsStars />
                          </h1>
                          <h1 className='text-3xl sm:text-4xl lg:text-5xl w-full text-center tracking-[3px] text-[#0B2A2B] font-bold mt-5'>
                            Dive into our blog 
                          </h1>
                          <p className='text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto mt-5 tracking-[1.5px] text-center'>
                           Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.
                          </p>
                        </div>
                </div>
                {/* contant */}
                <div className='lg:flex gap-8 mt-10'>
                    <div className='relative group h-135 lg:w-[30%] lg:ml-8 w-110 ml-6 rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
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
                    <div className='relative group h-135 lg:w-[30%] lg:ml-8 w-110 ml-6 mt-5 lg:mt-0 rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
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
                    <div className='relative group h-135 lg:w-[30%] lg:ml-8 w-110 ml-6 mt-5 lg:mt-0 rounded-xl overflow-hidden bg-cover bg-center hover:border-1 hover:bg-white'
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
            <section style={{backgroundImage: `url(${Newsletter})`}} className='relative bg-cover bg-center h-60 mt-20 lg:w-[90%] lg:ml-16 rounded-2xl flex overflow-hidden w-full"'>
            <div className="absolute inset-0 bg-white opacity-60 z-0"></div>
                <div className='mt-12 lg:ml-10 ml-5 z-10'>
                <h1 className='flex items-center gap-2 border-1 lg:w-60 w-52 rounded-xl py-1 mb-5 text-[#00000093] font-bold text-sm'><BsStars className='ml-2'/>Engage, Learn, Inspire<BsStars /></h1>
                <h1 className='lg:text-4xl text-xl w-50 lg:w-150 tracking-[3px] text-[#000000b2] font-bold'>
                Signup And Elevate Your Insights, Tips & Community.
                </h1>
                </div>

                <div className='z-1'>
                   <input type="text" placeholder='Enter Your Mail' className='border-1 border-[#000000a9] px-2 py-3 lg:w-110 rounded-2xl lg:ml-20 lg:mt-18 ml-5 mt-15' />
                    <button className='border-white-1 bg-[#1C2F36] text-white lg:px-14 px-7 rounded-2xl lg:py-3 py-[12.3px] lg:ml-[-162px] absolute lg:mt-18 mt-[60.9px] ml-[-105px]'>
                        Submit
                    </button>
                    <h1 className='lg:mt-5 mt-10 text-1xl lg:ml-22 lg:w-100 border-[#00000050] '>
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