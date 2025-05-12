import React from 'react'
import { BsStars } from "react-icons/bs";
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.jpg'
import card3 from '../assets/card3.jpg'
import card4 from '../assets/card4.jpg'




function Testimonial() {
  return (
    <section className="relative bg-[#F4ECDF] py-20 px-4 h-120  overflow-hidden lg:w-full">
      <div className='pt-5 relative'>
        <h1 className='flex border-1 lg:w-70 justify-center gap-2 items-center rounded-2xl  py-2 leading-tight tracking-[2px] lg:ml-130'><BsStars />Community talks <BsStars /></h1>
        <h1 className='lg:text-5xl lg:w-150 text-center tracking-[3px] items-center ml-90 text-[#0B2A2B] font-bold mt-5'>What our clients say about us</h1>
        <p className='w-180 text-center ml-80 mt-5 tracking-[3px]'>Sociosqu gravida vehicula dis erat ante ornare interdum feugiat donec accumsan nullamdiam magna, auctor ut risus eget, scelerisque aliquam</p>
      </div>

      {/* Hover-enabled Image + Testimonial */}
      <div className="absolute top-20 ml-5 sm:left-10 group lg:w-full">
        <img
          src={card1}
          className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute ml-60 top-35 sm:left-10 group">
        <img
          src={card2}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300 sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute ml-235 top-35 sm:left-10 group">
        <img
          src={card3}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300 sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute ml-278 top-20 sm:left-10 group">
        <img
          src={card4}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="top-300 ml-[-250px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>

      {/* second section  */}
      <div className="absolute ml-5 top-60 sm:left-10 group">
        <img
          src={card4}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute ml-280 top-60 sm:left-10 group">
        <img
          src={card2}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className=" sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-[-260px] ml-[-250px] z-20">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>
      


      <div className="absolute ml-240 top-95 sm:left-10 group">
        <img
          src={card1}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>



      <div className="absolute ml-150 top-90 sm:left-10 group">
        <img
          src={card3}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
        />
        <div className="mt-[-260px] sm:top-28 sm:left-0 w-60 sm:w-64 bg-[#13353F] text-white p-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-yellow-400 text-lg mb-2">★★★★★</div>
          <p className="text-sm">Lacinia diam porttitor cras inceptos nisi arcu fringilla morbi odio.</p>
          <div className="mt-2 font-bold">Maria</div>
          <div className="text-sm">Doctor</div>
        </div>
      </div>


      <div className="absolute ml-40 top-93 sm:left-10 group">
        <img
          src={card2}
          className="w-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-transparent group-hover:border-green-600 transition"
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