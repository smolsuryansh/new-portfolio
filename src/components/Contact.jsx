import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
    return (
        <div id='contact' className='bg-[#ed5757] py-[6vw]'>
            <div className='flex items-center justify-center'>
                <h1 className='text-center font-EudoxusSans-Medium text-white text-[7vw] md:text-[5vw] leading-none'>
                    OH, SO <br />
                    YOU MADE IT TIL HERE, <br />
                    MIGHT AS WELL <br />
                    CONTACT ME :{`>`}
                </h1>
            </div>

            <div className='flex items-center justify-center pt-[7vw]'>
                <a href='mailto:suryanshdubey2525@gmail.com' target='_blank' className='relative overflow-hidden text-white bg-[#ed5757] py-[2vw] px-[14vw] border-[0.1vw] border-white rounded-full transition-all ease-out duration-300 group hover:text-black'>
                    <span className="absolute inset-0 bg-white scale-x-0 origin-center transition-transform duration-300 ease-out rounded-[100px] group-hover:scale-x-100 group-hover:duration-300 group-hover:ease-out group-focus-within:scale-x-100"></span>
                    <span className="relative z-10 font-EudoxusSans-Bold md:text-[1.3vw]">Contact me</span>
                </a>
            </div>

            <div className='px-[4vw]'>
                <div className='md:flex relative items-center justify-between pt-[7vw] gap-[2vw]'>

                    <a href='https://www.linkedin.com/in/suryansh-dubey-271418285/' target='_blank' rel="noopener noreferrer" 
                        className='relative border-t text-white flex items-center justify-between w-full md:max-w-[18.5vw] max-w-full py-[1vw] transition-all ease-in-out duration-200 md:text-[1vw] text-[2.5vw] group hover:px-[1vw] overflow-hidden'>
                        <span className='absolute inset-0 bg-[#4297A0] scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100'></span>
                        <span className='flex-1 text-left z-10 mt-[-0.4vw]'>LinkedIn
                            <h5 className='md:text-[0.6vw] text-[1.5vw]'>@suryansh-dubey-271418285</h5>
                        </span>
                        <span className='md:text-[1.5vw] text-[2.5vw] z-10 mt-[-0.4vw]'><FaLinkedin /></span>
                    </a>

                    <a href='https://instagram.com/smolhammy252' target='_blank' rel="noopener noreferrer"
                        className='relative border-t text-white flex items-center justify-between w-full md:max-w-[18.5vw] max-w-full py-[1vw] transition-all ease-in-out duration-200 md:text-[1vw] text-[2.5vw] group hover:px-[1vw] overflow-hidden'>
                        <span className='absolute inset-0 bg-[#4297A0] scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100'></span>
                        <span className='flex-1 text-left z-10 mt-[-0.4vw]'>Instagram
                            <h5 className='md:text-[0.6vw] text-[1.5vw]'>@smolhammy252</h5>
                        </span>
                        <span className='md:text-[1.5vw] text-[2.5vw] z-10 mt-[-0.4vw]'><FaInstagram /></span>
                    </a>

                    <a href='https://github.com/smolsuryansh' target='_blank' rel="noopener noreferrer" 
                        className='relative border-t text-white flex items-center justify-between w-full md:max-w-[18.5vw] max-w-full py-[1vw] transition-all ease-in-out duration-200 md:text-[1vw] text-[2.5vw] group hover:px-[1vw] overflow-hidden'>
                        <span className='absolute inset-0 bg-[#4297A0] scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100'></span>
                        <span className='flex-1 text-left z-10 mt-[-0.4vw]'>Github
                            <h5 className='md:text-[0.6vw] text-[1.5vw]'>@smolsuryansh</h5>
                        </span>
                        <span className='md:text-[1.5vw] text-[2.5vw] z-10 mt-[-0.4vw]'><FaGithub /></span>
                    </a>

                    <a href='mailto:suryanshdubey2525@gmail.com' target='_blank' rel="noopener noreferrer" 
                        className='relative border-t text-white flex items-center justify-between w-full md:max-w-[18.5vw] max-w-full py-[1vw] transition-all ease-in-out duration-200 md:text-[1vw] text-[2.5vw] group hover:px-[1vw] overflow-hidden hover:cursor-pointer'>
                        <span className='absolute inset-0 bg-[#4297A0] scale-y-0 origin-top transition-transform duration-300 ease-out group-hover:scale-y-100'></span>
                        <span className='flex-1 text-left z-10 mt-[-0.4vw]'>Gmail
                            <h5 className='md:text-[0.6vw] text-[1.5vw]'>@suryanshdubey2525@gmail.com</h5>
                        </span>
                        <span className='md:text-[1.5vw] text-[2.5vw] z-10 mt-[-0.4vw]'><SiGmail /></span>
                    </a>

                </div>
            </div>

        </div>
    )
}

export default Contact