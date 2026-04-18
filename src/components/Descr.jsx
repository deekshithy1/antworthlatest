import React from 'react'
import img from '../assets/reflector.png'
import videoSec from '../assets/videoSec.mp4'

const Descr = () => {
  return (
    <div className='min-h-screen bg-gray-50'>

      {/* Heading */}
      <div className="pt-6 pb-4 text-center px-4">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Advancing India’s <span className="text-yellow-600">Transport Ecosystem</span>
        </h2>
        <p className="mt-2 text-gray-500 font-medium text-sm md:text-base">
          Cutting-edge IT solutions for road safety and efficiency.
        </p>
      </div>

      {/* MAIN SECTION */}
      <div className='py-10 px-4 md:px-6 flex flex-col lg:flex-row justify-center items-stretch gap-6'>

        {/* ================= LEFT COLUMN ================= */}
        <div className='flex flex-col gap-4 w-full max-w-3xl'>

          {/* Vision */}
          <div className='w-full bg-[#F8D166] rounded-3xl flex flex-col justify-center p-6 md:p-10 relative overflow-hidden'>
            <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-800 text-sm md:text-lg leading-relaxed">
              To create an integrated and transparent platform for all software requirements 
              related to Road Transport and Safety in India, providing a consolidated medium 
              for fulfilling all vehicle-related needs.
            </p>

            <div className="absolute -right-10 -bottom-10 w-32 md:w-40 h-32 md:h-40 bg-yellow-400 rounded-full opacity-50"></div>
          </div>

          {/* Bottom cards */}
          <div className='flex flex-col md:flex-row gap-4'>

            {/* Image Card */}
            <div className='relative w-full md:w-1/2 h-64 md:h-80 rounded-3xl overflow-hidden group'>
              <img
                src={img}
                alt="reflector"
                className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-110'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6'>
                <h4 className='text-white font-bold text-lg md:text-xl'>
                  Road Safety Solutions
                </h4>
                <p className='text-gray-200 text-xs md:text-sm'>
                  Retro Reflective Tape Authentication & Tracking
                </p>
              </div>
            </div>

            {/* Experience */}
            <div className='w-full md:w-1/2 h-64 md:h-80 bg-white shadow-md border border-gray-100 rounded-3xl flex flex-col p-4 md:p-6'>
              <h3 className='text-gray-400 font-bold uppercase tracking-widest text-xs'>
                Experience
              </h3>

              <div className='flex flex-col justify-center items-center flex-grow'>
                <h3 className='text-4xl md:text-6xl font-black text-gray-900'>
                  4+ Years
                </h3>
                <p className='text-center text-gray-500 mt-2 text-sm md:text-base'>
                  of trust towards our products and <br className="hidden md:block" />
                  government partnerships
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= RIGHT COLUMN ================= */}
        <div className='flex flex-col gap-4 w-full max-w-2xl'>

          {/* Video */}
          <div className='w-full h-56 md:h-[312px] rounded-3xl relative overflow-hidden'>
            <video
              src={videoSec}
              autoPlay
              muted
              loop
              playsInline
              className='absolute inset-0 w-full h-full object-cover'
            />

            <div className='absolute inset-0 bg-black/40 flex flex-col justify-end p-4 md:p-8'>
              <h4 className='text-white font-bold text-lg md:text-2xl'>
                VLTD-AIS 140
              </h4>
              <p className='text-gray-200 text-xs md:text-sm'>
                Real-time vehicle monitoring and control systems.
              </p>
            </div>
          </div>

          {/* Expertise */}
          <div className='w-full bg-[#111] rounded-3xl flex flex-col p-4 md:p-8 justify-center'>
            <h3 className='text-gray-600 font-bold uppercase tracking-widest text-xs mb-4'>
              Our Expertise
            </h3>

            <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
              
              <p className='text-white text-sm md:text-base leading-relaxed md:w-2/3'>
                Our team of highly skilled professionals possesses an in-depth understanding 
                of the challenges faced by the transport industry. We implement projects that 
                significantly improve road safety standards and operational efficiency.
              </p>

              <div className='flex flex-wrap md:flex-col gap-2 md:border-l border-gray-700 md:pl-6'>
                <span className='text-yellow-500 text-xs font-bold'>PUC Networking</span>
                <span className='text-yellow-500 text-xs font-bold'>ADTT Solutions</span>
                <span className='text-yellow-500 text-xs font-bold'>EV Charging (CMS)</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Descr