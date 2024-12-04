import React from 'react'
import Subscribe from './FooterPage/Subscribe'
import Footer from './FooterPage/Footer'
import Copyright from './FooterPage/Copyright'

const FooterMain = () => {
  return (
    <div className='bg-gray-900'>
        <Subscribe/>
        <hr className='opacity-20 sm:mx-20 mx-6'/>
        <Footer/>
        <hr className='opacity-20 sm:mx-20 mx-6'/>
        <Copyright/>
    </div>
  )
}

export default FooterMain