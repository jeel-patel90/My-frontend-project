import React from 'react'

function LandingPage() {
    return (
        <div className='w-full h-screen pt-2 bg-zinc-900'>
            <div className="textstructure mt-50 px-20">
                {["We create", "eye opening", "presentation"].map((item) => {
                    return <div className="uppercase masker text-8xl leading-[4.9vw] tracking-tighter font-medium font-['Founders_Grotesk']"><h1>{item}</h1></div>
                })}
            </div>

            <div className='border-t-2 border-zinc-600 mt-35 flex justify-between items-center py-5 px-20'>
                {["For public and private companies only", "From the first pitch to IPO",].map((item,) => (<p className='text-md font-light tracking-tight leading-none'>{item}</p>))}

                <div className='start'>
                    <div className='px-4 py-2 border-[1px] border-zinc-600  rounded-full uppercase'>Start the project</div>
                </div>
            </div>


        </div>
    )
}

export default LandingPage