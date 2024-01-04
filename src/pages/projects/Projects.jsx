import React from 'react'
import weatherImg from './photos/weatherapp.jpeg'
import quizImg from './photos/quizapp.jpeg'
import blackjackImg from './photos/blackjackgame.jpeg'
import quoraImg from './photos/quoraclone.jpeg'
import tableImg from './photos/table.jpeg'
import medplImg from './photos/medpl.jpeg'
import linkedinImg from './photos/linkedin.jpeg'


export default function Projects() {
  return (
    <div className='flex flex-col justify-center items-center p-4 gap-4 bg-[#222222]'>
      <h1 className='text-white font-bold text-2xl mb-5'>Projects</h1>
      <div className='flex items-center justify-center w-full sm:max-w-[800px] flex-wrap gap-10'>

        {/* Card for MEDPL*/}
      <a href='https://medpl.onrender.com/' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={medplImg} className='w-60 h-60  p-[2px] rounded-lg' alt="table-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>MEDPL Website</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>My first real world project. A sale tracker app.</p>
        </div>
      </a>

      {/* Card for Waether */}
      <a href='https://proran.000webhostapp.com/projectsWheather/index.html' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={weatherImg} className='w-60 h-60  p-[2px] rounded-lg' alt="Weather-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Weather Web App</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A simple Weather app to display the Weather of typed location</p>
        </div>
      </a>

       {/* Card for black quiz*/}
       <a href='https://stellular-yeot-03fb6b.netlify.app/' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={quizImg} className='w-60 h-60  p-[2px] rounded-lg' alt="Quiz-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Quiz Web App</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A simple quiz challange to Test your Mind</p>
        </div>
      </a>

      {/* Card for black jack*/}
      <a href='https://proran.000webhostapp.com/projectBlackjack/index.html' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={blackjackImg} className='w-60 h-60  p-[2px] rounded-lg' alt="blackJack-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Black Jack Game</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A Black Jack Game  challange to Test your Mind</p>
        </div>
      </a>

      {/* Card for Linked*/}
      <a href='https://hilarious-buttercream-1b91ce.netlify.app/' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={linkedinImg} className='w-60 h-60  p-[2px] rounded-lg' alt="table-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Linked in clone</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A Linked in Home Page Clone.</p>
        </div>
      </a>

      {/* Card for Quora*/}
      <a href='https://melodic-starburst-275c04.netlify.app/' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={quoraImg} className='w-60 h-60  p-[2px] rounded-lg' alt="quora-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Quora Clone</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A Front-End Side Quora Clone.</p>
        </div>
      </a>

      {/* Card for table*/}
      <a href='https://precious-zabaione-db4f78.netlify.app/' target='blank' className='border-2 border-gray-600 rounded-lg overflow-hidden w-60  transition-all h-96 bg-white hover:shadow-md hover:shadow-white'>
        <div className=' hover:scale-105 transition-all'>
          <img src={tableImg} className='w-60 h-60  p-[2px] rounded-lg' alt="table-App" />
        </div>
        <div className='p-2 bg-white'>
            <h1 className='text-xl font-bold'>Table</h1>
            <div className='border-2 my-1'></div>
            <p className='text-lg font-mono'>A simple Table Calculator</p>
        </div>
      </a>

      
        
      </div>

    </div>
  )
}
