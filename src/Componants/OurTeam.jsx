import React, { useState, useEffect } from 'react'
import { BsStars } from "react-icons/bs";
import team7main from '../assets/team7main.jpg';
import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';
import team4 from '../assets/team4.jpg';
import team5 from '../assets/team5.jpg';
import team6 from '../assets/team6.jpg';


const images = [team3, team1, team2, team4, team5, team6];

function OurTeam() {

    const [CurrentIndex, setCourrentIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCourrentIndex(prev => (prev + 1) % images.length);
        }, 1800);
        return () => clearInterval(interval);
    }, []);
    return (
        <>
            <section className='bg-[#F4ECDF] lg:h-320 h-500'>
                <div className='pt-15'>
                    <h1 className='flex border-1 ml-15 lg:w-70 w-[70%]  justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] lg:ml-140'><BsStars />Tools and Props <BsStars /></h1>
                    <h1 className='text-5xl w-[95%] lg:w-150 text-center tracking-[3px] items-center ml-2 lg:ml-102 text-[#0B2A2B] font-bold mt-5'>A studio is only as good as its people.</h1>
                    <p className='lg:w-170 w-[95%] ml-2 text-center lg:ml-88 mt-5 tracking-[3px]'>Per aenean gravida finibus risus mattis curae ante. Congue proin ipsum metus primis ante aliquam taciti arcu auctor curabitur nullam.</p>
                </div>


                <div className='lg:flex lg:mt-20 mt-8'>
                    <div className='relative overflow-hidden'>
                        <img src={images[CurrentIndex]} alt=" Slideshow" className='lg:w-150 lg:h-200 object-cover bg-cover bg-center rounded-xl transition-all duration-900 ease-in-out lg:ml-16  opacity-120 relative w-[95%] h-[550px] ml-3' />
                    </div>
                    <div className="absolute  w-[95%] h-[550px] ml-3 lg:w-150 lg:ml-16 lg:h-200 rounded-xl bg-[#61675a71] z-10 transition-all duration-700 ease-in-out lg:mt-0 mt-10 hidden lg:block"></div>
                    <div>
                        <div className='flex lg:w-50 w-[48%] lg:gap-30 mt-10 lg:ml-20'>
                            <img src={team1} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105 lg:ml-0 ml-2' />
                            <img src={team2} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                        <div className='flex lg:w-50 w-[48%] lg:mt-15 mt-8 lg:ml-58'>
                            <img src={team3} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105 ml-2 lg:ml-0' />
                             <img src={team5} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105 lg:hidden'/>
                        </div>
                        <div className='flex lg:w-50 lg:gap-30 mt-15 lg:ml-20 w-[48%]'>
                            <img src={team4} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105 ml-2 lg:ml-0' />
                            <img src={team5} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                        <div className='flex lg:w-50 w-[48%] lg:gap-30 mt-10 lg:ml-20 lg:hidden'>
                            <img src={team1} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105 lg:ml-0 ml-2' />
                            <img src={team2} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam