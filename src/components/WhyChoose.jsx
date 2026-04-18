import React from 'react'
import ChooseCard from './ChooseCard'
import { CheckCheck, Clock7, Lightbulb, Users } from 'lucide-react'

const cardData = [
  { title: "Experienced team", desc: "Our products are built by industry veterans you can trust.", img: <Users size={28} /> },
  { title: "Tested & Certified", desc: "Every line of code undergoes rigorous quality assurance.", img: <CheckCheck size={28} /> },
  { title: "On time, Every Time", desc: "Centralized and secure delivery pipelines for your peace of mind.", img: <Clock7 size={28} /> },
  { title: "Transport Solutions", desc: "Full-stack centralized and secure logistics infrastructure.", img: <Lightbulb size={28} /> },
]

const WhyChoose = () => {
  return (
    <section className='min-h-screen w-full bg-gray-50 py-20 px-10 flex flex-col lg:flex-row items-center justify-center gap-16'>
      
      {/* Header Content */}
      <div className='max-w-md text-center lg:text-left space-y-4'>
        <span className='uppercase tracking-widest text-sm font-semibold text-[#F8D166] border border-gray-300  bg-white px-3 py-1 rounded-2xl'>
          Why choose us
        </span>
        <h2 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-[1.1]'>
          Trusted Software <br /> 
          <span className='text-gray-400'>that enables Data Monitoring</span>
        </h2>
        <p className='text-gray-600 pt-4'>
          We provide the tools necessary to scale your operations with precision and security.
        </p>
      </div>

      {/* Cards Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
        {cardData.map((c, index) => (
          <ChooseCard 
            key={index} 
            title={c.title} 
            desc={c.desc} 
            img={c.img} 
          />
        ))}
      </div>
      
    </section>
  )
}

export default WhyChoose