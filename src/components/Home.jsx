import gsap from 'gsap';
import React from 'react'
import { useEffect } from 'react';
import Imagery from './Imagery';
import Navbar from './Navbar';
import TechStack from './TechStack';
import Projects from './Projects';

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
        gsap.set("#imagery", {
            y: "200%"
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
            .to("#imagery", {
                y: 0,
                duration: 1,
                delay: -0.7,
            })

    }, [])


    return (

        <div id='home' className='w-full h-[150vh] bg-[#102127]'>

            <Navbar />

            <div id='row' className='flex md:flex-row flex-col justify-between w-[100%] mt-[5vw] px-[5vw] py-0 text-white overflow-hidden'>

                <h1 id='reveal1' className='text-[18vw] md:text-[12vw]'>Computer</h1>

                <div id='text'>
                    <h5 id='reveal2' className='md:opacity-[0.6] md:block hidden mt-[5vw] text-[12px]'>MY NAME IS <br /> SURYANSH DUBEY</h5>
                </div>

                <div id='text'>
                    <h5 id='reveal2' className='md:opacity-[0.6] md:block hidden mt-[5vw] text-[12px]'>LEARNING SOMETHING <br /> NEW EVERYDAY :D</h5>
                </div>

            </div>

            <div id='row' className='relative flex md:flex-row flex-col justify-between w-[100%] mt-[-5vw] px-[7vw] text-white overflow-hidden'>
                <h1 id='animated-word' className='flex md:text-[14vw] text-[21vw] font-Beanco-Font pl-[38vw] md:pl-[8vw] mt-[-1vw] md:mt-[1vw] text-[#F3EAC0]'>

                    <HoverText text="Science" />

                </h1>
                {/* Later add animated svg here */}
                <h1 id='reveal1' className='flex md:justify-end text-[18vw] md:text-[12vw] mt-[-15vw] md:mt-0 pl-0 md:pl-[1.5vw]'>Student</h1>

            </div>

            <div className='relative w-full overflow-hidden px-[7vw] py-0 text-white'>
                <div id='text' className='flex justify-between'>
                    <h5 id='reveal2' className='opacity-[0.6] mt-[14vw] text-[12px] md:hidden'>MY NAME IS <br /> SURYANSH DUBEY</h5>

                    <h5 id='reveal2' className='opacity-[0.6] mt-[14vw] text-[12px]
                    md:hidden'>LEARNING SOMETHING <br /> NEW EVERYDAY :D</h5>
                </div>
            </div>

            <Imagery />

            <TechStack />

            <div className="bg-[#102127]">
                <hr className="opacity-[0.6] w-[73vw] mx-auto border-t border-[#F3EAC0] " />
            </div>

            <Projects />
        </div>
    )
}

export default Home