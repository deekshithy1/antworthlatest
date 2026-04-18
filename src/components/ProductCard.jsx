import React from 'react'

const ProductCard = ({ heading, title, img }) => {
  return (
    <div className='w-[280px] bg-white h-[300px] rounded-3xl border border-gray-300 shadow-2xl relative flex flex-col justify-center'>

      <div className='left-3 absolute top-4 text-amber-400'>
        {img}
      </div>

      <div className='flex flex-col items-center'>
        <h3 className='text-2xl font-semibold'>{heading}</h3>
        <p>{title}</p>
      </div>

    </div>
  )
}

export default ProductCard