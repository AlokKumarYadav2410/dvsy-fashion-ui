import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      <Card title={`INDEPENDENCY`} description={`Explore the creativity of independent designer from around the globe.`} />
      <Card title={`UNIQUITY`} description={'Discover the charm of unique pieces that stand out effortlessly.'} />
      <Card title={`QUALITY`} description={`Experience unparalleled craftsmanship and attention to detail.`} />
      <Card title={`SUSTAINABILITY`} description={`Embrace eco-consious fashion choices without compromissing on style.`} />
    </div>
  )
}

export default Cards
