import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { Marquee } from './components/Marquee'
import { About } from './components/About'
import { Eyes } from './components/Eyes'
import { Featured } from './components/Featured'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [count, setCount] = useState(0)

  return (
   <div className='w-full relative bg-zinc-900'>
    <Navbar/>
    <HeroSection/>
    <Marquee/>
    <About/>
    <Eyes/>
    <Featured/>
    <h1 className='text-center text-3xl'>My Learning!</h1>
    <Cards/>
    <Footer/>
    
   </div>
  )
}

export default App
