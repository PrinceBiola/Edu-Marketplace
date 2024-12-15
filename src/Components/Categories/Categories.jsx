import React from 'react'
import image from "../../assets/image"

export default function Categories() {
  return (
    <div className='w-[95%] sm:w-[92%] md:w-[90%] mx-auto py-8 sm:py-10 md:py-12'>
        <div className='flex flex-col gap-6 sm:gap-8 md:gap-10'>
           
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
                {/* Books Section */}
                <div className='relative group overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-[1.02]'>
                    <img 
                        src={image.stack} 
                        alt="Book Stack" 
                        className='w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover transition-transform duration-500 group-hover:scale-110'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                    <div className='absolute bottom-4 left-4 right-4'>
                        <p className='text-xl sm:text-2xl md:text-3xl font-bold text-white'>
                            Books
                        </p>
                        <p className='text-sm sm:text-base text-gray-200 mt-1'>
                            Explore our collection of textbooks and study materials
                        </p>
                    </div>
                </div>

                {/* Right Section Grid */}
                <div className='flex flex-col gap-4 sm:gap-6 md:gap-8'>
                    {/* Uniform Section */}
                    <div className='relative group overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-[1.02]'>
                        <img 
                            src={image.uniform} 
                            alt="Uniform" 
                            className='w-full h-[200px] sm:h-[240px] md:h-[280px] object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                        <div className='absolute bottom-4 left-4 right-4'>
                            <p className='text-lg sm:text-xl md:text-2xl font-bold text-white'>
                                Uniform
                            </p>
                            <p className='text-sm text-gray-200 mt-1'>
                                Quality school uniforms for all ages
                            </p>
                        </div>
                    </div>

                    {/* Electronics and Stationary Grid */}
                    <div className='grid grid-cols-2 gap-4 sm:gap-6 md:gap-8'>
                        {/* Electronics Section */}
                        <div className='relative group overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-[1.02]'>
                            <img 
                                src={image.electronics} 
                                alt="Electronics" 
                                className='w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                            <div className='absolute bottom-4 left-4 right-4'>
                                <p className='text-base sm:text-lg md:text-xl font-bold text-white'>
                                    Electronics
                                </p>
                                <p className='text-xs sm:text-sm text-gray-200 mt-1'>
                                    Latest gadgets
                                </p>
                            </div>
                        </div>

                        {/* Stationary Section */}
                        <div className='relative group overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-[1.02]'>
                            <img 
                                src={image.stationary} 
                                alt="Stationary" 
                                className='w-full h-[180px] sm:h-[200px] md:h-[220px] object-cover transition-transform duration-500 group-hover:scale-110'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
                            <div className='absolute bottom-4 left-4 right-4'>
                                <p className='text-base sm:text-lg md:text-xl font-bold text-white'>
                                    Stationery
                                </p>
                                <p className='text-xs sm:text-sm text-gray-200 mt-1'>
                                    Essential supplies
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
