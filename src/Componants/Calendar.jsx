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
            <section className='bg-[#FBF5EC] h-290'>
                <div className='pt-20'>
                    <h1 className='flex border-1 w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] ml-134'><BsStars />Our calendar <BsStars /></h1>
                    <h1 className='text-5xl w-140 text-center tracking-[3px] items-center ml-102 text-[#0B2A2B] font-bold mt-5'>Upcoming workshops</h1>
                    <p className='w-140 text-center ml-101 mt-5 tracking-[3px]'>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
                </div>


                <section className='flex pt-15'>
                    
                     <div className='border-white-1 px-8 py-15 rounded-[80px] bg-[#F5EDE0] ml-10' >
                        {/*first  */}
                     <div className='flex gap-10 items-center border-1 px-5 py-5 group relative w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white]'>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                            style={{ backgroundImage: `url(${card1})` }}></div>
                        <div className='z-60'>
                            <h1 className='text-[50px] font-bold text-[#000000]'>
                                17
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                October
                            </p>
                        </div>
                        <div className='z-60'>
                            <h1 className='text-[25px]  font-bold text-[#000000] tracking-[3px]'>
                                Blissful Yoga
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                WithZafira
                            </p>
                        </div>
                        <BsArrowRight className='size-[50px] hover:rotate-[-40deg] ml-32 z-50'/>
                    </div>


                    <div className='flex gap-10 items-center border-1 px-5 py-5 group relative w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white] mt-8'>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                            style={{ backgroundImage: `url(${card2})` }}
                        ></div>
                        <div className='z-60'>
                            <h1 className='text-[50px] font-bold text-[#000000]'>
                                23
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                October
                            </p>
                        </div>
                        <div className='z-60'>
                            <h1 className='text-[25px]  font-bold text-[#000000] tracking-[3px]'>
                            Sunrise Vinyasa
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                WithZafira
                            </p>
                        </div>
                        <BsArrowRight className='size-[50px] hover:rotate-[-40deg] ml-20 z-50'/>
                    </div>


                    <div className='flex gap-10 items-center border-1 px-5 py-5 group relative w-150 overflow-hidden rounded-xl shadow-md transition-all duration-500 bg-[white] mt-8'>
                        <div
                            className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-cover bg-center"
                            style={{ backgroundImage: `url(${card3})` }}
                        ></div>
                        <div className='z-60'>
                            <h1 className='text-[50px] font-bold text-[#000000]'>
                                17
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                October
                            </p>
                        </div>
                        <div className='z-60'>
                            <h1 className='text-[25px]  font-bold text-[#000000] tracking-[3px]'>
                            Family Yoga Fun
                            </h1>
                            <p className='text-xl text-[#405756]'>
                                WithZafira
                            </p>
                        </div>
                        <BsArrowRight className='size-[50px] hover:rotate-[-40deg] ml-20 z-50'/>
                    </div>
                    <button className='border-1 px-10 py-2 rounded-4xl text-xl bg-[#0B2A2B] text-white mt-14 ml-45 hover:bg-[#536765]'>
                    view All Classes
                </button>
                    {/* first endt */}
                     </div>

                     <div>
                            <img src={celender1} alt="" className='h-auto mt-10'/>
                     </div>
                </section>
            </section>
        </>
    )
}

export default Calendar