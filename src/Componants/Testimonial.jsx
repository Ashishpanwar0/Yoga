import React from 'react'
import { BsStars } from "react-icons/bs";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'




function Testimonial() {
  return (
    <section className="relative bg-[#F4ECDF] py-20 px-4 lg:h-120 w-[100%]  overflow-hidden lg:w-full h-125">
      <div className='relative'>
        <h1 className='flex border-1 w-55 ml-25 lg:w-60 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] lg:ml-138'><BsStars />Community talks <BsStars /></h1>
        <h1 className='lg:text-5xl text-2xl lg:w-150 text-center tracking-[3px] items-center lg:ml-90 text-[#0B2A2B] font-bold mt-5'>What our clients say about us</h1>
        <p className='lg:w-180 text-center lg:ml-80 mt-5 tracking-[3px]'>Sociosqu gravida vehicula dis erat ante ornare interdum feugiat donec accumsan nullamdiam magna, auctor ut risus eget, scelerisque aliquam</p>
      </div>

      {/* Hover-enabled Image + Testimonial */}
      <div className="absolute lg:top-20 ml-5  group lg:w-full top-[-0px] left-1 w-[100%]">
        <img
          src={card1}
          className="lg:w-25 lg:h-25 w-20 h-20 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="sm:top-28 sm:left-0 lg:w-60 w-60 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute lg:ml-60 lg:top-35group top-1 left-45 w-[100%]">
        <img
          src={card2}
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute lg:ml-220 lg:top-5 group top-1 left-80 hidden lg:block">
        <img
          src={card3}
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300  w-60  bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute lg:ml-240 lg:top-30 top-42 group hidden lg:block">
        <img
          src={card4}
          className="lg:w-25 lg:h-25 w-14 h-14 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300 ml-[-250px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>

      {/* second section  */}
      <div className="absolute lg:left-55 lg:top-60 top-42 left-80 group hidden lg:block">
        <img
          src={card4}
          className="lg:w-25 lg:h-25 h-14 w-14  rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute lg:ml-280 lg:top-60 group">
        <img
          src={card2}
          className="lg:w-25 lg:h-25 w-20 h-20 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className=" sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-[-260px] ml-[-250px] z-20">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>
      


      <div className="absolute left-40 lg:ml-240 lg:top-95 group">
        <img
          src={card1}
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>



      <div className="absolute left-80 lg:ml-80 hidden lg:block lg:top-90 group">
        <img
          src={card3}
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute top-105 left-20 lg:ml-10 lg:top-93  group">
        <img
          src={card2}
          className="w-20 h-20 lg:w-25 lg:h-25 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial