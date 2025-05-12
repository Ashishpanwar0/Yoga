import React from 'react'
import celender1 from '../assets/celender1.png';
import banner from '../assets/home1-banner-image-i1.png';
import home4 from '../assets/home4-banner-image-0012.png';
import { BsStars } from "react-icons/bs";
import pay1 from '../assets/gayu-pay-amazon.png'
import pay2 from '../assets/gayu-pay-gpay.png'
import pay3 from '../assets/gayu-pay-mastercard.png'
import pay4 from '../assets/gayu-pay-paynoeer.png'
import pay5 from '../assets/gayu-pay-paypal.png'
import pay6 from '../assets/gayu-pay-skrill.png'
import pay7 from '../assets/gayu-pay-visa.png'


function Card2() {
    return (
        <section className='bg-[#F6F0E8] lg:h-315 h-620'>
            <div>
                <div className='pt-10 sm:pt-16'>
      <h1 className='flex border-1 w-70 justify-center gap-5 items-center rounded-2xl py-2 lg:w-80 tracking-[2px] mx-auto text-base sm:text-lg'>
        <BsStars />recommendedCourses <BsStars />
      </h1>
      <h1 className='text-3xl sm:text-4xl lg:text-5xl w-full text-center tracking-[3px] text-[#0B2A2B] font-bold mt-5'>
        Course Offering
      </h1>
      <p className='text-sm sm:text-base lg:text-lg max-w-[600px] mx-auto mt-5 tracking-[1.5px] text-center'>
        Natoque id quisque, pellentesque nibh conubia suspendisse egestas orci lobortis in himenaeos accumsan aliquet
      </p>
    </div>
            </div>
            {/* card pay */}

            <div className='flex lg:grid-cols-2 w-[364.2px] ml-15 border-1 lg:w-[364.1px] rounded-4xl lg:ml-124 mt-10'>
            <h1 className='border-white-1 px-6 py-2 text-2xl rounded-3xl hover:bg-[#0B2A2B] hover:text-white'>
                Pay Monthly
            </h1>
            <h1 className='border-white-1 px-6 py-2 text-2xl rounded-3xl hover:bg-[#0B2A2B] hover:text-white'> 
                Pay Annually
            </h1>
            </div>
            {/* card pay end */}
            {/* card start */}
                <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:flex gap-8 lg:ml-12 mt-20'>
                    <div className='lg:w-[30%] w-110 ml-5 hover:border-1 bg-[#F0E9DD] group relative overflow-hidden rounded-xl h-160 shadow-md transition-all duration-500'>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${celender1})` }}></div>
                        <div className='ml-5 w-90 mt-8 text-[#0b2a2b]'>
                        <h1 className='text-5xl font-bold mb-5 tracking-[3px] text-[#0B2A2B]'>
                        Basic
                        </h1>
                        <div className='flex mb-5 items-center gap-3'>
                            <h1 className='text-5xl'>$50</h1>
                            <p className='tracking-[2px]'>/ Per Month</p>
                        </div>
                    <hr />
                        <p className='mb-5 text-xl'>
                        Dictumst dictumst facilisi vehicula commodo sodales a mauris.
                        </p>
                        <hr />
                        <ul className='space-y-5 text-xl'>
                            <li>60-Minute Class</li>
                            <li>Group Access</li>
                            <li>No Online Options</li>
                            <li>No Free Trial</li>
                            <li>10% Off First Class</li>
                            <li>24-Hour Cancellation Policy</li>
                        </ul>
                        <button className='border-1 px-30 bg-[#0B2A2B] text-white ml-4 lg:ml-0 py-2 mt-10 rounded-2xl'>Get Basic Plan</button>
                        </div>
                    </div>


                    {/* second */}
                    <div className=' w-110 ml-5 lg:ml-0 mt-5 lg:w-[30%] lg:mt-0 hover:border-1 bg-[#F0E9DD] group relative overflow-hidden rounded-xl h-160 shadow-md transition-all duration-500'>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${home4})` }}></div>
                        <div className='ml-5 w-90 mt-8 text-[#0b2a2b]'>
                        <h1 className='text-5xl font-bold mb-5 tracking-[3px] text-[#0B2A2B]'>
                        Standard
                        </h1>
                        <div className='flex mb-5 items-center gap-3'>
                            <h1 className='text-5xl'>$75</h1>
                            <p className='tracking-[2px]'>/ Per Month</p>
                        </div>
                    <hr />
                        <p className='mb-5 text-xl'>
                        Dictumst dictumst facilisi vehicula commodo sodales a mauris.
                        </p>
                        <hr />
                        <ul className='space-y-5 text-xl'>
                            <li>60-Minute Class</li>
                            <li>Group Access</li>
                            <li>No Online Options</li>
                            <li>No Free Trial</li>
                            <li>10% Off First Class</li>
                            <li>24-Hour Cancellation Policy</li>
                        </ul>
                        <button className='border-1 px-30 bg-[#0B2A2B] text-white ml-4 lg:ml-0 py-2 mt-10 rounded-2xl'>Get Basic Plan</button>
                        </div>
                    </div>
                    {/* second */}
                    
                    {/* thrd */}
                    <div className=' w-110 ml-5 mt-5 lg:mt-0 lg:ml-0 lg:w-[30%] hover:border-1 bg-[#F0E9DD] group relative overflow-hidden rounded-xl h-160 shadow-md transition-all duration-500'>
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}></div>
                        <div className='ml-5 w-90 mt-8 text-[#0b2a2b]'>
                        <h1 className='text-5xl font-bold mb-5 tracking-[3px] text-[#0B2A2B]'>
                        Premium
                        </h1>
                        <div className='flex mb-5 items-center gap-3'>
                            <h1 className='text-5xl'>$100</h1>
                            <p className='tracking-[2px]'>/ Per Month</p>
                        </div>
                    <hr />
                        <p className='mb-5 text-xl'>
                        Dictumst dictumst facilisi vehicula commodo sodales a mauris.
                        </p>
                        <hr />
                        <ul className='space-y-5 text-xl'>
                            <li>60-Minute Class</li>
                            <li>Group Access</li>
                            <li>No Online Options</li>
                            <li>No Free Trial</li>
                            <li>10% Off First Class</li>
                            <li>24-Hour Cancellation Policy</li>
                        </ul>
                        <button className='border-1 px-30 bg-[#0B2A2B] text-white py-2 ml-4 lg:ml-0 mt-10 rounded-2xl'>Get Basic Plan</button>
                        </div>
                    </div>
                    {/* thrd */}
                </div>
            {/* card end */}
            {/* payment stat */}
                <div className='mt-10'>
                    <p className='text-center text-sm sm:text-base lg:text-xl text-[#0e2829be] tracking-[2px] mb-5' >
                    Secured payment by Gayu with:
                    </p>
                    <div className='flex flex-wrap justify-center gap-4'>
                        <img src={pay1} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay2} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay3} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay4} alt=""  className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay5} alt=""  className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay6} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                        <img src={pay7} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18'/>
                    </div>
                </div>
            {/* payment end */}
        </section>
    )
}

export default Card2