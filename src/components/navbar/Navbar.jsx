import React from 'react'
import Logo from '../../assets/logo.png'
import {GiHamburgerMenu} from 'react-icons/gi'

const Navbar = () => {
  return (
    <>
    <div className="logonav pl-[1rem] pr-[2rem] lg:px-[3rem] h-16 bg-gradient-to-b from-blue-800 via-chocolate-200 via-black to-gray-800 flex justify-between items-center">
        <div className="logo w-[25%] lg:w-[7%]">
            <img src={Logo} alt=""/>
        </div>
        <div className="navs hidden gap-10 lg:flex items-center text-white">
            <div className='active hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>Home</div>
            <div className=' hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>About Us</div>
            <div className=' hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>Courses</div>
            <div className=' hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>FAQs</div>
            <div className=' hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>Contact Us</div>
            <div className=' hover:text-blue-900 hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer'>How To Enrol</div>
            <div className=' hover:font-semibold hover:duration-300 ease-in-out text-[14px] hover:cursor-pointer py-3 px-6 bg-[#355bcc84] rounded-[10px] hover:text-[white]'>Enrol Now</div>
        </div>

        <div className='flex lg:hidden'>
          <GiHamburgerMenu 
          className='text-[#355bccb4] text-[45px]'
          />
        </div>
    </div>
    </>
  )
}

export default Navbar