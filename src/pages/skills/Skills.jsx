import React from 'react'
import js from './photos/js.jpg'
import html from './photos/html.png'
import css from './photos/css.png'
import tailwind from './photos/tailwind.png'
import nodejs from './photos/nodejs.png'
import express from './photos/express.png'
import mongodb from './photos/mongodb.png'

export default function Skills() {
  return (
    <div className='p-4 flex flex-col items-center justify-center'>
      <h1 className='text-2xl text-white font-bold mb-5'>Skills</h1>
      <div className='flex items-center justify-center gap-2 flex-wrap'>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={js} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={html} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={css} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={tailwind} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={nodejs} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={express} className='w-32  h-32 rounded-md' alt="" />
      </div>
      <div className='border border-white w-32 h-30 flex items-center justify-center p-1 rounded-md'>
         <img src={mongodb} className='w-32  h-32 rounded-md' alt="" />
      </div>
      </div>
      
    </div>
  )
}
