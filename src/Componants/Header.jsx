import React from 'react'
import { Link } from 'react-router-dom';
import gayu from '../assets/gayu-logo.svg';
import { CgFormatCenter } from "react-icons/cg";
import { CgCross } from "react-icons/cg";

function Header({BgColor}){
  return (
    <>
    <section className={`${BgColor} h-26`}>
     <div className='flex pt-8 text-center gap-x-35'>
              <div>
                <img src={gayu} alt="" className='w-40 ml-15' />
              </div>
              <div className='flex text-[18px] gap-x-5 text-[#020d0efa] mt-2 text-center'>
                <Link to="/">Home <CgCross className=' mt-[-20px] flex ml-20' /></Link>
                <Link to="/Page">Pages<CgCross className=' mt-[-20px] flex ml-20' /> </Link>
                <Link to="/Photo">Gallary <CgCross className=' mt-[-20px] flex ml-20' /></Link>
                <Link to="/Shop">Shop <CgCross className=' mt-[-20px] flex ml-15' /></Link>
                <Link to="/Contact">Contact Us <CgCross className=' mt-[-20px] flex ml-28' /></Link>
              </div>
              <div className='flex'>
                <button className='px-7 py-2 border-1-black bg-[#0B2A2B] text-white rounded-3xl text-1xl hover:bg-[#536765]'>Book Now</button>
                <CgFormatCenter className='size-10 ml-10 text-[#000000bb] animate__animated animate__heartBeat animate__infinite' />
              </div>
            </div>
        </section>
    </>
  )
}

export default Header