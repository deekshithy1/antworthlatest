import React from 'react'

const ChooseCard = ({ title, img, desc }) => {
  return (
    <div className='group relative w-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px] 
    bg-white border border-gray-100 p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl 
    flex flex-col justify-end transition-all duration-300 
    hover:shadow-xl hover:-translate-y-1 hover:bg-[#F3F1EF]'>

      {/* Icon Container */}
      <div className='absolute left-5 top-5 sm:left-6 sm:top-6 md:left-8 md:top-8 
      p-2 sm:p-3 bg-[#F3F1EF] group-hover:bg-white rounded-lg sm:rounded-xl 
      text-[#F8D166] transition-colors'>
        {img}
      </div>

      {/* Content */}
      <div className='space-y-1 sm:space-y-2'>
        <h3 className='text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight'>
          {title}
        </h3>
        <p className='text-xs sm:text-sm text-gray-500 leading-relaxed'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default ChooseCard