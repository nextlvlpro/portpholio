import React from 'react'
import TheNav from './navbar/theNav'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-[#222222] w-full'>
        <TheNav/>
        <Outlet/>
    </div>
  )
}
