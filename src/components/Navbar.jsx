import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div id='nav' className='flex justify-between px-[5vw] py-0 items-center w-full h-[100px] uppercase md:text-[0.8vw] text-[2vw] text-white relative'>
                <a href="#home" className='nav-hover-btn'>Suryansh Dubey</a>
                <a href="#work" className='nav-hover-btn opacity-0 md:opacity-100'>Projects</a>
                
                {/* socials dropdown */}
                <div 
                    className='relative' 
                    onMouseEnter={toggleDropdown} 
                    onMouseLeave={toggleDropdown}
                >
                    <a href="#" className='nav-hover-btn opacity-0 md:opacity-100 z-10'>Socials</a>
                    
                    
                    {dropdownOpen && (
                        <div className='absolute top-[-1vw] left-[-1vw] w-[10vw] bg-[#252a31] px-[0.45vw] py-[0.4vw] rounded-2xl'>
                            <hr className='mt-[2.5vw] pt-[0.7vw] opacity-[0.8]'/>

                            <a href="https://www.linkedin.com/in/suryansh-dubey-271418285/" target='_blank' rel="noopener noreferrer" className='block mb-[0.7vw] py-[0.2vw] px-2 hover:bg-[#102127]'>LinkedIn</a>

                            <a href="https://github.com/smolsuryansh" target='_blank' rel="noopener noreferrer" className='block mb-[0.7vw] py-[0.2vw] px-2 hover:bg-[#102127]'>GitHub</a>
                            
                            <a href="https://instagram.com/smolsuryansh252" target='_blank' rel="noopener noreferrer" className='block mb-[0.7vw] py-[0.2vw] px-2 hover:bg-[#102127]'>Instagram</a>
                        </div>
                    )}
                </div>

                <a href="#contact" className='nav-hover-btn'>Contact</a>
            </div>
        </div>
    );
};

export default Navbar;
