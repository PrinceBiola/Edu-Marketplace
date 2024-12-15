import React from 'react'
import Nav from '../Components/Nav/Nav'
import Header from '../Components/Header/Header'
import Categories from '../Components/Categories/Categories'
import Title from '../Components/Title/Title'
import NewArrival from '../Components/NewArrivals/NewArrival'
import Features from '../Components/Features/Features'
import Footer from '../Components/Footer/Footer'

export default function LayOut() {
  return (
    <div className=' mx-auto min-h-screen bg-gray-100'>
      
      <Nav/>
      <Header/>
      <Title title="Categories" subTitle="Explore our wide range of categories"/>
      <Categories/>
      <Title title="New Arrivals " subTitle="Explore our New Arrivals"/>
      <NewArrival/>
      <div className='bg-white p-10 rounded-md'>
        <Title title="Features" subTitle="Why Choose Us"/>
        <Features/>
      </div>
      <Footer/>

    </div>
  )
}
