import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
