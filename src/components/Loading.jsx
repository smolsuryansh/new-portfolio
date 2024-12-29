import React, { useEffect } from 'react'
import gsap from 'gsap';
import ReusableSpan from './ReusableSpan.jsx'
import Home from './Home.jsx';

const Loading = () => {

    useEffect(() => {

        var tl = gsap.timeline();

        tl.fromTo("#parent #child span", {
            x: "100%"
        },
            {
                x: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.inOut"
            })
            .to("#parent #child", {
                y: "-100%",
                duration: 0.9,
                delay: 0.5,
                ease: "circ.inOut",
            })
            .to("#fs", {
                height: 0,
                duration: 1.7,
                ease: "expo.inOut",
            })
            .to("#elem", {
                height: "100%",
                duration: 1.7,
                delay: -2.5,
                ease: "expo.inOut",
            })
            .to("#slate", {
                height: "100%",
                duration: 1.6,
                delay: -2.3,
                ease: "expo.inOut",
            })


    }, [])


    return (
        <div id='main' className='fixed w-full h-screen font-EudoxusSans-Medium'>

            {/* Loader */}
            <div id='fs' className='fixed w-full h-screen bg-[#252a31] text-white'>
                <div id='topheading' className='absolute top-[5%] left-[50%] translate-x-[-50%] translate-y-0 text-center'>
                    <h5 id='reveal'>
                        <ReusableSpan
                            title="Personal Portfolio"
                            parentId="parent"
                            childId="child"
                            parentClass="block overflow-hidden"
                            childClass="block"
                        />
                    </h5>
                </div>

                <h1 id='reveal' className='absolute w-full flex justify-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] text-[8vw] md:text-[3vw] font-EudoxusSans-Regular'>
                    <ReusableSpan
                        title={
                            <>
                                <span className='inline-block'>Greetings</span> <span className=' inline-block font-Beanco-Font text-[11vw] md:text-[4vw] text-[#F3EAC0] translate-y-[-1%]'> visitor, </span> <span className='inline-block'>I'm</span> <span className='inline-block'>a</span>
                            </>
                        }
                        parentId="parent"
                        childId="child"
                        parentClass="flex justify-center w-full overflow-y-hidden"
                        childClass="block"
                    />
                </h1>
            </div>

            {/* Loader */}
            <div id='elem' className='w-full absolute bottom-0 h-[0px] bg-[#F3EAC0]'></div>

            {/* Home */}
            <div id='slate'  className='w-full absolute bottom-0 h-[0px] bg-[#102127]'>
                <Home />
            </div>

        </div>
    )
}

export default Loading