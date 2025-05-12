import React from 'react'

function Video({video}) {
    return (
        <section className='bg-[#FAF4EB] lg:h-125 h-80 pt-8'>
            <div className='relative overflow-hidden pb-[56.25%] h-0 rounded-xl mx-auto '>
                <iframe width="100%" rounded="20px" height="490" src="https://www.youtube.com/embed/1AGiq77wZ9c?si=SkDkG-o7zI4XJEEX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        </section>
    )
}

export default Video