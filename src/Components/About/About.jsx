import React from 'react'
import coat from '../../assets/coat.png'

const About = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <div className='bg-(--tri-bg) p-10 rounded-lg flex flex-col justify-between gap-6 sm:gap-10'>
        <h2 className='font-[manrope] text-lg font-semibold'>About</h2>
        <p className='text-3xl sm:text-5xl font-[syne] font-semibold'>WHERE FASHION MEETS FREEDOM</p>
        <div className='grid grid-cols-1 gap-none sm:grid-cols-2 sm:gap-4'>
            <p className="text-[16px] font-[manrope] text-(--sec-text)">
            We believe that fashion should be an expression of individuality. We encourage creativity and originality in every item we offer, presenting customers with exclusive collections from independent designers. With a commitment to fostering a community of creativity and innovation,
          </p>
          <p className="text-[16px] font-[manrope] text-(--sec-text)">
            we strive to connect designers with fashion enthusiasts who appreciate the artistry and individuality behind each piece. Driven by our dedication to authenticity. We curate each collection with a keen eye for unique designs that inspire confidence and self-expression.
          </p>
        </div>
      </div>
      <div>
        <img src={coat} alt="Coat" className='w-full h-full rounded-lg' />
      </div>
    </div>
  )
}

export default About
