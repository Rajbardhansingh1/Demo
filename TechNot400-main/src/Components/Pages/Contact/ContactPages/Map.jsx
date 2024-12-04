import React from 'react'

const Map = () => {
  return (
    <div className='sm:mx-20 mx-3 mb-20 overflow-hidden font-poppins'>
        <h1 className='sm:text-[50px] text-[28px] font-bold text-center pt-8 text-yellow-600'>Here’s where you can find us—feel free to visit us at this address.</h1>
        <div className='mt-6 border-4 border-yellow-600 rounded-xl'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.3082687810866!2d95.32513505846272!3d27.28599885237864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x373f46466df64b29%3A0x8ea115565aeb13e1!2sNaharkatia%2C%20Assam%20786610!5e0!3m2!1sen!2sin!4v1722600367564!5m2!1sen!2sin" height="450" style={{"border":0, width: "100%" , borderRadius: '10px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default Map