import React from 'react'

const Hero = () => {
  return (
   <>
   <div className='hero lg:h-full pb-20 px-[2rem] lg:px-[3rem]'>
    <div className='text-white text-center lg:text-left text-[30px] lg:w-[696px] font-bold leading-normal lg:text-[60px] pt-12'>
      <h1>Launch Your Cybersecurity Career</h1>
    </div>

    <div className='text-white hidden lg:grid w-[700px] font-medium mt-5 leading-normal bg-none'>
    Are you ready to embark on a rewarding journey into the dynamic world of cybersecurity? Our comprehensive bootcamp is designed to equip you with the essential knowledge and practical skills required to thrive in this ever-evolving field. Whether you're just starting out or seeking to advance your existing cybersecurity career, our program is tailored to meet your needs and aspirations.
    </div>

    <div className='text-white grid lg:hidden text-center lg:w-[700px] font-medium mt-5 leading-normal bg-none'>
    Are you ready to embark on a rewarding journey into the dynamic world of cybersecurity? Our comprehensive bootcamp is designed to equip you with the essential knowledge and practical skills required to thrive in this ever-evolving field.
    </div>

    <div className='flex gap-5 mt-12 lg:mt-5'>
      <div className=' cursor-pointer text-[14px] lg:text-lg py-3 px-6 font-semibold rounded-[5px] text-white bg-[#294db88b]'>Get Started</div>
      <div className=' cursor-pointer text-[14px] lg:text-lg py-3 px-6 border rounded-[5px] font-semibold text-[#294db88b] bg-white'>Explore our Courses</div>
    </div>
   </div>
   </>
  )
}

export default Hero