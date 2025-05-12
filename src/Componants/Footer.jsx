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
        <section className='bg-[#0B2A2B] lg:h-170 h-190'>
            <div className='lg:flex gap-x-25 lg:ml-15 pt-20'>
                <img src={light} alt="" className='lg:w-110 w-100 ml-5' />
                <h1 className='lg:text-5xl text-2xl ml-5 font-bold lg:w-160 lg:ml-30 text-[white] tracking-[4px] mt-5'>
                    Find Your Flow, Embrace Your Peace
                </h1>
            </div>

            <div className='flex  lg:gap-x-8 mt-15'>

                <div className='text-white lg:ml-18 lg:w-60 ml-5'>
                    <h1 className='lg:text-2xl text-1xl tracking-[3px]'>Membership</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Practice</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Corporate</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Personal Training</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>FAQ</a>
                </div>

                <div className='text-white lg:w-30 w-40 lg:ml-30 ml-10'>
                    <h1 className='lg:text-2xl text-1xl tracking-[3px]'>Studio</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Private Classes</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Group Classes</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Yoga Travel</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Instructor</a>
                </div>

                <div className='text-white lg:w-60 lg:ml-15 w-20 ml-10'>
                    <h1 className='lg:text-2xl text-1xl tracking-[3px]'>Club & Classes</h1>
                    <br />  
                    <a href="" className='text-[12px] lg:text-xl'>Timetable</a>
                    <br /><br/>
                    <a href="" className='text-[12px] lg:text-xl'>Find Your Club</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Classes</a>
                </div>
        
                <div className='text-white lg:w-60 w-60 ml-12'>
                    <h1 className='lg:text-2xl text-1xl tracking-[3px]'>Get In Touch</h1>
                    <br />
                    <a href="" className='text-[12px] lg:text-xl'>Contact</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Free Trail</a>
                    <br /><br />
                    <a href="" className='text-[12px] lg:text-xl'>Careers</a>
                </div>

                <div className='text-white w-40 hidden'>
                    <h1 className='lg:text-2xl text-xl tracking-[3px]'>Connect</h1>
                    <div className='flex gap-5 mt-10'>
                        <FaFacebook className='size-8' />
                        <FaInstagramSquare className='size-8' />
                        <FaTwitter className='size-8' />
                    </div>
                </div>
            </div>
            <hr className='text-white mt-10' />
            <div className='lg:flex mt-5'>
                <h1 className='lg:ml-16 ml-5 text-center text-white'>Copyright © Gayu Site | All Right Reserved</h1>
                <div className='flex gap-5 lg:w-[55px] lg:ml-110 w-[49px] ml-2 mt-5 lg:mt-0'>
                    <img src={pay1} alt="" className='border-1 px-1' />
                    <img src={pay2} alt="" className='border-1 px-1' />
                    <img src={pay3} alt="" className='border-1 px-1' />
                    <img src={pay4} alt="" className='border-1 px-1' />
                    <img src={pay5} alt="" className='border-1 px-1' />
                    <img src={pay6} alt="" className='border-1 px-1' />
                    <img src={pay7} alt="" className='border-1 px-1' />
                </div>
            </div>
        </section>
    )
}

export default Footer