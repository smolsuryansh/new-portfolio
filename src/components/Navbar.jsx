import React from 'react'

const Navbar = () => {

    return (
        <div>
            <div id='nav' className='flex justify-between px-[5vw] py-0 items-center w-full h-[100px] uppercase md:text-[0.8vw] text-[2vw] text-white'>
                <a href="#home" className='nav-hover-btn'>Suryansh Dubey</a>
                <a href="#work" className='nav-hover-btn opacity-0 md:opacity-100'>Projects</a>
                <a href="#" className='nav-hover-btn opacity-0 md:opacity-100'>Socials</a>
                <a href="#contact" className='nav-hover-btn'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar