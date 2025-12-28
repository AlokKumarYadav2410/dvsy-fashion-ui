import React, { useState } from 'react'
import NavLinks from './NavLinks'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" className="w-8" />
        <h1 className="font-bold text-3xl font-[syne]">
          DV<span className="text-(--btn-pri)">SY</span>
        </h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex gap-4 font-[syne]">
        <NavLinks href="#">DESIGNERS</NavLinks>
        <NavLinks href="#">COLLABS</NavLinks>
        <NavLinks href="#">EVENTS</NavLinks>
        <NavLinks href="#">BLOG</NavLinks>
        <NavLinks href="#">CARD</NavLinks>
        <NavLinks
          href="#"
          className="bg-(--btn-pri) text-(--pri-bg) px-4 py-2 rounded"
        >
          GET IN TOUCH
        </NavLinks>
      </div>

      <div
        className="sm:hidden text-3xl cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute z-40 top-full left-0 w-full bg-(--pri-bg) flex flex-col text-center gap-6 py-6 font-[syne] shadow-md transition-all duration-300
        ${menuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        <NavLinks href="#" onClick={() => setMenuOpen(false)}>DESIGNERS</NavLinks>
        <NavLinks href="#" onClick={() => setMenuOpen(false)}>COLLABS</NavLinks>
        <NavLinks href="#" onClick={() => setMenuOpen(false)}>EVENTS</NavLinks>
        <NavLinks href="#" onClick={() => setMenuOpen(false)}>BLOG</NavLinks>
        <NavLinks href="#" onClick={() => setMenuOpen(false)}>CARD</NavLinks>
        <NavLinks
          href="#"
          className="bg-(--btn-pri) text-(--pri-bg) px-4 py-2 rounded"
          onClick={() => setMenuOpen(false)}
        >
          GET IN TOUCH
        </NavLinks>
      </div>

    </div>
  )
}

export default Navbar
