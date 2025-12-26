import React from 'react'

const Stats = () => {
  return (
    <div className='w-full grid grid-cols-1 text-center place-items-center sm:text-left sm:grid-cols-4 gap-4 my-2 sm:my-10'>
        <div className="flex flex-col">
            <p className='text-sm sm:text-lg lg:text-xl font-semibold text-(--sec-text) font-[manrope]'>Designers</p>
            <h1 className='font-semibold text-3xl lg:text-5xl font-[manrope]'>150+</h1>
        </div>
        <div className="flex flex-col">
            <p className='text-sm sm:text-lg lg:text-xl font-semibold text-(--sec-text) font-[manrope]'>Clients</p>
            <h1 className='font-semibold text-3xl lg:text-5xl font-[manrope]'>500+</h1>
        </div>
        <div className="flex flex-col">
            <p className='text-sm sm:text-lg lg:text-xl font-semibold text-(--sec-text) font-[manrope]'>Masterpieces</p>
            <h1 className='font-semibold text-3xl lg:text-5xl font-[manrope]'>20K+</h1>
        </div>
        <div className="flex flex-col">
            <p className='text-sm sm:text-lg lg:text-xl font-semibold text-(--sec-text) font-[manrope]'>Events</p>
            <h1 className='font-semibold text-3xl lg:text-5xl font-[manrope]'>50+</h1>
        </div>
    </div>
  )
}

export default Stats
