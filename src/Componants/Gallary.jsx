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
            <section className='bg-[#FBF5EC] h-495'>
                <div className='pt-15'>
                    <h1 className='flex border-1 w-80 justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] ml-128'><BsStars />A Journey of Wellness
                        <BsStars /></h1>
                    <h1 className='text-5xl w-180 text-center tracking-[3px] items-center ml-78 text-[#0B2A2B] font-bold mt-5'>Explore Our Yoga Journey</h1>
                    <p className='w-190 text-center ml-70 mt-5 tracking-[3px]'>Per aenean gravida finibus risus mattis curae ante. Congue proin ipsum metus primis ante aliquam taciti arcu auctor curabitur nullam.</p>
                </div>

                {/* image start */}
                <section className='pt-20'>
                    <div className='flex ml-10'>
                        <div className="relative group h-80 w-[40%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${card3})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-60 mt-35' /></div>
                        </div>

                        <div className="relative group h-110 w-[50%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${card2})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-70 mt-58' /></div>
                        </div>
                    </div>
                {/* ............ */}
                <div className='flex ml-10 mt-8'>
                        <div className="relative group h-110 w-[50%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${gallary2})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-80 mt-50' /></div>
                        </div>

                        <div className="relative group h-80 w-[40%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${gallary1})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-65 mt-40' /></div>
                        </div>
                    </div>
                    {/* ............. */}

                    <div className='flex ml-10 mt-8'>
                        <div className="relative group h-80 w-[45%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${gallary4})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-70 mt-32' /></div>
                        </div>

                        <div className="relative group h-80 w-[45%] ml-8 rounded-xl overflow-hidden bg-cover bg-center"
                            style={{ backgroundImage: `url(${gallary3})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-65 mt-32' /></div>
                        </div>
                    </div>
                    {/* ................ */}

                    <div className="relative group h-80 w-[90%] ml-17 rounded-xl overflow-hidden bg-cover bg-center mt-8"
                            style={{ backgroundImage: `url(${card1})` }}>
                            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 transition-opacity duration-300"><FaSearchPlus className='size-10 ml-150 mt-40' /></div>
                        </div>
                </section>
                {/* image end */}

            </section>
        </>
    )
}

export default Gallary