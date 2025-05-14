import React, { useState } from 'react'
import { BsStars } from "react-icons/bs";
import { FaSearchPlus } from "react-icons/fa";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'
import gallary1 from '../assets/gallary1.jpg'
import gallary2 from '../assets/gallary2.jpg'
import gallary3 from '../assets/gallary3.jpg'
import gallary4 from '../assets/gallary4.jpg'

function Gallary() {
    return (
        <>
            <section className='bg-[#FBF5EC] lg:h-495 h-[2100px]'>
                <div className='pt-15'>
                    <h1 className='flex border-1 lg:w-80 w-[80%] justify-center gap-3 items-center rounded-2xl ml-12 py-2 leading-tight tracking-[3px] lg:ml-128'><BsStars />A Journey of Wellness
                        <BsStars /></h1>
                    <h1 className='text-5xl lg:w-180 text-center tracking-[3px] items-center lg:ml-78 text-[#0B2A2B] font-bold mt-5'>Explore Our Yoga Journey</h1>
                    <p className='lg:w-190 w-[96%] ml-2 text-center lg:ml-70 mt-5 tracking-[3px]'>Per aenean gravida finibus risus mattis curae ante. Congue proin ipsum metus primis ante aliquam taciti arcu auctor curabitur nullam.</p>
                </div>

                {/* image start */}
                <section className='pt-20'>
                    <div className='lg:flex lg:ml-10'>
                        <div className="relative group lg:h-100 lg:w-[40%] lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] ml-2"
                            style={{ backgroundImage: `url(${card3})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-60 lg:mt-35 mt-20 ml-40' /></div>
                        </div>

                        <div className="relative group lg:h-110 lg:w-[50%] lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] ml-2 mt-5 lg:mt-0"
                            style={{ backgroundImage: `url(${card2})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-70 lg:mt-58 mt-20 ml-40' /></div>
                        </div>
                    </div>
                {/* ............ */}
                <div className='lg:flex lg:ml-10 mt-8'>
                        <div className="relative group lg:h-110 lg:w-[50%] lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] ml-2"
                            style={{ backgroundImage: `url(${gallary2})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-80 lg:mt-50 mt-20 ml-40' /></div>
                        </div>

                        <div className="relative group lg:h-80 lg:w-[40%] lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] mt-8 lg:mt-0 ml-2"
                            style={{ backgroundImage: `url(${gallary1})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-65 lg:mt-40 mt-20 ml-40' /></div>
                        </div>
                    </div>
                    {/* ............. */}

                    <div className='lg:flex lg:ml-10 mt-8'>
                        <div className="relative group lg:h-80 lg:w-[45%]  lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] ml-2"
                            style={{ backgroundImage: `url(${gallary4})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-70 lg:mt-32 mt-20 ml-40' /></div>
                        </div>

                        <div className="relative group lg:h-80 lg:w-[45%] lg:ml-8 rounded-xl overflow-hidden bg-cover bg-center w-[95%] h-[200px] mt-8 mg:mt-0 ml-2"
                            style={{ backgroundImage: `url(${gallary3})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-65 lg:mt-32 mt-20 ml-40' /></div>
                        </div>
                    </div>
                    {/* ................ */}

                    <div className="relative group lg:h-80 lg:w-[90%] lg:ml-17 rounded-xl overflow-hidden bg-cover bg-center mt-8 h-[200px] w-[98%] ml-1"
                            style={{ backgroundImage: `url(${card1})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 lg:ml-150 lg:mt-40 mt-20 ml-40' /></div>
                        </div>
                </section>
                {/* image end */}

            </section>
        </>
    )
}

export default Gallary