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
        <section className='bg-[#0B2A2B] h-150'>
            <div className='flex gap-x-25 ml-15 pt-20'>
                <img src={light} alt="" className='w-110' />
                <h1 className='text-5xl font-bold w-160 ml-30 text-[white] tracking-[4px] mt-5'>
                    Find Your Flow, Embrace Your Peace
                </h1>
            </div>

            <div className='flex  gap-x-8 mt-15'>

                <div className='text-white ml-18 w-30'>
                    <h1 className='text-2xl tracking-[3px]'>Membership</h1>
                    <br />
                    <a href="">Practice</a>
                    <br /><br />
                    <a href="">Corporate</a>
                    <br /><br />
                    <a href="">Personal Training</a>
                    <br /><br />
                    <a href="">FAQ</a>
                </div>

                <div className='text-white w-30 ml-30'>
                    <h1 className='text-2xl tracking-[3px]'>Studio</h1>
                    <br />
                    <a href="">Private Classes</a>
                    <br /><br />
                    <a href="">Group Classes</a>
                    <br /><br />
                    <a href="">Yoga Travel</a>
                    <br /><br />
                    <a href="">Instructor</a>
                </div>

                <div className='text-white w-60 ml-15'>
                    <h1 className='text-2xl tracking-[3px]'>Club & Classes</h1>
                    <br />
                    <a href="">Timetable</a>
                    <br /><br />
                    <a href="">Find Your Club</a>
                    <br /><br />
                    <a href="">Classes</a>
                </div>

                <div className='text-white w-60'>
                    <h1 className='text-2xl tracking-[3px]'>Get In Touch</h1>
                    <br />
                    <a href="">Contact</a>
                    <br /><br />
                    <a href="">Free Trail</a>
                    <br /><br />
                    <a href="">Careers</a>
                </div>

                <div className='text-white w-40'>
                    <h1 className='text-2xl tracking-[3px]'>Connect</h1>
                    <div className='flex gap-5 mt-10'>
                        <FaFacebook className='size-8' />
                        <FaInstagramSquare className='size-8' />
                        <FaTwitter className='size-8' />
                    </div>
                </div>
            </div>
            <hr className='text-white mt-10' />
            <div className='flex mt-5'>
                <h1 className='ml-16 text-white'>Copyright © Gayu Site | All Right Reserved</h1>
                <div className='flex gap-5 w-[55px] ml-110'>
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