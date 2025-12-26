import React from 'react'

const Card = ({ title, description }) => {
  return (
    <div className='rounded-lg p-10 bg-(--tri-bg) flex flex-col justify-between gap-4'>
        <h1 className='uppercase font-semibold text-2xl'>{title}</h1>
        <p className='text-wrap font-light'>{description}</p>
        <div className='flex items-center mt-6 gap-2'>
            <div><i className="ri-arrow-right-up-long-line rounded-full p-1.5 border bg-(--sec-bg)/70 border-(--sec-text)"></i></div>
            <p className='text-sm font-semibold'>LEARN MORE</p>
        </div>
    </div>
  )
}

export default Card
