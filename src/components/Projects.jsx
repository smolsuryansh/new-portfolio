import React from 'react'

const Projects = () => {
    return (

        <div id='work' className='bg-[#102127] pt-[8vw]'>
            <div id='workrow' className='flex items-center justify-between text-white px-[13vw] pr-[10vw]'>
                <h1 className='text-[7vw]'>My Proje<span className='font-Beanco-Font text-[10vw] text-[#F3EAC0]'>c</span>ts</h1>
                <div className='pr-[30vw] pt-[3vw]'>
                    (03)
                </div>
                <svg class="o-ui-arrow" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-white opacity-[0.6] scale-x-[-1]'>
                    <path d="M3.10162 3.10156L62.9999 62.9999" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M63 1.00001L63 63L0.999989 63" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            </div>
        </div>
    )
}

export default Projects