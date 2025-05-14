import React from 'react'
import { BsStars } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import celender1 from '../assets/celender1.png'


function Calendar() {
    return (
        <>
            <section className='bg-[#FBF5EC] min-h-screen px-4 md:px-6 lg:px-0'>
                <div className='pt-10 md:pt-16 lg:pt-20 flex flex-col items-center'>
                    <h1 className='flex border-1 w-54  md:max-w-sm lg:w-55 justify-center gap-4 items-center rounded-2xl py-2 leading-tight tracking-[2px] mx-auto'><BsStars />Our calendar <BsStars /></h1>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl w-full lg:w-170 tracking-[3px] text-[#0B2A2B] font-bold mt-5 text-center'>Upcoming workshops</h1>
                    <p className='w-full   lg:w-160 text-center mt-5 tracking-[1px] md:tracking-[2px] lg:tracking-[3px]'>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
                </div>

                <section className='flex flex-col lg:flex-row pt-8 md:pt-10 lg:pt-15 items-center justify-center gap-8 lg:gap-0'>
                    <div className='border-white-1 px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-15 rounded-[40px] md:rounded-[60px] lg:rounded-[80px] bg-[#F5EDE0] w-full lg:ml-10 lg:w-260'>
                        {/*first  */}
                        <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-center border-1 px-3 md:px-4 lg:px-5 py-4 lg:py-5 group relative w-full lg:w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white]'>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card1})` }}></div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-4xl md:text-[45px] lg:text-[50px] font-bold text-[#000000]'>
                                    17
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    October
                                </p>
                            </div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-xl md:text-2xl lg:text-[25px] font-bold text-[#000000] tracking-[2px] lg:tracking-[3px]'>
                                    Blissful Yoga
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    WithZafira
                                </p>
                            </div>
                            <BsArrowRight className='size-[30px] md:size-[40px] lg:size-[50px] hover:rotate-[-40deg] mt-2 md:mt-0 md:ml-auto lg:ml-32 z-10' />
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-center border-1 px-3 md:px-4 lg:px-5 py-4 lg:py-5 group relative w-full lg:w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white] mt-6 lg:mt-8'>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card2})` }}
                            ></div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-4xl md:text-[45px] lg:text-[50px] font-bold text-[#000000]'>
                                    23
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    October
                                </p>
                            </div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-xl md:text-2xl lg:text-[25px] font-bold text-[#000000] tracking-[2px] lg:tracking-[3px]'>
                                    Sunrise Vinyasa
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    WithZafira
                                </p>
                            </div>
                            <BsArrowRight className='size-[30px] md:size-[40px] lg:size-[50px] hover:rotate-[-40deg] mt-2 md:mt-0 md:ml-auto lg:ml-20 z-10' />
                        </div>

                        <div className='flex flex-col md:flex-row gap-4 md:gap-6 lg:gap-10 items-center border-1 px-3 md:px-4 lg:px-5 py-4 lg:py-5 group relative w-full lg:w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white] mt-6 lg:mt-8'>
                            <div
                                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card3})` }}
                            ></div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-4xl md:text-[45px] lg:text-[50px] font-bold text-[#000000]'>
                                    17
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    October
                                </p>
                            </div>
                            <div className='z-10 text-center md:text-left'>
                                <h1 className='text-xl md:text-2xl lg:text-[25px] font-bold text-[#000000] tracking-[2px] lg:tracking-[3px]'>
                                    Family Yoga Fun
                                </h1>
                                <p className='text-lg md:text-xl text-[#405756]'>
                                    WithZafira
                                </p>
                            </div>
                            <BsArrowRight className='size-[30px] md:size-[40px] lg:size-[50px] hover:rotate-[-40deg] mt-2 md:mt-0 md:ml-auto lg:ml-20 z-10' />
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <button className='border-1 px-6 md:px-8 lg:px-10 py-2 rounded-full md:rounded-4xl text-lg md:text-xl bg-[#0B2A2B] text-white mt-10 lg:mt-14 lg:ml-45 hover:bg-[#536765]'>
                                view All Classes
                            </button>
                        </div>
                        {/* first end */}
                    </div>

                    <div className='mt-8 lg:mt-10 hidden md:block'>
                        <img src={celender1} alt="" className='h-auto max-w-full md:max-h-[500px] lg:max-h-none' />
                    </div>
                </section>
            </section>
        </>
    )
}

export default Calendar