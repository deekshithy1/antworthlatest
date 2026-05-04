import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex absolute h-16 z-20 top-5 p-4 shadow-2xl w-11/12 sm:w-5/6 m-auto left-1/2 -translate-x-1/2 bg-white/80 backdrop-blur-md rounded-xl'>
        <div className='w-full flex justify-between items-center'>
            
            <h2 className='text-xl sm:text-2xl font-semibold'>
              <span className='text-[#F8D166] font-bold'>Ant</span>Worth
            </h2> 

            {/* Nav Links */}
            <div className='hidden md:flex w-1/3 justify-evenly'>
                <a href="#">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#services">Services</a>
                <a href="#contactus">Contact Us</a>
        
            </div>

            {/* Button */}
            {/* <div>
                <button className='border border-gray-300 px-3 py-2 sm:p-3 rounded-2xl bg-[#F8D166] font-semibold text-sm sm:text-base'>
                  Contact Us
                </button>
            </div> */}

        </div>
    </div>
  )
}

export default Navbar