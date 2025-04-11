import React from 'react'

function About() {
    return (
        <div className='w-full py-20 px-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black '>
            <h1 className='font-["Neue_Montreal"] text-[4vw] leading-[3.5vw]'>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>

            <div className='w-full flex gap-5  border-t-[2px] pt-10 mt-20 border-[#475123]'>
                <div className='w-1/2 '>
                    <h1 className='text-4xl font-medium'>Our approach</h1>
                    <button className='flex uppercase gap-4 items-center py-4 px-8 mt-8 bg-zinc-800 rounded-full text-white'>Read more
                        <div className='w-2 h-2 bg-zinc-200 rounded-full'></div>
                    </button>
                </div>

                <div className='w-1/2 h-[70vh] bg-[#55622552] rounded-lg'></div>
            </div>
        </div>
    )
}

export default About;