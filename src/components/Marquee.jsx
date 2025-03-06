import React from 'react'
import {motion} from 'framer-motion';

export const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full bg-[#004d43] py-10 '>
       <div className='border-t-2 font-extrabold border-b-2 border-zinc-100 flex whitespace-nowrap  overflow-hidden'>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:14}} className='text-[12vw] leading-none'>NOT JUST A ORDINARY DESIGNER!</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:14}} className='text-[12vw] leading-none'>NOT JUST A ORDINARY DESIGNER!</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear", repeat: Infinity, duration:14}} className='text-[12vw] leading-none'>NOT JUST A ORDINARY DESIGNER!</motion.h1>
       </div>
    </div>
  )
}
