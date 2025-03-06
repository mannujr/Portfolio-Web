import React from 'react'

export const Cards = () => {
  return (
    <div className='w-full h-full lg:h-auto px-10 py-8 gap-1 flex flex-wrap items-start justify-between'>
     <div className='relative w-full h-[400px] lg:w-[50%] mb-2 lg:h-80 bg-[#004d43] flex justify-center items-center rounded-lg'>
     <h1 className='font-semibold text-[4vh]'>UI/UX DESIGN </h1>
     <button className='absolute z-0 bottom-4 left-4 bg-zinc-900 text-xl px-4 py-1 rounded-lg'>Explore</button>
     </div>
     <div className='relative w-full h-[300px] lg:w-[32%] mb-2 lg:h-80 bg-[#06302a]  flex justify-center items-center rounded-lg'>
     <h1 className='font-semibold text-[4vh] text-center'>Frontend Devlopment</h1>
     <button className='absolute z-0 bottom-4 left-4 bg-zinc-900 text-xl px-4 py-1 rounded-lg'>Explore</button>
     </div>
     <div className='relative w-full h-[200px] lg:w-[15%] mb-2 lg:h-80 bg-[#06302a]  flex justify-center items-center rounded-lg'>
     <h1 className='font-semibold text-[4vh] text-center'>Backend Devlopment </h1>
     <button className='absolute z-0 bottom-4 left-4 bg-zinc-900 text-xl px-4 py-1 rounded-lg'>Explore</button>
     </div>
    </div>
  )
}
