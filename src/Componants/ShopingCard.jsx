import React from 'react'
import { FaStar } from "react-icons/fa";
import shoping1 from '../assets/shoping1.jpg';
import shoping2 from '../assets/shoping2.jpg';
import shoping3 from '../assets/shoping3.jpg';
import shoping4 from '../assets/shoping1.jpg';


function ShopingCard() {
  return (
    <>
    <section className='lg:w-full w-full bg-[#F7F2EA] lg:h-300 h-740'>
        <div className='lg:w-[92%] w-[94%] ml-3 border-1 py-4 rounded-xl lg:ml-10 lg:mt-25 border-[#0000003d] bg-[#F5EDE0]'>
            <p className='ml-5 text-[#0B2A2B] text-xl'> Showing 1-9 of 15 results</p>
        </div>

        <div className='lg:flex gap-8 lg:ml-10 ml-5 mt-10'>
            <div className='border-1 lg:w-70 w-[95%] rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping1} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-[100%]'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            {/* ..... */}
            <div className='border-1 w-[95%] mt-5 lg:mt-0 lg:w-70 rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping2} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-full'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            {/* ...... */}
            <div className='border-1 w-[95%] lg:w-70 mt-5 lg:mt-0 rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping3} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-full'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            </div>
            {/* .....First end... */}

            {/* second start */}
            <div className='lg:flex gap-8 lg:ml-10  ml-5 mt-10'>
            <div className='border-1 w-[95%] lg:w-70 rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping3} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-full'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            {/* ..... */}
            <div className='border-1 lg:w-70 w-[95%] mt-5 lg:mt-0 rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping2} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-full'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            {/* ...... */}
            <div className='border-1 w-[95%] lg:w-70 mt-5 lg:mt-0 rounded-2xl border-[#D4D2C9] hover:border-[black]'>
            <button className='absolute px-4 py-1 rounded-xl bg-[#0B2A2B] text-white border-1 ml-3 mt-3'>Sale</button>
                <img src={shoping1} alt="" className='rounded-t-2xl border-b h-72 hover:border-[black] border-[#D4D2C9] hover:scale-0 w-full'/>
                
                <div className='bg-[#F5EDE0] rounded-b-2xl h-38'>
                <h1 className='text-center text-2xl font-serif pt-6 mb-2'>
                Bean Bags
                </h1>
                <p className='flex gap-3 justify-center mb-2'>
                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='text-center text-1xl'>
                $42.60 - $48.80
                </p>
                </div>
            </div>
            </div>
    </section>
    </>
  )
}

export default ShopingCard