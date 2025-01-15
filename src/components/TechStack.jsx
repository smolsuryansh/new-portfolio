import React from 'react'

const TechStack = () => {
    return (
        <div>
            <div className='bg-[#102127] w-full overflow-hidden px-[5vw] py-[6vw] pt-[18vw] text-white'>
                <svg id='o-ui-arrow' width="64" height="64" viewBox='0 0 64 64' fill='none' xmlns='http://www.w3.org/2000/svg' className='stroke-white opacity-[0.6] sm:w-[64px] sm:h-[64px] w-[48px] h-[48px]'>
                    <path d='M3.10162 3.10156L62.9999 62.9999' strokeLinecap="round" strokeLinejoin='round'></path>
                    <path d='M63 1.00001L63 63L0.999989 63' strokeLinecap="round" strokeLinejoin='round'></path>
                </svg>


                <h5 className='opacity-[0.6] text-[12px] pl-[8.5vw] sm:mt-0 mt-4'>
                    THINGS I <span className='font-Beanco-Font'>AM</span> GOOD <br /> AT
                </h5>
                <h1 className='text-white text-[2vw] md:text-[1vw] mt-[1vw] leading-[1.3] pl-[8.5vw] pb-[3.25vw]'>
                    REACT / SPRING BOOT / <br />
                    GSAP / TAILWIND CSS / <br />
                    FULL STACK DEVELOPMENT
                </h1>
            </div>
        </div>
    )
}

export default TechStack