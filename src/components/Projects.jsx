import React, { useEffect, useState } from 'react'
import '../index.css'

const Projects = ({ targetRef }) => {

    useEffect(() => {
        function cardShow() {
            document.querySelectorAll(".cnt").forEach(function (cnt) {
                let showingImg;
                let targetChild;
                let cursor = document.querySelector("#cursor");
                let bounds = document.querySelector("#work").getBoundingClientRect();;
    
                const moveCursor = (dets) => {
                    showingImg = dets.target;
                    const index = dets.target.dataset.index;
                    targetChild = cursor.children[index];
                    bounds = document.querySelector("#work").getBoundingClientRect(); // Recalculate bounds for each mousemove

    
                    // HOW DO I EVEN FIX THIS?????
                    const screenWidth = window.innerWidth;
    
                    let cursorOffsetX = (dets.clientX - bounds.left) - 32;
                    let cursorOffsetY = (dets.clientY - bounds.top) - 625;

                    console.log(cursorOffsetY)
    

                    if (screenWidth < 768) { 
                        cursorOffsetX = (dets.clientX - bounds.left) - 16; 
                        cursorOffsetY = (dets.clientY - bounds.top) - 300;
                    } else if (screenWidth >= 768 && screenWidth < 1200) { 
                        cursorOffsetX = (dets.clientX - bounds.left) - 24;
                        cursorOffsetY = (dets.clientY - bounds.top) - 450; 
                    }

                    if (targetChild) {
                        targetChild.style.opacity = 1;
                        targetChild.style.transform = `translate(${cursorOffsetX}px, ${cursorOffsetY}px)`;
                        showingImg.style.filter = "grayscale(1)";
                    }
    
                    document.querySelector("#work").style.backgroundColor = "#" + dets.target.dataset.color;
                };
    
                const throttledMoveCursor = (e) => {
                    requestAnimationFrame(() => moveCursor(e));
                };
    
                cnt.addEventListener("mousemove", throttledMoveCursor);
                cnt.addEventListener("mouseleave", function () {
                    if (targetChild) {
                        targetChild.style.opacity = 0; 
                    }
                    showingImg.style.filter = "grayscale(0)";
                    document.querySelector("#work").style.backgroundColor = "#102127";
                });
            });
        }
    
        cardShow();
    }, []);


    return (

        <div id='work' ref={targetRef} className='bg-[#102127] pt-[8vw] pb-[12vw]'>
            <div id='workrow' className='flex items-center justify-between text-white px-[13vw] pr-[10vw]'>
                <h1 className='text-[7vw]'>My Proje<span className='font-Beanco-Font text-[10vw] text-[#F3EAC0]'>c</span>ts</h1>
                <div className='pr-[30vw] pt-[3vw]'>
                    (03)
                </div>
                <svg id="o-ui-arrow" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-white opacity-[0.6] scale-x-[-1]'>
                    <path d="M3.10162 3.10156L62.9999 62.9999" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M63 1.00001L63 63L0.999989 63" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>

            <div id='images' className='relative w-full mt-[8vw] py-0 px-[5vw]' data-scroll-container>
                <div className='flex items-baseline justify-between'>

                    <div
                        className='cnt cnt1 w-[55%] h-[47vw] overflow-hidden rounded-[3vw] hover:cursor-pointer'
                    >
                        <a href="https://astro-sakura-website.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img
                                data-color="A7AAD6"
                                data-index="0"
                                data-scroll
                                data-scroll-speed="-1.5"
                                src="/imgs/astro-web4.png"
                                className='w-[105%]'
                            />
                        </a>
                    </div>

                    <div
                        className='cnt cnt2 w-[33%] h-[31vw] overflow-hidden rounded-[3vw] mr-[5vw] hover:cursor-pointer'
                    >
                        <a href="https://github.com/smolsuryansh" target="_blank" rel="noopener noreferrer">
                            <img
                                data-color="D5A6BD"
                                data-index="1"
                                data-scroll
                                data-scroll-speed="-1.5"
                                src="/imgs/github1.png"
                                className='w-[105%]'
                            />
                        </a>
                    </div>
                </div>

                <div>
                    <div
                        className='cnt cnt3 flex w-[54%] h-[42vw] overflow-hidden rounded-[3vw] mt-[8vw] mx-[17.4vw] hover:cursor-pointer'
                    >
                        <a href="https://smolsuryansh.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img
                                data-color="ECD5BB"
                                data-index="2"
                                data-scroll
                                data-scroll-speed="-1.5"
                                src="/imgs/portfolio.png"
                                className='w-[105%] object-stretch'
                            />
                        </a>
                    </div>
                </div>


                {/* Will definitely come back to this */}
                <div id="cursor"
                    className='absolute w-[17vw] top-0 left-0 z-[999999]'
                >

                    <div>
                        <div id='crow' className='flex items-center gap-[20px] w-full p-[0.7vw]'>
                            <div id='c-circle' className='w-[2vw] h-[2vw] border-[2px] border-white rounded-[40%]'></div>
                            <div id='c-capsule' className='py-[0.7vw] px-[2vw] rounded-[80px] bg-white font-EudoxusSans-Light'>
                                SAKURA
                            </div>
                        </div>
                        <h5 className='bg-[#F3EAC0] flex items-center justify-start rounded-[80px] mb-[0.7vw] px-[1vw]'>A fun project using gsap :D</h5>
                        <div id='elem' className='w-[26vw] relative'>
                            <img src="/imgs/sakura1.png" alt="" />
                            <img src="/imgs/sakura2.png" alt="" />
                            <img src="/imgs/sakura3.png" alt="" />
                            <img src="/imgs/sakura4.png" alt="" />
                            <img src="/imgs/sakura5.png" alt="" />
                        </div>
                    </div>

                    <div>
                        <div id='crow' className='flex items-center gap-[20px] w-full py-[0.7vw]'>
                            <div id='c-circle' className='w-[2vw] h-[2vw] border-[2px] border-white rounded-[40%]'></div>
                            <div id='c-capsule' className='py-[0.7vw] px-[3vw] rounded-[100px] bg-white font-EudoxusSans-Light'>
                                VISIT GITHUB
                            </div>
                        </div>
                        <h5 className='bg-[#F3EAC0] flex items-center justify-start rounded-[80px] mb-[0.7vw] px-[1vw]'>Visit more of my projects here</h5>
                        <div id='elem' className='w-[26vw] relative'>
                            <img src="/imgs/github-pfp1.png" alt="" />
                            <img src="/imgs/github-pfp2.png" alt="" />
                            <img src="/imgs/github-pfp3.png" alt="" />
                            <img src="/imgs/github-pfp4.png" alt="" />
                            <img src="/imgs/github-pfp5.png" alt="" />
                        </div>
                    </div>

                    <div>
                        <div id='crow' className='flex items-center gap-[20px] w-full p-[0.7vw]'>
                            <div id='c-circle' className='flex w-[2vw] h-[2vw] border-[2px] border-white rounded-[40%]'></div>
                            <div id='c-capsule' className='py-[0.7vw] px-[3vw] rounded-[100px] bg-white font-EudoxusSans-Light'>
                                PORTFOLIO
                            </div>
                        </div>
                        <h5 className='bg-[#F3EAC0] flex items-center justify-center rounded-[80px] mb-[0.7vw] px-[1vw]'>The very own website you are looking at right now (Also I'm new to frontend)</h5>
                        <div id='elem' className='w-[26vw] relative'>
                            <img src="/imgs/portfolio1.png" alt="" />
                            <img src="/imgs/portfolio2.png" alt="" />
                            <img src="/imgs/portfolio3.png" alt="" />
                            <img src="/imgs/portfolio4.png" alt="" />
                            <img src="/imgs/portfolio5.png" alt="" />
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Projects