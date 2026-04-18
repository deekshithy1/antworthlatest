import React from 'react'

const Card = ({image}) => {
  return (
   <div className=' h-[500px] bg-white w-80 rounded-2xl  relative' >
        <img src={image} alt="" className='h-full w-full  rounded-2xl' />
        <div className='absolute inset-0 bg-gradient-to-t from-black  rounded-2xl via-black/10 to-transparent'></div>
    </div>
  )
}

export default Card