import React from 'react'
import { BsStars } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdMarkEmailUnread } from "react-icons/md";
import test from '../assets/test-2.jpg';

function ContactInfo() {
    return (
        <>
            <section className='bg-[#FBF5EC] h-570'>
                <div className='pt-20'>
                    <h1 className='flex border-1 w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] ml-134'><BsStars />Quick Contact<BsStars /></h1>
                    <h1 className='text-5xl w-150 text-center tracking-[3px] items-center ml-96 text-[#0B2A2B] font-bold mt-5'>Contact Information</h1>
                    <p className='w-140 text-center ml-100 mt-5 tracking-[3px]'>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
                </div>

                {/* Info */}
                <div className='flex gap-5 mt-15'>
                    <div className='w-[22%] ml-15 text-[#0b2a2b]'>
                        <FaLocationDot className='size-15 mb-2 ml-30' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Adress</h1>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    </div>

                    <div className='w-[22%]'>
                        <FaPhone className='size-15 mb-2 ml-30' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Phone Number</h1>
                        <p className='w-70 text-xl text-center mb-1 text-[#0b2a2b]'>000 - 123 - 456789</p>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>000 - 123 - 456789</p>
                    </div>

                    <div className='w-[22%]'>
                        <TbWorld className='size-15 mb-2 ml-30' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Our Website</h1>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>www.gayu.com</p>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>www.gayu.com</p>
                    </div>

                    <div className='w-[22%]'>
                        <MdMarkEmailUnread className='size-15 mb-2 ml-30' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>E Mail Us</h1>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>info@example.com</p>
                        <p className='w-70 text-xl text-center text-[#0b2a2b]'>support@example.com</p>
                    </div>
                </div>
                {/* End */}

                {/* Contact Info Start */}
                <div className='flex gap-3 mt-20'>
                    <div className='w-40% mt-5'>
                        <h1 className='flex border-1 w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] ml-12 mb-4'><BsStars />Quick Contact<BsStars /></h1>
                        <h1 className='text-5xl ml-12 tracking-[8px] text-[#0B2A2B] font-bold mt-2 w-170 mb-4'>We Value Feedback</h1>
                        <p className='mt-2 tracking-[1px] ml-12 mb-10'>Amet suspendisse aliquet lobortis praesent placerat ullamcorper quisque.</p>

                        <form action="">
                            <input type="text" placeholder='First Name' className='w-70 border-1  border-[#0b2a2b77] ml-12 py-4 px-4 rounded-sm' />
                            <input type="text" placeholder='Last Name' className='w-70 border-1 ml-5 py-4 rounded-sm px-4 border-[#0b2a2b77]' />
                            <br /><br />
                            <input type="text" placeholder='Your Email' className='w-70 border-1 ml-12 py-4 px-4 rounded-sm border-[#0b2a2b77]' />
                            <input type="text" placeholder='Process' className='w-70 border-1 ml-5 py-4 rounded-sm px-4 border-[#0b2a2b77]' />
                            <br /><br />
                            <textarea name="" id="" placeholder='Messages' className='w-145 h-60 border-1 ml-12 py-4 rounded-sm px-4 border-[#0b2a2b77]'></textarea>
                            <br /><br />
                            <button className='ml-12 border-1 px-8 py-3 rounded-xl bg-[#0B2A2B] text-white border-[#0B2A2B] hover:bg-[#536765]'>Submit Now</button>
                            <br /><br />
                            <p className='ml-12 text-[#0B2A2B] w-122'>
                                Gayu Customer Experience can be reached Mon-Fri 7am-6pm ISD at support@gmail.com
                            </p>
                        </form>
                    </div>


                    <div className='w-138'>
                        <img src={test} alt="" className='rounded-sm' />
                    </div>
                </div>
                {/* end */}

                <div className='mt-28'>
                    <div className=''>
                        <h1 className='flex border-1 w-70 justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] ml-140 font-bold'><BsStars />Our Locations<BsStars /></h1>
                        <h1 className='text-5xl w-150 text-center tracking-[3px] items-center ml-102 text-[#0B2A2B] font-bold mt-5'>Available Worldwide</h1>
                        <p className='w-170 text-center ml-88 mt-5 tracking-[3px]'>Dis commodo facilisis vulputate nisi habitasse eget mattis, montes tempus. Ullamcorper non quis congue maximus cursus odio vehicula urna congue at metus et morbi</p>
                    </div>
                    <iframe
                            className=" top-0 border-0 h-120 w-full mt-10 rounded-sm" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=rishikesh&output=embed"
                            title="Rishikesh Map">
                        </iframe>
                </div>
            </section>
        </>
    )
}

export default ContactInfo