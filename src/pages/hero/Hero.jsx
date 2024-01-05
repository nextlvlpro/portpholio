import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './Hero.css'


export default function Hero() {
  
  return (
  <div className='hero flex items-center justify-center h-[50vh] text-white'>
    <div className='herotext h-[100%] w-[100%] flex items-center justify-center text-2xl'>
      <div className='text-red-600 font-bold'>
      {'<'}I am &nbsp;
      </div>
      
      <div className=' text-yellow-300 font-semibold'>
      <Typewriter cursorColor='red' 
    words={[' Bhanu Sharma','Front-End Web Devloper','Back-End Web Devloper', ' Full Stack Web Devloper']}
    loop={true}
    cursor={true} 
    cursorStyle='_'
    typeSpeed={150}
    deleteSpeed={50}
    delaySpeed={1000}
    
  /><span className='text-red-600 font-bold'>{'/>'}</span>
      </div>
    
    </div>
  
  </div>
  )
}
