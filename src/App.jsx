import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Card/Cards'

const App = () => {
  return (
    <div className='bg-(--pri-bg) text-(--pri-text) w-full min-h-screen flex flex-col gap-4 p-4'>
      <Navbar />

    </div>
  )
}

export default App
