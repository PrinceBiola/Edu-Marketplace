import React from 'react'
import Nav from '../Components/Nav/Nav'
import Footer from '../Components/Footer/Footer'

export default function NavWrapper({children}) {
  return (
    <div className='bg-gray-100'>
      <Nav/>
      {children}
      <Footer/>
    </div>
  )
}
