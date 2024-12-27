import React from 'react'

const Navbar = () => {
    return (
        <div>
            <div id='nav' className='flex justify-between px-[5vw] py-0 items-center w-full h-[100px] uppercase text-[14px] text-white'>
                <a href="#" className='nav-hover-btn'>Suryansh Dubey</a>
                <a href="#" className='nav-hover-btn opacity-0 md:opacity-100'>Projects</a>
                <a href="#" className='nav-hover-btn opacity-0 md:opacity-100'>Socials</a>
                <a href="#" className='nav-hover-btn'>Contact</a>
            </div>
        </div>
    )
}

export default Navbar