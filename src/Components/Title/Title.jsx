import React from 'react'

export default function Title({title, subTitle}) {
  return (
    <div className='flex flex-col gap-4 my-10 items-center justify-center'>
        <h2 className='text-3xl font-bold text-center text-blue-600'>{title}</h2>
        <p className='text-base text-gray-500 text-center'>{subTitle}</p>
    </div>
  )
}
