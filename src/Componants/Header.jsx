import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import gayu from '../assets/gayu-logo.svg';
import { CgFormatCenter } from "react-icons/cg";
import { CgCross } from "react-icons/cg";
import { HiMenu } from "react-icons/hi";

function Header({BgColor}){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className={`${BgColor} h-auto`}>
        {/* Desktop View */}
        <div className='hidden md:flex pt-8 text-center justify-between lg:h-25 lg:pt-8 px-4 lg:px-8 xl:px-12 w-full'>
          <div>
            <img src={gayu} alt="" className='w-32 lg:w-40' />
          </div>
          <div className='flex text-[16px] lg:text-[18px] gap-x-3 lg:gap-x-20 text-[#020d0efa] mt-2 text-center'>
            <Link to="/" className="relative">Home <CgCross className='absolute top-[-10px] right-[-20px] lg:mt-4 lg:ml-2' /></Link>
            <Link to="/Page" className="relative">Pages<CgCross className='absolute top-[-10px] right-[-20px] lg:mt-4 lg:ml-2' /> </Link>
            <Link to="/Photo" className="relative">Gallary <CgCross className='absolute top-[-10px] right-[-20px] lg:mt-4 lg:ml-2' /></Link>
            <Link to="/Shop" className="relative">Shop <CgCross className='absolute top-[-10px] right-[-15px] lg:mt-4 lg:ml-2' /></Link>
            <Link to="/Contact" className="relative">Contact Us <CgCross className='absolute top-[-10px] right-[-28px] lg:mt-4 lg:ml-2' /></Link>
          </div>
          <div className='flex items-center lg:mt-[-25px]'>
            <button className='px-5 lg:px-7 py-2 border-1-black bg-[#0B2A2B] text-white rounded-3xl text-sm lg:text-base hover:bg-[#536765]'>Book Now</button>
            <CgFormatCenter className='size-8 lg:size-10 ml-6 lg:ml-10 text-[#000000bb] animate__animated animate__heartBeat animate__infinite' />
          </div>
        </div>

        {/* Mobile View */}
        <div className='md:hidden w-full'>
          <div className='flex justify-between items-center pt-6 px-4 pb-4'>
            <div>
              <img src={gayu} alt="" className='w-28' />
            </div>
            <div className='flex items-center gap-2'>
              <button className='px-4 py-1 border-1-black bg-[#0B2A2B] text-white rounded-3xl text-sm hover:bg-[#536765]'>Book Now</button>
              <button onClick={toggleMenu} className='text-[#0B2A2B] ml-2'>
                {isMenuOpen ? <CgCross className='size-8' /> : <HiMenu className='size-8' />}
              </button>
            </div>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className='bg-[#EADECC] shadow-lg py-4 px-6 absolute w-full z-50'>
              <div className='flex flex-col gap-4 text-[#0B2A2B]'>
                <Link to="/" className="border-b border-gray-200 pb-2">Home</Link>
                <Link to="/Page" className="border-b border-gray-200 pb-2">Pages</Link>
                <Link to="/Photo" className="border-b border-gray-200 pb-2">Gallary</Link>
                <Link to="/Shop" className="border-b border-gray-200 pb-2">Shop</Link>
                <Link to="/Contact" className="pb-2">Contact Us</Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Header;