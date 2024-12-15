import React from 'react'
import Hero from '../../assets/Images/hero.jpeg'
import { FaArrowCircleRight } from 'react-icons/fa'

export default function Header() {
  return (
    <div className='relative text-white'>
      <img 
        src={Hero} 
        alt="Hero" 
        className='w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[85vh] xl:h-screen object-cover brightness-75' 
      />

      <div className='absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12'>
        <div className='flex flex-col items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-[95%] sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center leading-tight'>
            Get Ready for a Successful School Year!
          </h1>
          
          <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] text-center leading-relaxed'>
            Find everything you need for school, all in one convenient place. Browse our vast selection of quality books, uniforms, stationery, and more, carefully curated to support students, teachers, and parents.
          </p>
          
          <button className='mt-2 sm:mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-3.5 rounded-xl flex items-center gap-2 text-sm sm:text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg'>
            Shop Now <FaArrowCircleRight className='text-lg sm:text-xl md:text-2xl' />
          </button>
        </div>
      </div>
    </div>
  )
}
