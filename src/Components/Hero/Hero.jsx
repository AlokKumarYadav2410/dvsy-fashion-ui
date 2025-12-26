import React from 'react'
import heroImg from '../../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='w-full h-[50vh] sm:h-[85vh] relative select-none rounded-lg overflow-hidden'>
      <img
        src={heroImg}
        alt="error"
        className="rounded-lg w-full h-full brightness-75 object-cover sm:object-fill"
      />
      <div className="absolute top-[40%] sm:top-[45%] left-[5%] ">
        <h1 className="text-2xl sm:text-8xl text-(--pri-text) font-semibold sm:font-extralight tracking-widest">
          DESIGN <br /> &nbsp; &nbsp; & FREEDOM
        </h1>

        <p className="text-xs sm:text-[17px] text-(--sec-text) mx-10 sm:mx-38 mt-6 capitalize w-60 sm:w-100">
          Eplore independent style by embracing uniqueness with our
          exclusive designer apperal
        </p>
      </div>
        <div className='absolute right-[5%] top-[90%] sm:top-[85%] flex gap-2 items-center justify-center'>
        <div><i className="ri-arrow-down-long-line rounded-full p-1.5 border bg-(--sec-bg) border-(--sec-text)"></i></div>
        <p className='text-(--sec-text) font-semibold'>LEARN MORE</p>
      </div>
    </div>
  )
}

export default Hero
