import React from 'react'

const Card = ({ title, description, para=`LEARN MORE`, flexDir='flex-col', selfAlign='self-start' }) => {
    return (
        <div className={`rounded-lg p-10 bg-(--tri-bg) flex grow ${flexDir} justify-between`}>
            <div>
                <h1 className='uppercase font-semibold text-xl xl:text-2xl font-[syne]'>{title}</h1>
                <p className='text-wrap font-light font-[manrope] mt-2 w-[90%]'>{description}</p>
            </div>
            <div className={`flex items-center mt-8 gap-2 font-[manrope] ${selfAlign} cursor-pointer`}>
                <div><i className="ri-arrow-right-up-long-line rounded-full p-1.5 border bg-(--sec-bg)/70 border-(--sec-text)"></i></div>
                <p className='text-sm font-semibold uppercase'>{para}</p>
            </div>
        </div>
    )
}

export default Card
