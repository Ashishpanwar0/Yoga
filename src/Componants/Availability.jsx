import React from 'react'


function Availability() {
    return (
        <>
            <section className='bg-[#F7F2EA]'>
                <div className='border-1 w-85 ml-5 bg-[#F5EDE0] rounded-xl mt-25 border-[#0000003d]'>

                    {/* contat */}
                    <div className='ml-5 mt-4 text-[#0B2A2B] font-serif'>
                        <h1 className='text-3xl tracking-[3px] text-[#0B2A2B]'>
                            Availability:
                        </h1>
                        <label>
                            <input type="checkbox" name="subscribe" value="yes" className='mt-6 ' />
                            <span className='ml-3 text-sm text-[#0b2a2ba2] tracking-[2px]'>In Stock (15)</span>
                        </label>
                        <br />
                        <label>
                            <input type="checkbox" name="subscribe" value="yes" className='mt-3' />
                            <span className='ml-3 text-sm  text-[#0b2a2ba2] tracking-[2px]'>Out Of Stock (0)</span>
                        </label>
                        <p className='mb-5 text-xl mt-5 tracking-[2px] text-[#0B2A2B] hover:underline'>
                            Filter Product
                        </p>

                        <h1 className='text-3xl tracking-[4px] text-[#0B2A2B]  mb-5'>
                            Fiter By Price:
                        </h1>

                        <span className='text-xl text-[#0B2A2B]'>
                            Price:
                        </span>
                        <input type="Number" placeholder='$0' className='border-1 rounded-sm bg-white w-15 px-2 ml-5 py-1' />
                        <input type="Number" placeholder='$50' className='border-1 bg-white rounded-sm w-15 px-2 ml-5 py-1 text-[#0B2A2B]' />

                        <p className='mt-5 tracking-[2px] underline  text-xl text-[#0B2A2B8] mb-8 font-serif'>
                            Filter
                        </p>

                        <h1 className='text-3xl tracking-[2px] text-[#0B2A2B] mb-5 font-serif'>
                            Category:
                        </h1>
                        
                            <div className="bg-[#f6efe2]">
                                {[
                                    ['Meditation Essentials', 1],
                                    ['Yoga Accessories', 5],
                                    ['Yoga Apparels', 3],
                                    ['Yoga Bags', 2],
                                    ['Yoga Equipments', 5],
                                    ['Yoga Towels', 2],
                                ].map(([title, count], index) => (
                                    <div key={index} className="flex justify-between border-b w-74 border-gray-300 pb-1">
                                        <span className=" font-serif mt-3">{title}</span>
                                        <span className=" font-serif mt-3">({count})</span>
                                    </div>
                                ))}
                            </div>

                        <h1 className='mt-5 text-xl tracking-[2px] font-serif'>
                            Products:
                        </h1>
                    </div>
                    {/* end */}
                </div>



            </section>
        </>
    )
}

export default Availability