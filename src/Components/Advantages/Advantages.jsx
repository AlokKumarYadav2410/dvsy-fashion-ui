import React from 'react'
import shadowImg from '../../assets/shadowgirl.png'
import dummies from '../../assets/dummies.png'
import Card from '../Card/Card'

const Advantages = () => {
    return (
        <div className='flex flex-col gap-2 mt-10'>
            <h1 className='font-semibold font-[syne] text-xl sm:text-3xl md:text-5xl uppercase'>Our Advantages</h1>
            <div className='grid md:grid-cols-2 gap-4 mt-4'>
                <div><img src={shadowImg} alt="shadow girl" className='rounded-lg w-full h-full' /></div>
                <div className='flex flex-col justify-between gap-4'>
                    <Card title={`INDEPENDENT DESIGNERS`} description={`Our platform celebrates the ingenuity of independent designers.
                offering a diverse range of fashion-forward garments that
                reflect the creativity and innovation of the artists behind
                them. Explore curated collections showcasing unique creations by
                independent designers.`} para='Explore' flexDir='flex-col lg:flex-row' selfAlign='self-start lg:self-end' />
                    <Card title={'EXCLUSIVE & UNIQUITY'} description={'Indulge in curated collections showcasing exclusive, one-of-a-kind pieces. each with its own story and charm. Experience the allure of unique fashion pieces that radiate sophistication and individuality, curated for those who seek exclusivity.'} para='Explore' flexDir='flex-col lg:flex-row' selfAlign='self-start lg:self-end' />
                </div>
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-4'>
                <div className='flex flex-col justify-between gap-4 order-2 md:order-1'>
                    <Card title={`HIGH QUALITY`} description={` Embracesuperior craftsmanship with our meticulously curated,
              enduringly high-quality garments. Discover garments crafted with
              utmost attention to detail and finest materials. promnising
              longevity and timeless style.`} para='Explore' flexDir='flex-col lg:flex-row' selfAlign='self-start lg:self-end' />
                    <Card title={'EXCLUSIVE & UNIQUITY'} description={'Join our commitmentosustainability with eco-fashion options, stylish yet mindful of our planet. Explore guilt-free shopping with our eco-conscious collections, crafted with planet-friendly materials and ethical practices'} para='Explore' flexDir='flex-col lg:flex-row' selfAlign='self-start lg:self-end' />
                </div>
                <div className='order-1 md:order-2'><img src={dummies} alt="dummies" className='rounded-lg w-full h-full' /></div>
            </div>
        </div>
    )
}

export default Advantages
