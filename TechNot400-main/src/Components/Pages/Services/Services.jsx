import React from 'react'
import Carousel from './ServicesPages/Carousel'
import AllServices from './ServicesPages/AllServices'
import PlusPoint from './ServicesPages/PlusPoint'
import ServiceReachUs from './ServicesPages/ServiceDetails/ServiceReachUs'

const Services = () => {
  return (
    <>
      <Carousel/>
      <PlusPoint/>
      <AllServices/>
      <ServiceReachUs/>
    </>
  )
}

export default Services