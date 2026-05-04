import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Products from '../components/Products'
import WhyChoose from '../components/WhyChoose'
import Descr from '../components/Descr'

const HomeScreen = () => {
  return (
    <div>
      <Hero/>
      <AboutUs/>
      <Products/>
      <WhyChoose/>
      {/* <Descr/> */}
    </div>
  )
}

export default HomeScreen