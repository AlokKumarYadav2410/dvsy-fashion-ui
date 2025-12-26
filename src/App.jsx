import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Card/Cards'
import Stats from './Components/Stats/Stats'
import About from './Components/About/About'

const App = () => {
  return (
    <div className='bg-(--pri-bg) text-(--pri-text) w-full min-h-screen flex flex-col gap-4 p-4'>
      <Navbar />
      <Hero />
      <Cards />
      <Stats />
      <About />
    </div>
  )
}

export default App
