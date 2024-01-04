import React from 'react'
import Hero from '../hero/Hero'
import Projects from '../projects/Projects'
import Skills from '../skills/Skills'
import About from '../about/About'
import Contact from '../contact/Contact'

export default function Home() {
  return (
    <>
    <div className='pb-[20px]'>
    <Hero/>
    <div className='w-full border my-2'></div>
    <Projects/>
    <div className='w-full border my-2'></div>
    <Skills/>
    <div className='w-full border my-2'></div>
    <About/>
    <div className='w-full border my-2'></div>
    <Contact/>
    </div>
    
    </>
  )
}
