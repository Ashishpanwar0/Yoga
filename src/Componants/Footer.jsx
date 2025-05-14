import React from 'react'
import light from '../assets/light-logo.svg';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import pay1 from '../assets/gayu-pay-amazon.png'
import pay2 from '../assets/gayu-pay-gpay.png'
import pay3 from '../assets/gayu-pay-mastercard.png'
import pay4 from '../assets/gayu-pay-paynoeer.png'
import pay5 from '../assets/gayu-pay-paypal.png'
import pay6 from '../assets/gayu-pay-skrill.png'
import pay7 from '../assets/gayu-pay-visa.png'

function Footer() {
    return (
        <section className='bg-[#0B2A2B] lg:h-152 h-182 w-full '>
            <div className='lg:flex gap-x-25 lg:ml-5 pt-15'>
                <img src={light} alt="" className='lg:w-130 w-[90%] lg:ml-8 ml-3' />
                <h1 className='lg:text-5xl text-2xl ml-5 font-bold lg:w-160 lg:ml-2 text-[white] tracking-[4px] mt-5 lg:mt-5 font-serif'>
                    Find Your Flow, Embrace Your Peace
                </h1>
            </div>

            <div className='flex  lg:gap-x-5 gap-x-3 mt-15 w-full'>

                <div className='text-white w-[28%] lg:ml-16 lg:w-60 ml-5 font-serif'>
                    <h1 className='lg:text-3xl text-sm tracking-[3px]'>Membership</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Practice</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Corporate</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Personal Training</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>FAQ</a>
                </div>

                <div className='text-white lg:w-40 w-[30%] font-serif ml-5 lg:ml-0'>
                    <h1 className='lg:text-3xl text-sm tracking-[3px]'>Studio</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Private Classes</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Group Classes</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Yoga Travel</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Instructor</a>
                </div>

                <div className='text-white lg:w-70 w-[25%] lg:ml-10 font-serif'>
                    <h1 className='lg:text-3xl text-sm tracking-[3px]'>Club & Classes</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Timetable</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Find Your Club</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Classes</a>
                </div>

                <div className='text-white lg:w-60 lg:ml-0 w-[20%] font-serif hidden lg:block'>
                    <h1 className='lg:text-3xl text-sm tracking-[3px]'>Get In Touch</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Contact</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Free Trail</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Careers</a>
                </div>

                <div className='text-white w-60 ml-0 font-serif hidden lg:block'>
                    <h1 className='lg:text-3xl text-xl tracking-[3px]'>Connect</h1>
                    <div className='flex gap-5 mt-10'>
                        <FaFacebook className='size-8' />
                        <FaInstagramSquare className='size-8' />
                        <FaTwitter className='size-8' />
                    </div>
                    <div>
                        <input type="text" placeholder='Email Enter' className='lg:w-40 border-1 border-[#ffffffa8] rounded-sm mt-12 py-1 px-2' />
                    </div>
                </div>
            </div>
            <hr className='text-white mt-10' />
            <div className='lg:flex mt-5 font-serif'>
                <h1 className='lg:ml-16 ml-5 text-center text-white mt-2'>Copyright © Gayu Site | All Right Reserved</h1>
                <div className='flex flex-wrap justify-center gap-4 lg:ml-82 lg:mt-0 mt-8'>
                    <img src={pay1} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay2} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay3} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay4} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay5} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay6} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                    <img src={pay7} alt="" className='border-1 px-1 w-15 sm:w-10 lg:w-18' />
                </div>
            </div>
        </section>
    )
}

export default Footer