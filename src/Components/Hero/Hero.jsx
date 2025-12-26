import React from 'react'
import model from '../../assets/model.avif'

const Hero = () => {
  return (
    <div className='w-full h-[50vh] sm:h-[85vh] relative select-none rounded-lg overflow-hidden'>
      <img
        src={model}
        alt="error"
        className="rounded-lg w-full h-full brightness-75 object-cover sm:object-fill"
      />
      <div className="absolute top-[40%] sm:top-[10%] left-[2%] ">
        <h1 className="text-2xl sm:text-6xl lg:text-7xl xl:text-8xl text-(--pri-text) font-semibold sm:font-bold font-[syne]">
          DESIGN <br /> &nbsp; &nbsp; <span className='font-[manrope]'>& FREEDOM</span>
        </h1>

        <p className="text-xs sm:text-sm md:text-lg text-shadow-black text-shadow-2xs text-(--pri-text) mx-10 sm:mx-24 capitalize w-[60vw] sm:w-[30vw] font-[manrope]">
          Eplore independent style by embracing uniqueness with our
          exclusive designer apperal
        </p>
      </div>
      <div className='absolute right-[5%] top-[85%] flex gap-2 items-center justify-center font-[manrope] cursor-pointer'>
        <div><i className="ri-arrow-down-long-line rounded-full text-xs sm:text-sm p-1 sm:p-1.5 border bg-(--sec-bg) border-(--sec-text)"></i></div>
        <p className='text-xs sm:text-lg text-(--sec-text) font-semibold'>LEARN MORE</p>
      </div>
    </div>
  )
}

export default Hero
