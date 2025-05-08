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
            <section className='bg-[#F4ECDF] h-320'>
                <div className='pt-15'>
                    <h1 className='flex border-1 w-70 justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] ml-140'><BsStars />Tools and Props <BsStars /></h1>
                    <h1 className='text-5xl w-150 text-center tracking-[3px] items-center ml-102 text-[#0B2A2B] font-bold mt-5'>A studio is only as good as its people.</h1>
                    <p className='w-170 text-center ml-88 mt-5 tracking-[3px]'>Per aenean gravida finibus risus mattis curae ante. Congue proin ipsum metus primis ante aliquam taciti arcu auctor curabitur nullam.</p>
                </div>


                <div className='flex mt-20'>
                    <div className='relative overflow-hidden'>
                        <img src={images[CurrentIndex]} alt=" Slideshow" className='w-150 h-200 object-cover bg-cover bg-center rounded-xl transition-all duration-900 ease-in-out ml-16  opacity-120 relative' />
                    </div>
                    <div className="absolute w-150 ml-16 h-200 rounded-xl bg-[#61675a71] z-10 transition-all duration-700 ease-in-out"></div>
                    <div>
                        <div className='flex w-50 gap-30 mt-10 ml-20'>
                            <img src={team1} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                            <img src={team2} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                        <div className='w-50 mt-15 ml-58'>
                            <img src={team3} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                        <div className='flex w-50 gap-30 mt-15 ml-20'>
                            <img src={team4} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                            <img src={team5} alt="" className='hover:border-1 px-2 py-2 rounded-xl hover:scale-105' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurTeam