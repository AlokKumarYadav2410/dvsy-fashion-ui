import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Cards from './Components/Card/Cards'
import Stats from './Components/Stats/Stats'
import About from './Components/About/About'
import Advantages from './Components/Advantages/Advantages'

const App = () => {
  return (
    <div className='bg-(--pri-bg) text-(--pri-text) max-w-500 m-auto w-full min-h-screen flex flex-col gap-4 p-4'>
      <Navbar />
      <Hero />
      <Cards />
      <Stats />
      <About />
      <Advantages />
    </div>
  )
}

export default App
