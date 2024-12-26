import gsap from 'gsap';
import React from 'react'
import { useEffect } from 'react';

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

const Home = () => {

    useEffect(() => {
        var tl = gsap.timeline();

        gsap.set("#nav", {
            y: "-100%",
            opacity: 0,
        })
        gsap.set("#reveal1", {
            y: "100%",
        })
        gsap.set("#reveal2", {
            y: "100%",
        })
        gsap.set("#animated-word", {
            x: "-150%",
        })

        tl.to("#nav", {
            y: 0,
            delay: 2.9,
            opacity: 1,
            stagger: 0.5,
            ease: "expo.inOut"
        })
            .to("#reveal2", {
                y: 0,
                duration: 0.7,
                ease: "power2.inOut"
            })
            .to("#reveal1", {
                y: 0,
                duration: 0.8,
                delay: -0.7,
                ease: "power2.inOut"
            })
            .to("#animated-word", {
                x: 0,
                duration: 0.8,
                delay: -0.7,
                ease: "power2.inOut"
            })

    }, [])


    return (
        <div id='home' className='w-full h-[150vh] bg-[#102127]'>
            <div id='nav' className='flex justify-between px-[5vw] py-0 items-center w-full h-[100px] uppercase text-[14px] text-white'>
                <a href="#" className='nav-hover-btn'>Suryansh Dubey</a>
                <a href="#" className='nav-hover-btn opacity-0 md:opacity-100'>Projects</a>
                <a href="#" className='nav-hover-btn opacity-0 md:opacity-100'>Socials</a>
                <a href="#" className='nav-hover-btn'>Contact</a>
            </div>

            <div id='row' className='flex md:flex-row flex-col justify-between w-[100%] mt-[5vw] px-[7vw] py-0 text-white overflow-hidden'>

                <h1 id='reveal1' className='text-[18vw] md:text-[11vw]'>Computer</h1>

                <div id='text'>
                    <h5 id='reveal2' className='md:opacity-[0.6] md:block hidden mt-[3vw] text-[12px]'>MY NAME IS <br /> SURYANSH DUBEY</h5>
                </div>

                <div id='text'>
                    <h5 id='reveal2' className='md:opacity-[0.6] md:block hidden mt-[3vw] text-[12px]'>LEARNING SOMETHING <br /> NEW EVERYDAY :D</h5>
                </div>

            </div>

            <div id='row' className='relative flex md:flex-row flex-col justify-between w-[100%] mt-[-5vw] px-[7vw] text-white overflow-hidden'>
                <h1 id='animated-word' className='flex md:text-[13vw] text-[21vw] font-Beanco-Font pl-[38vw] md:pl-[9vw] mt-[-1vw] md:mt-[1vw] text-[#F3EAC0]'>

                    <HoverText text="Science" />

                </h1>
                {/* Later add animated svg here */}
                <h1 id='reveal1' className='flex md:justify-end text-[18vw] md:text-[11vw] mt-[-15vw] md:mt-0 pl-0 md:pl-[4vw]'>Student</h1>

            </div>

            <div className='relative w-full overflow-hidden px-[7vw] py-0 text-white'>
                <div id='text' className='flex justify-between'>
                    <h5 id='reveal2' className='opacity-[0.6] mt-[14vw] text-[12px] md:hidden'>MY NAME IS <br /> SURYANSH DUBEY</h5>

                    <h5 id='reveal2' className='opacity-[0.6] mt-[14vw] text-[12px]
                    md:hidden'>LEARNING SOMETHING <br /> NEW EVERYDAY :D</h5>
                </div>
            </div>

            <div id='imagery' className='flex items-center justify-between w-full px-[7vw] py-0 mt-[18vw]'>
                <div id='imgLeft' className='w-[95%] md:w-[30%] h-auto'>
                    <h1 className='text-white text-[28px] leading-none md:text-[2vw]'>
                        I AM SURYANSH DUBEY, <br />
                        A PASSIONATE <br />
                        <HoverText containerClass='font-Beanco-Font text-[38px] align-middle leading-[0.5] text-[#F3EAC0] md:text-[3vw]'
                            text="Computer Science" /> <br />
                        STUDENT, CONSTANTLY <br />
                        LEARNING WHILE ENJOYING <br />
                        THE JOURNEY :D <br />
                    </h1>
                </div>

                <div id='imgRight' className='relative flex items-center justify-center w-95% md:w-[60%] h-auto'>
                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] translate-y-[-10%] translate-x-[-30%] rotate-[-7deg] bg-[#CB5A62] bg-[url(/imgs/astro-web3.png)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>

                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] bg-slate-600 bg-[url(/imgs/astro-web2.png)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>

                    <div id='imgCntnr' className='absolute w-[30vw] h-[45vw] rounded-[1vw] bg-red-600 translate-y-[13%] translate-x-[25%] rotate-[6deg] bg-[url(/imgs/astro-web.png)] bg-cover bg-center brightness-50 hover:brightness-100 transition-all duration-[2000ms] ease-[cubic-bezier(0.19,_1,_0.22,_1)]'></div>
                </div>
            </div>
        </div>
    )
}

export default Home