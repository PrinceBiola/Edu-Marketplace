import React from 'react'
import { FaTruck, FaHeadset, FaMoneyBill } from 'react-icons/fa'

export default function Features() {
  return (
    <div className='w-[95%] sm:w-[92%] md:w-[90%] mx-auto py-8 sm:py-10 md:py-12'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10'>
        {/* Free Shipping */}
        <div className='bg-white p-4 sm:p-5 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group'>
          <div className='flex items-center gap-4 sm:gap-5'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors'>
                <FaTruck className='text-blue-600 text-2xl sm:text-3xl'/>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                Free Shipping
              </p>
              <p className='text-sm text-gray-500'>
                Order in Ikeja
              </p>
            </div>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className='bg-white p-4 sm:p-5 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group'>
          <div className='flex items-center gap-4 sm:gap-5'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors'>
                <FaHeadset className='text-blue-600 text-2xl sm:text-3xl'/>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                24/7 Support
              </p>
              <p className='text-sm text-gray-500'>
                Call Us Anytime
              </p>
            </div>
          </div>
        </div>

        {/* Money Back */}
        <div className='bg-white p-4 sm:p-5 md:p-6 rounded-xl hover:shadow-lg transition-all duration-300 group sm:col-span-2 lg:col-span-1'>
          <div className='flex items-center gap-4 sm:gap-5'>
            <div className='flex-shrink-0'>
              <div className='w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors'>
                <FaMoneyBill className='text-blue-600 text-2xl sm:text-3xl'/>
              </div>
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                Money Back
              </p>
              <p className='text-sm text-gray-500'>
                Guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
