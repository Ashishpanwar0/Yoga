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
            <section className='bg-[#FBF5EC] lg:h-570 h-910'>
                <div className='pt-20'>
                    <h1 className='flex border-1 w-[60%] lg:w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] lg:ml-134 ml-18'><BsStars />Quick Contact<BsStars /></h1>
                    <h1 className='text-5xl lg:w-150 text-center tracking-[3px] items-center lg:ml-96 text-[#0B2A2B] font-bold mt-5'>Contact Information</h1>
                    <p className='lg:w-140 text-center lg:ml-100 mt-5 tracking-[3px]'>Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet Ipsum long established fact that a reader will be distracted by the readable.</p>
                </div>

                {/* Info */}
                <div className='lg:flex gap-5 mt-15'>
                    <div className='lg:w-[22%] lg:ml-15 text-[#0b2a2b]'>
                        <FaLocationDot className='size-15 mb-2 lg:ml-30 ml-43' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Adress</h1>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                    </div>

                    <div className='lg:w-[22%] mt-10 lg:mt-0'>
                        <FaPhone className='size-15 mb-2 lg:ml-30 ml-45' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Phone Number</h1>
                        <p className='lg:w-70 text-xl text-center mb-1 text-[#0b2a2b]'>000 - 123 - 456789</p>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>000 - 123 - 456789</p>
                    </div>

                    <div className='lg:w-[22%] mt-10 lg:mt-0'>
                        <TbWorld className='size-15 mb-2 lg:ml-30 ml-45' />
                        <h1 className='mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>Our Website</h1>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>www.gayu.com</p>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>www.gayu.com</p>
                    </div>

                    <div className='lg:w-[22%] mt-10 lg:mt-0'>
                        <MdMarkEmailUnread className='size-15 mb-2 lg:ml-30 ml-45' />
                        <h1 className=' mb-2 text-3xl font-bold tracking-[3px] text-center text-[#0b2a2b]'>E Mail Us</h1>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>info@example.com</p>
                        <p className='lg:w-70 text-xl text-center text-[#0b2a2b]'>support@example.com</p>
                    </div>
                </div>
                {/* End */}

                {/* Contact Info Start */}
                <div className='lg:flex gap-3 mt-20'>
                    <div className='lg:w-40% mt-5'>
                        <h1 className='flex border-1 lg:w-70 w-[55%] justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] lg:ml-12 ml-18 mb-4'><BsStars />Quick Contact<BsStars /></h1>
                        <h1 className='lg:text-5xl lg:ml-12 tracking-[8px] text-[#0B2A2B] font-bold mt-2 lg:w-170 text-center text-2xl w-[100%] mb-4'>We Value Feedback</h1>
                        <p className='mt-2 tracking-[1px] text-center lml-2 lg:ml-12 mb-10'>Amet suspendisse aliquet lobortis praesent placerat ullamcorper quisque.</p>

                        <form action="">
                            <input type="text" placeholder='First Name' className='lg:w-70 border-1  border-[#0b2a2b77] lg:ml-12 py-4 px-4 rounded-sm ml-5 w-[90%]' />
                            <input type="text" placeholder='Last Name' className='lg:w-70 border-1 lg:ml-5 py-4 rounded-sm px-4 border-[#0b2a2b77] w-[90%] ml-5 mt-5 lg:mt-0' />
                            <br /><br />
                            <input type="text" placeholder='Your Email' className='lg:w-70 border-1 lg:ml-12 py-4 px-4 rounded-sm border-[#0b2a2b77] ml-5 w-[90%]' />
                            <input type="text" placeholder='Process' className='lg:w-70 border-1 lg:ml-5 py-4 rounded-sm px-4 border-[#0b2a2b77] mt-5 ml-5 w-[90%]' />
                            <br /><br />
                            <textarea name="" id="" placeholder='Messages' className='lg:w-145 lg:h-60 border-1 lg:ml-12 py-4 rounded-sm px-4 border-[#0b2a2b77] ml-5 w-[90%] h-70'></textarea>
                            <br /><br />
                            <button className='lg:ml-12 ml-5 border-1 px-8 py-3 rounded-xl bg-[#0B2A2B] text-white border-[#0B2A2B] hover:bg-[#536765]'>Submit Now</button>
                            <br /><br />
                            <p className='lg:ml-12 text-[#0B2A2B] lg:w-122 text-center'>
                                Gayu Customer Experience can be reached Mon-Fri 7am-6pm ISD at support@gmail.com
                            </p>
                        </form>
                    </div>


                    <div className='lg:w-138 mt-10 lg-mt-0 w-[95%] ml-2 lg:ml-0'>
                        <img src={test} alt="" className='rounded-sm' />
                    </div>
                </div>
                {/* end */}

                <div className='mt-28'>
                    <div className=''>
                        <h1 className='flex border-1 lg:w-70 justify-center gap-5 items-center rounded-2xl  py-2 leading-tight tracking-[3px] lg:ml-140 font-bold w-[70%] ml-15'><BsStars />Our Locations<BsStars /></h1>
                        <h1 className='lg:text-5xl text-2xl lg:w-150 text-center tracking-[3px] items-center lg:ml-102 text-[#0B2A2B] font-bold mt-5'>Available Worldwide</h1>
                        <p className='lg:w-170 text-center lg:ml-88 mt-5 tracking-[3px]'>Dis commodo facilisis vulputate nisi habitasse eget mattis, montes tempus. Ullamcorper non quis congue maximus cursus odio vehicula urna congue at metus et morbi</p>
                    </div>
                    <iframe
                            className=" top-0 border-0 lg:h-120 h-90 w-full mt-10 rounded-sm" loading="lazy" allowFullScreen src="https://maps.google.com/maps?q=rishikesh&output=embed"
                            title="Rishikesh Map">
                        </iframe>
                </div>
            </section>
        </>
    )
}

export default ContactInfo