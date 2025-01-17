import React from 'react'

const HoverText = ({ text, containerClass }) => {
    return (
        <>
            {text.split('').map((char, index) => (
                <span
                    key={index}
                    className={`hover:text-white cursor-pointer ${containerClass}`}
                >
                    {char}
                </span>
            ))}
        </>
    );
};

const Imagery = () => {

    return (
        <div>
            <div id='imagery' className='flex items-center justify-between w-full px-[5vw] py-[6vw] mt-[18vw] bg-[#0d1a1f]'>
                <div id='imgLeft' className='w-[95%] md:w-[30%] h-auto z-10'>
                    <h1 className='text-white leading-none md:text-[2vw]'>
                        I AM SURYANSH DUBEY, <br />
                        A PASSIONATE <br />
                        <HoverText containerClass='font-Beanco-Font text-[5vw] align-middle leading-[0.5] text-[#F3EAC0] md:text-[3vw]'
                            text="Computer Science" /> <br />
                        STUDENT, CONSTANTLY <br />
                        LEARNING WHILE ENJOYING <br />
                        THE JOURNEY :D <br />
                    </h1>
                </div>

                <div id='imgRight' className='relative flex items-center justify-center w-95% md:w-[60%] h-auto md:pr-0 pr-[23vw]'>
                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] translate-y-[-10%] translate-x-[-30%] rotate-[-7deg] bg-[#CB5A62] bg-[url(/imgs/bundestats.jpg)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>

                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] bg-slate-600 bg-[url(/imgs/astro-web2.png)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>

                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] bg-red-600 translate-y-[13%] translate-x-[25%] rotate-[6deg] bg-[url(/imgs/github-pfp1.png)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>
                </div>
            </div>

        </div>
    )
}

export default Imagery