import gsap from 'gsap';
import React from 'react'
import { useEffect, useRef } from 'react';
import Imagery from './Imagery';
import Navbar from './Navbar';
import TechStack from './TechStack';
import Projects from './Projects';

import LocomotiveScroll from 'locomotive-scroll';
import Contact from './Contact';

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


    const scrollContainerRef = useRef(null);
    const targetRef = useRef(null);

    useEffect(() => {
        const scroll = new LocomotiveScroll({
          el: scrollContainerRef.current,
          smooth: true,
          multiplier: 1,
          lerp: 0.05
        });
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                scroll.update();
                console.log("updated")
              }
            });
          },
          {
            threshold: 0.1,
          }
        );
    
        if (targetRef.current) {
          observer.observe(targetRef.current);
        }

        const handleScroll = (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href');
            const element = document.querySelector(target);
            if (element) {
                scroll.scrollTo(element, {
                    offset: 0,
                    duration: 1000,
                    easing: [0.25, 0.0, 0.35, 1.0]
                });
            }
        };
    
        const links = document.querySelectorAll('.nav-hover-btn');
        links.forEach((link) => {
            link.addEventListener('click', handleScroll);
        });
    
        // Cleanup on unmount
        return () => {
            links.forEach((link) => {
                link.removeEventListener('click', handleScroll);
            });
          observer.disconnect();
          scroll.destroy();
        };
      }, []);



    return (

        <div id='home' ref={scrollContainerRef} className='w-full bg-[#102127]' data-scroll-container>

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

            <Projects targetRef={targetRef} />

            <div className="bg-[#102127]">
                <hr className="opacity-[0.6] w-[73vw] mx-auto border-t border-[#F3EAC0] " />
            </div>

            <Contact />
        </div>
    )
}

export default Home