import { ArrowBigRightDashIcon } from 'lucide-react'
import React from 'react'
import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'
import img5 from '../assets/5.png'
import img6 from '../assets/adtt.png'
import Card from './Card'
import heroVideo from '../assets/heroVideo.mp4'
const imgdata = { img1, img2, img3, img4, img5, img6 }

const Hero = () => {
  const images = Object.values(imgdata)
  const leftImages = images.filter((_, index) => index % 2 === 0)
  const rightImages = images.filter((_, index) => index % 2 !== 0)

  return (
    <section className='min-h-screen w-full bg-[#F3F1EF] flex flex-col lg:flex-row justify-center items-center px-6 py-10 lg:px-4 lg:py-0 rounded-2xl relative overflow-hidden'>
      
      {/* Decorative Circle - Hidden on small mobile to avoid layout shifts */}
      <div className='absolute h-64 w-64 border border-gray-500 border-dashed rounded-[50%] -top-30 hidden md:block' />

      {/* Text Section */}
      <div className='flex flex-col justify-center w-full lg:w-1/2 lg:pl-24 gap-y-4 z-20 mt-10 lg:mt-0'>
        <p className='text-xs md:text-sm bg-white px-3 py-1 rounded-2xl max-w-fit border border-gray-300'>
          The Trusted Systems, Nation Wide
        </p>
        <h3 className='text-3xl md:text-4xl lg:text-5xl leading-tight font-semibold text-white'>
          Powering the Digital Transformation of Transport Department
        </h3>
        <p className='text-lg md:text-xl text-gray-100'>
          Integrated intelligent mobility infrastructure powering road safety, compliance, and real-time transport management for governments and authorities
        </p>
        
        <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-2'>
          <button className='bg-[#F8D166] font-semibold p-4 rounded-2xl w-full sm:w-1/3 hover:bg-[#eec145] transition-colors'>
            Explore more
          </button>
          <button className='flex items-center font-semibold underline gap-2'>
            Book a call now <ArrowBigRightDashIcon className='animate-pulse' />
          </button>
        </div>
      </div>
       <div className="inset-0 rounded-2xl overflow-hidden shadow-lg absolute mx-3 sm:mx-5">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
                <source src={heroVideo} type="video/mp4" />
              </video>
      
              {/* Enhanced overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent'></div>
            </div>
       <div className="inset-0 rounded-2xl overflow-hidden shadow-lg absolute mx-3 sm:mx-5">
              <video autoPlay loop muted playsInline className="w-full h-full object-cover scale-105">
                <source src={heroVideo} type="video/mp4" />
              </video>
      
              {/* Enhanced overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent'></div>
            </div>
      

      {/* Marquee Section */}
    {/* <div className='hidden sm:flex w-full lg:w-1/2 h-[400px] md:h-[600px] lg:h-[800px] justify-center gap-4 md:gap-6 relative overflow-hidden rounded-2xl mt-10 lg:mt-0'>
  
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F3F1EF] to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#F3F1EF] to-transparent z-10 pointer-events-none" />


        <div className='flex flex-col gap-4 marquee-up'>
          {[...leftImages, ...leftImages, ...leftImages].map((img, index) => (
            <div key={index} className="w-32 md:w-48 lg:w-auto">
              <Card image={img} />
            </div>
          ))}
        </div>


        <div className='flex flex-col gap-4 marquee-down'>
          {[...rightImages, ...rightImages, ...rightImages].map((img, index) => (
            <div key={index} className="w-32 md:w-48 lg:w-auto">
              <Card image={img} />
            </div>
          ))}
        </div>
      </div> */}
    </section>
  )
}

export default Hero