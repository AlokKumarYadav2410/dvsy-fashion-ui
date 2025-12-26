import React from 'react'
import NavLinks from './NavLinks'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex items-center justify-center'>
        <img src={logo} alt="logo" className='w-8' />
        <h1 className='font-bold text-3xl font-[syne]'>DV<span className='text-(--btn-pri)'>SY</span></h1></div>
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
