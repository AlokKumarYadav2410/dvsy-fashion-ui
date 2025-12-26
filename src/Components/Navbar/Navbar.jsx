import React from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div><h1 className='font-bold text-3xl font-[syne]'>DVSY</h1></div>
      <div className='hidden sm:flex gap-2 font-[syne]'>
        <NavLinks href="#">DESIGNERS</NavLinks>
        <NavLinks href="#">COLLABS</NavLinks>
        <NavLinks href="#">EVENTS</NavLinks>
        <NavLinks href="#">BLOG</NavLinks>
        <NavLinks href="#">CARD</NavLinks>
        <NavLinks href="#" className={`bg-(--btn-pri) text-(--pri-bg)`}>GET IN TOUCH</NavLinks>
      </div>
    </div>
  )
}

export default Navbar
